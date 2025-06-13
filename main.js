let myAdmins=["ahmad", "osama", "sayed" , "stop" ,"Smith"];
let myEmployees=["Amgad", "samah", "ammer", "omar","othman","amany", "samia"]; 

let i=0;
while (i < myAdmins.length) {
    if (myAdmins[i] === "stop") {
        break;
    }
    i++;
    }

document.write(`<div>we have ${i} <span style="font-size: 18px;">admins</span></div>`);
document.write(`<hr></hr>`);
document.write(`<div>the admin for tame 1 is ${myAdmins[0]} </div>`);
let team1 = [];
for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j].startsWith("a")|| myEmployees[j].startsWith("A")) {
        team1.push(myEmployees[j]);
    }
}
    document.write(`</br>`);
document.write(`<h1>Team 1 members are: </h1>`);
    document.write(`</br>`);
for (let k = 0; k < team1.length; k++) {
    document.write(`<div>${k+1}-${team1[k]} </div>`);
    document.write(`</br>`);
}
document.write(`<hr></hr>`);
document.write(`<div>the admin for tame 2 is ${myAdmins[2]} </div>`);
let team2 = [];
for (let l = 0; l < myEmployees.length; l++) {
    if (myEmployees[l].startsWith("s")|| myEmployees[l].startsWith("S")) {
        team2.push(myEmployees[l]);
    }
}
document.write(`<div>team 2 members are: </div>`);
for (let m = 0; m < team2.length; m++) {
    document.write(`<div>${m+1}-${team2[m]} </div>`);
    document.write(`</br>`);
}
document.write(`<hr></hr>`);
document.write(`<div>the admin for tame 3 is ${myAdmins[1]} </div>`);
let team3 = [];
for (let n = 0; n < myEmployees.length; n++) {
    if (myEmployees[n].startsWith("o")|| myEmployees[n].startsWith("O")) {
        team3.push(myEmployees[n]);
    }
}
document.write(`<div>team 3 members are: </div>`);
for (let o = 0; o < team3.length; o++) {
    document.write(`<div>${o+1}-${team3[o]} </div>`);
    document.write(`</br>`);
}