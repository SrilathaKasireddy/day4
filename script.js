//comparing two json objects
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
const newobj1= JSON.stringify(obj1);
const newobj2 = JSON.stringify(obj2);
console.log(newobj1==newobj2);
console.log(newobj1);
console.log(newobj2);

//problems:
//Declare four variables without assigning values and print them in console:
let M ;
var N ;
let O;
var P;
console.log(M);
console.log(N);
console.log(O);
console.log(P);

//How to get value of the variable myvar as output
var myvar= 1;
console.log(myvar);

//Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstname ="srilatha";
var  lastname ="kasireddy";
let Maritalstatus ="unmarried";
let Country ="India";
let Age =23

//Declare variables to store your first name, last name, marital status, country and age in a single line
var firstname ="srilatha",  lastname ="kasireddy", maritalstatus ="unmarried", country ="India" ,age =23

//Declare variables and assign string, boolean, undefined and null data types
let item ="mango";
let value1 =false;
let a1 ;
let n ={};
console.log(item,value1,a1,n)

//Convert the string to integer
var string ="23";
string = parseInt(string)
console.log(typeof(string));

var NuM ="2"
NuM =Number("2");
console.log(typeof(NuM));

//Write 6 statement which provide truthy & falsey values.

let X =2;
let Y =1;
 console.log(X>Y);
 console.log(X<Y);


 let S =1;
 let y =S;
 console.log(S<y);


 let H  =5;
 let R =6;
 let i =H+R;
 console.log(H<i);


 let day ="monday";
  console.log(day=="monday");


 let sum1 =5;
 if(sum1 ==5){
  console.log("true")
 }
else{
 console.log("false")
}


let even =3;
if(even%2==0){
 console.log("true")
}
else{console.log("false")}


//Square of a number

let NUM =10;
let square =NUM*NUM;
console.log(square);

//Swapping 2 numbers=exchange of values
let [d,e]=[1,2];
[d,e]=[e,d]
console.log(d);
console.log(e);

//Addition of 3 numbers
let A =1;
let C =2;
let c=3;
console.log(a+C+c);

//Celsius to Fahrenheit conversion
var Celsius= 180;
var  Fahrenheit = Celsius*1.8+32;
console.log(Fahrenheit);
//Meter to miles
const Meter=10;
const miles =Meter*0.00062137;
console.log(miles);
//Pounds to kg
const Pounds=10;
const kg =Pounds*0.453592;
console.log(kg)
//Calculate Batting Average
const num1 =prompt("no of runs") ;
const num2 =prompt("total number of innings in which the batsman was out");
console.log(num1/num2);
//Calculate five test scores and print their average
const array=[60,70,80,90,100];
let sum =0;
for(i=0;i<array.length;i++){
    sum +=array[i]/5
};
console.log(sum);
//Power of any number x ^ y.
let x = Math.pow(3,4);
console.log(x);
//Calculate Simple Interest
const principle =50000;
const rateofInterest = 10;
const time = 2;
const amount = principle*time *rateofInterest/100;
console.log(amount);
//Calculate area of an equilateral triangle
const value = 25;
const areaa = 1.732050807568877/4 *value*value;
console.log(areaa.toFixed(2));
//Area Of Isosceles Triangle
const B=5;
const h =6;
const areaof = B*h/2;
console.log(areaof);
//Volume Of Sphere
const r = 3;
const Spherevolume = 1.333333333333333*3.142857142857143*r*r*r;
console.log(Spherevolume.toFixed(2));


//Volume Of Prism
const Base=25;
const height =10;
const volume =Base*height;
console.log(volume);

//Find area of a triangle.
const breadth=5;
const Height =6;
const areaofatriangle = breadth*height/2;
console.log(areaofatriangle);

