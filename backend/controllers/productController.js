const Product = require("../models/Products");

module.exports = {
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.status(200).json("product created");
    } catch (error) {
      res.status(500).json("failed to create product");
    }
  },

  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json("failed to get the products");
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      const { __v, createdAt, ...productData } = product._doc;
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json("failed to get the products");
    }
  },

  searchProduct: async (req, res) => {
    try {
      const results = await Product.aggregate([
        [
          {
            $search: {
              index: "hydraulic",
              text: {
                query: req.params.key,
                path: {
                  wildcard: "*",
                },
              },
            },
          },
        ],
      ]);
      res.status(200).send(results);
    } catch (err) {
      res.status(500).json("failed to get the products");
    }
  },
};
