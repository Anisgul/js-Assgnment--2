// question No: 01
var a = 10
console.log("the value of a is:")
console.log(a)

console.log("the value of ++a is:")
console.log(++a)
console.log("Now the value of a is:")
console.log(a)

console.log("the value of a++ is:")
console.log(a++)
console.log("Now the value of a is:")
console.log(a)

console.log("the value of --a is:")
console.log(--a)
console.log("Now the value of a is:")
console.log(a)

console.log("the value of a-- is:")
console.log(a--)
console.log("Now the value of a is:")
console.log(a)


// Question 2

var a = 2, b = 1
var result = --a - --b + ++b + b--;

--a;
console.log("Value of a = " + a)
console.log("Value of b = "+ b)
--a - --b;
console.log("Value of a = " + a)
console.log("Value of b = "+ b)
--a - --b + ++b;
console.log("Value of a = " + a)
console.log("Value of b = "+ b)
--a - --b + ++b + b--;
console.log("Value of a = " + a)
console.log("Value of b = "+ b)

document.write(result)

// question No: 03
var userName = prompt ("Please entre your Name");
console.log(userName);
alert ("Welcome to our Website")

// question No: 04
var usernum =prompt ("Entre Number", 5)
 for (let usernum = 0;
    usernum < 10;
    usernum * 2 ) {
        console.log (usernum)
    }

// question No: 05
var sub1 = prompt ("please insert the first Subject")
console.log (sub1)
var sub2 = prompt ("please insert the second Subject")
console.log (sub2)
var sub3 = prompt ("please insert the third Subject")
console.log (sub3)
var totalmarks = 100
var obtsub1 = prompt ("please inser the first Subject marks")
console.log (obtsub1)
var obtsub2 = prompt ("please inser the second Subject marks")
console.log (obtsub2)
var obtsub3 = prompt ("please inser the third Subject marks")
console.log (obtsub3)

var sum = obtsub1,obtsub2,obtsub3
console.log (sum)
