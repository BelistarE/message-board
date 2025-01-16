const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// To parse form data from POST requests
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Sample data
let messages = [
  {
    text: "Hello, world!",
    user: "Console",
    added: new Date(),
    color: "#34914a",
  },
];

// Middleware to handle theme selection
app.use((req, res, next) => {
  // Check if the request matches the '/theme/:theme' route
  const themeMatch = req.path.match(/^\/theme\/([^/]+)/);
  res.locals.theme = themeMatch ? themeMatch[1] : "chill"; // Extract theme if it exists, otherwise use 'chill'
  next();
});

// Index route - displays messages
app.get(["/", "/theme/:theme"], (req, res) => {
  res.render("index", { title: "Beli's Message Board", messages });
});

// Route to render the form for adding a new message with theme
app.get("/new/:theme", (req, res) => {
  const { theme } = req.params;
  res.render("new", { title: "New Message", theme });
});

app.post("/new/:theme", (req, res) => {
  const { messageText, messageUser, color } = req.body;
  const { theme } = req.params;
  if (messageText && messageUser && color) {
    // Add the new message to the beginning of the array with the selected color
    messages.unshift({
      text: messageText,
      user: messageUser,
      color: color,
      added: new Date(),
    });
  }
  res.redirect(`/theme/${theme}`);
});

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
