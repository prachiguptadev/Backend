const Todo = require("../models/Todo");

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    // data not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data found with given Id",
      });
    }

    // data found given Id
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data succesfully fetched`,
    });
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};
