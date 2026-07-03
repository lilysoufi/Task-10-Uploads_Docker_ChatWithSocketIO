const { body , param} = require("express-validator");
const validate = require("../middlewares/validate");
const path = require('path');

/*const FileValidation {
    const ALLOWED_IMAGE_TYPES = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif',
    'image/jpg'
];

const MAX_FILE_SIZE = 5 * 1024 * 1024;
}*/