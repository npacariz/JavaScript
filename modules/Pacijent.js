class Pacijent extends Osoba {
  constructor(ime, prezime, jmbg, brojKartona) {
    super(ime, prezime);
    this.jmbg = jmbg;
    this.brojKartona = brojKartona;
    this.izabraniLekar = null;
    this.pregledi = [];
    Loger.logovanje(`Kreiran je pacijent ${ime}`);
  }

  izaberiLekara(lekar) {
    this.izabraniLekar = lekar;
    lekar.dodajPacijenta(this);
    Loger.logovanje(`Pacijent ${this.ime} bira lekara ${lekar.ime}a`);
  }
  dodajPregled(pregled) {
    this.pregledi.push(pregled);
  }
  obaviPregled() {
    if (this.pregledi.length === 0) {
      return console.log("Nemate zakazanih pregleda");
    }
    this.pregledi.forEach(pregled => {
      return pregled.simulirajPregled(this);
    });
    this.pregledi.shift();
  }
}
