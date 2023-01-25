const Intern = require ('./lib/intern.js');

describe ('engineer test', () => {
    it('creates a corresponding  class called person', () => {
        const intern = new Intern ('Beau Miller', '21', 'USC');
        expect (intern.getPerson()).toEqual('Beau');
    });
    it ('creates a corresponding class called badge', () => {
    const intern = new Intern ('Beau Miller', '21', 'USC');
    expect (intern.getBadge()).toEqual('21');
});
it ('creates a corresponding class called email', () => {
    const intern = new Intern ('Beau Miller', '21', 'USC');
    expect (intern.getMail()).toEqual('beaum@email.com');
});
it ('creates a corresponding class called email', () => {
    const intern = new Intern ('Beau Miller', '21', 'USC');
    expect (intern.getSchool()).toEqual('USC');
});
});