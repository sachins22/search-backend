import { User } from "../models/Search.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";




const Create = asyncHandler(async (req, res) => {
    const { name, email, age, address } = req.body;
    console.log({ name, email, age, address });

    if (!req.file) {
        throw new ApiError(400, "Image file is required");
    }

    const imageLocalPath = req.file.path;
    console.log('Image local path:', imageLocalPath);

    const user = await User.create({
        name,
        image: imageLocalPath,
        age,
        address,
        email
    });

    if (
        [name, email, age,address ].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, " Name, Email, Age, Address All  field required are required")
    }

    return res.status(200).json(
        new ApiResponse(200, user, "User created successfully")
    );
});
const Search = asyncHandler(async (req, res) => {
    const { name } = req.body;
    console.log(name);

    if (!req.file) {
        throw new ApiError(400, "Image file is required");
    }

    const imageLocalPath = req.file.path;
    console.log('Image local path:', imageLocalPath);

  

    const userFound = await User.findOne({ image: imageLocalPath, name: name });


    // const userFound = await User.find({});
    // const userFound = await User.findOne({  name: name });

    if (!userFound) {
        throw new ApiError(404, "User not found");
    }

    return res.status(200).json(
        new ApiResponse(200, userFound, "User created and found successfully")
    );
});

export {
    Create,
    Search 
};
