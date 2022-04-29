// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// let props = ['firstName', 'lastName', 'number', 'likes'];

// function lookUpProfile(name, prop) {
//   if (prop == 'firstName') {
//     if (contacts.prop == name) {
//         console.log("This contact exists")
//       } else {
//         console.log("No such contact")
//       }
//   } else if (prop == 'likes') {}
// }

// console.log(contacts[0].firstName)

function lookUpProfile(name, prop) {
  // Only change code below this line
  let properties = ['firstName', 'lastName', 'number', 'likes'];

  if (prop != undefined && prop == 'firstName') {
    const checkUsername = contacts => contacts['firstName'] === name;
    if (contacts.some(checkUsername) == true) {
      console.log(name)
    } else {
      console.log("No such contact")
    }
  } else if (prop == undefined) {
    console.log("No such property")
  }
//   // Only change code above this line
}

lookUpProfile("Akira", "teste");
