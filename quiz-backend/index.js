const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("colors");
const app = require("./app");
const { errorHandler } = require("./middlewares/errorHandler.middleware");

//  initialize port:
// const port = process.env.port || 8080;
const port = 5000 || 8080;

//  database connection with mongoose:
// mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
//   console.log(`Database connected successfully`.blue.bold);
// });
mongoose
  .connect(
    "mongodb+srv://test-demo-database:test-demo-database@cluster0.5tlwrug.mongodb.net/allICT?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`Database connected successfully`.blue.bold);
  });

//  main route :
app.get("/", (req, res, next) => {
  res.status(200).send("server is running noww");
});

//  listen the app :

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});

//  global error handler :
app.use(errorHandler);

//  process exit 1:
process.on("unhandledRejection", (err) => {
  console.log(err.message, err.name, err.stack);
  mongoose.connection
    .close()
    .then(() => {
      process.exit(1);
    })
    .catch((err) => {
      console.log(`Mongoose Error`, err.message);
      process.exit(1);
    });
});
