// var n_first = prompt("Enter your First Name");
// var n_last = prompt("Enter your Last Name");
// var result = n_first + " " + n_last;
// alert("welcome to my website " + result);


// var mobile = prompt("Enter your favorite Mobile Phone details");
// var len = mobile.length;
// document.write("<h1>" + mobile + "</h1>" + "<br>");
// document.write("<h1>" + "length of string "  + len + "</h1>");


// var str = "Pakistani";
// var result = str.indexOf("n");
// document.write("String " + str + "<br>");
// document.write("Index of 'n' : " + result);


// var last = "Hello World ";
// var num = last.lastIndexOf("l");
// document.write("String :" + last + "<br>")
// document.write("Last index of 'l' : " + num);


// var char = "Pakistani";
// var result = char.charAt(3);
// document.write("String " + char + "<br>");
// document.write("Character at Index 3 : " + result);


// var a = prompt("Enter your First Name")
// var b = prompt("Enter your Last Name");
// var c = a.concat(b);
// document.write("Welcome to my website " + c);


// var city = "Hyderabad";
// var result = city.replace("Hyder","Islam");
// document.write("City " + city + "<br>");
// document.write("After Replacement : " + result);


// var message = "Ali and Sami are best friends. They play cricket and football together";
// var result = message.replace(/and/g, "&");
// document.write(result);


// var a = "472";
// document.write("Value :" + a + "<br>" + "Type " + typeof(a) + "<br>")

// var b = a;
// var c = Number(b);
// document.write("Value : " + c + "<br>" + "Type " + typeof(c))


// var upper = "peanuts";
// var result = upper.toUpperCase();
// document.write("User input: " + upper + "<br>" + "Upper Case : " + result);


// var input = prompt();
// var num = input.slice(0,1);
// var sum = input.slice(1)
// document.write("Title Case : " + num.toUpperCase() + sum.toLowerCase());


// var num = 35.36;
// var result = num.toString()
// document.write("Number : " + num + "<br>" + "Result :" + result);

// var user = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var bake = ["cake", "apple pie", "cookie", "chips", "patties"];
// var inde = bake.indexOf(user);
// document.write(user + " is available at index " + inde + " in our bakery");


// var university = "University of Karachi";
// var b = university.split(" ");
// document.write(b[0] + "<br>" + b[1] + "<br>" + b[2])


// var char = "Pakistan";
// var result = char.charAt(7)
// document.write("User input : " + char + "<br>" + "Last character of input :" + result);


// .......................

// var number = 3.45;
// document.write(number + "<br>");
// document.write(Math.round(number) + "<br>");
// document.write(Math.ceil(number) + "<br>");
// document.write(Math.floor(number));


// var min = +prompt("Enter negative number");
// document.write("number : " + min + "<br>")
// document.write("Round off value :" + Math.round(min) + "<br>")
// document.write("Floor value :" + Math.floor(min) + "<br>");
// document.write("Ceil value :" + Math.ceil(min))


// var ran = Math.random();
// document.write("random dice value : " + Math.ceil(ran * 4) + "<br>");
// document.write("random dice value : " + Math.ceil(ran * 6));


// var a = "Heads";
// var b = "Tails";
// var num = Math.random();
// var result = Math.ceil(num * 2);

// if(result == 2){
//     document.write(result + "<br>")
//     document.write("random coin value :" + a)
// }
// else{
//     document.write(result + "<br>")
//     document.write("random coin value :" + b)
// }


// var sum = Math.random();
// document.write("random number between 1 and 100: " + Math.ceil(sum * 100))


// var kg = prompt("Enter your weight in kilograms");
// var a = kg.toLowerCase();
// document.write("The weight of user is " + a)



// var user = prompt("Enter a number between 1 and 10")
// var ran = Math.random();
// var a = Math.ceil(ran * 10);

// if(user == a ){

//     alert("Congratulation Dear,")

// }

// else{
//     alert("Try Again please!")
// }



// var date = new Date();

// document.write(date);


// var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var a = date.getMonth();
// document.write("Current month :" + arr[a])


// var week = ["sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"];
// var a = date.getDay();
// document.write("Today is : " + week[a]);


// var sun = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];
// var result = date.getDay();

// if(sun[result] == "Saturday" || sun[result] == "Sunday"){

//     document.write("It Fun day");
// }

// else{

//     document.write("its working day")
// }



// var arry = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// var date = new Date();
// var a = date.getDate()
// if(a < arry.length){
//     document.write("First fifteen days of the month");
// }
// else{

//     document.write("Last days of the month");
// }


// var date = new Date();
// var a = date.getTime();
// var b = date.getTime() / (1000 * 60 * 60);
// document.write(date + "<br>" + a + "<br>" + b)


// var time = new Date();
// var a = time.getHours();
// var b = time.getMinutes();
// var c = time.getSeconds();
// if(a <= 12){

//     alert(a + ":" + b + ":" + c + " Its AM")
// }
// else{
    
