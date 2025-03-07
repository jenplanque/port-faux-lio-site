// proposed JavaScript function code snippets to enhance website in future updates

// convert username to lowercase and remove spaces
function formatUsername(username) {
  return username.replace(/\s+/g, '').toLowerCase();
}
console.log(formatUsername('John Doe')); // johndoe

// custom greeting message
function greetClient() {
  const client = 'John Doe';
  const greeting = `Hello, ${client}!`;
  return greeting;
}
console.log(greetClient()); // Hello, John Doe!

// function to return list of project ideas from array
const projectIdeas = ['iOS game', 'Blog', 'Mobile App'];
function listProjectIdeas() {
  return projectIdeas;
}
console.log(listProjectIdeas()); // ["iOS game", "Blog", "Mobile App"]

// function to display verbiage from feedback form
let feedback = [];
function addFeedback(message) {
  feedback.push(message);
  return feedback;
}
console.log(addFeedback('Great website!')); // ["Great website!"]
