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
//   nilai = "A";
// } else if (rataRata >= 75 && rataRata < 80) {
//   nilai = "B";
// } else if (rataRata >= 65 && rataRata < 75) {
//   nilai = ("C");
// } else if (rataRata >= 45 && rataRata < 65) {
//   nilai = ("D");
// } else if (rataRata >= 0 && rataRata < 45) {
//   nilai = ("E");
// } else {
//   nilai = ("K");
// }

// console.log(`nilai rata-rata nya adalah : ${rataRata} jadi nilai nya ${nilai}`)

/* 2. Sebuah perusahaan mememberikan kode pengawal  dengan suatu bilangan yang terdiri dari 11 digit dengan format gddmmyyyynn, yaitu g adalah nomor golongan (dari 1 hingga 4), dd-mm-yyyy adalah nomor urut. misalnya 22505197803 adalah seorang pegawai bergolongan 2, lahir pada tanggal 25 mei 1978 dan bernomor urut 3. Buatlah algoritma(dalam bentuk flowchart) untuk mencetak nomor golongan, tanggal lahir, dan nomor urut pegawainya. Bulan kelahiran dicetak dalam format nama bulan, misalnya bulan ke-5 dicetak "MEI".*/

// const code = "91213200809";

// const gln = Math.floor((code % 100000000000) / 10000000000);
// const hr = Math.floor((code % 10000000000) / 100000000);
// const bl = Math.floor((code % 100000000) / 1000000);
// const th = Math.floor((code % 1000000) / 100);
// const ur = Math.floor((code % 100) / 1);

// if (bl == 1) {
//   bln = "Januari";
// } else if (bl == 2) {
//   bln = "Febuari";
// } else if (bl == 3) {
//   bln = "Maret";
// } else if (bl == 4) {
//   bln = "April";
// } else if (bl == 5) {
//   bln = "Mei";
// } else if (bl == 6) {
//   bln = "Juni";
// } else if (bl == 7) {
//   bln = "Juli";
// } else if (bl == 8) {
//   bln = "Agustus";
// } else if (bl == 9) {
//   bln = "September";
// } else if (bl == 10) {
//   bln = "Oktober";
// } else if (bl == 11) {
//   bln = "November";
// } else if (bl == 12) {
//   bln = "Desember";
// } else {
//   bln = "ERROR!!!";
// }
// console.log(`Nomor golongan : ${gln}`);
// console.log(`Tanggal lahir : ${hr} ${bln} ${th}`);
// console.log(`Nomor urut : ${ur}`);

/* 3. Diberikan suatu data waktu dalam bentuk hh(jam),mm(menit),ss(detik) dengan hh adalah jam, mm adalah menit, dan ss adalah detik. Buatlah algoritma(flowchart) untuk menampilkan data waktu tersebut setelah ditambahkan 1 detik:
data waktu 02:13:23 dan Setelah penambahan 1detik 02:13:24
data waktu 02:13:59 dan Setelah penambahan 1detik 02:14:00
data waktu 02:59:59 dan Setelah penambahan 1detik 03:00:00
data waktu 23:59:59 dan Setelah penambahan 1detik 00:00:00
*/

let jam = 10;
let menit = 30;
let detik = 44;

detik += 1;

if (detik >= 60) {
  detik = 0;
  menit += 1;

  if (menit >= 60) {
    menit = 0;
    jam += 1;

    if (jam >= 24) {
      jam = 0;
    }
  }
}

let jamFormatted = "";

if (jam < 10) {
  jamFormatted = "0" + jam;
} else {
  jamFormatted = "" + jam;
}

let menitFormatted = "";
if (menit < 10) {
  menitFormatted = "0" + menit;
} else {
  menitFormatted = "" + menit;
}

let detikFormatted = "";
if (detik < 10) {
  detikFormatted = "0" + detik;
} else {
  detikFormatted = "" + detik;
}

console.log(
  `Waktu setelah penambahan 1 detik: ${jamFormatted}:${menitFormatted}:${detikFormatted}`
);