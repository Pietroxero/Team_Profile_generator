const Engineer = require ('./lib/Engineer.js');

describe ('engineer test', () => {
    it('creates a corresponding  class called person', () => {
        const engineer = new Engineer ('Beau Miller', '21', 'beaum@email.com');
        expect (engineer.getPerson()).toEqual('Beau');
    });
    it ('creates a corresponding class called badge', () => {
    const engineer = new Engineer ('Beau Miller', '21', 'beaum@email.com');
    expect (engineer.getBadge()).toEqual('21');
});
it ('creates a corresponding class called email', () => {
    const engineer = new Engineer ('Beau Miller', '21', 'beaum@email.com');
    expect (engineer.getMail()).toEqual('beaum@email.com');
});
it ('creates a corresponding class called email', () => {
    const engineer = new Engineer ('Beau Miller', '21', 'beaum@email.com');
    expect (engineer.getGit()).toEqual('beaum@email.com');
});
});