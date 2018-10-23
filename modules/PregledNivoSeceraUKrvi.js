class PregledNivoSeceraUKrvi extends Pregled {
  constructor(datum, vreme) {
    super(datum, vreme);
  }
  simulirajPregled(pacijent) {
    this.vrednost = Math.random() * (12 - 2) + 2;
    this.vremePoslednjegObroka = "12h";
    console.log(
      `Pacijent ${
        pacijent.ime
      } je obavio pregled nivoa secera u krvi, vrednost: ${
        this.vrednost
      }, poslednji obrok bio pre: ${this.vremePoslednjegObroka}`
    );
    Loger.logovanje(`${pacijent.ime} je obavio pregled nivo secera u krvi`);
  }
}
