var telValidation =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
var mailValidation =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function validateForm() {
  let isim = document.forms["form"]["AD"].value;
  let soyisim = document.forms["form"]["SOYAD"].value;
  let telno = document.forms["form"]["TEL"].value;
  let mail = document.forms["form"]["MAİL"].value;

  if (isim == "" || soyisim == "" || telno == "" || mail == "") {
    alert("İsim,soyisim,telefon no,mail adresi kısmı boş bırakılamaz");
    return false;
  } else if (!telValidation.test(telno)) {
    alert("Geçerli bir telefon numarası giriniz");
    return false;
  } else if (
    !mailValidation.test(mail) ||
    mail.substring(mail.length - 4, mail.length) != ".com"
  ) {
    alert("geçerli bir mail adresi giriniz");
    return false;
  } else {
    return true;
  }
}

function validateGiris() {
  let kullaniciAdi = document.forms["giris"]["kullaniciadi"].value;
  let sifre = document.forms["giris"]["sifre"].value;

  if (kullaniciAdi == "" || sifre == "") {
    alert("kullanıcı adı ve şifre bölümü boş bırakılamaz");
    return false;
  } else if (
    !mailValidation.test(kullaniciAdi) ||
    kullaniciAdi.substring(kullaniciAdi.length - 18, kullaniciAdi.length) !=
      "ogr.sakarya.edu.tr"
  ) {
    alert("Geçerli bir mail adresi giriniz");
    return false;
  } else if (kullaniciAdi.substring(0, 10) != sifre) {
    alert("Yanlış Parola.. Parolanızı tekrardan giriniz");
    return false;
  } else {
    return true;
  }
}
