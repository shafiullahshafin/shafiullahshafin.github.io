# Generates the flat, poster-style project covers used in the Projects section.
# Usage: python3 scripts/generate-project-logos.py public
import math
import sys

OUT = sys.argv[1]
W, H = 1600, 900
FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif"
MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"


def esc(t):
    return t.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def cover(theme, art, centre, backdrop):
    """Text-free cover: brand background, a project-specific backdrop, centred illustration."""
    bg = theme[0]
    cx, cy = centre
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
<rect width="{W}" height="{H}" fill="{bg}"/>
{backdrop(theme)}
<g transform="translate(800 450) scale(1.2) translate({-cx} {-cy})">
{art}
</g>
</svg>'''


# ───────────────────────── Backdrops (one per project) ─────────────────────────
def bg_blueprint(theme):
    """Architect's drawing sheet: fine grid, bold grid every 5th line, corner marks."""
    _bg, deep, light, _ink = theme
    fine, bold = [], []
    step = 40
    for i, x in enumerate(range(0, W + 1, step)):
        (bold if i % 5 == 0 else fine).append(f'<line x1="{x}" y1="0" x2="{x}" y2="{H}"/>')
    for j, y in enumerate(range(0, H + 1, step)):
        (bold if j % 5 == 0 else fine).append(f'<line x1="0" y1="{y}" x2="{W}" y2="{y}"/>')
    marks = ''.join(
        f'<path d="M {x} {y + dy * 40} V {y} H {x + dx * 40}" fill="none" stroke="{light}" stroke-width="4" opacity="0.6"/>'
        for x, y, dx, dy in [(60, 60, 1, 1), (W - 60, 60, -1, 1), (60, H - 60, 1, -1), (W - 60, H - 60, -1, -1)]
    )
    return (f'<g stroke="{light}" stroke-width="1" opacity="0.10">{"".join(fine)}</g>'
            f'<g stroke="{light}" stroke-width="2" opacity="0.18">{"".join(bold)}</g>' + marks)


def bg_pixels(theme):
    """Retro game world: scattered pixel blocks of a few sizes."""
    _bg, deep, light, _ink = theme
    blocks = [(90, 120, 40, 0.25), (170, 200, 24, 0.18), (260, 90, 18, 0.15), (120, 690, 48, 0.2),
              (230, 760, 26, 0.15), (330, 640, 18, 0.12), (1380, 110, 44, 0.22), (1470, 210, 26, 0.16),
              (1290, 190, 18, 0.12), (1420, 700, 52, 0.2), (1320, 780, 24, 0.15), (1520, 620, 20, 0.14),
              (560, 60, 16, 0.1), (1040, 820, 18, 0.1), (700, 830, 22, 0.12), (980, 60, 20, 0.1)]
    return ''.join(f'<rect x="{x}" y="{y}" width="{s_}" height="{s_}" rx="{s_ // 5}" fill="{light}" opacity="{o}"/>'
                   for x, y, s_, o in blocks)


def bg_circuit(theme):
    """Circuit board: right-angled traces ending in solder pads."""
    _bg, deep, light, _ink = theme
    traces = [
        [(0, 150), (220, 150), (300, 230), (520, 230)],
        [(0, 760), (180, 760), (260, 680), (430, 680)],
        [(1600, 140), (1380, 140), (1300, 220), (1120, 220)],
        [(1600, 770), (1420, 770), (1340, 690), (1180, 690)],
        [(380, 0), (380, 90), (460, 170)],
        [(1240, 900), (1240, 820), (1160, 740)],
        [(0, 450), (120, 450)],
        [(1600, 450), (1480, 450)],
    ]
    paths = ''.join('<polyline points="' + ' '.join(f'{x},{y}' for x, y in t) + '"/>' for t in traces)
    pads = ''.join(f'<circle cx="{t[-1][0]}" cy="{t[-1][1]}" r="9"/>' for t in traces)
    return (f'<g fill="none" stroke="{light}" stroke-width="4" stroke-linejoin="round" opacity="0.28">{paths}</g>'
            f'<g fill="{light}" opacity="0.45">{pads}</g>')


def bg_rings(theme):
    """AI signal: concentric rings from the centre plus small sparkles."""
    _bg, deep, light, _ink = theme
    rings = ''.join(f'<circle cx="800" cy="450" r="{r}" fill="none" stroke="{light}" stroke-width="2" opacity="{op}"/>'
                    for r, op in [(300, 0.22), (420, 0.16), (540, 0.11), (660, 0.07), (780, 0.05)])

    def sparkle(x, y, r, op):
        return (f'<path d="M {x} {y - r} Q {x} {y} {x + r} {y} Q {x} {y} {x} {y + r} Q {x} {y} {x - r} {y} '
                f'Q {x} {y} {x} {y - r} Z" fill="{light}" opacity="{op}"/>')

    sparkles = ''.join(sparkle(x, y, r, o) for x, y, r, o in
                       [(170, 160, 26, 0.5), (1430, 180, 20, 0.45), (230, 720, 18, 0.35), (1390, 730, 28, 0.45),
                        (520, 120, 12, 0.3), (1120, 800, 14, 0.3)])
    return rings + sparkles


# ───────────────────────── Image2BIM ─────────────────────────
def iso(x, y, z, s=46, cx=1140, cy=470):
    c, sn = math.cos(math.radians(30)), math.sin(math.radians(30))
    return (cx + (x - y) * c * s, cy + (x + y) * sn * s - z * s)


def poly(pts, fill, op=1, stroke=None, sw=0):
    st = f' stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"' if stroke else ''
    return '<polygon points="' + ' '.join(f'{x:.1f},{y:.1f}' for x, y in pts) + f'" fill="{fill}" opacity="{op}"{st}/>'


def image2bim_art():
    X, Y, Hh = 7, 5, 3.4
    floor = poly([iso(0, 0, 0), iso(X, 0, 0), iso(X, Y, 0), iso(0, Y, 0)], '#ccfbf1')
    back = poly([iso(0, 0, 0), iso(X, 0, 0), iso(X, 0, Hh), iso(0, 0, Hh)], '#ffffff')
    left = poly([iso(0, 0, 0), iso(0, Y, 0), iso(0, Y, Hh), iso(0, 0, Hh)], '#e6fffb')
    door = poly([iso(0, 1.6, 0), iso(0, 3.0, 0), iso(0, 3.0, 2.2), iso(0, 1.6, 2.2)], '#0f766e')
    window = poly([iso(2.2, 0, 1.4), iso(4.6, 0, 1.4), iso(4.6, 0, 2.6), iso(2.2, 0, 2.6)], '#5eead4')
    part = poly([iso(4.2, 0, 0), iso(4.2, 2.6, 0), iso(4.2, 2.6, Hh), iso(4.2, 0, Hh)], '#f0fdfa', stroke='#99f6e4', sw=2)
    cam = iso(2.4, 3.4, 1.3)
    rays = ''.join(
        f'<line x1="{cam[0]:.0f}" y1="{cam[1]:.0f}" x2="{x:.0f}" y2="{y:.0f}"/>'
        for x, y in [iso(0, 0, Hh), iso(X, 0, Hh), iso(0, Y, 0), iso(X, Y, 0)]
    )
    shadow = f'<ellipse cx="1150" cy="745" rx="300" ry="34" fill="#042f2e" opacity="0.35"/>'
    return (shadow + floor + back + left + window + door + part
            + f'<g stroke="#fbbf24" stroke-width="3" stroke-dasharray="10 9" opacity="0.9">{rays}</g>'
            + f'<circle cx="{cam[0]:.0f}" cy="{cam[1]:.0f}" r="22" fill="#fbbf24"/>'
            + f'<circle cx="{cam[0]:.0f}" cy="{cam[1]:.0f}" r="9" fill="#ffffff"/>')


# ───────────────────────── Maze Runner ─────────────────────────
def maze_art():
    x0, y0, cell, cols, rows = 900, 190, 52, 11, 10
    panel = (f'<rect x="{x0 - 24}" y="{y0 - 24}" width="{cols * cell + 48}" height="{rows * cell + 48}" '
             f'rx="28" fill="#2a2a38"/>')
    grid = []
    for i in range(cols + 1):
        grid.append(f'<line x1="{x0 + i * cell}" y1="{y0}" x2="{x0 + i * cell}" y2="{y0 + rows * cell}"/>')
    for j in range(rows + 1):
        grid.append(f'<line x1="{x0}" y1="{y0 + j * cell}" x2="{x0 + cols * cell}" y2="{y0 + j * cell}"/>')
    grid = '<g stroke="#3a3a4c" stroke-width="2">' + ''.join(grid) + '</g>'
    path = [(1, 7), (2, 7), (3, 7), (3, 6), (3, 5), (4, 5), (5, 5), (6, 5), (6, 4), (6, 3), (7, 3), (8, 3)]
    body = ''.join(
        f'<rect x="{x0 + c * cell + 5}" y="{y0 + r * cell + 5}" width="{cell - 10}" height="{cell - 10}" rx="10" fill="#2ecc71"/>'
        for c, r in path[:-1]
    )
    hc, hr = path[-1]
    head = (f'<rect x="{x0 + hc * cell + 3}" y="{y0 + hr * cell + 3}" width="{cell - 6}" height="{cell - 6}" rx="12" fill="#7bed9f"/>'
            f'<circle cx="{x0 + hc * cell + 34}" cy="{y0 + hr * cell + 18}" r="5" fill="#1e1e28"/>'
            f'<circle cx="{x0 + hc * cell + 34}" cy="{y0 + hr * cell + 34}" r="5" fill="#1e1e28"/>')
    fc, fr = 9, 3
    food = (f'<circle cx="{x0 + fc * cell + cell / 2}" cy="{y0 + fr * cell + cell / 2}" r="17" fill="#ff3c3c"/>'
            f'<rect x="{x0 + fc * cell + cell / 2 - 2}" y="{y0 + fr * cell + 6}" width="4" height="10" rx="2" fill="#2ecc71"/>')
    walls = ''.join(
        f'<rect x="{x0 + a * cell}" y="{y0 + b * cell - 5}" width="{w * cell}" height="10" rx="5" fill="#f1c40f"/>'
        for a, b, w in [(1, 2, 3), (7, 7, 3)]
    )
    return panel + grid + walls + body + head + food


# ───────────────────────── C Compiler (ARM64) ─────────────────────────
def compiler_art():
    chip_x, chip_y, s = 880, 290, 250
    pins = []
    for i in range(6):
        p = 30 + i * (s - 60) / 5
        pins += [f'<rect x="{chip_x + p - 8:.0f}" y="{chip_y - 30}" width="16" height="24" rx="4"/>',
                 f'<rect x="{chip_x + p - 8:.0f}" y="{chip_y + s + 6}" width="16" height="24" rx="4"/>',
                 f'<rect x="{chip_x - 30}" y="{chip_y + p - 8:.0f}" width="24" height="16" rx="4"/>',
                 f'<rect x="{chip_x + s + 6}" y="{chip_y + p - 8:.0f}" width="24" height="16" rx="4"/>']
    chip = (f'<g fill="#bfdbfe">{"".join(pins)}</g>'
            f'<rect x="{chip_x}" y="{chip_y}" width="{s}" height="{s}" rx="30" fill="#ffffff"/>'
            f'<text x="{chip_x + s / 2}" y="{chip_y + s / 2 + 55}" text-anchor="middle" font-family="{FONT}" '
            f'font-size="170" font-weight="800" fill="#1d4ed8">C</text>')
    arrow = ('<g fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">'
             f'<path d="M {chip_x + s + 50} {chip_y + s / 2} H {chip_x + s + 120}"/>'
             f'<path d="M {chip_x + s + 98} {chip_y + s / 2 - 22} L {chip_x + s + 122} {chip_y + s / 2} '
             f'L {chip_x + s + 98} {chip_y + s / 2 + 22}"/></g>')
    cx, cy = 1270, 250
    bars = [(0, 70, '#93c5fd'), (1, 190, '#e0e7ff'), (1, 150, '#e0e7ff'), (1, 170, '#e0e7ff'),
            (1, 110, '#e0e7ff'), (0, 60, '#93c5fd'), (1, 140, '#e0e7ff')]
    code = ''.join(
        f'<rect x="{cx + 30 + indent * 30}" y="{cy + 92 + i * 40}" width="{w}" height="14" rx="7" fill="{c}"/>'
        for i, (indent, w, c) in enumerate(bars)
    )
    card = (f'<rect x="{cx}" y="{cy}" width="300" height="400" rx="24" fill="#172554"/>'
            f'<rect x="{cx}" y="{cy}" width="300" height="60" rx="24" fill="#1e3a8a"/>'
            f'<rect x="{cx}" y="{cy + 36}" width="300" height="24" fill="#1e3a8a"/>'
            f'<circle cx="{cx + 34}" cy="{cy + 30}" r="8" fill="#93c5fd"/>'
            f'<circle cx="{cx + 60}" cy="{cy + 30}" r="8" fill="#93c5fd" opacity="0.6"/>'
            f'<circle cx="{cx + 86}" cy="{cy + 30}" r="8" fill="#93c5fd" opacity="0.35"/>' + code)
    return chip + arrow + card


# ───────────────────────── JARVIS ─────────────────────────
def jarvis_art():
    hx, hy = 960, 300
    robot = (f'<rect x="{hx + 105}" y="{hy - 60}" width="10" height="50" rx="5" fill="#ede9fe"/>'
             f'<circle cx="{hx + 110}" cy="{hy - 66}" r="16" fill="#fbbf24"/>'
             f'<rect x="{hx}" y="{hy}" width="220" height="190" rx="48" fill="#ffffff"/>'
             f'<rect x="{hx + 30}" y="{hy + 45}" width="160" height="80" rx="40" fill="#4c1d95"/>'
             f'<circle cx="{hx + 78}" cy="{hy + 85}" r="15" fill="#c4b5fd"/>'
             f'<circle cx="{hx + 142}" cy="{hy + 85}" r="15" fill="#c4b5fd"/>'
             f'<rect x="{hx + 80}" y="{hy + 145}" width="60" height="10" rx="5" fill="#c4b5fd"/>'
             f'<rect x="{hx - 22}" y="{hy + 70}" width="22" height="60" rx="11" fill="#ede9fe"/>'
             f'<rect x="{hx + 220}" y="{hy + 70}" width="22" height="60" rx="11" fill="#ede9fe"/>'
             f'<rect x="{hx + 40}" y="{hy + 205}" width="140" height="110" rx="30" fill="#ede9fe"/>')

    def bubble(x, y, w, h, fill, line_fill, n, tail_left):
        tail = (f'<path d="M {x + 30} {y + h} l 0 28 l 34 -28 z" fill="{fill}"/>' if tail_left
                else f'<path d="M {x + w - 30} {y + h} l 0 28 l -34 -28 z" fill="{fill}"/>')
        ls = ''.join(f'<rect x="{x + 26}" y="{y + 26 + i * 26}" width="{w - 52 - (i % 2) * 40}" height="12" rx="6" fill="{line_fill}"/>'
                     for i in range(n))
        return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="26" fill="{fill}"/>' + tail + ls

    return (robot
            + bubble(1240, 200, 260, 110, '#ffffff', '#ddd6fe', 3, True)
            + bubble(1270, 380, 240, 84, '#a78bfa', '#ede9fe', 2, False))


THEMES = {
    'Image2BIM': ('#0f766e', '#115e59', '#5eead4', '#ccfbf1'),
    'MazeRunner': ('#1e1e28', '#2a2a38', '#2ecc71', '#bbf7d0'),
    'CCompiler': ('#1d4ed8', '#1e40af', '#93c5fd', '#dbeafe'),
    'JARVIS': ('#6d28d9', '#5b21b6', '#c4b5fd', '#ede9fe'),
}

# name -> (illustration, visual centre of the illustration in its own coordinates)
# name -> (illustration, visual centre of the illustration, backdrop)
COVERS = {
    'Image2BIM': (image2bim_art, (1150, 520), bg_blueprint),
    'MazeRunner': (maze_art, (1186, 450), bg_pixels),
    'CCompiler': (compiler_art, (1225, 450), bg_circuit),
    'JARVIS': (jarvis_art, (1225, 440), bg_rings),
}

for name, (art, centre, backdrop) in COVERS.items():
    with open(f'{OUT}/{name}.svg', 'w') as f:
        f.write(cover(THEMES[name], art(), centre, backdrop))
print('ok')
