let oyuncular = [];
let turSayisi = 0;
let oyunTipi = '';

ffunction oyunTipiniSec() {
    console.log("Oyun tipi seçildi!");
    oyunTipi = document.getElementById('oyunTipi').value;
    document.getElementById('oyunTipiSecimi').style.display = 'none';
    document.getElementById('oyuncuGirisi').style.display = 'block';
    oyuncuAlanlariniGuncelle();
}


function oyuncuAlanlariniGuncelle() {
    const oyuncuAlanlari = document.getElementById('oyuncuAlanlari');
    oyuncuAlanlari.innerHTML = '';
    
    if (oyunTipi === 'esli') {
        oyuncuAlanlari.innerHTML += `
            <label for="oyuncu1">Takım 1:</label>
            <input type="text" id="oyuncu1" name="oyuncu1" required><br>
            <label for="oyuncu2">Takım 2:</label>
            <input type="text" id="oyuncu2" name="oyuncu2" required><br>
        `;
    } else if (oyunTipi === '3oyunculu') {
        oyuncuAlanlari.innerHTML += `
            <label for="oyuncu1">Oyuncu 1:</label>
            <input type="text" id="oyuncu1" name="oyuncu1" required><br>
            <label for="oyuncu2">Oyuncu 2:</label>
            <input type="text" id="oyuncu2" name="oyuncu2" required><br>
            <label for="oyuncu3">Oyuncu 3:</label>
            <input type="text" id="oyuncu3" name="oyuncu3" required><br>
        `;
    } else if (oyunTipi === '4oyunculu') {
        oyuncuAlanlari.innerHTML += `
            <label for="oyuncu1">Oyuncu 1:</label>
            <input type="text" id="oyuncu1" name="oyuncu1" required><br>
            <label for="oyuncu2">Oyuncu 2:</label>
            <input type="text" id="oyuncu2" name="oyuncu2" required><br>
            <label for="oyuncu3">Oyuncu 3:</label>
            <input type="text" id="oyuncu3" name="oyuncu3" required><br>
            <label for="oyuncu4">Oyuncu 4:</label>
            <input type="text" id="oyuncu4" name="oyuncu4" required><br>
        `;
    }
}

function oyuncuEkle() {
    const oyuncu1 = document.getElementById('oyuncu1').value;
    const oyuncu2 = document.getElementById('oyuncu2').value;
    const oyuncu3 = document.getElementById('oyuncu3') ? document.getElementById('oyuncu3').value : '';
    const oyuncu4 = document.getElementById('oyuncu4') ? document.getElementById('oyuncu4').value : '';

    if (oyunTipi === 'esli') {
        oyuncular = [
            { isim: oyuncu1, toplamPuan: 0 },
            { isim: oyuncu2, toplamPuan: 0 }
        ];
    } else if (oyunTipi === '3oyunculu') {
        oyuncular = [
            { isim: oyuncu1, toplamPuan: 0 },
            { isim: oyuncu2, toplamPuan: 0 },
            { isim: oyuncu3, toplamPuan: 0 }
        ];
    } else if (oyunTipi === '4oyunculu') {
        oyuncular = [
            { isim: oyuncu1, toplamPuan: 0 },
            { isim: oyuncu2, toplamPuan: 0 },
            { isim: oyuncu3, toplamPuan: 0 },
            { isim: oyuncu4, toplamPuan: 0 }
        ];
    }

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
