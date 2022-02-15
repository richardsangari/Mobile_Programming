// no 1
// function helloWorld(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=> {
//             resolve("Hello World");
//         }, 2000)
//     })
// }
// const messages = async() => {
//     const msg = await helloWorld();
//     console.log(msg);
// }
// messages();

// no 2
// function ambilDataUser(){}
// fetch('https://reqres.in/api/users')
// .then(response => response.json())
// .then(user => console.log(user))
// ambilDataUser(); 

// no 3
// const ambilDataUser = async() => {
//     try{
//         const response = await
//         fetch('https://reqres.in/api/users')
//         const user = await response.json()
//         console.log(user)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// ambilDataUser();
 


// no 4
// class orang {
//     constructor(nama,umur) {
//         this.nama = nama;
//         this.umur = umur;
//     }

//     bekerja(){
//         console.log(`${this.nama} sedang bekerja seperti biasa.`)
//     }
// }

// const user1 = new orang('Marchel', '21')
// user1.bekerja();

// no 5
//Object Class
// class orang2 {
//     constructor(nama,umur) {
//         this.nama = nama;
//         this.umur = umur;
//     }

//    tidur(){
//         console.log(`${this.nama} sedang tidur.`)
//     }

//     makan(){
//         console.log(`${this.nama} sedang makan.`)
//     }
// }


// class Pelajar extends orang2{
//     constructor(nama, umur, namaSekolah){
//         super(nama,umur);
//         this.namaSekolah = namaSekolah;
//     }

//     belajar(){
//         console.log(`${this.nama} belajar di ${this.namaSekolah}`)
//     }
// }

// const user2 = new Pelajar('Marchel', '21', 'Unklab')
// user2.belajar();