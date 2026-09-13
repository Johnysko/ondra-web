import type { LucideIconName } from '../utils/lucide';

export interface Service {
  title: string;
  description: string;
  href: string;
  icon: LucideIconName;
  logo?: boolean;
}

export const services: Service[] = [
  {
    title: 'SILNOPROUDÉ ELEKTROINSTALACE',
    description: 'Kompletní silnoproudé rozvody pro rodinné domy, byty, provozy i rekonstrukce.',
    href: '/sluzby',
    icon: 'Route',
  },
  {
    title: 'MONTÁŽNÍ PARTNER LOXONE',
    description: 'Návrh a montáž chytrých domácností na platformě Loxone — osvětlení, stínění, vytápění i zabezpečení v jednom systému.',
    href: '/sluzby',
    icon: 'HouseWifi',
    logo: true,
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
