const fs = require('fs');

let scripts = [];

fs.readdir('./challenges', (err, folders) => {
  folders.forEach(folder => {
    fs.readdir(`./challenges/${folder}`, (err, files) => {
      files.forEach(file => {
        scripts.push(`./challenges/${folder}/${file}`);
      });
    });
  });
 });

 module.exports = () => scripts;
