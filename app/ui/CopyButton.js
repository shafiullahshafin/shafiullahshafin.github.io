'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CopyButton({ value, label = 'Copy', className = '' }) {
  const [done, setDone] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      setTimeout(() => setDone(false), 1600);
    } catch {}
  };

  return (
    <button type="button" className={`copy-btn ${className}`} onClick={copy} aria-label={done ? 'Copied' : label}>
      {done ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
      <span>{done ? 'Copied' : label}</span>
    </button>
  );
}
