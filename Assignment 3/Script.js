let scores = [78, 92, 45, 67, 88, 54, 39, 81, 95, 72];  
let pass = 0;
let fail = 0;
let total = 0;
document.write("<h2>"," ได้คะแนน : ",scores,"</h2>");



for(let i=0;i<scores.length;i++){

    total += scores[i];
}



for(let i=0;i<scores.length;i++){
    if (scores[i] >= 50) {
        pass++;
    } else {
        fail++;
    }
}
let avg = total / 10;

document.write("<h2>","คะแนนรวมทั้งหมด",total,"คน","</h2>");
document.write("<h2>","ได้คะแนนเฉลี่ย",avg,"คน","</h2>");
document.write("<h2>","สอบผ่าน : ",pass,"คน","</h2>");
document.write("<h2>","สอบไม่ผ่าน : ",fail,"คน","</h2>");