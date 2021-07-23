/*  // Bitcoin Value :
    
    document.addEventListener('DOMContentLoaded', () => {
    getBitcoinPrice()
});

function updateBitcoinPrice(newValue) {
    document.querySelector('#narx').innerHTML = `${newValue} (USD)`;
    setTimeout(getBitcoinPrice, 3000);
}

function getBitcoinPrice() {

    // 1. HXR obyektini hosil qilish
    let xhr = new XMLHttpRequest();
    let url = "https://blockchain.info/q/24hrprice";

    // 2.Event handler yozish kerak
    xhr.onload = function () {
        try {
            let data = this.responseText;
            document.querySelector('#narx').innerHTML =`${data} (USD)`;
            updateBitcoinPrice(data);
        } catch (e) {
            console.log("Error ", e);
        }
    }

    // 3.AJAX request hosil qilish kerak 
    xhr.open("GET", url)

    // 4.AJAX requestni web servisga yuborish
    xhr.send();
} */

