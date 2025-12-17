function orderNow() {
    const phone = "919876543210"; // change number
    const message = "Hello Chicken Wala 🐔, I want to order fresh chicken.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
