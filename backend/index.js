const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");

const app = express();

// intializing the port number
port = 8000;

dotenv.config();

//middleware

// used for the server to know that the response is a JSON object and then the response object
// can be accessed via app.get(res)
app.use(express.json());

// morgan is used as a logger. IF there are any requests being made, Morgan generates log automatically
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploaded successfully");
    } catch (err) {
        console.log(err);
    }
});

// user route
app.use("/api/users", userRoute);

//auth route
app.use("/api/auth", authRoute);

//posts route
app.use("/api/posts/", postRoute);

//connecting to the mongodb server using the mongoose middleware
mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
    useNewUrlParser: true,
});

app.use("/images", express.static(path.join(__dirname, "public/images")));

// verfication if the server is server and mongo db are connected or not
mongoose.connection
    .once("open", () => console.log("Mongo DB connection completed"))
    .on("error", (error) => console.log(error));

// to ensure that our server is running
app.listen(port, () => {
    console.log(`Server listening from port ${port}`);
});