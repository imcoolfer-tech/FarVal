//1. pilih tombol bedasarkan ID-nya
const tombolSapa = document.getElementById('sapabutton');
//2. Tambahkan 'event litsener' untuk aksi 'click'
tombolSapa.addEventLitsener('click',function() {
  alert('what'sup?');
