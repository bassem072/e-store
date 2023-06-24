const db = require("../models");
const { sub_category: SubCategory, category: Category } = db;
var bcrypt = require("bcrypt");

exports.addSubCategory = async (req, res) => {
  const { name, category } = req.body;
  Category.findOne({ name: category })
    .then(async (cat) => {
      const sub_category = new SubCategory({
        name,
        category: cat._id,
      });

      console.log(sub_category);
      await sub_category.save();
      return res.status(200).json({ message: sub_category });
    })
    .catch((err) => {
      return res.status(500).send({ error: err });
    });
};

exports.editSubCategory = (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  const data = {};
  if (updateData.name) {
    data.name = updateData.name;
  }

  if (Object.keys(data).length > 0) {
    SubCategory.findByIdAndUpdate(id, {
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

exports.deleteSubCategory = (req, res) => {
  const current_id = req.params.id;
  SubCategory.findByIdAndDelete(current_id)
    .then((sub_category) => {
      return res.status(200).send({ message: sub_category });
    })
    .catch((err) => {
      return res.status(500).send({ message: "Sub Category not updated" });
    });
};

exports.getAllSubCategories = async (req, res) => {
  console.log(req.query);
  const sort = req.query.sort ?? "register_date";
  let inc = req.query.inc ?? "asc";
  const searchString = req.query.search ?? "";
  const category = req.query.category ?? "";
  const page = req.query.page ?? 1;
  const limit = req.query.limit ?? 10;
  const sorting = {};
  sorting[sort] = inc === "desc" ? "desc" : "asc";
  console.log(sorting);
  const current_category = await Category.findOne({ name: category });
  const data = {};
  data["name"] = {
    $regex: searchString,
    $options: "i",
  };
  if (current_category) {
    date["category"] = current_category._id;
  }

  SubCategory.find(data)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort(sorting)
    .then((sub_categories) => {
      return res.status(200).send({ message: sub_categories });
    })
    .catch((err) => {
      return res.status(503).send({ message: "Sub Categories Not Found" });
    });
};

exports.getSubCategory = (req, res) => {
  const current_id = req.params.id;
  SubCategory.findById(current_id)
    .then((sub_category) => {
      return res.status(200).send({ message: sub_category });
    })
    .catch((err) => {
      return res.status(503).send({ message: "Sub Category Not Found" });
    });
};

exports.getLength = (req, res) => {
  console.log("hi");
  SubCategory.countDocuments()
    .then((count) => {
      return res.status(200).send({ length: count });
    })
    .catch((err) => {
      return res.status(500).send({ error: err });
    });
};
