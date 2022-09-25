const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/Intern");
const Employee = require("./lib/employee");

const rootPrompt = [
    {
        type: 'list',
        name: 'rootSelection',
        message: "Select an action.",
        choices: ['Build a team profile', 'Exit'],
        default: 1 //choices[1], 'Exit'
    }
]

const teamPrompt = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title for the team profile.',
        validate: (ans) => { //verify that a response was entered.
            if (ans) {
                return true;
            }
            else {
                return 'Please enter a valid title.';
            }
        }
    }
]

const buildPrompt = [
    {
        type: 'list',
        name: 'buildSelection',
        message: "What would you like to do?",
        choices: ['Add an employee', 'Remove an employee', 'Discard team profile', 'Finalize team profile'],
    }
]

const employeePrompts = [
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of the employee?',
        validate: (ans) => { //verify that a response was entered.
            if (ans && !/[\D]/g.test(ans)) {
                return true;
            }
            else {
                return 'Please enter a valid id.';
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?',
        validate: (ans) => { //verify that a response was entered.
            if (ans) {
                return true;
            }
            else {
                return 'Please enter a valid name.';
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?",
        validate: (ans) => { //verify that a response was entered.
            if (ans && /^[\w\.]+@[\w]+\.com/i.test(ans)) {
                return true;
            }
            else {
                return 'Please enter a valid email address.';
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern', 'Other'],
        default: 3 //choices[3] 'Other'
    },
]

const managerPrompt = [
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        validate: (ans) => { //verify that a response was entered.
            if (ans && !/[\D]/g.test(ans)) {
                return true;
            }
            else {
                return 'Please enter a valid office number.';
            }
        }
    }
]

const engineerPrompt = [
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github profile link?",
        validate: (ans) => { //verify that a response was entered.
            if (ans && /https:\/\/github\.com\/[\w]+$/i.test(ans)) {
                return true;
            }
            else {
                return 'Please enter a valid github profile link.';
            }
        }
    }
]

const internPrompt = [
    {
        type: 'input',
        name: 'school',
        message: 'What school does the intern attend?',
        validate: (ans) => { //verify that a response was entered.
            if (ans) {
                return true;
            }
            else {
                return 'Please enter a valid school name.';
            }
        }
    }
]

//Build a new team?
//Team Name
//Add employee, remove employee, discard team, generate profile

let employeeArray = [];
let profileTitle = '';

async function launch() {
    employeeArray = [];
    profileTitle = '';
    const { rootSelection } = await inquirer.prompt(rootPrompt);
    switch (rootSelection) {
        case 'Build a team profile':
            const titleResponse = await inquirer.prompt(teamPrompt);
            profileTitle = titleResponse.title;
            buildOptions();
            break;

        default:
            console.log('Goodbye.');
            process.exitCode = 0;
            break;
    }

}
//choices: ['Add an employee', 'Remove an employee', 'Discard team profile', 'Finalize team profile'],

async function buildOptions() {
    const { buildSelection } = await inquirer.prompt(buildPrompt);
    switch (buildSelection) {
        case 'Add an employee':
            await addEmployee();
            buildOptions();
            break;
        case 'Remove an employee':
            removeEmployee(await removePrompt());
            buildOptions();
            break;
        case 'Discard team profile':
            launch();
            break;
        case 'Finalize team profile':
            await writeProfile();
            launch();
            break;
    }
}

//ADD EMPLOYEE
//employee prompt (id, name, email, role)
//Ask extra property coressponding to employee role if needed CASE
//Create object with given responses CASE
//add new object to employee array
//Return to "Add employee, remove employee, discard team, generate profile" selection
async function addEmployee() {
    const { id, name, email, role } = await inquirer.prompt(employeePrompts);
    let newEmployee;
    switch (role) {
        case 'Manager':
            const { officeNumber } = await inquirer.prompt(managerPrompt);
            newEmployee = new Manager(id, name, email, officeNumber);
            break;
        case 'Engineer':
            const { github } = await inquirer.prompt(engineerPrompt);
            newEmployee = new Engineer(id, name, email, github);
            break;
        case 'Intern':
            const { school } = await inquirer.prompt(internPrompt);
            newEmployee = new Intern(id, name, email, school);
            break;
        default:
            newEmployee = new Employee(id, name, email)
            break;
    }
    employeeArray.push(newEmployee);
    return;
}

//REMOVE EMPLOYEE
//use prompt with choice option function reading the employee array.
//removes the selected employee from array
//Return to "Add employee, remove employee, discard team, generate profile" selection
async function removePrompt() {
    const removalPrompt = [
        {
            type: 'list',
            name: 'nameForRemoval',
            message: "What employee would you like to remove?",
            choices: function () {
                let options = ['Cancel'];
                for (let i = 0; i < employeeArray.length; i++) {
                    options.push(employeeArray[i].getName());
                }
                return options;
            },
            default: 0//Cancel
        }
    ];
    const { nameForRemoval } = await inquirer.prompt(removalPrompt);
    let idForRemoval = '';
    for (let i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].getName() == nameForRemoval) {
            idForRemoval = employeeArray[i].getId();
            break;
        }
    }
    return idForRemoval;

}

function removeEmployee(id) {
    if (!id) {
        return;
    }
    for (let i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].getId() === id) {
            employeeArray.splice(i, 1);
            break;
        }
    }
    return;
}

