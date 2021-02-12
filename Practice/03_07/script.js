/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const car = {
  Manufacturer: "Hyundai",
  Model: "Sonata",
  year: 2014,
  color: "Black",
  vin: "123456ABB5GTH778",
  tire: {
    Leftfront: "20R15",
    rightfront: "20R15",
    Leftrear: "21R17",
    rightrear: "21R17",
  },
};
