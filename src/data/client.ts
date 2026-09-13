/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const phoneForTel = '+420 773 575 225';

export const client = {
  name: 'Taclík Elektro',
  ico: '06406971',
  email: 'info@taclikelektro.cz',
  phoneForTel,
  phoneFormatted: phoneForTel,
  phoneForWhatsApp: phoneForTel.replace(/\D/g, ''),
  whatsappDefaultMessage: 'Dobrý den, mám dotaz ohledně ',
  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */ 
  address: {
    lineOne: 'Ambrožova 1862/13',
    lineTwo: '',
    city: 'Praha 3',
    state: '',
    zip: '130 00',
    country: 'CZ',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Ambro%C5%BEova+1862%2F13%2C+Praha+3%2C+130+00',
    mapEmbed: 'https://maps.google.com/maps?q=Ambro%C5%BEova+1862%2F13,+Praha+3,+130+00&hl=cs&z=16&output=embed',
  },
  socials: {
    facebook: 'https://www.facebook.com/stelektro/',
    instagram: '',
    google: '',
  },
  domain: 'https://www.example.com',
} as const;

export type Client = typeof client;

export function getWhatsAppUrl(message: string = client.whatsappDefaultMessage) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${client.phoneForWhatsApp}?text=${text}`;
}
