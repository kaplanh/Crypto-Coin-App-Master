//*sifrelenmemis stringi bu fonk icine yaziyorum
function EncryptStringAES(text) {
  if (text != null) {
    var key = CryptoJS.enc.Utf8.parse("8080808080808080");
    var iv = CryptoJS.enc.Utf8.parse("8080808080808080");

    var encryptedstr = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(text),
      key,
      {
        keySize: 128,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    return encryptedstr;
  } else {
    return "";
  }
}
//*sifrelenmis stringi bu fonk icine yaziyorum
function DecryptStringAES(text) {
  if (text != null) {
    var key = CryptoJS.enc.Utf8.parse("8080808080808080");
    var iv = CryptoJS.enc.Utf8.parse("8080808080808080");

    const crypted = CryptoJS.enc.Base64.parse(text);

    var decryptedstr = CryptoJS.AES.decrypt({ ciphertext: crypted }, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decryptedstr.toString(CryptoJS.enc.Utf8);
  } else {
  }
}


// gösterme function.
const showLoading = () => {
  loading.style.display = "block";
};
// silme function.
const removeLoading = () => {
  loading.style.display = "none";
};