import { v2 as cloudinary } from "cloudinary";
import fs from "fs";




    // Configuration
    cloudinary.config({ 
        cloud_name: 'dmjey0xtt', 
        api_key: '317367468141551', 
        api_secret: 'QK2LxOpARO8RIizYYJysMCX7-II' // Click 'View Credentials' below to copy your API secret
    });
    

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export { uploadOnCloudinary }
