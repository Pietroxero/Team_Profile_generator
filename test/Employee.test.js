const Employee = require ('../lib/Employee');

describe ('Engineer test', () => {
    describe('creates new employee', () => {
        const employee = new Employee ('Beau Miller', '21', 'beaum@email.com');
        expect (employee.name).toEqual('Beau Miller');
        expect (employee.badge).toEqual('21');

        it('if successful will get the engineers role', () => {
expect(employee.getJob()).toEqual(expect.stringContaining('Employee'));
        });
    });
});
    