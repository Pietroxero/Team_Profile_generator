//this will be setting the dependencies needed for the html page
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./src/generateHTML");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/intern');

// const open = require("open");
// const { default: Choices } = require("inquirer/lib/objects/choices");

//This will be to generate the questions asked of the team and the manager
//For id I changed this to 'badge' as part of my everyday in a work setting we use badge#
//For Engineer this was changed to Dev Ops engineer based on continuous experience with engineers under this title
function teamBio() {
  inquirer
    .prompt([
      {
        name: "roles",
        type: "list",
        select: ["Dev Ops Engineer", "FTE", "Intern", "Temp to hire"],
        message: "What role is being added to you team?",
      },
    ])
    .then((data) => {
      if (data.role === "Dev Ops Engineer") {
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
        ]).then((data)=> {
            let dev = new dev(data.name, data.badge, data.github, data.email);
            team.splice(team.length-1, 0, engineer.HTML());
            teamBio();
        })
      }
      if (data.role === 'Temp'){
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
    
                name: "github",
                type: "input",
                message: "Temp Employee's Github Repo:",
    
                
              },
              {
                name: "email",
                type: "input",
                message: "Temp Employee's email:",
              }
        ]).then((data)=>{
            let temp = new temp(data.name, data.badge, data.school, data.github, data.email);
            team.splice(team.length-1, 0, temp.HTML());
            teamBio();
        })
      }
      //return /print function needed
    });
}

//Here we will be building the manager prompt questions.
function managerQuestions(){
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
          }
    ])
    
}

managerQuestions()
    .then((data) =>{
        const lead = new lead(data.name, data.badge, data.email, data.office);
        team.splice(team.length-1, 0, manager.getHTML());
        teamBio();
    })

//Here we have to print and have the html open

