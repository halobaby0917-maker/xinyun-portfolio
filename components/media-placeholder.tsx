import type { MediaPlaceholder as MediaPlaceholderType } from '@/data/portfolio';

export function MediaPlaceholder({ item, index, dark = false }: { item: MediaPlaceholderType; index: number; dark?: boolean }) {
  return (
    <div className={`media-placeholder ${dark ? 'media-placeholder-dark' : ''}`}>
      <div className="placeholder-grid" aria-hidden="true" />
      <div className="placeholder-copy">
        <span className="eyebrow">Asset {String(index + 1).padStart(2, '0')}</span>
        <strong>{item.label}</strong>
        <p>{item.description}</p>
      </div>
      <span className="placeholder-mark" aria-hidden="true">+</span>
    </div>
  );
}
