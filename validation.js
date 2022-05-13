function validateForm() {
  let isim = document.forms["form"]["AD"].value;
  let soyisim = document.forms["form"]["SOYAD"].value;
  let telno = document.forms["form"]["TELEFON NO"].value;
  let mail = document.forms["form"]["E-MAİL ADRESİ"].value;
  var telValidation =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  var mailValidation =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (isim == "" || soyisim == "" || telno == "" || mail == "") {
    alert("İsim,soyisim,telefon no,mail adresi kısmı boş bırakılamaz");
    return false;
  } else if (!telValidation.test(telno)) {
    alert("Geçerli bir telefon numarası giriniz");
    return false;
  } else if (!mailValidation.test(mail)) {
    alert("geçerli bir mail adresi giriniz");
    return false;
  } else {
    return true;
  }
}
