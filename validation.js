function validateForm() {
  let isim = document.forms["form"]["AD"].value;
  let soyisim = document.forms["form"]["SOYAD"].value;
  let telno = document.forms["form"]["TELEFON NO"].value;
  let mail = document.forms["form"]["E-MAİL ADRESİ"].value;

  if (isim == "" || soyisim == "" || telno == "" || mail == "") {
    alert("İsim,soyisim,telefon no,mail adresi kısmı boş bırakılamaz");
    return false;
  }
}

function validateMail() {
  let mail = document.forms["form"]["E-MAİL ADRESİ"].value;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (mail.value.match(validRegex)) {
    alert("invalid email address!");

    return true;
  }
}
