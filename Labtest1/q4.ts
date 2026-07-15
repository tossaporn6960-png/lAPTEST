type Product = [string, number, boolean];

let products = [
    ["Laptop", 15, true],
    ["Desk", 50, false],
    ["Glass Vase", 5, true],
    ["Monitor", 10, true],
    ["Chair", 100, false]
];

for (let i = 0; i < products.length; i++) {
    if (products[i][2] == true) {
        console.log(products[i][0] + " จำนวน " + products[i][1] + " ชิ้น แตกหักง่าย");
    }
}