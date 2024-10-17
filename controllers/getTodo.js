const Todo = require("../models/Todo");

// define router handler

exports.getTodo = async (req, res) => {
  try {


    // fetch all todos items from database
    const todos = await Todo.find({});

    // response
    res.status(200).json({
        success:true,
        data:todos,
        message: "Data fetched Successfully"
    })
   
  } catch (error) {
    console.error(error)
    res.status(500).json({
        success:false,
        error: error.message,
        message: "Recieved and Error"
    })
   
}
}
