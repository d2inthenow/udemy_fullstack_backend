const { Console } = require("console");
const path = require("path");

const uploadSingleFile = async (fileObject) => {
    // if (!req.files || Object.keys(req.files).length === 0) {
    //     return res.status(400).send('No files were uploaded.');
    // }

    let uploadPath = path.resolve(__dirname, '../public/image/upload');

    let extName = path.extname(fileObject.name);

    let baseName = path.basename(fileObject.name, extName);

    let finalName = `${baseName}-${Date.now()}${extName}`;

    let finalpath = `${uploadPath}/${finalName}`;

    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(finalpath);
        return {
            status: 'success',
            path: finalName,
            error: null
        };
    } catch (err) {
        console.log(">>>Error:", err);
        return {
            status: 'fail',
            path: null,
            error: JSON.stringify(err)
        };
    }
};

const uploadMultipleFile = async (fileArr) => {
    try {
        let uploadPath = path.resolve(__dirname, '../public/image/upload');
        let resultsArr = [];
        let countImage = 0;
        for (let i = 0; i < fileArr.length; i++) {
            let extName = path.extname(fileArr[i].name);

            let baseName = path.basename(fileArr[i].name, extName);

            let finalName = `${baseName}-${Date.now()}${extName}`;

            let finalpath = `${uploadPath}/${finalName}`;
            try {
                await fileArr[i].mv(finalpath);
                resultsArr.push({
                    status: 'success',
                    path: finalName,
                    filename: fileArr[i].name,
                    error: null
                })
                countImage++;
            } catch (err) {
                resultsArr.push({
                    status: 'fail',
                    path: null,
                    filename: fileArr[i].name,
                    error: JSON.stringify(err)
                })
            }
        }
        return {
            countImage: countImage,
            detail: resultsArr
        }
    } catch (err) {
        console.log(">>>Error:", err);
        return {
            status: 'fail',
            path: null,
            error: JSON.stringify(err)
        };
    }
};


module.exports = {
    uploadSingleFile,
    uploadMultipleFile
};