//     alert(a + ":" + b + ":" + c + " Its PM")
// }


// var data = new Date();
// data.setFullYear(2020);
// data.setMonth(11);
// data.setDate(31);
// var laterDate = data;
// document.write("Later Date : " +  laterDate)



// var num = new Date('june 18, 2015');
// var date = new Date();
// var a = date.getTime();
// var b = num.getTime()
// var c = a -b ;
// var d = c / (1000 * 60 * 60 * 24)
// alert(Math.ceil(d) + " days have passed since 1st Ramadan, 2015")



// var sum = new Date();
// sum.setMonth(11);
// sum.setDate(5);
// sum.setFullYear(2015);
// sum.getTime();

// var same = new Date();
// same.getTime();

// var c = same.getTime() - sum.getTime();
// var d = c / (1000 * 60);
// document.write(d + " seconds had passed since beginning of 2015")


// var date = new Date();
// document.write("current date: " + date + "<br>");



// var date = new Date();
// date.setMonth(6);
// date.setDate(13);
// date.setFullYear(2021);
// date.setHours(22);
// date.setMinutes(30);
// date.setSeconds(40);
// document.write("Current Date: " + date)


// var set = new Date();
// set.setMonth(6);
// set.setDate(13);
// set.setFullYear(2021)
// set.setHours(21);
// set.setMinutes(30);
// set.setSeconds(40);
// document.write("1 hour ago, it was " + set)



// var date = new Date();
// date.setMonth(6);
// date.setDate(13);
// date.setFullYear(2021);
// date.setHours(23);
// date.setMinutes(9);
// date.setSeconds(37);
// document.write( "Current Date :" + date + "<br>");


// var diff = new Date();
// diff.setMonth(6);
// diff.setDate(13);
// diff.setFullYear(1921);
// diff.setHours(23);
// diff.setMinutes(9);
// diff.setSeconds(37);
// document.write("100 years back, it was " + diff);


// document.write("<h1> K-Electric Bill </h1>")
// var customer = prompt("Enter your Name");
// var month = prompt("Enter your Month")
// var units = +prompt("Enter your Total Units");
// var perUnits = +prompt("Enter your Per Units Rate");
// var late = 350;
// var result1 = perUnits * units 
// var result2 = result1 + late
// document.write("Customer Name : " + customer + "<br>");
// document.write("Current Month : " + month + "<br>");
// document.write("Number of units : " + units + "<br>");
// document.write("Charges per unit :" + perUnits + "<br>");
// document.write("Net Amount Payable (within Due Date): " + result1 + "<br>");
// document.write("Late Payment Surcharge : " + late + "<br>");
// document.write("Gross Amount Payable (after Due Date) : " + result2);



// function date(){

//     var a = new Date()
//     document.write(a);

// }
// date();


// function num(){

//     var first = "Shujat";
//     var last = "Khan";
//     document.write("Welcome to my website Mr. " + first + " " + last);

// }
// num();



// function sum(){

//     var a = +prompt("Enter a number");
//     var b = +prompt("Enter a number");
//     var c = a + b;
//     document.write(c);

// }
// sum();


// function compute(num1, num2){

//     var a = num1;
//     var b = num2;
//     document.write(a+b + "<br>");

// }
// compute(100,200);


// function num(){
 
// var a = +prompt("Enter your number for squares");
// var b = Math.sqrt(a);
// document.write(b);
    
// }

// num()


// function sum(){

//     var num = prompt("Enter a Number");
//     var fact = 1;
//     for(var i=num; i>=1; i--){

//         fact = fact * i

//     }

//     document.write(fact);
// }
// sum()




// function number(){

//     var a = prompt("Enter a number");
//     var b = prompt("Enter a number");
//     for(var i=a; i<=b; i++){

//         document.write(i + "<br>")

//     }    
// }

// number();


// function rect(width, height){

//     var sum = width * height;
//     document.write(sum)
// }
// var a = 10;
// rect(5,a)


// function str(a){

// var b = a.slice(0,1).toUpperCase() + a.slice(1,3).toLowerCase();
// var c = a.slice(4,5).toUpperCase() + a.slice(5,9).toLowerCase();
// var d = a.slice(10,11).toUpperCase() + a.slice(11,15).toLowerCase();
// var e = a.slice(16,17).toUpperCase() + a.slice(17);
// document.write(b + " " + c + " " + d + " " + e);

// }
// str("the quick brown fox",)



// function result(a,b,c){

//     document.write("Web Development Tutorial" + "<br>");
//     var sum1 = a.length;
//     var sum2 = b.length;
//     var sum3 = c.length;
//     if(sum1 > sum2 && sum3){

//         document.write(a)
//     }
//     else if(sum2 > sum1 && sum3){

//         document.write(b)
//     }
//     else if(sum3 > sum1 && sum2){

//         document.write(c)
//     }
//     else{
//         document.write("none");
//     }

// }
// result("Web", "Development", "Tutorial")





















 














