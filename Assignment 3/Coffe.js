let sales = [120, 85, 150, 95, 200, 60, 175];
let totalSales = 0;
let avg = 0;
let Max = sales[0];
let Min = sales[0];



for(i=0;i<sales.length;i++){
        if (sales[i] >=175) {
            pty = "-Excellent";
        } else if (sales[i] >= 100) {
            pty = "-Good";
        } else {
            pty = "-Needs Improvement";
        }


        document.write("<tr><td>Day  ",(i+1)," : </td><td>",sales[i]," cups</td><td>",pty,"</td></tr><br>");


        }

for(let i=0;i<sales.length;i++){

    totalSales += sales[i];
}

avg = totalSales / 74;

for(let i=0;i<sales.length;i++){
    if (sales[i] > Max) {
        Max = sales[i];
    }
    if (sales[i] < Min) {
        Min = sales[i];
    }
}
document.write("<br>------------------------<br><br>");
document.write("<h2>","total Sales",totalSales,"cups","</h2>");
document.write("<h2>","Average Sales",avg,"cups","</h2>");
document.write("<h2>","Highest Sales : ",Max,"cups","</h2>");
document.write("<h2>","Lowest Sales : ",Min,"cups","</h2>");