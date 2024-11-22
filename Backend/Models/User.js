import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "UserName is required for storing"],
        minlength: [5, "Username atleast 5 characters required"],
        maxlength: [15, "Username atmost 15 characters only allowed"],
        match: [
          /^[a-zA-Z0-9]+$/,
          "Username only contain alphanumeric characters",
        ],

    },
    email: {
        type: String,
        unique: true,
      required: [true, "email is required"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "minimum length atleast 6"],
    },
    age: {
        type: Number,
        min: [18, "age atleast 18"],
        validate: {
          validator: Number.isInteger,
          message: "Age must not contain decimal value",
        },
        set: (val) => Number(val),  // Ensures the value is converted to a number before being saved
      },
      role: {
        type: String,
        default: "Student",
      },
    
},
    {
        timestamps: true,
    }
);

// Create the model
const User = mongoose.model("studentuser", userSchema);

// Export the model for use in usercontroller.js
export default User;