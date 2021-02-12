/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);
let b1 = new Book("T1", "Me", "1234567890ABC", 125.0, "Paperback");
let b2 = new Book("T2", "Me", "1234567890ABC", 225.0, "Paperback");
let b3 = new Book("T3", "Me", "1234567890ABC", 325.0, "Paperback");
let b4 = new Book("T4", "Me", "1234567890ABC", 425.0, "Paperback");
let b5 = new Book("T5", "Me", "1234567890ABC", 525.0, "Paperback");
let b6 = new Book("T6", "Me", "1234567890ABC", 625.0, "Paperback");

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);
console.log(b6);

// console.log("The everydayPack object:", everydayPack);
// console.log("The pocketNum value:", everydayPack.pocketNum);
// console.log("Days since aquired:", everydayPack.backpackAge());
