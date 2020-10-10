'use strict';

var counter = 0;

function greetingUser(){
var greeting = prompt('what is your name? ');
alert('Hi ' + greeting + ', lets play a simple a simple game!')
}
greetingUser()

function question1(){
var age = prompt('Am I a millennial? y/n');
if (age.toLowerCase() == 'y') {
    alert('you are right');
    counter++;
}
else {
    alert('you are wrong');
}
}
question1()

function question2(){
var sport = prompt('do I practice sport? y/n');
if (sport.toLowerCase() == 'y') {
    alert('you are right');
    counter++;
}
else {
    alert('you are wrong');
}
}
question2()

function question3(){
var math = prompt('Am I good at math? y/n');
if (math.toLowerCase() == 'n') {
    alert('you are right');
    counter++;
}
else {
    alert('you are wrong');
}
}
question3()

function question4(){
var food = prompt('Do I like spicy food? y/n');
if (food.toLowerCase() == 'n') {
    alert('you are right');
    counter++;
}
else {
    alert('you are wrong');
}
}
question4()

function question5(){
var lan = prompt('Do I speak French? y/n');
if (lan.toLowerCase() == 'n') {
    alert('you are right');
    counter++;
}
else {
    alert('you are wrong');
}
}
question5()

function question6(){
for (var i = 0; i <= 4; i++) {
    var GPA = prompt('Can you guess my overall GPA in high school? ')
    if (GPA < 84) {
        alert('You are too low')
    } else if (GPA > 84) {
        alert('You are too high')
    } else {
        alert('You are correct')
        counter++;
        break;
    }
}
}
question6()

function question7(){
var cities = ['paris', 'new york city', 'london', 'Dubai', 'istanbul', 'macau'];
var attempts = 1;
while (attempts < 7) {
    var recommended = prompt('What cities do you think I would recommend you to visit? ');
    if (recommended == cities[0] || recommended == cities[1] || recommended == cities[2] || recommended == cities[3] || recommended == cities[4] || recommended == cities[5]) {
        alert('yes I would recommend this city')
        counter++;
        break;
    }
    else {
        alert('no I would not recommend this city');
        attempts++;
    }
}
}
question7()

alert('Your score is ' + counter);  