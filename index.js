const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// To parse form data from POST requests
app.use(express.urlencoded({ extended: true }));

// Sample data to represent existing messages
let messages = [
  { text: "Hello, world!", user: "John Doe", added: new Date() },
  { text: "Hi, everyone!", user: "Jane Doe", added: new Date() },
];

// Set the view engine to EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Index route - displays messages
app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
});

// Route to render the form for adding a new message
app.get("/new", (req, res) => {
  res.render("new", { title: "New Message" });
});

// Route to handle form submission and add the new message
app.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body;
  if (messageText && messageUser) {
    messages.push({ text: messageText, user: messageUser, added: new Date() });
  }
  res.redirect("/");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
