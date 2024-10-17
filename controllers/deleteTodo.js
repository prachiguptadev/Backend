const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
  try {

    const {id} = req.params;

    await Todo.findByIdAndDelete(id);

    res.json({
        success:true,
        message: "Todo Deleted"
    })
   
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      data: "Internal Serevr Error",
      message: err.message,
    });
  }
};
