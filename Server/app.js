require("dotenv").config();
const {Logger, SQL} = require("./utils");
const express = require("express");
const Routes = require("./routes");

const app = express();


app.use(express.json());

function startRoutes() {
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    const PORT = process.env.PORT || 8080;
    console.log(PORT);

    Routes.register(app);

    app.get("/api", (req, res) => {
        res.json({ message: "Test message sent from backend!" });
    });

    app.post("/post", (req, res) => {
        console.log("Data from front end:");
        console.log(req.body);
    });

    app.post("/signin", (req, res) => {
        console.log("Sign in data from frontend:");
        console.log(req.body);
    });

    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}

SQL.init(startRoutes);