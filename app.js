// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
const inquirer = require('inquirer');
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

const promptUser = async() => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Username!')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};


// const promptProject = () => {
const promptProject = async(portfolioData) => {
    portfolioData.projects = []

    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
  =================
  Add a New Project
  =================
  `);

    const newAnswers = await inquirer.prompt([


        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!')
                    return false;
                }
            }
        },

        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },

        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter your Github link project!')
                    return false;
                }
            }
        },

        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },

        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        },

    ]);

    portfolioData.projects.push(newAnswers);
    return newAnswers;
};

promptUser()
    .then(promptProject)
    .then(projectData => {
        if (projectData.confirmAddProject) {
            return promptProject(projectData);
        } else {
            return projectData;
        }
    });
// .then(async(answer) => await promptProject(answers))
// .then(projectData => {
//     portfolioData.projects.push(projectData);
//     if (projectData.confirmAddProject) {
//         return promptProject(portfolioData);
//     } else {
//         return portfolioData;
//     }
// .then(answers => {
//     console.log(answers)
//     return answers;
// })
// .then(answer => promptProject(answers))
// .then(projectAnswers => {
//     console.log(projectAnswers)
//     return projectAnswers;
// })
// .then(projectData => {
//     portfolioData.projects.push(projectData);
//     if (projectData.confirmAddProject) {
//         return promptProject(portfolioData);
//     } else {
//         return portfolioData;
//     }

// });        

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