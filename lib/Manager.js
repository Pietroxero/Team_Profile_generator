const Employee = require ('./Employee');

class Manager extends Employee {
    constructor (name, badge, email, office) {
        super ( name, badge, email);
        this.office = office;
    }
    getJob() {
        return `Manager`
    }
}

module.exports = Manager;