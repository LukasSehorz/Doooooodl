// Zentrale Inhaltsdatei — alle Texte und Betriebsdaten an einer Stelle.
// Quelle der Betriebsdaten: Google-Unternehmensprofil "Michael & Markus Thot GbR".

export const business = {
  name: "Michael & Markus Thot GbR",
  shortName: "Thot",
  claim: "Kfz-Meisterbetrieb",
  phone: "08084 1887",
  phoneHref: "tel:+4980841887",
  street: "Bauhofstraße 4",
  district: "Gewerbegebiet An der Emlinger Straße",
  zip: "84416",
  city: "Taufkirchen (Vils)",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Michael+%26+Markus+Thot+GbR+Bauhofstra%C3%9Fe+4+84416+Taufkirchen+Vils",
  reviewsHref:
    "https://www.google.com/search?q=Michael+%26+Markus+Thot+GbR",
  rating: "4,7",
  ratingCount: 72,
  hours: [
    { days: "Mo – Fr", time: "08:00 – 17:00 Uhr" },
    { days: "Samstag", time: "nach Vereinbarung" },
  ],
};

export const nav = [
  { label: "Start", href: "#start" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Werkstatt", href: "#werkstatt" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "Kontakt", href: "#kontakt" },
];

export const hero = {
  eyebrow: "Kfz-Meisterbetrieb",
  welcome: ["Willkommen", "bei", "Thot"],
  labelLeft: "Vertrauen",
  labelRightTop: "In Taufkirchen an der Vils",
  labelRightBottom: "Für jedes Fahrzeug",
  headline: "Ihr Auto in besten Händen.",
  description:
    "Michael und Markus Thot betreuen Ihr Fahrzeug persönlich — von der Inspektion über die Bremsen bis zur kniffligen Fehlersuche. Markenunabhängig, ehrlich kalkuliert, termintreu.",
};

export const welcome = {
  h2: "Willkommen in der Werkstatt von Michael & Markus Thot",
  label: "Eintreten",
  h3: "Zwei Meister. Ein Anspruch.",
  body:
    "Bei uns arbeitet der Meister noch selbst am Fahrzeug. Das heißt: Sie sprechen mit der Person, die Ihr Auto tatsächlich in der Hand hat — kein Serviceberater dazwischen, keine Warteschleife. Wir sagen Ihnen offen, was gemacht werden muss, was warten kann und was es kostet, bevor wir anfangen.",
  cta: "Mehr über uns",
};

export const services = {
  h3: ["Unsere", "Leistungen"],
  items: [
    {
      eyebrow: "Automobiltechnik",
      title: "Inspektion, Bremsen, Kupplung — für alle Marken und Baujahre.",
      image: "/img/real-hebebuehne.webp",
      alt: "Mercedes-Benz Limousine auf der Scherenhebebühne in der Werkstatt von Thot",
    },
    {
      eyebrow: "Karosseriebau",
      title: "Karosserie, Lack und Fehlersuche — auch dort, wo andere aufgeben.",
      image: "/img/real-halle.webp",
      alt: "Werkstatthalle mit Mercedes-Benz Limousine auf der Hebebühne und Oldtimer-Bus im Hintergrund",
    },
  ],
};

export const values = {
  label: "Das sind wir",
  h2: "Darauf können Sie sich verlassen",
  body:
    "Zwei Kfz-Meister, eine Werkstatt, 72 Bewertungen mit 4,7 Sternen. Was uns Kundinnen und Kunden am häufigsten zurückmelden: Wir nehmen uns Zeit, wir finden die Ursache, und der Preis stimmt am Ende mit dem überein, was besprochen war.",
  quote: "Der Meister wusste sofort, woran es lag.",
  quoteAuthor: "G. P.",
  quoteRole: "Mercedes-Benz 190 D",
  cta: "Termin vereinbaren",
  cards: [
    {
      no: "01",
      title: "Meisterhandwerk",
      image: "/img/real-aussen.webp",
      alt: "Mitarbeiter von Thot bei der Arbeit an einem klassischen Mercedes-Benz Coupé vor der Werkstatt",
      body:
        "Zwei Kfz-Meister mit jahrzehntelanger Erfahrung stehen selbst in der Halle. Diagnose, Entscheidung und Ausführung liegen in einer Hand.",
    },
    {
      no: "02",
      title: "Moderne Messtechnik",
      image: "/img/value-technik.webp",
      alt: "Aufgeräumte Werkzeugwand und Diagnosewagen in der Werkstatt",
      body:
        "Aktuelle Diagnosesysteme für Motor, Elektronik und Fahrwerk — damit auch die Fehler gefunden werden, die sich nicht auf Anhieb zeigen.",
    },
    {
      no: "03",
      title: "Faire Preise",
      image: "/img/value-qualitaet.webp",
      alt: "Frisch gewartetes Fahrzeug in der beleuchteten Werkstatthalle",
      body:
        "Sie erfahren vorab, was auf Sie zukommt. Was nicht nötig ist, machen wir nicht — und sagen Ihnen das auch.",
    },
  ],
};

export const fleet = {
  title: "Wir betreuen Ihr Fahrzeug.",
  subtitle: "Vom Youngtimer bis zum aktuellen Modell — markenunabhängig.",
  brands: [
    "Volkswagen", "BMW", "Mercedes-Benz", "Audi", "Škoda", "Seat",
    "Opel", "Ford", "Fiat", "Renault", "Toyota", "Hyundai", "Kia", "Volvo",
  ],
};

export const references = {
  label: "Referenzen",
  h3: "Aus der Werkstatt",
  body:
    "Drei Beispiele aus dem Alltag — stellvertretend für das, was täglich bei uns auf der Hebebühne steht.",
  items: [
    {
      tag: "Wohnmobil",
      title: "Schwachstelle am selben Tag behoben",
      body:
        "Ohne Termin gekommen, Ursache gesucht, gefunden und noch am selben Tag repariert. Auch Camper und Kastenwagen sind bei uns richtig.",
      image: "/img/ref-camper.webp",
      alt: "Kastenwagen-Wohnmobil mit geöffneten Hecktüren in der Werkstatthalle",
    },
    {
      tag: "Youngtimer",
      title: "Tachoproblem nach zehn Minuten gelöst",
      body:
        "Mehrere Werkstätten hatten den Tacho ausgebaut, ohne die Ursache zu finden. Bei uns war die Diagnose eine Sache von Minuten.",
      image: "/img/real-halle.webp",
      alt: "Schwarze Mercedes-Benz Limousine auf der Hebebühne in der Werkstatthalle von Thot",
    },
    {
      tag: "Klassiker",
      title: "Karosserie und Technik aus einer Hand",
      body:
        "Vom Chromdetail bis zur Bremsanlage: Bei Klassikern und Youngtimern übernehmen wir Karosseriearbeit und Technik im selben Haus.",
      image: "/img/real-aussen.webp",
      alt: "Klassisches Mercedes-Benz Coupé vor der Werkstatt von Thot, Mitarbeiter bei der Arbeit am Heck",
    },
  ],
};

// Originalbewertungen aus dem Google-Unternehmensprofil des Betriebs.
export const testimonials = {
  label: "Bewertungen",
  h3: "Was unsere Kunden sagen",
  image: "/img/real-portrait.webp",
  imageAlt: "Blick in die Werkstatthalle von Thot mit Fahrzeug auf der Hebebühne",
  cta: "Auf Google ansehen",
  items: [
    {
      quote:
        "Obwohl ich ohne Termin kam, hat Markus sich Zeit genommen, dem Problem bei meinem Camper auf die Spur zu gehen und die Schwachstelle noch am selben Tag behoben. Service und Preis einmalig!",
      name: "Kerstin K.",
      role: "Wohnmobil",
    },
    {
      quote:
        "Mehrere Werkstätten hatten den Tacho ausgebaut und den Grund nicht gefunden. Hier habe ich das Problem kurz geschildert und der Meister wusste sofort, woran es lag. Die Reparatur hat zehn Minuten gedauert.",
      name: "G. P.",
      role: "Mercedes-Benz 190 D",
    },
    {
      quote:
        "Ich bin begeistert von dem Service und sehr zufrieden. Die Abwicklung war sehr schnell und darüber hinaus auch sehr preiswert. Ein Ort, den ich zu 100 Prozent empfehle.",
      name: "Isaac M.",
      role: "Mercedes-Benz A-Klasse",
    },
    {
      quote: "Top Service.",
      name: "Simon A.",
      role: "Local Guide",
    },
  ],
};

export const contact = {
  title: "Termin vereinbaren",
  body: "Rufen Sie an — meistens finden wir kurzfristig einen Platz.",
};

export const footer = {
  labelLeft: "Kfz-Meisterbetrieb",
  labelRight: "Für jedes Fahrzeug",
  findUs: "So finden Sie uns",
  visitUs: "Adresse",
  openingHours: "Öffnungszeiten",
  navigate: "Übersicht",
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
};

// Oberflächentexte, die keinem inhaltlichen Abschnitt zugeordnet sind
// (Bildbeschreibungen des Hintergrunds, Bedienhilfen, Seitentitel).
export const ui = {
  heroPoster: {
    src: "/img/hero-poster.webp",
    alt: "Blick in die Werkstatthalle mit aufgebocktem Fahrzeug auf der Hebebühne",
  },
  heroVideo: "/video/hero.mp4",
  welcomeImage: {
    src: "/img/welcome.webp",
    alt: "Werkstatthalle von Michael & Markus Thot mit Hebebühne und Werkzeugwand",
  },
  menuOpen: "Menü öffnen",
  menuClose: "Menü schließen",
  ratingOutOf: "/5",
  metaTitle:
    "Michael & Markus Thot GbR — Kfz-Meisterbetrieb in Taufkirchen (Vils)",
  metaDescription:
    "Kfz-Meisterbetrieb in Taufkirchen (Vils): Inspektion, Bremsen, Kupplung und Diagnose für alle Marken. Persönlich betreut von Michael und Markus Thot — ehrlich kalkuliert und termintreu.",
};

// Rechtsseiten. Die inhaltlichen Pflichtangaben muss der Betrieb selbst
// ergänzen — hier stehen ausdrücklich KEINE erfundenen Rechtsdaten.
export const legal = {
  noticeTitle: "Hinweis: Diese Seite ist noch nicht vollständig",
  noticeBody:
    "Die folgenden Angaben müssen vor der Veröffentlichung vom Betrieb ergänzt und rechtlich geprüft werden. Bis dahin sind sie bewusst leer gelassen.",
  backLabel: "Zurück zur Startseite",
  impressum: {
    title: "Impressum",
    intro:
      "Angaben gemäß § 5 DDG sowie § 18 Abs. 2 MStV für die Website von Michael & Markus Thot GbR, Kfz-Meisterbetrieb in Taufkirchen (Vils).",
    sections: [
      {
        heading: "Anbieter",
        body: "Michael & Markus Thot GbR, Bauhofstraße 4, 84416 Taufkirchen (Vils). Telefon 08084 1887.",
      },
      {
        heading: "Noch zu ergänzen",
        body: "Die folgenden Pflichtangaben liegen uns noch nicht vor und werden vom Betrieb nachgereicht.",
      },
    ],
    placeholders: [
      "Vollständige Rechtsform und Registerangaben der Gesellschaft",
      "Vertretungsberechtigte Gesellschafter",
      "E-Mail-Adresse für den elektronischen Kontakt",
      "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG",
      "Zuständige Handwerkskammer und Eintragung in die Handwerksrolle",
      "Gesetzliche Berufsbezeichnung und Staat der Verleihung",
      "Zuständige Aufsichtsbehörde",
      "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      "Angaben zur Berufshaftpflichtversicherung",
    ],
  },
  datenschutz: {
    title: "Datenschutz",
    intro:
      "Diese Seite informiert über die Verarbeitung personenbezogener Daten beim Besuch unserer Website nach der Datenschutz-Grundverordnung (DSGVO).",
    sections: [
      {
        heading: "Was diese Website tut",
        body: "Die Website ist rein informativ. Es gibt kein Kontaktformular, keine Registrierung und keine Newsletter-Anmeldung. Eine Kontaktaufnahme erfolgt telefonisch oder vor Ort.",
      },
      {
        heading: "Externe Verweise",
        body: "Verweise auf Google Maps und auf das Google-Unternehmensprofil öffnen Seiten von Google. Erst beim Aufruf dieser Seiten werden Daten an Google übertragen; dafür gilt die Datenschutzerklärung von Google.",
      },
      {
        heading: "Noch zu ergänzen",
        body: "Die folgenden Angaben müssen vor der Veröffentlichung vom Betrieb ergänzt werden.",
      },
    ],
    placeholders: [
      "Verantwortliche Stelle im Sinne der DSGVO mit vollständiger Anschrift",
      "Kontaktdaten für Datenschutzanfragen",
      "Datenschutzbeauftragte oder Datenschutzbeauftragter, sofern bestellt",
      "Angaben zum Hosting-Anbieter und zu den Server-Logdateien",
      "Eingesetzte Analyse- oder Kartendienste und deren Rechtsgrundlage",
      "Speicherdauer der erhobenen Daten",
      "Hinweise zu Betroffenenrechten und zur zuständigen Aufsichtsbehörde",
    ],
  },
};
