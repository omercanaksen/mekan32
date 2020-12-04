
const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste',
  { 'baslik': 'Anasayfa',
    'sayfaBaslik':{
    'siteAd': 'Mekan32',
    'aciklama': 'Isparta civarindaki mekanlari kesfedin'
    },
    'footer': 'Ömercan Akşen',
    'mekanlar': [
    {
    'ad':'Starbucks',
    'adres':'Centrum Garden AVM',
    'puan':3,
    'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
    'mesafe':'10km'
    },
    {
    'ad':'Gloria Jeans',
    'adres':'SDU Doğu Kampüsü',
    'puan':3,
    'imkanlar':['Kahve','Çay','Pasta'],
    'mesafe':'8km'
    },

    {
    'ad':'Kahve Dünyası',
    'adres':'Iyaş',
    'puan':2,
    'imkanlar':['Kahve','Çay'],
    'mesafe':'3km'
    },
    {
    'ad':'Köfteci Yusuf',
    'adres':'Süleyman Demirel Cd.',
    'puan':5,
    'imkanlar':['Köfte','Kahvaltı','Tatlı','Patates','Ayran'],
    'mesafe':'7km'
    },
    {
    'ad':'Random Playstation',
    'adres':'Fatih Mah.',
    'puan':4,
    'imkanlar':['Oyun','PS4','Tost','Kola','Patates'],
    'mesafe':'2km'
    },
    ]
  });
}

const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay', {
  'baslik': 'Mekan Bilgisi',
  'sayfaBaslik': 'Starbucks',
  'footer': 'Ömercan Akşen',
  'mekanBilgisi':{
  'ad':'Starbucks',
  'adres':'Centrum Garden',
  'puan':3,
  'imkanlar':['Kahve', 'Pasta', 'Kek'],
  'koordinatlar':{
  'enlem':37.78185,
  'boylam':30.566034
   },
  'saatler':[
  {
  'gunler':'Pazartesi-Cuma',
  'acilis':'7:00',
  'kapanis':'23:00',
  'kapali':false
  },
  {
  'gunler':'Cumartesi',
  'acilis':'9:00',
  'kapanis':'22:30',
  'kapali':false
   },
   {
   'gunler':'Pazar',
   'kapali':true
   }
   ],
   'yorumlar':[
   {
   'yorumYapan': 'UyutanKahve',
   'puan':3,
   'tarih': '12 Haziran 2035',
   'yorumMetni': 'O kaaadar kötü ki hala uyuyorum'
   },
   {
    'yorumYapan': 'KızKaçıranSüt',
    'puan':3,
    'tarih': '12 Haziran 2035',
    'yorumMetni': 'Kızlar nerdesiniz :)'
    }
   ]
  }
});
}

const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}