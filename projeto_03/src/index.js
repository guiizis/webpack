const { Heading } = require("./components/heading/heading");

const heading = new Heading();
heading.create("Hello Webpack!");

console.log("Version:", VERSION);
console.log("Port:", PORT);
console.log("Env:", process.env.API_KEY);