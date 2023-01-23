//this will be setting the dependencies needed for the html page
const inquirer = require("inquirer");
const fs = require("fs");
const open = require("open");
const { default: Choices } = require("inquirer/lib/objects/choices");

//This will be to generate the questions asked of the team and the manager
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
            let 
        })
      }
    });
}
