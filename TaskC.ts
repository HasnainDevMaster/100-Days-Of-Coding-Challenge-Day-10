// 100 Days Of Coding Challenge!

/** Question 30:
Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log in to a website. 
Loop through the array, and print a greeting to each user:

* If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
* Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/

//------------------------------------------------------------------------------------------------------------------

//  An array of usernames, including the name ‘admin’:
let usernames: string[] = ["Admin", "Sam", "Zack", "John", "Ellie"];

// Loop through the array and print greetings for each user
for (const username of usernames) {
  if (username === "Admin") {
    console.log("Hello Admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
