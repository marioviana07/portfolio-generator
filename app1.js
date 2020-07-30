const inquirer = require('inquirer');
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;
const promptUser = async() => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
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
    const newAnswers = await inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
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
            message: 'Enter the GitHub link to your project. (Required)'
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
    });