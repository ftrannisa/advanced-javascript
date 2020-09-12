const angkaPertama = document.getElementById("angkaPertama");
const angkaKedua = document.getElementById("angkaKedua");
const btnTambah = document.getElementById("btnTambah");
const btnKurang = document.getElementById("btnKurang");
const btnKali = document.getElementById("btnKali");
const btnBagi = document.getElementById("btnBagi");
const hasil = document.getElementById("hasil");

btnTambah.addEventListener("click", () => {
  const x = parseFloat(angkaPertama.value);
  const y = parseFloat(angkaKedua.value);
  hasil.innerHTML = parseFloat(x + y);
});

btnKurang.addEventListener("click", () => {
  const x = parseFloat(angkaPertama.value);
  const y = parseFloat(angkaKedua.value);
  hasil.innerHTML = parseFloat(x - y);
});

btnKali.addEventListener("click", () => {
  const x = parseFloat(angkaPertama.value);
  const y = parseFloat(angkaKedua.value);
  hasil.innerHTML = parseFloat(x * y);
});

btnBagi.addEventListener("click", () => {
  const x = parseFloat(angkaPertama.value);
  const y = parseFloat(angkaKedua.value);
  hasil.innerHTML = parseFloat(x / y);
});
