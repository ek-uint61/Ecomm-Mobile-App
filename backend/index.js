// const express = require("express");

// const app = express();
// const port = 3000;
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const productRoute = require("./routes/products");

// dotenv.config();
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("db connected"))
//   .catch((err) => console.log(err));

// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ limit: "10mb", extended: true }));

// app.use("http://10.0.2.2:3000/api/products/", productRoute);

// app.listen(process.env.PORT || port, () =>
//   console.log(`App listening on port ${process.env.PORT}!`)
// );

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 3000;
const productRoute = require("./routes/products");
// const paymentRoute = require("./routes/payment");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/orders");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Veri Tabanı Baglantisi Gerceklestirildi.."))
  .catch((err) => console.log(err));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());
app.use("/api/products", productRoute);
app.use("/api/", authRoute);
app.use("/api/users", userRoute);

app.use("/api/orders", orderRoute);
app.use("/api/cart", cartRoute);

// app.use("/api/payments", paymentRoute);

app.listen(process.env.PORT || port, () =>
  console.log(`Port Dinleniliyor ${process.env.PORT}!`)
);
