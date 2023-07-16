// ** mengimport modul path dari node.js. Digunakan untuk mengelola jalur file dan direktori pada sistem file. */
const path = require("path");

//** Ekspor sebuah objek konfigurasi untuk webpack */
module.exports = {
  //** opsi menentukan mode webpack, yaitu production, ini akan mengoptimalkan output file untuk performa yang lebih baik */
  mode: "development",
  //** Opsi ini menentukan file sumber yang akan digunakna oleh webpack untuk membangun aplikasi */
  entry: "./src/index.js",
  //** opsi ini menentukan di mana dan bagaimana hasil pembangunan aplikasi akan disimpan. */
  output: {
    /** Opsi ini menentukan direktori di mana hasil pembangunan akan disimpan. __ dirname adalah konstanta yang merepresentasikan direktori saat ini, sedangkan path.resolve digunakan untuk menggabungkan direktori __dirname dengan direktori output sehingga membuat path lengkap. */
    path: path.resolve(__dirname, "output"),
    //** opsi ini menentukan nama file hasil pembangunan. nama filenya adalah bundle.js */
    filename: "bundle.js",
  },
  watch: true,
  devtool: false,
};
