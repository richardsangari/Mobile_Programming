// Asynchronous menggunakan setTimeout()
setTimeout(() => {    
    console.log("Terima Kasih Telah Memilih Untuk Terbang Bersama Garuda Indonesia"); //ini adalah proses dari asynchronous
}, 2000);
    console.log("Para Penumpang Yang Terhormat Anda Telah Sampai Di Tujuan Dengan Selamat");
    console.log("Selamat Datang Di Kota Tujuan Anda");
// output: 
// Para Penumpang Yang Terhormat Anda Telah Sampai Di Tujuan Anda Dengan Selamat
// Selamat Datang Di Kota Tujuan Anda
// Terima Kasih Telah Memilih Untuk Terbang Bersama Garuda Indonesia



// // Promoise
const pimpinan = true;

let newDecision = new Promise((resolve, reject) => {
  if (pimpinan) {
    resolve("Disetujui");
  } else {
    reject("Tidak Disetujui");
  }
});

// // Promise Menggunakan then()
newDecision.then((hasil) => {
  console.log(hasil); // Output: "Disetujui"
})

let condition = true;
async function tesAsyncAwait() {
    if (condition) {
        return "Non Reaktif!";
    } else {
        throw "Reaktif!";
    }
 };

async function hasil() {
  try {
    const message = await tesAsyncAwait(condition);
    console.log(message);  // Output: Non Reaktif
    console.log("Selamat Anda Bisa Melakukan Perjalanan Anda!"); // Output: Selamat Anda Bisa Melakukan Perjalanan Anda!
  } catch (error) {
    console.log(error);
  }
}

hasil(true);

