var animals = [];
animals.push ("Dog");
1
animals.push ("Cat");
2
animals;
(2) ['Dog', 'Cat']
animals.length;
2
animals.push ("Lama");
animals;
(3) ['Dog', 'Cat', 'Lama']
animals.unshift ("Monkey");
animals;
(4) ['Monkey', 'Dog', 'Cat', 'Lama']
animals [1];
'Dog'
var lastAnimal = animals.pop ();
lastAnimal;
'Lama'
animals;
(3) ['Monkey', 'Dog', 'Cat']
animals.length;
3
animals.push ("White bear");
animals;
var lastAnimal = animals.shift;
lastAnimal;
var firstAnimal = animals.shift;
lastAnimal;
var firstAnimal = animals.shift;
firstAnimal;
animals;
(4) ['Monkey', 'Dog', 'Cat', 'White bear']
var firstAnimal = animals.shift ();
firstAnimal;
'Monkey'
animals;
(3) ['Dog', 'Cat', 'White bear']
var colors = ["червоний", "зелений", "синій"];
colors.indexOf ("синій");
2
colors.indexOf ("червоний");
0
colors [1];
"зелений"
colors.indexOf ("фіолетовий");
-1
var insects = ["бджола", "мураха", "бджола", "мураха", "бджола"];
insects.indexOf ("бджола");
0
var boringAnimals = ["Мартишка", "Кіт", "Риба", "Ящірка"];
boringAnimals.join ();
"Мартишка,Кіт,Риба,Ящірка"
var boringAnimals = ["Мартишка", "Кіт", "Риба", "Ящірка"];
boringAnimals.join (" - ");
"Мартишка - Кіт - Риба - Ящірка"
boringAnimals.join (" * ");
"Мартишка * Кіт * Риба * Ящірка"
boringAnimals.join (" та ");
"Мартишка та Кіт та Риба та Ящірка"
var myNames = ["Ніколас", "Ендрю", "Максвелл", "Морган"];
myNames.join (" ");
"Ніколас Ендрю Максвелл Морган"
myNames [0] + " " + myNames [1] + " " + myNames [2] + " " + myNames [3];
"Ніколас Ендрю Максвелл Морган"
var ages = [11, 14, 79];
ages.join (" ");
"11 14 79"
var landmarks = [];
landmarks.push ("Мій будинок");
landmarks.push ("Доріжка к дому");
landmarks.push ("Мигаючий ліхтар");
landmarks.push ("Протікаючий гідрант");
Array(8) [ "Мій будинок", "Доріжка к дому", "Мигаючий ліхтар", "Протікаючий гідрант", "Пожежна станція", "Приют для котів", "Моя минула школа", "Дім подруги" ]
 
console.log(landmarks)


landmarks.pop (7);
landmarks;
Array(7) [ "Мій будинок", "Доріжка к дому", "Мигаючий ліхтар", "Протікаючий гідрант", "Пожежна станція", "Приют для котів", "Моя минула школа" ]
 
landmarks.pop (6);
"Моя минула школа"
landmarks;
Array(6) [ "Мій будинок", "Доріжка к дому", "Мигаючий ліхтар", "Протікаючий гідрант", "Пожежна станція", "Приют для котів" ]
 
landmarks.pop (5);
landmarks;
Array(5) [ "Мій будинок", "Доріжка к дому", "Мигаючий ліхтар", "Протікаючий гідрант", "Пожежна станція" ]
 
landmarks.pop (4);
landmarks;
Array(4) [ "Мій будинок", "Доріжка к дому", "Мигаючий ліхтар", "Протікаючий гідрант" ]
 
landmarks.pop (3);
landmarks;
Array(3) [ "Мій будинок", "Доріжка к дому", "Мигаючий ліхтар" ]
 
landmarks.pop (2);
landmarks;
Array[ "Мій будинок", "Доріжка к дому" ]
 
landmarks.pop (1);
landmarks;
Array[ "Мій будинок" ]
 
console.log(Math.random());

Math.random ();
0.9362368296842922
Math.random ();
0.07723761769465032
Math.random () * 10;
4.977094283226993
Math.floor (4.977094283226993);
4
Math.floor (Math.random () * 4);
1

console.log("Done");
