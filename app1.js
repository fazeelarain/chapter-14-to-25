// chapter 13

// Task1

// var letter = prompt("Enter your Letter");

//  if(letter >= 65 && letter <= 90){
//     alert("This is capital Letter")
// }else if(letter >= 97 && letter <=122 ){
//     alert("This is Small letter")
// }else{
//     alert("please Enter your write code")
// }


// Task 2

// var num1 = +prompt("Input the First integer");
// var num2 = +prompt("Input the second integer");
                                                 
// if(num1 > num2) 
//   { 
//   document.write("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ " larger");
//   }   
// else
//   if(num2 > num1) 
//   {
//   document.write("The larger of "+ num1+" and "+ num2+ " is "+ num2+ " larger");
//   }                  
// else
//   {
//    document.write("The values "+ num1+ " and "+num2+ " are equal.");
//   }



// Task 3


// var val = +prompt("Enter value");

// if(val != 0){
//     alert("This is positive Number")
// }else{
//     alert("This is Negative Number")
// }



// Task 4

//  Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var vowel = ["a" , "e" ,"i","o" ,"u"]
// var input = prompt("Enter your word")
// for(var i = 0; i < vowel.length; i++){
    
//     if(vowel[i] === input){
//         alert("it is a vowel")
//         break
//     }else{
//         alert("It is a consonent")
//         break
//     }
// }


// ================Chapter 14 - 16=================


// Task 1

// var studentName = ["" ,"" ,"" ,""];

// Task 2

// var studentName1 = [{},{},{},{}]

// Task 3

// var cityNames = ["karachi" ,"lahore" ,"islamabad"];

// Task 4

// var num = [1,2,3,4,5];

// Task 5

// var bool = [true , false];

// Task 6

// var mixedArr = ["karchi" ,45, true];

// Task 7

// var eduQualification = ["SSC" ,"HSC" ,"BCS","BS","BCOM","MS","M.Phil","PhD"];

// document.write("<h1>Qualfications:</h1>")

// for(var i = 1; i < eduQualification.length; i++){
//     document.write(i +") " +  eduQualification[i] + "<br>")
// }


// Task 8


// var studentName = ["noman" ,"fazeel" ,"sharjeel"];
// var score = [250,320,270];

// document.write("score " + "of " + studentName[0] + " is " + score[0] +" percentage : " + score[0]/500*100 +"%" +"<br>") 
// document.write("score " + "of " + studentName[1] + " is " + score[1] + " percentage : " + score[1]/500*100 +"%" +"<br>") 
// document.write("score " + "of " + studentName[2] + " is " + score[2] + " percentage : " + score[2]/500*100 +"%" +"<br>") 
 

// Task 9

// var colorsName =["white" ,"black" ,"green" ,"blue" ,"yellow"];
// var favColor = prompt("What he /she wants to color");
// for(var i = 1; i < colorsName.length; i++){
//     document.write(i + ") " + colorsName[i] + "<br>")
// }

// colorsName.push(favColor)
// colorsName.unshift(favColor);
// colorsName.pop()
// document.write(colorsName + "<br>")
// var arr = colorsName.splice(2,0 ,"orange");
// document.write( "update Array : " +colorsName + "<br>")
// document.write(arr)



// Task 10


// var scroreOfStd = [320 ,230 ,480 ,120];
// document.write("Scores of Students :" +  scroreOfStd + "<br> <br>")
// var newarr = scroreOfStd.sort();
// document.write("Ordered Scores of Students :" +  newarr + "<br> <br>")


// Task 11

// var cities = ['kaarchi' ,'lahore' ,'Islamabad','Quetta' ,'Peshawar' ,'Hyderbad'];
// document.write("Cities list : " + cities + "<br>");
// var selectCities = cities.slice(2,4)
// document.write("Selected cities list : " + selectCities + "<br>");


// Task 12


// var arr = ['This' ,'is' ,'my' ,'cat'];
// document.write("Array : " + arr + "<br> <br>")
// var newarr = arr.join(" ");
// document.write("String : " + newarr)


// Task 13

// var deveices = ['keyboard' ,'mouse' ,'printer' ,'mointer']

// for(var i = 0; i < deveices.length; i++){
 
//     document.write("In:" + "<br>" + deveices[i] +"<br><br>")
//     document.write("out:" + "<br>" + deveices[i] +"<br><br>")
// }


// Task 14


// var deveices = ['keyboard' ,'mouse' ,'printer' ,'mointer']
// deveices = deveices.reverse();
// for(var i = 0; i < deveices.length; i++){
 
//     document.write("In:" + "<br>" + deveices[i] +"<br><br>")
//     document.write("out:" + "<br>" + deveices[i] +"<br><br>")
// }


// Task 15

// var mobilePhones = ["Apple" ,"Samsung" ,"Motorola" ,"Nokia","Sony" ,"Haier"];

// document.write(" <select>")
// document.write("<option>")
// document.write(mobilePhones[0])
// document.write("</option>")
// document.write("<option>")
// document.write(mobilePhones[1])
// document.write("</option>")
// document.write("<option>")
// document.write(mobilePhones[2])
// document.write("</option>")
// document.write("<option>")
// document.write(mobilePhones[3])
// document.write("</option>")
// document.write("<option>")
// document.write(mobilePhones[4])
// document.write("</option>")
// document.write("<option>")
// document.write(mobilePhones[5])
// document.write("</option>")

