'use strict';

var counter = 0;

var greeting = prompt('what is your name? ');
console.log(greeting)
alert('Hi ' + greeting + ', lets play a simple a simple game!')

var age = prompt('Am I a millennial? y/n');
console.log(age)
if (age.toLowerCase() == 'y') {
    alert('you are right');
    counter++;
}
else {
    alert('you are wrong');
}

var sport = prompt('do I practice sport? y/n');
console.log(sport)
if (sport.toLowerCase() == 'y') {
    alert('you are right');
    counter++;
}
else {
    alert('you are wrong');
}

var math = prompt('Am I good at math? y/n');
console.log(math)
if (math.toLowerCase() == 'n') {
    alert('you are right');
    counter++;
}
else {
    alert('you are wrong');
}

var food = prompt('Do I like spicy food? y/n');
console.log(food)
if (food.toLowerCase() == 'n') {
    alert('you are right');
    counter++;
}
else {
    alert('you are wrong');
}


var lan = prompt('Do I speak French? y/n');
console.log(lan)
if (lan.toLowerCase() == 'n') {
    alert('you are right');
    counter++;
}
else {
    alert('you are wrong');
}

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

alert('Your score is' + counter);  