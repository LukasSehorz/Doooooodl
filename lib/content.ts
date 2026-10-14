// Zentrale Inhaltsdatei — alle Texte und Betriebsdaten an einer Stelle.
// Quelle der Betriebsdaten: Google-Unternehmensprofil "Michael & Markus Thot GbR".
// Alle Bilder stammen aus dem Fotomaterial des Betriebs (Ordner "Bilder").

export const business = {
  name: "Michael & Markus Thot GbR",
  shortName: "Thot",
  claim: "Kfz-Meisterbetrieb",
  trade: "Automobiltechnik & Karosseriebau",
  phone: "08084 1887",
  phoneHref: "tel:+4980841887",
  email: "mtw@taufkirchen-vils.de",
  emailHref: "mailto:mtw@taufkirchen-vils.de",
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
    { days: "Mo – Do", time: "08:00 – 17:00 Uhr" },
    { days: "Freitag", time: "08:00 – 14:00 Uhr" },
    { days: "TÜV im Haus", time: "Di, Do und Fr nach Vereinbarung" },
  ],
};

export const nav = [
  { label: "Start", href: "#start" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Werkstatt", href: "#werkstatt" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Galerie", href: "#galerie" },
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
  // Kurzfassung des Hinweises aus der Markenleiste, direkt im Aufmacher.
  note:
    "Ausschließlich Verbrennungsmotoren — für Elektrofahrzeuge liegt uns keine Zulassung vor.",
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
      image: "/img/werkstatt-motorraum-2.webp",
      alt: "Fahrzeug mit geöffneter Motorhaube in der Werkstatt von Thot",
    },
    {
      eyebrow: "Karosseriebau",
      title: "Karosserie, Lack und Fehlersuche — auch dort, wo andere aufgeben.",
      image: "/img/lackierkabine-volvo.webp",
      alt: "Rot lackierter Sportwagen-Klassiker in der Lackierkabine des Betriebs",
    },
  ],
};

export const values = {
  label: "Das sind wir",
  h2: "Darauf können Sie sich verlassen",
  body:
    "Zwei Kfz-Meister, eine Werkstatt, 72 Bewertungen mit 4,7 Sternen. Was uns Kundinnen und Kunden am häufigsten zurückmelden: Wir nehmen uns Zeit, wir finden die Ursache, und der Preis stimmt am Ende mit dem überein, was besprochen war.",
  // Wörtlicher Auszug aus der Google-Bewertung von G. P.
  quote: "Der Mechaniker wusste sofort, woran es liegt.",
  quoteAuthor: "G. P.",
  quoteRole: "Mercedes-Benz 190 D",
  cta: "Termin vereinbaren",
  cards: [
    {
      no: "01",
      title: "Meisterhandwerk",
      image: "/img/fahrzeuge-halle-2.webp",
      alt: "Halle des Betriebs mit mehreren Fahrzeugen und Klassikern",
      body:
        "Zwei Kfz-Meister mit jahrzehntelanger Erfahrung stehen selbst in der Halle. Diagnose, Entscheidung und Ausführung liegen in einer Hand.",
    },
    {
      no: "02",
      title: "Moderne Messtechnik",
      image: "/img/werkzeugwand-real.webp",
      alt: "Werkzeugwand mit Spezialwerkzeug, davor Werkbank und Diagnoserechner",
      body:
        "Aktuelle Diagnosesysteme für Motor, Elektronik und Fahrwerk — damit auch die Fehler gefunden werden, die sich nicht auf Anhieb zeigen.",
    },
    {
      no: "03",
      title: "Faire Preise",
      image: "/img/fahrzeuge-mercedes-2.webp",
      alt: "Zwei Mercedes-Benz nebeneinander in der Halle des Betriebs",
      body:
        "Sie erfahren vorab, was auf Sie zukommt. Was nicht nötig ist, machen wir nicht — und sagen Ihnen das auch.",
    },
  ],
};

