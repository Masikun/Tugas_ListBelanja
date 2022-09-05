// tangkap element html

let modal = document.getElementById('modal');
let floating_button = document.getElementById('floating_button');
let modal_bg = document.getElementById('modal_bg');
let addlist_form = document.getElementById('addlist_form');
let root = document.getElementById('root');
let subtitle = document.getElementById('subtitle');

// tambahkan subtitle dari data
subtitle.innerHTML = new Date().toLocaleDateString();

// data list belanja
let data_list_belanja = [];

// menambahkan event listene rbutton

floating_button.addEventListener('click', () => {
  // console.log('klikya');
  if (modal.style.display == 'none') {
    show_Modal();
    return;
  }

  hide_Modal();
});

// menambahkan event listener ke modal_bag
modal_bg.addEventListener('click', () => {
  // ?sembunyikan kembalo
  hide_Modal();
});

// submit
addlist_form.addEventListener('submit', (event) => {
  // stop form dari reload page
  event.preventDefault();
  // console.log('submit');

  // tangkap value dari masing masing input dield
  let barang = event.target.barang.value;
  let harga = event.target.harga.value;

  // push data ke belanja list
  data_list_belanja.push({
    nama_barang: barang,
    harga_barang: harga,
    tanggal: new Date().toLocaleDateString(),
  });

  console.info(data_list_belanja);

  // clear input field
  event.target.barang.value = '';
  event.target.harga.value = '';

  hide_Modal();
  renderToHtml();
});

// show Modal
function show_Modal() {
  modal.style.display = 'flex';
  floating_button.style.backgroundColor = 'green';
  floating_button.style.transform = 'rotate(45deg)';
}

// Hide Modal
function hide_Modal() {
  modal.style.display = 'none';
  floating_button.style.backgroundColor = '#F28086';
  floating_button.style.transform = 'rotate(0deg)';
}

// FUNCTION RENDER TO HTML
function renderToHtml() {
  // clear element div
  root.innerHTML = '';

  // Perulangan data ist belanja
  data_list_belanja.forEach((e, i) => {
    root.innerHTML += `
    <div class ="card">
    <small> ${e.tanggal}</small>
    <div>
      ${e.nama_barang} <span> Rp. ${e.harga_barang} </span>
    </div>
    <button onclick = "handleDelete(${i})">Selesai</button>
  </div>
    `;
  });
}

// function delete pada Array

function handleDelete(index) {
  data_list_belanja.splice(index, 1);

  renderToHtml();
}
