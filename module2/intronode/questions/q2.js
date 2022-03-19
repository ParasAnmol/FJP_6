// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
let fs = require('fs');
let path = require('path');

let arr=['audio','video','image','documents','applications','other'];
let file = ['abc','efg','def'];
let ext = ['.mp3','mp4','.png','.pdf','.apk','.zip'];
let mfolder = path.join(__dirname,"organise");
if(!fs.existsSync(mfolder)){
    fs.mkdirSync(mfolder);
}
for(let i = 0; i < arr.length; i++){
    let cfolder = path.join(mfolder,arr[i]);
    if(!fs.existsSync(cfolder)){
        fs.mkdirSync(cfolder);
    }
    for(let j = 0; j <= file.length-1; j++){
        let filename = file[j] + ext[i];
        let filepath = path.join(cfolder,filename);
        fs.writeFileSync(filepath,"");
    }
}