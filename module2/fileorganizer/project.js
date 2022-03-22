let fs = require('fs');
let path = require('path');

let folderpath = process.argv[2];
console.log(folderpath);

let extensions = {
    Audio : [".mp3"],
    Video : [".mp4",".mkv"],
    Document : [".pdf",".doc",".xlsx",".txt"],
    Image : [".jpf",".jpeg",".png",".gif"],
    Software : [".exe"]
}

if(fs.existsSync(folderpath)){
    let files = fs.readdirSync(folderpath);
    console.log(files);
    for(let i = 0; i < files.length ; i++){
        let extname = path.extname(files[i]);
        let nameoffolder = givefoldername(extname);
        // console.log(extname,nameoffolder);
        let newfolder = path.join(folderpath,nameoffolder);
        if(fs.existsSync(newfolder)){
            movefile(folderpath,newfolder,files[i]);
        }
        else{
            fs.mkdirSync(newfolder);
            movefile(folderpath,newfolder,files[i]);
        }
    }
}
else{
    console.log("file not exists");
}

function givefoldername(extname){
    for(let keys in extensions){
        let extarr = extensions[keys];
        for(let j = 0; j < extarr.length; j++){
            if(extarr[j] == extname){
                return keys;
            }
        }
    }
    return 'Others';
}

function movefile(folderpath,newfolder,filename){
    let sourcepath = path.join(folderpath,filename);
    let destinationpath = path.join(newfolder,filename);
    fs.copyFileSync(sourcepath,destinationpath);
    fs.unlinkSync(sourcepath);
}