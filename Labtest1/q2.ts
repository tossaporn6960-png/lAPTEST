let bonus = 5000;
let totalBonus = 0;

for (let year = 1; year <= 20; year++) {
    console.log("ปีที่ " + year + " โบนัส = " + bonus + " บาท");

    totalBonus = totalBonus + bonus;
    bonus = bonus + 5000;
}

console.log("คุณทำงานครบ 20 ปี");
console.log("ได้รับโบนัสรวม " + totalBonus + " บาท");