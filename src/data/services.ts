import type { LucideIconName } from '../utils/lucide';

export interface Service {
  title: string;
  description: string;
  href: string;
  icon: LucideIconName;
}

export const services: Service[] = [
  {
    title: 'SILNOPROUDÉ ELEKTROINSTALACE',
    description: 'Kompletní silnoproudé rozvody pro rodinné domy, byty, provozy i rekonstrukce.',
    href: '/sluzby',
    icon: 'Route',
  },
  {
    title: 'CHYTRÁ DOMÁCNOST',
    description: 'Návrh a instalace chytrého ovládání osvětlení, stínění, vytápění a dalších prvků domácnosti.',
    href: '/sluzby',
    icon: 'HouseWifi',
  },
  {
    title: 'INSTALACE KOMUNIKAČNÍCH ROZVODŮ A ZAŘÍZENÍ',
    description: 'Datové, televizní a komunikační rozvody včetně přípravy a zapojení koncových zařízení.',
    href: '/sluzby',
    icon: 'Cable',
  },
  {
    title: 'LED OSVĚTLENÍ',
    description: 'Úsporné LED osvětlení interiérů, exteriérů, pracovních prostor i dekorativních prvků.',
    href: '/sluzby',
    icon: 'Lightbulb',
  },
  {
    title: 'ZABEZPEČENÍ DOMÁCNOSTI',
    description: 'Instalace zabezpečovacích systémů, čidel, kamer a prvků pro ochranu domácnosti.',
    href: '/sluzby',
    icon: 'Cctv',
  },
  {
    title: 'HROMOSVODY',
    description: 'Montáž, úpravy a kontroly hromosvodů pro bezpečnou ochranu objektů před bleskem.',
    href: '/sluzby',
    icon: 'Zap',
  },
  {
    title: 'REVIZE',
    description: 'Revize elektroinstalací, zařízení a hromosvodů podle platných norem a požadavků.',
    href: '/sluzby',
    icon: 'ClipboardCheck',
  },
];
