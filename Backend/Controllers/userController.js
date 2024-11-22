// Import the User model
import User from "../Models/User.js";


export async function getAllStudentUser(req, res, next) {
  try {
    const { sort, fields, page, limit, ...filterFields } = req.query;
    //filtering
  
    let queryUser = User.find(filterFields);
    //sorting
  
    if (sort) {
      const sortBy = sort.split(",").join(" ");
      queryUser = queryUser.sort(sortBy);
    }
    // limiting fields
    if (fields) {
      const fieldStr = fields.split(",").join(" ");
      queryUser = queryUser.select(fieldStr);
    }
    //pagenation
    const PageNum = page * 1;
    const limitNum = limit * 1;
    const skipNum = (PageNum - 1) * limitNum;
    queryUser = queryUser.skip(skipNum).limit(limitNum);
    const users = await queryUser;
    res.status(200).json({
      message: "Success",
      users,
    });
  } catch (err) {
    next(err);
  }
}

// export async function getAllStudentUser(req, res, next) {
//     try {
//         const users = await User.find();
//         if (users.length === 0) {
//             return res.status(404).json({
//                 message: "No students found",
//             });
//         }
//         res.status(200).json({
//             message: "Success",
//             users, 
//         });
//     } catch (err) { 
//         res.status(500).json({
//             message: "Internal Server Error. Could not fetch users.",
//             error: err.message,
//         });
//     }
// }


export async function createStudentUser(req, res, next) {
    try {
        // console.log("Request body:", req.body);  
        
        const user = await User.create(req.body);
        
        res.status(201).json({
            message: "Success",
            user,
        });
    } catch (err) {
        next(err);  // Let the error handler process it
    }
}


export async function getStudentById(req, res, next) {
    // console.log(req.params._id);
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        return res.status(200).json({
          message: "Success",
          user,
        });
      }
      return res.status(404).json({
        message: "User not found",
      });
    }
     catch (err) {
      next(err);
    }
  }


  export async function getStudentByEmail(req, res, next) {
    // console.log(req.body.email);
    try {
      const user = await User.findOne({ email: req.body.email });
  
      res.status(200).json({
        message: "Success",
        user,
      });
    } catch (err) {
      next(err);
    }
  }


  export async function UpdateStudentUser(req, res, next) {
    const { username, email, password,age } = req.body;
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        username,
        email,
        password,
        age,
      },{new: true, runValidators: true});

      if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
  
      res.status(200).json({
        message: "Success",
        user,
      });
    } catch (err) {
      next(err);
    }
  }


  