//DISCARD TEAM
//Exit and returns to root selection menu
//resets employee array

//GENERATE PROFILE
//Generates the html file from the employee array
//resets the employee array and returns to root selection menu
function writeProfile() {
    let cards = [];
    employeeArray.forEach(employee => {
        const type = employee.getRole();
        let property = '';
        switch (type) {
            case 'Manager':
                property = `<p>Office Number: ${employee.getOffice()}</p>`;
                break;
            case 'Engineer':
                property = `<p>GitHub: <a href="${employee.getGithub()}" target="_blank">${employee.getGithubName()}</a></p>`;
                break;
            case 'Intern':
                property = `<p>School: ${employee.getSchool()}</p>`;
                break;
            default:
                break;
        }
        //create cards
        const card =
            `<div class="">
                <div class="card">
                    <div class="header info">
                        <h2 class="heading-3">${employee.getName()}</h2>
                        <h3 class="title-3">${type}</h3>
                    </div>
                    <div class="body shaded">
                        <div class="box white">
                            <p>ID: ${employee.getId()}</p>
                            <br>
                            <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                            <br>
                            ${property}
                        </div>
                    </div>
                </div>
            </div>`
        cards.push(card);
    });
    //sort in order of roles MANAGERS ENGINEERS INTERNS OTHERS
    cards.sort(sortCards);

    const cardsString = cards.join('');
    const htmlString = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${profileTitle}</title>
        <link rel="stylesheet" href="https://kwlucas.github.io/Slate/css/core.css" />
        <link rel="stylesheet" href="../css/style.css"/>
    </head>
    <body>
        <header class="center-text prod-vertical-3">
            <div class="">
                <h1 id="team-name">${profileTitle}</h1>
            </div>
        </header>
        <main>
            <div></div>
            <section class="slate-section set-per-row-5 center-elements" id="profile-container">
                ${cardsString}
            </section>
            <div></div>
        </main>
    </body>
    </html>`

    fs.writeFile(`./dist/${profileTitle}.html`, htmlString, (err) => {
        //conditional ternary operator for catching error
        err ? console.error(err) : console.log(`File has been written.`);
    })
}

// function extractUsername(link = '') {
//     let username = link.replace(/https:\/\/github\.com\//i, '');
//     return username.trim();
// }

function sortCards(a, b) {
    //Handle all instances of having a manager ensuring they end up in front
    if(/<p>Office Number: /g.test(a) && !/<p>Office Number: /g.test(b)){
        return -1;
    }
    else if(/<p>Office Number: /g.test(a) && /<p>Office Number: /g.test(b)){
        return 0;
    }
    else if(!/<p>Office Number: /g.test(a) && /<p>Office Number: /g.test(b)){
        return 1;
    }
    //Handle all instances of having an engineer ensuring they are in front (no instances of manager will make it here)
    if(/<p>GitHub: <a href="/g.test(a) && !/<p>GitHub: <a href="/g.test(b)){
        return -1;
    }
    else if(/<p>GitHub: <a href="/g.test(a) && /<p>GitHub: <a href="/g.test(b)){
        return 0;
    }
    else if(!/<p>GitHub: <a href="/g.test(a) && /<p>GitHub: <a href="/g.test(b)){
        return 1;
    }
    //Handle all instances of having a student ensuring they are in front (no instances of manager or engineer will make it here)
    if(/<p>School: /g.test(a) && !/<p>School: /g.test(b)){
        return -1;
    }
    else if(/<p>School: /g.test(a) && /<p>School: /g.test(b)){
        return 0;
    }
    else if(!/<p>School: /g.test(a) && /<p>School: /g.test(b)){
        return 1;
    }
    else { //if makes it here then dealing with two employee objects so unchanged
        return 0;
    }
}

launch();