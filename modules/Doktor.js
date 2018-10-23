class Doktor extends Osoba {
  constructor(ime, prezime, specijalnost) {
    super(ime, prezime);
    this.specijalnost = specijalnost;
    this.listaPacijenata = [];
    Loger.logovanje(`Kreiran je doktor ${ime}`);
  }

  dodajPacijenta(pacijent) {
    this.listaPacijenata.push(pacijent);
  }

  zakaziPregled(vrsta, datum, vreme, pacijent) {
    const krvniPritisak = "Merenje krvnog pritiska";
    const secerUKrvi = "Merenje nivoa secera u krvi";
    const holesterolUKrvi = "Merenje nivoa holesterola u krvi";
    if (vrsta === krvniPritisak) {
      pacijent.dodajPregled(new PregledKrvnogPritiska(datum, vreme));
    } else if (vrsta === secerUKrvi) {
      pacijent.dodajPregled(new PregledNivoSeceraUKrvi(datum, vreme));
    } else if (vrsta === holesterolUKrvi) {
      pacijent.dodajPregled(new PregledNivoHolesterolaUKriv(datum, vreme));
    } else {
      console.log("Test ne postoji!");
    }
  }
}
