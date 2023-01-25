const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor (name, badge, email, github) {
        super (name, badge, email);
        this.github = github;
    }
    getGit(){
        return this.github;
    }
    getJob(){
        return `Engineer`;
    }
}

module.exports = Engineer;