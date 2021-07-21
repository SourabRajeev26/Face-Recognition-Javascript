//requiring path and fs modules
function getNames(fileName, callback){
    const path = require('path');
    const fs = require('fs');
    const directoryPath = path.join(__dirname, fileName);
    let a=[]
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            // return console.log('Unable to scan directory: ' + err);
            return callback(err)
        } 
        callback(null, files)
        // files.forEach(function (file) {
        //     // Do whatever you want to do with the file
        //     console.log(file); 
        //     a.push(file)
        // });
        // a
    
    });
    return a
}
let n=getNames('labeled_images', function (err, content) {
    console.log(content)
})
n