const QRimage = document.getElementById("QR-Image");
const QRtext = document.getElementById("qrtext");
const imgBox = document.getElementById("imgBox");

function generateQR() {
    const text = QRtext.value;
    if (text) {
        QRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(text);
        imgBox.classList.add("show-img");
    } else {
        alert("Please enter text or URL");
    }
}
