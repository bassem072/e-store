const db = require("../models");
const { category: Category } = db;
var bcrypt = require("bcrypt");

exports.addCategory = async (req, res) => {
  const { name } = req.body;
  const category = new Category({
    name,
  });
  console.log(category);
  await category.save().then((cat) => {
    return res.status(200).json({ message: cat });
  }).catch((err) => {
    return res.status(500).json({ message: "Category found" });
  });
  
};

exports.editCategory = (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  const data = {};
  if (updateData.name) {
    data.name = updateData.name;
  }

  if (Object.keys(data).length > 0) {
    Category.findByIdAndUpdate(id, {
      $set: data,
    })
      .then((doc) => {
        res.status(200).send({ message: doc });
      })
      .catch((err) => res.send({ message: err }));
  } else {
    return res.send({ message: "You did not update any Data." });
  }
};

exports.deleteCategory = (req, res) => {
  const current_id = req.params.id;
  Category.findByIdAndDelete(current_id)
    .then((category) => {
      return res.status(200).send({ message: category });
    })
    .catch((err) => {
      return res.status(500).send({ message: "Category not updated" });
    });
};

exports.getAllCategories = async (req, res) => {
  console.log(req.query);
  const sort = req.query.sort ?? "register_date";
  let inc = req.query.inc ?? "asc";
  const searchString = req.query.search ?? "";
  const page = req.query.page ?? 1;
  const limit = req.query.limit ?? 10;
  const sorting = {};
  sorting[sort] = inc === "desc" ? "desc" : "asc";
  console.log(sorting);

  Category.find({
    name: {
      $regex: searchString,
      $options: "i",
    },
  })
    .skip((page - 1) * limit)
    .limit(limit)
    .sort(sorting)
    .then((categories) => {
      return res.status(200).send({ message: categories });
    })
    .catch((err) => {
      return res.status(503).send({ message: "Categories Not Found" });
    });
};

exports.getCategory = (req, res) => {
  const current_id = req.params.id;
  Category.findById(current_id)
    .then((category) => {
      return res.status(200).send({ message: category });
    })
    .catch((err) => {
      return res.status(503).send({ message: "Category Not Found" });
    });
};

exports.getLength = (req, res) => {
  console.log("hi");
  Category.countDocuments()
    .then((count) => {
      return res.status(200).send({ length: count });
    })
    .catch((err) => {
      return res.status(500).send({ error: err });
    });
};