export const fleet = {
  title: "Wir betreuen Ihr Fahrzeug.",
  subtitle: "Vom Youngtimer bis zum aktuellen Modell — markenunabhängig.",
  note:
    "Wir arbeiten ausschließlich an Verbrennungsmotoren. Für Elektrofahrzeuge liegt uns keine Zulassung vor.",
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
      tag: "Vor Ort",
      title: "Direkt beim Meister vorfahren",
      body:
        "Auf dem Hof steht man sofort bei dem, der das Fahrzeug später in der Hand hat. Problem schildern, gemeinsam draufschauen, Aufwand besprechen — ohne Anmeldung an einem Schalter.",
      image: "/img/fahrzeuge-sl-2.webp",
      alt: "Fahrzeug in der Halle des Betriebs, daneben das geöffnete Hallentor",
    },
    {
      tag: "Ältere Modelle",
      title: "Erfahrung mit Fahrzeugen von gestern",
      body:
        "Ältere Modelle brauchen Erfahrung, Geduld und das passende Werkzeug. Wer damit zu uns kommt, trifft auf Leute, die diese Technik noch von Grund auf kennen.",
      image: "/img/fahrzeuge-klassiker-2.webp",
      alt: "Ältere Mercedes-Benz Limousinen in der Halle des Betriebs",
    },
    {
      tag: "Klassiker",
      title: "Karosserie und Technik aus einer Hand",
      body:
        "Vom Chromdetail bis zur Bremsanlage: Bei Klassikern und Youngtimern übernehmen wir Karosseriearbeit und Technik im selben Haus.",
      image: "/img/klassiker-volvo-2.webp",
      alt: "Roter Klassiker in der Halle des Betriebs, Blick durch das geöffnete Tor",
    },
  ],
};

// Kompakte Bildleiste. Bewusst ohne Bildunterschriften: die Aufnahmen sollen
// für sich stehen, ohne Aussagen über den Betrieb zu behaupten.
export const gallery = {
  label: "Einblicke",
  h3: "Unsere Werkstatt in Bildern",
  body:
    "Aufnahmen aus der Halle, der Lackierkabine und vom Hof in der Bauhofstraße.",
  items: [
    {
      image: "/img/werkzeugwand-hoch.webp",
      alt: "Werkzeugwand mit sortiertem Werkzeug über der Werkbank",
    },
    {
      image: "/img/werkstatt-pagode-hoch-2.webp",
      alt: "Klassischer Mercedes-Benz auf der Zwei-Säulen-Hebebühne",
    },
    {
      image: "/img/werkstatt-motorraum-2.webp",
      alt: "Fahrzeug mit geöffneter Motorhaube in der Werkstatt",
    },
    {
      image: "/img/lackierkabine-weit.webp",
      alt: "Lackierkabine mit rotem Klassiker unter der Kabinenbeleuchtung",
    },
    {
      image: "/img/lackierkabine-hoch.webp",
      alt: "Roter Klassiker von der Seite in der Lackierkabine",
    },
    {
      image: "/img/karosserie-detail-hoch.webp",
      alt: "Heckansicht des frisch lackierten roten Klassikers",
    },
    {
      image: "/img/werkstatt-halle-2.webp",
      alt: "Werkstatthalle mit Fahrzeugen auf der Hebebühne und über der Arbeitsgrube",
    },
    {
      image: "/img/halle-tor-hoch.webp",
      alt: "Blick vom Hallentor in die Werkstatt",
    },
    {
      image: "/img/werkstatt-buehne.webp",
      alt: "Fahrzeug auf der Hebebühne, daneben die Werkzeugwand",
    },
    {
      image: "/img/klassiker-volvo-2.webp",
      alt: "Roter Klassiker in der Halle, Blick durch das geöffnete Tor",
    },
    {
      image: "/img/fahrzeuge-sl-hoch-2.webp",
      alt: "Fahrzeug vor der Bosch-Prüftafel im Betrieb",
    },
    {
      image: "/img/fahrzeuge-halle-2.webp",
      alt: "Halle des Betriebs mit mehreren Fahrzeugen",
    },
    {
      image: "/img/fahrzeuge-sl-2.webp",
      alt: "Schwarzer Mercedes-Benz vor Bosch-Prüftafel im Betrieb",
    },
    {
      image: "/img/fahrzeuge-mercedes-2.webp",
      alt: "Zwei Mercedes-Benz nebeneinander im Betrieb",
    },
    {
      image: "/img/fahrzeuge-hoch-2.webp",
      alt: "Klassische Mercedes-Benz Limousinen im Betrieb",
    },
    {
      image: "/img/halle-stellplatz-2.webp",
      alt: "Blick in die Halle mit Fahrzeugen und Regalen",
    },
  ],
};

