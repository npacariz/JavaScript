class Osoba {
    constructor(ime, prezime) {
        this.ime = ime
        this.prezime = prezime
    }
}

class Doktor extends Osoba {
    constructor(ime, prezime, specijalnost) {
        super(ime, prezime)
        this.specijalnost = specijalnost
        this.listaPacijenata = []
        Loger.logovanje(`Kreiran je doktor ${ime}`)

    }

    dodajPacijenta(pacijent) {
        this.listaPacijenata.push(pacijent);
    }

    zakaziPregled(vrsta, datum, vreme, pacijent) {
        if(vrsta === "Merenje krvnog pritiska") {
            pacijent.dodajPregled(new PregledKrvnogPritiska(datum, vreme))
        }else if(vrsta === "Merenje nivoa secera u krvi") {
            pacijent.dodajPregled(new PregledNivoSeceraUKrvi(datum, vreme))
        }else if(vrsta === "Merenje nivoa holesterola u krvi") {
            pacijent.dodajPregled(new PregledNivoHolesterolaUKriv(datum, vreme))
        }else{
            console.log("Test ne postoji!")
        }
    }
}

class Pacijent extends Osoba {
    constructor(ime, prezime, jmbg, brojKartona) {
        super(ime, prezime)
        this.jmbg = jmbg
        this.brojKartona = brojKartona
        this.izabraniLekar = null
        this.pregledi = []
        Loger.logovanje(`Kreiran je pacijent ${ime}`)
    }
    
    izaberiLekara(lekar) {
        this.izabraniLekar = lekar
        lekar.dodajPacijenta(this)
        Loger.logovanje(`Pacijent ${this.ime} bira lekara ${lekar.ime}a`)
    }

    dodajPregled(pregled) {
        this.pregledi.push(pregled)
    }
    obaviPregled() {
        if(this.pregledi.length === 0) {
            return console.log("Nemate zakazanih pregleda");
        }
        this.pregledi.forEach(pregled => {return pregled.simulirajPregled(this)})
        this.pregledi.shift()
    }
    
}

class Pregled {
    constructor(datum, vreme) {
        this.datum = datum
        this.vreme = vreme
    }
}

class PregledKrvnogPritiska extends Pregled {
    constructor(datum, vreme) {
        super(datum, vreme)
        this.gornjaVrednost = null;
        this.donjaVrednost = null;
        this.puls = null;
    }
    simulirajPregled(pacijent) {
        this.gornjaVrednost = Math.floor(Math.random() * (220 - 100) + 100)
        this.donjaVrednost = Math.floor(Math.random() * (220 - 100) + 100)
        this.puls = Math.floor(Math.random() * (150 - 40) + 40)
        console.log(`Pacijent ${pacijent.ime} je obavio pregled krvnog pritiska sa rezultatima gornja vrednost: ${this.gornjaVrednost} donja vrednost: ${this.donjaVrednost} i puls: ${this.puls}`)
        Loger.logovanje(`${pacijent.ime} je obavio pregled krvnog pritiska`)
    }
}

class PregledNivoSeceraUKrvi extends Pregled {
    constructor(datum, vreme) {
        super(datum, vreme) 
    }
    simulirajPregled(pacijent) {
        this.vrednost = Math.random() * (12 - 2) + 2
        this.vremePoslednjegObroka = "12h"
        console.log(`Pacijent ${pacijent.ime} je obavio pregled nivoa secera u krvi, vrednost: ${this.vrednost}, poslednji obrok bio pre: ${this.vremePoslednjegObroka}`)
        Loger.logovanje(`${pacijent.ime} je obavio pregled nivo secera u krvi`)
    }
}

class PregledNivoHolesterolaUKriv extends Pregled {
    constructor(datum, vreme) {
        super(datum, vreme);
    }
    simulirajPregled(pacijent) {
        this.vrednost = Number.parseFloat(Math.random() * (5 - 1) + 2).toFixed(1);
        this.vremePoslednjegObroka = "12h"
        console.log(`Pacijent ${pacijent.ime} je obavio pregled nivoa holesterola u krvi, vrednost: ${this.vrednost}, poslednji obrok bio pre: ${this.vremePoslednjegObroka}`)
        Loger.logovanje(`${pacijent.ime} je obavio pregled nivo holesterola u krvi`)
    }

}

class Loger {
    static logovanje(poruka) {
        var d = new Date()
        console.log(`[${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}] ${poruka}`)
    }
}

let docMilan = new Doktor('Milan', 'Milankovic', 'srce')
let docDjura = new Doktor('Djura', 'Djuric', 'koza')
let pacDragan = new Pacijent('Dragan', 'Draganic', 2343334, 1);
let pacMarko = new Pacijent('Marko', 'Markovic', 23434444, 2);
let pacJelena = new Pacijent('Jelena', 'Jelenic', 6783334, 3);

pacDragan.izaberiLekara(docMilan)
pacMarko.izaberiLekara(docMilan)
pacJelena.izaberiLekara(docMilan)

docMilan.zakaziPregled("Merenje krvnog pritiska", "22.2.2019", "14h", pacDragan)
docMilan.zakaziPregled("Merenje nivoa holesterola u krvi", "22.2.2019", "14h", pacDragan)
pacDragan.obaviPregled();
pacDragan.obaviPregled();
pacDragan.obaviPregled();
