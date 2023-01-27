const Engineer = require ('../lib/Engineer');

describe ('Engineer test', () => {
    describe('creates new engineer', () => {
        const engineer = new Engineer ('Beau Miller', '21', 'beaum@email.com', 'MyGitHub');
        expect (engineer.name).toEqual('Beau Miller');
        expect (engineer.badge).toEqual('21');
        expect (engineer.email).toEqual('beaum@email.com');
        expect (engineer.github).toEqual('MyGitHub');
        // expect(engineer.getEducation()).toEqual(expect.stringContaining('USC'));

        it('if successful will get the engineers role', () => {
expect(engineer.getJob()).toEqual(expect.stringContaining('Dev Ops Engineer'));
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