// Wortgetreue Übersetzungen echter Fünf-Sterne-Bewertungen aus dem
// Google-Unternehmensprofil, vom Betrieb bereitgestellt (Stand: 09.09.2026).
// Nachnamen abgekürzt. Inhaltlich unverändert — nichts hinzugefügt.
export const testimonials = {
  label: "Bewertungen",
  h3: "Was unsere Kunden sagen",
  image: "/img/werkstatt-pagode-hoch-2.webp",
  imageAlt:
    "Klassischer Mercedes-Benz auf der Hebebühne in der Werkstatt von Thot",
  cta: "Auf Google ansehen",
  items: [
    {
      quote:
        "Obwohl ich ohne Termin kam, hat sich Markus die Zeit genommen, dem Problem an meinem Camper auf den Grund zu gehen, und hat es noch am selben Tag behoben.",
      name: "Kerstin K.",
      role: "Wohnmobil",
    },
    {
      quote:
        "Der Tacho in meinem Mercedes-Benz 190 D zeigte, seit ich ihn habe und schon beim Vorbesitzer, immer 15 km/h mehr an als die tatsächliche Geschwindigkeit. Mehrere Werkstätten haben den Tacho ausgebaut, konnten die Ursache aber nicht finden. Hier habe ich das Problem kurz geschildert, und der Mechaniker wusste sofort, woran es liegt — ohne den Tacho überhaupt gesehen zu haben. Die Reparatur hat zehn Minuten gedauert und der Tacho funktioniert wieder einwandfrei! Der Preis war mehr als fair, und ich kann diese Werkstatt absolut empfehlen!",
      name: "G. P.",
      role: "Mercedes-Benz 190 D",
    },
    {
      quote:
        "Ich bin begeistert vom Service und sehr zufrieden. Die Abwicklung ging unglaublich schnell und war dazu noch sehr preiswert. Besonders hervorzuheben ist die Freundlichkeit der Mitarbeiter: Ich bin neu hier und spreche noch kein Deutsch. Trotzdem wurde mir unglaublich geholfen. Ich kann diesen Ort uneingeschränkt empfehlen und komme auf jeden Fall wieder!",
      name: "Isaac M.",
      role: "Local Guide",
    },
    {
      quote:
        "Die Werkstatt ist die beste Adresse für Reparaturen aller Art. Ich habe meinen 15 Jahre alten BMW 1er dort reparieren lassen, nachdem mehrere andere Werkstätten meinten, das lohne sich nicht mehr. Alle Probleme wurden zu einem fairen Preis behoben, und der TÜV wurde gleich vor Ort neu gemacht! Die Werkstatt Thot ist mein Rundum-sorglos-Paket! Sie liegt nicht gerade um die Ecke, aber ich fahre gerne wieder hin!",
      name: "Miriam M.",
      role: "BMW 1er",
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
    src: "/img/werkstatt-halle-2.webp",
    alt: "Werkstatthalle von Michael & Markus Thot mit Fahrzeugen auf der Hebebühne und über der Arbeitsgrube",
  },
  heroVideo: "/video/hero.mp4",
  welcomeImage: {
    src: "/img/werkstatt-buehne.webp",
    alt: "Blick in die Werkstatt von Michael & Markus Thot mit Werkzeugwand und Fahrzeug auf der Hebebühne",
  },
  menuOpen: "Menü öffnen",
  menuClose: "Menü schließen",
  ratingOutOf: "/5",
  metaTitle:
    "Michael & Markus Thot GbR — Kfz-Meisterbetrieb in Taufkirchen (Vils)",
  metaDescription:
    "Kfz-Meisterbetrieb in Taufkirchen (Vils): Inspektion, Bremsen, Kupplung und Diagnose für alle Marken. Persönlich betreut von Michael und Markus Thot — ehrlich kalkuliert und termintreu.",
};

// ---------------------------------------------------------------------------
// Rechtsseiten
//
// `lines` enthält bestätigte Angaben. `todo` listet Angaben, die uns nicht
// vorliegen und die der Betrieb vor der Veröffentlichung selbst ergänzen muss —
// dort stehen bewusst KEINE erfundenen Daten.
// ---------------------------------------------------------------------------

export type LegalBlock = {
  heading: string;
  lines?: string[];
  todo?: string[];
};

export const legal = {
  backLabel: "Zurück zur Startseite",
  todoLabel: "Vom Betrieb noch zu ergänzen",
  noticeTitle: "Diese Seite ist noch nicht freigegeben",
  noticeBody:
    "Die markierten Angaben liegen uns nicht vor. Sie müssen vom Betrieb ergänzt und vor dem Livegang rechtlich geprüft werden.",

  impressum: {
    title: "Impressum",
    intro:
      "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV).",
    blocks: [
      {
        heading: "Diensteanbieter",
        lines: [
          "Michael & Markus Thot GbR",
          "Automobiltechnik & Karosseriebau — Kfz-Meisterbetrieb",
          "Bauhofstraße 4",
          "84416 Taufkirchen (Vils)",
          "Deutschland",
        ],
      },
      {
        heading: "Rechtsform",
        lines: ["Gesellschaft bürgerlichen Rechts (GbR)"],
      },
      {
        heading: "Vertretungsberechtigte Gesellschafter",
        lines: ["Michael Thot", "Markus Thot"],
      },
      {
        heading: "Kontakt",
        lines: [
          "Telefon: 08084 1887",
          "E-Mail: mtw@taufkirchen-vils.de",
        ],
      },
      {
        heading: "Umsatzsteuer",
        lines: [
          "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE228424774",
        ],
      },
      {
        heading: "Berufsrechtliche Angaben",
        lines: [
          "Gesetzliche Berufsbezeichnung: Kraftfahrzeugtechniker-Handwerk sowie Karosserie- und Fahrzeugbauer-Handwerk, verliehen in der Bundesrepublik Deutschland.",
          "Zuständige Kammer und Aufsichtsbehörde: Handwerkskammer für München und Oberbayern, Max-Joseph-Straße 4, 80333 München.",
          "Eintragung in die Handwerksrolle, Betriebsnummer: 6361159.",
          "Es gelten die Handwerksordnung (HwO) und die Vorschriften der zuständigen Handwerkskammer, einsehbar unter www.gesetze-im-internet.de/hwo.",
        ],

      },
      {
        heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
        lines: ["Michael Thot und Markus Thot, Anschrift wie oben."],
      },
      {
        heading: "Verbraucherstreitbeilegung",
        lines: [
          "Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).",
        ],
      },
      {
        heading: "Bildnachweis",
        lines: [
          "Sämtliche Fotos auf dieser Website zeigen den Betrieb in der Bauhofstraße 4 und stammen aus dem eigenen Bildbestand.",
        ],
      },
      {
        heading: "Haftung für Inhalte und Links",
        lines: [
          "Als Diensteanbieter sind wir nach § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten verantwortlich. Nach den §§ 8 bis 10 DDG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
          "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte ist stets der jeweilige Anbieter verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße geprüft; rechtswidrige Inhalte waren nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir solche Links umgehend.",
        ],
      },
      {
        heading: "Urheberrecht",
        lines: [
          "Die durch die Betreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen unserer schriftlichen Zustimmung.",
        ],
      },
    ] satisfies LegalBlock[],
  },

  datenschutz: {
    title: "Datenschutzerklärung",
    intro:
      "Wir freuen uns über Ihren Besuch auf unserer Website. Nachfolgend informieren wir Sie nach Art. 13 und 14 der Datenschutz-Grundverordnung (DSGVO) darüber, welche personenbezogenen Daten dabei verarbeitet werden.",
    blocks: [
      {
        heading: "1. Verantwortliche Stelle",
        lines: [
          "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
          "Michael & Markus Thot GbR, Bauhofstraße 4, 84416 Taufkirchen (Vils).",
          "Telefon: 08084 1887 · E-Mail: mtw@taufkirchen-vils.de",
          "Eine Datenschutzbeauftragte oder ein Datenschutzbeauftragter ist nicht bestellt. Die Voraussetzungen des § 38 BDSG liegen nicht vor, da in unserem Betrieb weniger als 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind.",
        ],
      },
      {
        heading: "2. Umfang dieser Website",
        lines: [
          "Diese Website ist ein reines Informationsangebot. Es gibt kein Kontaktformular, keine Registrierung, keinen Newsletter, keinen Online-Terminkalender und keinen Bestellvorgang. Sie können die Seite vollständig nutzen, ohne uns Daten zu übermitteln.",
          "Die Kontaktaufnahme erfolgt telefonisch oder persönlich vor Ort. Rufen Sie uns an, verarbeiten wir Ihre Angaben ausschließlich zur Bearbeitung Ihres Anliegens und zur Vorbereitung oder Durchführung des Werkstattauftrags — Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.",
        ],
      },
      {
        heading: "3. Hosting und Server-Logdateien",
        lines: [
          "Diese Website wird gehostet von der Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, USA. Netlify verarbeitet die nachfolgend genannten Daten als Auftragsverarbeiter für uns; Grundlage ist ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.",
          "Beim Aufruf der Website werden dabei automatisch Informationen erfasst, die Ihr Browser übermittelt. Dazu gehören in der Regel Browsertyp und -version, verwendetes Betriebssystem, die zuvor besuchte Seite, der Hostname des zugreifenden Rechners, die IP-Adresse sowie Datum und Uhrzeit der Serveranfrage.",
          "Diese Daten sind technisch erforderlich, um die Website auszuliefern, ihre Stabilität und Sicherheit zu gewährleisten und Angriffe abzuwehren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt im sicheren und störungsfreien Betrieb der Website. Eine Zusammenführung dieser Daten mit anderen Datenquellen findet nicht statt.",
          "Die Logdateien werden gelöscht, sobald sie für die genannten Zwecke nicht mehr erforderlich sind — spätestens, wenn der jeweilige Vorgang zur Sicherstellung des Betriebs abgeschlossen und keine sicherheitsrelevante Auswertung mehr nötig ist.",
        ],

      },
      {
        heading: "4. Datenübermittlung in die USA",
        lines: [
          "Da unser Hosting-Anbieter seinen Sitz in den USA hat, können die unter Ziffer 3 genannten Daten in die Vereinigten Staaten übermittelt werden. Die USA gelten nicht generell als Land mit einem der DSGVO gleichwertigen Datenschutzniveau.",
          "Netlify, Inc. ist nach dem EU-U.S. Data Privacy Framework zertifiziert. Für die Europäische Kommission besteht damit ein Angemessenheitsbeschluss (Art. 45 DSGVO). Ergänzend hat Netlify die Standardvertragsklauseln der Europäischen Kommission nach Durchführungsbeschluss (EU) 2021/914 vereinbart (Art. 46 Abs. 2 lit. c DSGVO).",
        ],
      },
      {
        heading: "5. Cookies, Tracking und Analyse",
        lines: [
          "Diese Website setzt keine Cookies zu Analyse-, Marketing- oder Trackingzwecken ein. Es kommen keine Webanalysedienste, keine Werbenetzwerke, keine Social-Media-Plugins und keine externen Schriftarten-Server zum Einsatz. Alle Schriften und Bilder werden direkt von unserem eigenen Server ausgeliefert.",
          "Aus diesem Grund benötigt die Seite auch kein Einwilligungsbanner.",
        ],
      },
      {
        heading: "6. Verweise auf Google",
        lines: [
          "An mehreren Stellen verlinken wir auf Google Maps und auf unser Google-Unternehmensprofil. Es handelt sich dabei um gewöhnliche Links — es wird nichts von Google in diese Seite eingebettet, und solange Sie den Link nicht anklicken, werden keine Daten an Google übertragen.",
          "Erst wenn Sie einen dieser Links öffnen, verlassen Sie unsere Website. Ab diesem Zeitpunkt gilt die Datenschutzerklärung von Google LLC bzw. Google Ireland Limited, abrufbar unter policies.google.com/privacy. Auf die dortige Verarbeitung haben wir keinen Einfluss.",
        ],
      },
      {
        heading: "7. Empfänger der Daten",
        lines: [
          "Eine Weitergabe Ihrer Daten erfolgt nur, soweit dies zur Erfüllung des Auftrags erforderlich ist, Sie eingewilligt haben oder wir gesetzlich dazu verpflichtet sind. Im Rahmen des Website-Betriebs erhält der Hosting-Anbieter als Auftragsverarbeiter Zugang zu den unter Ziffer 3 genannten Daten.",
        ],
      },
      {
        heading: "8. Speicherdauer",
        lines: [
          "Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke erforderlich ist. Daten aus Werkstattaufträgen unterliegen den handels- und steuerrechtlichen Aufbewahrungsfristen und werden nach deren Ablauf gelöscht.",
        ],
      },
      {
        heading: "9. Ihre Rechte",
        lines: [
          "Sie haben jederzeit das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO), auf Berichtigung unrichtiger Daten (Art. 16 DSGVO), auf Löschung (Art. 17 DSGVO), auf Einschränkung der Verarbeitung (Art. 18 DSGVO) sowie auf Datenübertragbarkeit (Art. 20 DSGVO).",
          "Verarbeiten wir Daten auf Grundlage eines berechtigten Interesses, können Sie dieser Verarbeitung nach Art. 21 DSGVO widersprechen. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Wenden Sie sich dafür an die oben genannte verantwortliche Stelle.",
        ],
      },
      {
        heading: "10. Beschwerderecht bei der Aufsichtsbehörde",
        lines: [
          "Unabhängig davon steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO). Für nicht-öffentliche Stellen in Bayern ist zuständig:",
          "Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.",
        ],
      },
      {
        heading: "11. Änderungen dieser Erklärung",
        lines: [
          "Wir passen diese Datenschutzerklärung an, sobald sich die Rechtslage oder der Funktionsumfang der Website ändert. Es gilt jeweils die hier abrufbare Fassung.",
        ],
      },
    ] satisfies LegalBlock[],
  },
};
