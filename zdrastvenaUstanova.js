let docMilan = new Doktor("Milan", "Milankovic", "srce");
let docDjura = new Doktor("Djura", "Djuric", "koza");
let pacDragan = new Pacijent("Dragan", "Draganic", 2343334, 1);
let pacMarko = new Pacijent("Marko", "Markovic", 23434444, 2);
let pacJelena = new Pacijent("Jelena", "Jelenic", 6783334, 3);

pacDragan.izaberiLekara(docMilan);
pacMarko.izaberiLekara(docMilan);
pacJelena.izaberiLekara(docMilan);

docMilan.zakaziPregled(
  "Merenje krvnog pritiska",
  "22.2.2019",
  "14h",
  pacDragan
);
docMilan.zakaziPregled(
  "Merenje nivoa holesterola u krvi",
  "22.2.2019",
  "14h",
  pacDragan
);
pacDragan.obaviPregled();
pacDragan.obaviPregled();
pacDragan.obaviPregled();
