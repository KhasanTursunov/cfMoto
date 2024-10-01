// 1 - masala;
// let email = /[a-zA-Z0-9._%+-]+@gmail.com/g;
// let text = "hello text to khasan@gmail.com or tursunov@gmail.com";
// let foundEmails = new Array(text.match(email));
// if (foundEmails) {
//   foundEmails.forEach((email) => {
//     console.log(email);
//   });
// }


// 2 - masala;
// let regex = /(\+998-\d{2}-\d{3}-\d{2}-\d{2}|998\d{2}-\d{3}-\d{2}-\d{2})/g;
// text =
//   "my number is +998-99-123-34-65 or 99890-066-99-31, so call if u r a beautiful girl!";
// hello = text.match(regex);
// if (hello) {
//   for (let mommy of hello) {
//     console.log(mommy);
//   }
// }


// 3 - masala;
// let regex = /\d{2}:\d{2}:\d{2}/g;
// text =
//   "my number is +998-99-123-34-65 or 99890-066-99-31, so call if u r a beautiful girl! Any time between 20:00:00 and 06:00:00!";
// hello = text.match(regex);
// if (hello) {
//   for (let mommy of hello) {
//     console.log(mommy);
//   }
// }


// 4 - masala;
// let regex = /https?:\/\/.[^\s]*/g;
// text =
//   "my number is +998-99-123-34-65 or 99890-066-99-31, so call if u r a beautiful girl! Any time between 20:00:00 and 06:00:00! or text to https://khasantursunov.com jaja";
// hello = text.match(regex);
// if (hello) {
//   for (let url of hello) {
//     console.log(url);
//   }
// }


// 5 - masala;
// let regex = /(?:\d{1,3}\.){3}\d{1,3}/g;
// text =
//   "my number is +998-99-123-34-65 or 99890-066-99-31, so call if u r a beautiful girl! Any time between 20:00:00 and 06:00:00! or text to https://khasantursunov.com jaja. My wifi IP address is :192.33.2.34";
// hello = text.match(regex);
// if (hello) {
//   for (let url of hello) {
//     console.log(url);
//   }
// }


// 6 - masala;
// let regex = /[A-Z]{2}\d{7}/g;
// let text = "hello my passport number is AB5505403 or AD7808829";

// hello = text.match(regex);
// console.log(hello);



// 7 - masala;
// let text = "hello my    passport   number is AB5505403 or    AD7808829";

// text = text.replace(/\s+/g, " ");
// console.log(text);



// 8 - masala;
// let username = "khasantursunov21";
// let regex = /[^a-zA-z0-9]/g;

// if (regex.test(username)) {
//   console.log("Incorrect");
// } else {
//   console.log("Correct");
// }


// 9 - masala;
// let username = "kh3asan67tursunov21";
// let regex = /[0-9]{1,}/g;
// let numbers = username.match(regex);
// console.log(numbers);



// 10 - masala;
// let username = "kh3asan1967tursunov2024";
// let regex = /[0-9]{4}/g;
// let numbers = username.match(regex);
// console.log(numbers);



// 11 - masala;
// let username = "kh3asAN1967tursunov2024";
// let regex = /[a-zA-Z]/g;
// let numbers = username.match(regex);
// console.log(numbers);



// 12 - masala;
// let username = "kh3asAN1967tursunov 12/02/2024";
// let regex = /\d{2}\/\d{2}\/\d{4}/g;
// let numbers = username.match(regex);
// console.log(numbers);


// 13 - masala;
// let username = "khasANtursunov";
// let duplicates = new Set();
// for (let letter of username) {
//   if (username.split(letter).length > 2) {
//     duplicates.add(letter);
//   }
// }
// console.log(duplicates);



// 14 - masala;
// let username = "khasANtursunov @ it is kuchukcha";
// username = username.replace(/[^a-zA-z0-9]/g, "");
// console.log(username);



// 15 - masala;
// let username = "123456";

// let regex = /[^\d{6}]/g;
// if (regex.test(username) || username.length != 6) {
//   console.log("Incorrect address");
// } else {
//   console.log("Correct address");
// }

