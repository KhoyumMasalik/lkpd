/* 1. Kejuaruan PPLG memiliki beberapa materi dalam per semesternya, khoyum mendapat nilai 90 dalam pelajaran PABD, mendapatkan nilai 92 dalam pelajaran DPK, dan mendapatkan nilai 88 dalam pelajaran MTK. Buatlah algoritna (bentuk flowchart) untuk enentukan nilai rata-rata berdasarkan pada setiap pelajaran.
nilai terdiri dari: 
nilai 80 - 100 = A
nilai 75 - <80 = B 
nilai 65 - <75 = C
nilai 45 - <65 = E
selain nilai di atas = K
*/

// let mtk = 92;
// let dpk = 90;
// let pabd = 88;

// let rataRata = (mtk + dpk + pabd) / 3;

// if (rataRata >= 80 && rataRata <= 100) {
//   console.log("A");
// } else if (rataRata >= 75 && rataRata < 80) {
//   console.log("B");
// } else if (rataRata >= 65 && rataRata < 75) {
//   console.log("C");
// } else if (rataRata >= 45 && rataRata < 65) {
//   console.log("D");
// } else if (rataRata >= 0 && rataRata < 45) {
//   console.log("E");
// } else {
//   console.log("K");
// }

/* 2. Sebuah perusahaan mememberikan kode pengawal  dengan suatu bilangan yang terdiri dari 11 digit dengan format gddmmyyyynn, yaitu g adalah nomor golongan (dari 1 hingga 4), dd-mm-yyyy adalah nomor urut. misalnya 2250197803 adalah seorang pegawai bergolongan 2, lahir pada tanggal 25 mei 1978 dan bernomor urut 3. Buatlah algoritma(dalam bentuk flowchart) untuk mencetak nomor golongan, tanggal lahir, dan nomor urut pegawainya. Bulan kelahiran dicetak dalam format nama bulan, misalnya bulan ke-5 dicetak "MEI".*/




/* 3. Diberikan suatu data waktu dalam bentuk hh,mm,ss dengan hh adalah jam, mm adalah menit, dan ss adalah detik. Buatlah algoritma(flowchart) untuk menampilkan data waktu tersebut setelah ditambahkan 1 detik:
data waktu 02:13:23 dan Setelah penambahan 1detik 02:13:24
data waktu 02:13:59 dan Setelah penambahan 1detik 02:14:00
data waktu 02:59:59 dan Setelah penambahan 1detik 03:00:00
data waktu 23:59:59 dan Setelah penambahan 1detik 00:00:00
*/

// let hh = 12
// let mm = 20
// let ss = 50

// if (ss < 59) {
//   ss += 1;
// } else {
//   ss = 0;
//   mm += 1;

//   if (mm === 60) {
//     mm = 0;
//     hh += 1;

//     if (hh === 24) {
//       hh = 0;
//     }
//   }
// }

// console.log("Setelah penambahan 1 detik: " + padZero(hh) + ":" + padZero(mm) + ":" + padZero(ss));

// function padZero(num) {
//   return num < 10 ? "0" + num : num;
// }

let hh = 2;
let mm = 20;
let ss = 50;

if (ss < 59) {
  ss += 1;
} else {
  ss = 0;
  mm += 1;

  if (mm === 60) {
    mm = 0;
    hh += 1;

    if (hh === 24) {
      hh = 0;
    }
  }
}

const addLeadingZero = (num) => (num < 10 ? "0" + num : num);

console.log(
  "Setelah penambahan 1 detik: " +
    addLeadingZero(hh) +
    ":" +
    addLeadingZero(mm) +
    ":" +
    addLeadingZero(ss)
);