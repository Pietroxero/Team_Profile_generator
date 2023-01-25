const Engineer = require ('./lib/Engineer.js');

describe ('Engineer test', () => {
    describe('creates new engineer', () => {
        const engineer = new Engineer ('Beau Miller', '21', 'beaum@email.com', 'MyGitHub');
        expect (engineer.name).toEqual('Beau Miller');
        expect (engineer.badge).toEqual('21');
        expect (intern.email).toEqual('beaum@email.com');
        expect (intern.github).toEqual('USC');
        expect(intern.getEducation()).toEqual(expect.stringContaining('USC'));

        it('if successful will get the engineers role', () => {
expect(intern.getJob()).toEqual(expect.stringContaining('Dev Ops Engineer'));
        });
    });
//     it ('creates a corresponding class called badge', () => {
//     const engineer = new Engineer ('Beau Miller', '21', 'beaum@email.com');
//     expect (engineer.getBadge()).toEqual('21');
// });
// it ('creates a corresponding class called email', () => {
//     const engineer = new Engineer ('Beau Miller', '21', 'beaum@email.com');
//     expect (engineer.getMail()).toEqual('beaum@email.com');
// });
// it ('creates a corresponding class called email', () => {
//     const engineer = new Engineer ('Beau Miller', '21', 'beaum@email.com');
//     expect (engineer.getGit()).toEqual('beaum@email.com');
// });
});