// document.write(" </select>")



// ================Chapter 17 - 20=================

 
// Task 1

// var items = [ []];

// Task 2

// var items =[[1 ,2 , 3] , [0,1 ,2],[1, 0 , 1]];

// for(var i = 0; i < items.length; i ++){
//     document.write( i + " " + items[i].join(" ") + "<br>")
// }



// Task 3

// for(var i = 1; i <= 10 ; i++){
//     document.write(i + '<br>')
// }


// Task 4

// var tableNo = prompt("Enter Table No");
// var tablelenght = prompt("Enter Table length")

// for( i = 1; i <= tablelenght; i++){
//     document.write(tableNo + "x" + i + "=" + tableNo*i + "<br>")
// }


// Task 5

// var fruits = ["apple" ,"banana" ,"mango" ,"orange" ,"stawbery"];

// for(i = 0 ; i < fruits.length; i++){

//     document.write(fruits[i] + "<br>");
// }
// document.write("<br>")
// for(i = 0 ; i < fruits.length; i++){

//     document.write("Element at index " ,i + " " + "is " + fruits[i] + "<br>" );
// }


// Task 6


// document.write("<h3>Counting :<h3>");

// for(var i = 1; i <= 10; i++){
//     document.write(i);
// }

// document.write("<h3>Reverse Counting :<h3>");

// for(var i = 10; i >= 1; i--){
//     document.write(i);
// }

// document.write("<h3>Even Number :<h3>");

// for(var i = 0; i <= 20; i = i+2 ){
//     document.write(i)
// }

// document.write("<h3>Odd Number :<h3>");

// for(var i = 1; i <= 19; i = i+2 ){
//     document.write(i)
// }

// document.write("<h3>Series :<h3>");

// for(var i = 2; i <= 20; i = i+2 ){
//     document.write(i+"k")
// }


//  Task 7


// var food = ["cake" ,"apple" ,"pie" ,"cookie" ,"chips" ,"patties"];

// var searchFood = prompt("Welcome to ABC Bakery: What do you want to order sir/ma'am?" );

// for(var i = 0; i < food.length; i++){
//     if(searchFood == food[i]){
     
//         alert(searchFood + " is available at index " + i  + " in our bakery")
        
        
//     }
    
    
// } 




// Task 8


// var numberofarr = [24,53,78,91,12];

// document.write("The largest number is " +Math.max(...numberofarr))

// Task 9

// var numberofarr = [24,53,78,91,12];

// document.write("The samllest number is " +Math.min(...numberofarr))


// Task 10


// for(var i = 5; i < 100; i = i+5){
//    document.write(i + ",")
// }




// ================Chapter 21 - 25=================



// Task 1


// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your last Name");
// var greet = firstName + " " + lastName;

// alert(greet)


// Task 2


// var favMoible = prompt("please in Enter your favorite mobile phone ");

// document.write("Length of string : " + favMoible.length)

// Task 3

// var string = "pakistani";

// document.write("Index of 'n' " +  + string.indexOf('n') );


// Task 4

// var string = "Hello World";

// document.write("Last Index of 'l' : " +  + string.lastIndexOf("l") );


// Task 5

// var string = "pakistani";

// document.write("Character at Index 3 : " + string.charAt(3));


// Task 6

// var firstName = "Fazeel";
// var lastName = "Ahmed";
// var greet = firstName.concat( " " +lastName);
// document.write(greet);


// Task 7

// var city = "Hyderabad";
// var cityReplace = city.replace("Hyderabad" ,"Islamabad")

// document.write(city + "<br>" )
// document.write("After replacement : " + cityReplace )



// Task 8

// var message = "Ali and sami are best friends. The play cricket and football togehter";
// document.write(message + "<br><br>")

// var replaceMessage = message.replace(/and/g,"&")
// document.write(replaceMessage);


// Task 9


// var value = "472";
// document.write(value + "<br>")
// document.write( "Type : " + typeof value + "<br><br>")

// document.write(value + "<br>")
// document.write("Type of : " + typeof Number(value))


// Task 10


// var userInput = prompt("Enter dry fruit");
// document.write(userInput.toUpperCase());


// Task 11


// var userInput = prompt("Enter proming language");
// document.write(userInput.toUpperCase());


// Task 12

// var num = 35.36;
// var convertString = num.toString();
// var newstr1 =convertString.slice(0,2)
// var newstr2 =convertString.slice(3,5)
// var newstr3 = newstr1 + newstr2
// document.write("Number :" + num + "<br><br>")
// document.write("Result : " +newstr3)





// Task 16

// var universty = "universty of karachi";

// for(var i = 0; i < universty.length; i++){
//    document.write(universty[i] + "<br>")
// }





// Task 17

// var userInput = prompt("Enter your country name");

// document.write("Last character of input : " + userInput.charAt(userInput.length-1));




// Task 18

// var text = "The quick brown fox jumps over the  lazy dog"

// var newText = text.match(/the/g).length;

// document.write(newText);

