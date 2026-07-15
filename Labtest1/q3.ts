let weight = [15, 5.5, 4.2, 8.9, 23, 16, 12.5, 2.7, 27.5, 30];

let count = 0;
let sum = 0;

for (let i = 0; i <= weight.length; i++) {
    sum = sum + weight[i];

    if (weight[i] > 20) { 
        count = count + 1;
    }
}

let average = sum / weight.length;

console.log("น้ำหนักพัสดุ");
console.log(weight);
console.log("พัสดุที่หนักเกิน 20 กิโลกรัม มี " + count + " ชิ้น");
console.log("น้ำหนักเฉลี่ย = " + average + " กิโลกรัม");