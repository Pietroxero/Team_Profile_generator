const Manager = require ('../lib/Manager.js');

describe ('Manager test', () => {
    describe('creates a new manager', () => {
        const manager = new Manager ('Beau Miller', '21', 'beaum@email.com', '2d4' );
        expect (manager.name).toEqual('Beau Miller');
        expect (manager.badge).toEqual('21');
        expect (manager.email).toEqual('beaum@email.com');
        expect (manager.office).toEqual('2d4');

        it ('if successful will get the managers role', () => {
            expect(manager.getJob()).toEqual(expect.stringContaining('Manager'));
        });
    })
});
//     it ('creates a corresponding class called badge', () => {
//     const manager = new Manager ('Beau Miller', '21', 'USC');
//     expect (manager.getBadge()).toEqual('21');
// });
// it ('creates a corresponding class called email', () => {
//     const manager = new Manager ('Beau Miller', '21', 'USC');
//     expect (manager.getMail()).toEqual('beaum@email.com');
// });


// it ('creates a corresponding class called Office', () => {
//     const manager = new Manager ('Beau Miller', '21', 'USC');
//     expect (manager.getOffice()).toEqual('USC');
// });

// });