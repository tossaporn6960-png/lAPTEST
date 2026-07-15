let cupSize = "M"; // S, M, L
let ownCup = true;

let price = 0;

if (cupSize == "S") {
    price = 60;
} else if (cupSize == "M") {
    price = 80;
} else if (cupSize == "L") {
    price = 100;
}

let discount = 0;

if (ownCup == true) {
    discount = price * 0.05;
}

let netPrice = price - discount;

console.log("กาแฟขนาด " + cupSize + " ราคาปกติ " + price + " บาท");
console.log("ได้รับส่วนลด " + discount + " บาท");
console.log("ราคาสุทธิ " + netPrice + " บาท");