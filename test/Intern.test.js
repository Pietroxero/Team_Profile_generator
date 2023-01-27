const Intern = require ('../lib/Intern');

describe ('intern test', () => {
    describe('creates new intern', () => {
        const intern = new Intern ('Beau Miller', '21', 'beaum@email.com', 'USC');
        expect (intern.name).toEqual('Beau Miller');
        expect (intern.badge).toEqual('21');
        expect (intern.email).toEqual('beaum@email.com');
        expect (intern.school).toEqual('USC');
        expect(intern.getEducation()).toEqual(expect.stringContaining('USC'));

        it('if successful will get the interns role', () => {
expect(intern.getJob()).toEqual(expect.stringContaining('Intern'));
        });

     } )
    })

//     it ('creates a corresponding class called badge', () => {
//     const intern = new Intern ('Beau Miller', '21', 'USC');
//     expect (intern.getBadge()).toEqual('21');
// });
// it ('creates a corresponding class called email', () => {
//     const intern = new Intern ('Beau Miller', '21', 'USC');
//     expect (intern.getMail()).toEqual('beaum@email.com');
// });
// it ('creates a corresponding class called email', () => {
//     const intern = new Intern ('Beau Miller', '21', 'USC');
//     expect (intern.getSchool()).toEqual('USC');
// });
