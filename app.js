// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
const inquirer = require('inquirer');
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;


inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }])
    .then(answers => console.log(answers));

// const generatePage = () => 'Name: Jane, Github: janehub';
// const generatePage = (userName, githubName) => {
//     return `
// Name: ${userName} 
// Github: ${githubName}
// `;
// };





// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;
//     console.log(err)
//     console.log('Portfolio complete! check out index.html to see the output!');
// });





// console.log(name, github);
// console.log(generatePage(name, github));