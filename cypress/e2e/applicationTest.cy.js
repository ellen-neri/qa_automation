// describe('QA Automation', () => {
//         let quantityValue = [];
//         let customerValue = [];

//         it('Change data', () => {
//                 cy.visit('/')
//                 cy.fixture('credentials.json').then((config) => {
//                         cy.get('#P9999_USERNAME').type(config.credentials.username);
//                         cy.get('#P9999_PASSWORD').type(config.credentials.password);
//                         cy.get('#B73469301468211533827').click()
//                         cy.wait(2000)
//                 })
//                 // Search for order 10 and save quantity value
//                 cy.get('#C73470470219529659781_HDR').click()
//                 cy.wait(2000)
//                 cy.contains('10').click()
//                 cy.wait(2000)
//                 cy.get('tbody > .a-GV-row > .u-tE').each(($cell) => {
//                         const value = $cell.text().trim();
//                         quantityValue.push(value);
//                       }).then(() => {
//                         cy.log('Quantity value:', quantityValue);
//                 });
//                 cy.wait(2000)

//                 // Change quantity from to 20
//                 cy.get('tbody > .a-GV-row > .u-tE').dblclick().type('20')
//                 cy.get('#B73470470482487659783').click()
//                 cy.wait(2000)

//                 // Save customer value
//                 cy.get('tbody > .a-GV-row > :nth-child(6)').each(($cell) => {
//                         const value = $cell.text().trim();
//                         customerValue.push(value);
//                       }).then(() => {
//                         cy.log('Customer value:', customerValue);
//                 });
//                 cy.wait(2000)

//                 // Change custumer value to Deli
//                 cy.get('tbody > .a-GV-row > :nth-child(6)').dblclick().type('Deli')
//                 cy.get('.a-PopupLOV-searchBar > .a-Button').click()
//                 cy.get('.a-IconList-item').click()
//                 cy.get('#B73470470482487659783').click()
                
//                 // Compare values
//                 expect(quantityValue[0]).to.equal('20');
//                 expect(customerValue[0]).to.equal('Deli');
//         })
// })


describe('QA Automation', () => {
        let quantityValue = [];
        let customerValue = [];
    
        it('Change data', () => {
            cy.visit('/');
            cy.fixture('credentials.json').then((config) => {
                cy.get('#P9999_USERNAME').type(config.credentials.username);
                cy.get('#P9999_PASSWORD').type(config.credentials.password);
                cy.get('#B73469301468211533827').click();
                cy.wait(2000);
            });
    
            // Search for order 10 and save quantity value
            cy.get('#C73470470219529659781_HDR').click();
            cy.wait(2000);
            cy.contains('10').click();
            cy.wait(2000);
            cy.get('tbody > .a-GV-row > .u-tE').each(($cell) => {
                const value = $cell.text().trim();
                quantityValue.push(value);
            }).then(() => {
                cy.log('Quantity value:', quantityValue);
    
                // Change quantity from to 20
                cy.get('tbody > .a-GV-row > .u-tE').dblclick().type('20');
                cy.get('#B73470470482487659783').click();
                cy.wait(2000);
            });
    
            // Save customer value
            cy.get('tbody > .a-GV-row > :nth-child(6)').each(($cell) => {
                const value = $cell.text().trim();
                customerValue.push(value);
            }).then(() => {
                cy.log('Customer value:', customerValue);
    
                // Change customer value to Deli
                cy.get('tbody > .a-GV-row > :nth-child(6)').dblclick().type('Deli');
                cy.get('.a-PopupLOV-searchBar > .a-Button').click();
                cy.get('.a-IconList-item').click();
                cy.get('#B73470470482487659783').click();
    
                // Compare values
                expect(quantityValue[0]).to.equal('20');
                expect(customerValue[0]).to.equal('Deli');
            });
        });
    });
    