let oyuncular = [];
let turSayisi = 0;

function oyuncuEkle() {
    const oyuncu1 = document.getElementById('oyuncu1').value;
    const oyuncu2 = document.getElementById('oyuncu2').value;
    const oyuncu3 = document.getElementById('oyuncu3').value;
    const oyuncu4 = document.getElementById('oyuncu4').value;

    oyuncular = [
        { isim: oyuncu1, toplamPuan: 0 },
        { isim: oyuncu2, toplamPuan: 0 },
        { isim: oyuncu3, toplamPuan: 0 },
        { isim: oyuncu4, toplamPuan: 0 }
    ];

    document.getElementById('oyuncuGirisi').style.display = 'none';
    document.getElementById('puanlama').style.display = 'block';
    oyuncuListesiniGuncelle();
}

function oyuncuListesiniGuncelle() {
    const oyuncuListesi = document.getElementById('oyuncuListesi');
    oyuncuListesi.innerHTML = '';
    oyuncular.forEach((oyuncu, index) => {
        oyuncuListesi.innerHTML += `
            <div class="oyuncu-item">
                <label>${oyuncu.isim}:</label>
                <input type="number" id="puan${index}" placeholder="Puan girin" value="">
                <span>Toplam Puan: ${oyuncu.toplamPuan}</span>
            </div>
        `;
    });
    document.getElementById('turSayisi').innerText = `Toplam Tur: ${turSayisi}`;
}



function turuBitir() {
    oyuncular.forEach((oyuncu, index) => {
        const puan = parseInt(document.getElementById(`puan${index}`).value);
        oyuncu.toplamPuan += puan;
        document.getElementById(`puan${index}`).value = 0; // Puan alanını sıfırla
    });
    turSayisi++;
    oyuncuListesiniGuncelle();
}

function oyunuBitir() {
    oyuncular.sort((a, b) => a.toplamPuan - b.toplamPuan); // En düşük puana göre sırala
    const siralama = document.getElementById('siralama');
    siralama.innerHTML = '';
    oyuncular.forEach((oyuncu, index) => {
        siralama.innerHTML += `<li>${index + 1}. ${oyuncu.isim} - ${oyuncu.toplamPuan} puan</li>`;
    });
    document.getElementById('puanlama').style.display = 'none';
    document.getElementById('sonuc').style.display = 'block';
}
