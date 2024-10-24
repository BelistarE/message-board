const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// To parse form data from POST requests
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Sample data
let messages = [
  {
    text: "Hello, world!",
    user: "Console",
    added: new Date(),
    color: "#34914a",
  },
];

// Set the view engine to EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Index route - displays messages
app.get("/", (req, res) => {
  res.render("index", { title: "Beli's Message Board", messages });
});

// Route to render the form for adding a new message
app.get("/new", (req, res) => {
  res.render("new", { title: "New Message" });
});

app.post("/new", (req, res) => {
  const { messageText, messageUser, color } = req.body;
  if (messageText && messageUser && color) {
    // Add the new message to the beginning of the array with the selected color
    messages.unshift({
      text: messageText,
      user: messageUser,
      color: color,
      added: new Date(),
    });
  }
  res.redirect("/");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
