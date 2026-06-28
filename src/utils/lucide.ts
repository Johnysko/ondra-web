import { icons } from 'lucide';

export type LucideIconName = keyof typeof icons;

export function renderLucideIcon(name: string, className: string): string {
  const icon = icons[name as LucideIconName];
  if (!icon) {
    return '';
  }

  const children = icon
    .map(([tag, attrs]) => {
      const attrString = Object.entries(attrs)
        .map(([key, value]) => `${key}="${String(value)}"`)
        .join(' ');
      return `<${tag} ${attrString}></${tag}>`;
    })
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}" aria-hidden="true">${children}</svg>`;
}
