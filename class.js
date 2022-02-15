//class in js
class Diler{
    constructor(lokasi, nama, jumlah) {
        this.nama = nama;
        this.lokasi = lokasi;
        this.jumlah = jumlah;
    }
    findDiler(){
        console.log(`diler ${this.nama} terletak di ${this.lokasi} dengan jumlah kendaraan ${this.jumlah} Unit`);

    }
}
const Diler1 = new Diler("Manado", "WP", "100");
const Diler2 = new Diler("Palu", "CF", "150");
Diler1.findDiler();
Diler2.findDiler()