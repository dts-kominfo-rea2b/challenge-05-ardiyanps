const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...

const sorter = (name, sorting) => {
  arrayName = [];

  if (sorting === undefined) {
    let y = name.sort();
    for (let i = 0; i < y.length; i++) {
      const a = y[i];
      const index = (`${i+1}. ${a}`);
      arrayName.push(index);
    }
  } else {
    let x = sorting(name);
    for (let i = 0; i < x.length; i++) {
      const a = x[i];
      const index = (`${i+1}. ${a}`);
      arrayName.push(index);
    }
  }
  return arrayName;
}

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (name) => {
  asc = name.sort();
  return asc;
} 

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (name) => {
  x = name.sort();
  des = x.reverse()
  return des;
}

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
