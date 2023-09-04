//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

function rdm() {
    var n = Math.random();
    return n;
}
console.log(rdm());  

//

prompt("What is you name?")
prompt("What is their name?")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) +1
alert("Your love score is" + loveScore+ "%");

//

prompt("What is you name?")
prompt("What is their name?")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) +1

if(loveScore > 70){
    alert("Your love score is " + loveScore+ "%" + " You love each other like Kanye loves Kenye");
}
if(loveScore > 30 && loveScore <= 70){
    alert("Your love score is " + loveScore+ "%" );
}
else{
    alert("Your love score is " + loveScore+ "%" + " You go together oil and water");
}

//

var guestList = ["Angela","Jack","Pam","Kames","Lara","Jason"];
var guestName = prompt("What is tou name?");
if (guestList.includes(guestName)) {
    alert("Welcome!");
}
else {
    alert("Sorry, matbe next time.")
}

//
var guestList = ["Angela","Jack","Pam","Kames","Lara","Jason"];
var guestName = prompt("What is tou name?");
if (guestList.includes(guestName)) {
    alert("Welcome!");
}
else {
    alert("Sorry, matbe next time.")
}

//

var output =[];
var count =1;

function fizzBuzz(){
    output.push(count);
    count++;
    
    console.log(output);
}
//ใช้ fizzBuzz(); สั่งรัน
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]


//

var output =[];
var count = 1;

function fizzBuzz(){
    if(count % 3 ===0){
        output.push("Fizz");
    }
    else{
        output.push(count);
    }
    
    count++;
    
    console.log(output);
}
//[1, 2, 'Fizz', 4, 5, 'Fizz', 7, 8, 'Fizz']

//

var output =[];
var count = 1;

function fizzBuzz(){
    if(count % 3 ===0 && count % 5 ===0){
        output.push("fizzBuzz");
    }
    else if(count % 3 ===0){
        output.push("Fizz");
    }
    else if(count % 5 ===0){
        output.push("Buzz");
    }
    else{
        output.push(count);
    }
    
    count++;
    
    console.log(output);
}

//[ ..., 'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'fizzBuzz']

//


var allPerson =["Angela","Ben","Janny","Michael","Chloe"];

function whosPaying(names){
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    return (randomPerson + "is going to buy lunch today!")

}
    alert(whosPaying(allPerson));
//สุ่มชื่อ

//

