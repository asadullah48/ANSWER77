// Q 77
// This function greets a user by name, or greets an anonymous user if no name is provided
function greetUser(name: string = "anonymous") {
    // Says hello to the given name or to an anonymous user
    console.log(`Assalaam O alikum, ${name}!`);
  }
  
  // Trying the function with a name and without
  greetUser("Asadullah"); // Outputs: Hello, Asadullah!
  greetUser(); // Outputs: Hello, anonymous!
  // We see how our function can say hello to someone by name, or just say hello if we don't know the name.