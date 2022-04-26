const express = require("express");
const app = express();
app.use(express.json())
  
app.get("/", (req, res) => {
  res.send("Hello World!");
});
  
const PORT = process.env.PORT || 8080;
console.log(PORT)

app.get("/api", (req, res) => {
  res.json({ message: "Test message sent from backend!" });
  });

app.post("/post", (req, res) => {

    console.log("Data from front end:")
    console.log(req.body)
  });

app.post('/signin', (req, res) => {
  console.log("Sign in data from frontend:")
  console.log(req.body);
});

  
app.listen(PORT, console.log(`Server started on port ${PORT}`));