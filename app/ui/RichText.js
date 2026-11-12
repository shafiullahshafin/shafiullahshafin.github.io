// Tiny inline formatter: **bold** and *italic*. Keeps the data file readable.
export default function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
  return parts.map((p, i) => {
    if (p.startsWith('**')) return <strong key={i}>{p.slice(2, -2)}</strong>;
    if (p.startsWith('*')) return <em key={i}>{p.slice(1, -1)}</em>;
    return p;
  });
}
