require("dotenv").config();
const fs = require("fs");
const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY_CLOUD,
    api_secret: process.env.API_SECRET_CLOUD,
})

const uploadToCloudinary = async (file) => {
    try {
 
        // save temp
        const filePath = __dirname+`/tmp/${file.originalname}`;
         console.log(`filepath ${filePath}`)
        fs.writeFileSync(filePath, file.buffer);

        const result = await cloudinary.v2.uploader.upload(filePath, {
            resource_type: "auto" // optional, but recommended
        });
        console.log(`result ${result}`)
        fs.unlinkSync(filePath);

        return result.secure_url; // path
    } catch (error) {
        console.error(error.message);
        //return error
        return null;
    }
} 

module.exports = uploadToCloudinary;

// user => my server => cloudinary
