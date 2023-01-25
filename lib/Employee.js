class Employee { 
    constructor (name, badge, email, roles = 'Employee')
    {
        this.name = name;
this.badge = badge;
this.email = email;
this.roles = role;
    }
    getPerson(){
        return this.name;
    }
    getBadge(){
        return this.badge;
    }
    getMail(){
        return this.email;
    }
    getJob(){
        return 'Employee';
    }
}

module.exports = Employee;
