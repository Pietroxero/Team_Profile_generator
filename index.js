//this will be setting the dependencies needed for the html page
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./src/generateHTML");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
// const Employee = require('./lib/Employee');
const Intern = require('./lib/intern');

// const open = require("open");
// const { default: Choices } = require("inquirer/lib/objects/choices");

const staffChart = {
    'manager': [],
    'engineer': [],
    'intern': []
};

//This will be to generate the questions asked of the team and the manager
//For id I changed this to 'badge' as part of my everyday in a work setting we use badge#
//For Engineer this was changed to Dev Ops engineer based on continuous experience with engineers under this title
const teamBio =() => {
  inquirer
    .prompt([
      {
        name: "roles",
        type: "list",
        choices: ["Dev Ops Engineer", "Intern", "Finished building my team"],
        message: "What role is being added to you team?",
      },
    ])
    .then(({roles}) => {
      if (roles === "Dev Ops Engineer") {
        return inquirer.prompt([
          {
            name: "name",
            type: "input",
            message: "Name of Dev Ops Engineer:",
          },
          {
            name: "badge",
            type: "input",
            message: "Badge number for Dev Ops Engineer:",
          },
          {

            name: "github",
            type: "input",
            message: "Dev Ops Engineer's Github Repo:",

            
          },
          {
            name: "email",
            type: "input",
            message: "Dev Ops Engineer's email:",
          }
        ]).then(({name, badge, email, github})=> {
            staffChart.engineer.push(new Engineer (name, badge, email, github))
            return teamBio();
        })
      }
      else if (roles === 'Intern'){
        return inquirer.prompt([
            {
                name: "name",
                type: "input",
                message: "Name of Temp Employee:",
              },
              {
                name: "badge",
                type: "input",
                message: "Badge number for Temp Employee:",
              },

              {
                name: "school",
                type: "input",
                message: "Do they have School certifications",
              },
              
              {
                name: "email",
                type: "input",
                message: "Temp Employee's email:",
              }
        ]).then(({name, badge, email, school})=>{
            staffChart.intern.push(new Intern (name, badge, email, school))
            return teamBio();
        })
      }
      else if(roles === "Finished building my team"){
        writeData();
      }

    })
};

//Here we will be building the manager prompt questions.
const managerQuestions = () => {
    return inquirer.prompt([
        //Similar to the prompt above we can rinse and repeat the arrays for questions.
        {
            name: "name",
            type: "input",
            message: "Manager Name:",
          },
          {
            name: "badge",
            type: "input",
            message: "Manager Badge Number:",
          },
          
          {
            name: "email",
            type: "input",
            message: "Manager's email:",
          },
          {
            name: "office",
            type: "input",
            message: "Manager's cube number?:",
          }])
          .then(({name, badge, email, office}) =>{
            staffChart.manager.push(new Manager (name, badge, email, office))
            teamBio();

        })
    
};

const writeData = () => {
    const data = generate(staffChart);
    fs.writeFile('./dist/index.html', data, () => {
      
    })
}

//function that will initialize the app
const init = async () => {
    try {
        //calling the const for manager questions to prompt manager user for team information
        managerQuestions()

    } catch (err) {

    }
};

// function to initialize app
init();

    


