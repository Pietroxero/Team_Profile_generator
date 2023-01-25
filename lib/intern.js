const Employee = require ('./Employee');

class Intern extends Employee {
    constructor (name, badge, email, school) {
        super (name, badge, email);
        this.school = school;
    }
    getEducation() {
        return this.school;
    }
    getJob() {
        return `Intern`;
    }
}

module.exports = Intern;