//Give the Actual cost and Sold cost, Calculate Discount Of Product
const actualcost =800;
const soldcost=700;
const discount =actualcost-soldcost;
console.log(discount);
//Given their radius of a circle and find its diameter, circumference and area.
const radius = 2;
const diameter=2*radius;
const circumference =2*3.142857142857143*radius;
const area = 3.142857142857143*radius*radius;
console.log(diameter);
console.log(circumference.toFixed(2));
console.log(area.toFixed(2));
//Given two numbers and perform all arithmetic operations.
var a = 8;
var b =2;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);
console.log(++a+b);
console.log(++a-b);
//Display the asterisk pattern as shown below(No loop needed):
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
//Calculate electricity bill?
//a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
const consumed =100;
const unitrate =10 ;
console.log(consumed*unitrate);
//Program To Calculate CGPA
const totalsubjects=5;
const totalpoints=40;
const cgpa =totalpoints/totalsubjects;
console.log(cgpa);

/*Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######*/

var txt = "";
for(i=1;i<=7;i++){
  txt = "";
  for(k=0;k<i;k++){
    txt += "#";
  }
  console.log(txt);
}

//write a code to count the elements in the array . Don’t use length property
var myarray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let nUm=0
for(i =0;i<myarray.length;i++) {
  nUm = nUm+1;
}
console.log(nUm);

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods=["dosa","vada","idli","Dosa","Vada","iDli","dOsa","vAda","Idli","dosA","vaDa","idLi","dosA","VAda","idlI","DOSa","vaDA","idLI","DOSA","VADA"];
console.log(foods[5]);
console.log(foods.slice(5,6));
console.log(foods.length);

//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
friends.splice(0,1,"Munnabai")
console.log(friends)

//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

for(let i=0; i<friends.length; i++){
  if(friends[i]==="CaptianAmerica") break;
  console.log(friends[i],i)
  

}
//Find the person is ur friend or not.
for(let i=0; i<friends.length; i++){
if(friends[i]==="Mari") {
  console.log("friend")
  break;
}
else{
  console.log("not")
}

}

//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
var friends2 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];
var friend=friends1.concat(friends2);
console.log(friend.sort());

//Get the first item, the middle item and the last item of the array

console.log(friend.at(0));
console.log(friend.at(-1));
console.log(Math.floor(friend.length)/2)
console.log(friend[6])

// Add your name to the end of the friends array, and add another name to beginning.

var begn = friend.splice(0,0,"Reddy");
console.log(friend);
var endn =friend.splice(11,11,"Srilatha");
console.log(friend);

//Add Mr or Ms to the names in the friends array.


for(let i=0;i<=10;i++){
  friend[i]="Mr "+friend[i];
  console.log(friend[i]);
  console.log("Ms " +friend[11]);

}



// Find the friends names who has letter ‘a’ and return the list.
for(i=0;i<friend.length;i++){
  if(friend[i].includes("a")){
    console.log(friend[i],"yes")
  }
  else{console.log(friend[i],"no")}
}
// Find the avg length of all the friends names. Get the individual length of the names and do the avg.

for(let i=0; i<friend.length; i++){
  var len=friend[i].length/12
  console.log(len.toFixed(2))
}

//Find the names and return the list starting with letter M.
for(i=0;i<friend.length;i++){

  if(friend[i].charAt(0)==="M"){
      console.log(friend[i])
  }
  }


// Find the name with max characters and return the name.
// Find the name with min characters and return the name.

for(let i=0; i<friend.length;i++){
  //finding the max & min
var maxmin =friend[i].length
console.log(maxmin,friend[i]);
}
console.log(friend[2]);
console.log(friend[3]);





































//Add a new key value pair to myobject
 /*var myobject = {1:"one",11:1,name:"arun"}

 myobject.ten = "ten"

 console.log(myobject)

//Write out an object literal to represent the data below.
//Guvi, Geek, 6, IIT-M RP,Chennai.

console.log(`address:${"Guvi, Geek, 6, IIT-M RP,Chennai."}`)

//How would you represent the following data using a combination of object literals and arrays?

let address=[{GuviGeek: "6, IIT-M RP,Chennai"},
{AmazonInc:"31 SP Infocity, Chennai"},
{GoogleAlphabet: "34 Amphitheater Parkway, MountainView"},
{TeslaInc: "32, 333 Santana Row,San Jose.76"}]
console.log(`address: ${address[0].GuviGeek}`);*/

 





