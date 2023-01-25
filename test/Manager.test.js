const Manager = require ('./lib/Manager.js');

describe ('engineer test', () => {
    it('creates a corresponding  class called person', () => {
        const manager = new Manager ('Beau Miller', '21', 'USC', );
        expect (employee.getPerson()).toEqual('Beau');
    });
    it ('creates a corresponding class called badge', () => {
    const manager = new Manager ('Beau Miller', '21', 'USC');
    expect (manager.getBadge()).toEqual('21');
});
it ('creates a corresponding class called email', () => {
    const manager = new Manager ('Beau Miller', '21', 'USC');
    expect (manager.getMail()).toEqual('beaum@email.com');
});


it ('creates a corresponding class called Office', () => {
    const manager = new Manager ('Beau Miller', '21', 'USC');
    expect (manager.getOffice()).toEqual('USC');
});

});