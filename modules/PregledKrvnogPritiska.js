class PregledKrvnogPritiska extends Pregled {
  constructor(datum, vreme) {
    super(datum, vreme);
    this.gornjaVrednost = null;
    this.donjaVrednost = null;
    this.puls = null;
  }
  simulirajPregled(pacijent) {
    this.gornjaVrednost = Math.floor(Math.random() * (220 - 100) + 100);
    this.donjaVrednost = Math.floor(Math.random() * (220 - 100) + 100);
    this.puls = Math.floor(Math.random() * (150 - 40) + 40);
    console.log(
      `Pacijent ${
        pacijent.ime
      } je obavio pregled krvnog pritiska sa rezultatima gornja vrednost: ${
        this.gornjaVrednost
      } donja vrednost: ${this.donjaVrednost} i puls: ${this.puls}`
    );
    Loger.logovanje(`${pacijent.ime} je obavio pregled krvnog pritiska`);
  }
}
