export interface Review {
  quote: string;
  name: string;
  location?: string;
  rating: number;
}

/**
 * Google recenze STE - Elektromontáže, revize, opravy (4,9 / 16).
 * Pouze recenze s textem a 4–5 hvězdami.
 */
export const reviews: Review[] = [
  {
    name: 'Jitka Párátko',
    rating: 5,
    quote:
      'Chtěli bychom moc poděkovat za skvěle odvedenou práci! Pan Taclík nám dodělával světla, zásuvky, nový chránič a dokonce zavedl halogen na půdu – takže konečně člověk najde velice rychle to, co potřebuje.',
  },
  {
    name: 'Iveta Perschova',
    rating: 5,
    quote:
      'Velice příjemný, ochotný, kvalitně odvedená práce. Vřele doporučuji. Za mě jedna. V budoucnu se na nikoho jiného obracet nebudu.',
  },
  {
    name: 'Kristýna Riedelová',
    rating: 5,
    quote:
      'Mohu jen doporučit! U babičky na bytě Ondřej opravil doutnající zásuvku, zapojil nový bojler, namontoval lustr a opravil topení. Nikoho jiného už tam babička nechce. Skvělá a rychlá domluva, kvalitně odvedená práce! Moc šikovný elektrikář!',
  },
  {
    name: 'Denisa Rybkova',
    rating: 5,
    quote: 'Perfektně odvedená práce. Pan Taclík je profesionální, vstřícný a precizní. Mohu ho jen doporučit. Děkujeme.',
  },
  {
    name: 'Jiří Procházka',
    rating: 5,
    quote:
      'Vřele doporučuji. Slušné, spolehlivé a rychlé jednání. Kvalitně provedená elektroinstalace, montáž dálkově ovládaného el. kotle vč. rozvodů i radiků, montáž hromosvodu a drobné instalatérské práce. Moc děkuji za skvělou práci.',
  },
  {
    name: 'Zdenek Kolenyak',
    rating: 5,
    quote:
      'Tak vážení!!! Toto je Člověk řemeslník s obrovským „Ř“!!! Za nás rychlost, spokojenost, vše si po sobě uklidili, na všem, na čem jsme se dohodli, klaplo. SUPER, SUPER, SUPER!!!! Prostě, co víc si přát. Navíc velice slušné, korektní, seriózní jednání. Prostě BOŽE VÍC TAKOVÝCH LIDÍ. Za nás zapojení elektrokotle, natažení elektriky, zapojení rozvaděče, revize všeho i v čase svátku. Tohoto týpka fakt vřele doporučujeme.',
  },
  {
    name: 'Martin Ďurina',
    rating: 5,
    quote: 'Velká spokojenost, dodržené termíny, služby navíc, přijatelné ceny. Mohu doporučit.',
  },
  {
    name: 'Jan Trčala',
    rating: 5,
    quote: 'Super zkušenost, doporučuji. Rychlá nabídka, rozumná cena, realizace dle domluvy. Díky.',
  },
  {
    name: 'Lukymi Vv',
    rating: 5,
    quote: 'Spokojenost, rychlá komunikace a vřele doporučuji všem. Děkuji.',
  },
  {
    name: 'Anastasia Popova',
    rating: 5,
    quote: 'Velmi pečlivý a profesionální.',
  },
  {
    name: 'Jiří Lach',
    rating: 5,
    quote: 'Super služby, díky za opravu.',
  },
  {
    name: 'Jiri Flegl',
    rating: 5,
    quote: 'Klidné, příjemné a pohostinné místo.',
  },
  {
    name: 'Viktor Šiller',
    rating: 5,
    quote: 'Profesionální a přátelský přístup, rychlá komunikace a přesné dodržování dohodnutých termínů.',
  },
  {
    name: 'Carlos Ruiz',
    rating: 5,
    quote: 'Vřele doporučuji!',
  },
];

export const homepageReviews = reviews.slice(0, 3);

/** Recenze page: similar quote lengths sit on the same grid row. */
export const recenzeReviews = [...reviews].sort((a, b) => a.quote.length - b.quote.length);
