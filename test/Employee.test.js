const { it } = require('node:test');
const Employee = require ('./lib/Employee');

describe ('Employ test', () => {
    it('creates a corresponding  class called person', () => {
        const employee = new Employee ('Beau Miller', '21', 'beaum@email.com');
        expect (employee.getPerson()).toEqual('Beau');
    });
    it ('creates a corresponding class called badge', () => {
    const employee = new Employee ('Beau Miller', '21', 'beaum@email.com');
    expect (employee.getBadge()).toEqual('21');
});
it ('creates a corresponding class called email', () => {
    const employee = new Employee ('Beau Miller', '21', 'beaum@email.com');
    expect (employee.getMail()).toEqual('beaum@email.com');
});
});
    