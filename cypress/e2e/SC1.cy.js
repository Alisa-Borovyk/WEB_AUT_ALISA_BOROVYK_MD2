import appointmentPage from './Pages/AppointmentPage';

describe('Cura Healthcare Service - Appointment', () => {
    it('a. Scenario 1 - Make an Appointment', () => {
        cy.log('a. Scenario 1 - Make an Appointment');
        cy.log('i. Open https://katalon-demo-cura.herokuapp.com/');
        cy.visit('https://katalon-demo-cura.herokuapp.com/');

        cy.log('ii. Click - Make Appointment');
        appointmentPage.makeAppointmentBtn.click();

        cy.log('iii. Set username and password fields with the demo account credentials');
        appointmentPage.usernameField.type('John Doe');
        appointmentPage.passwordField.type('ThisIsNotAPassword');

        cy.log('iv. Click - Login');
        appointmentPage.loginBtn.click();

        cy.log('v. Set the following values:');
        cy.log('1. Facility - Seoul CURA Healthcare Center');
        appointmentPage.facilitySelect.select('Seoul CURA Healthcare Center');
        
        cy.log('2. Check - Apply for hospital readmission');
        appointmentPage.readmissionCheckbox.check();
        
        cy.log('3. Select - Medicaid');
        appointmentPage.medicaidRadio.check();
        
        cy.log('4. Set Date value by using the widget - 30');
        appointmentPage.dateField.click();
        cy.get('.datepicker-days .day').not('.old').contains('30').click();
        
        cy.log('5. Set comment - CURA Healthcare Service');
        appointmentPage.commentField.type('CURA Healthcare Service');
        
        cy.log('6. Click - Book Appointment');
        appointmentPage.bookBtn.click();

        cy.log('vi. Validate that previously set values are correct');
        appointmentPage.facilityValue.should('have.text', 'Seoul CURA Healthcare Center');
        appointmentPage.readmissionValue.should('have.text', 'Yes');
        appointmentPage.programValue.should('have.text', 'Medicaid');
        appointmentPage.visitDateValue.should('contain', '30');
        appointmentPage.commentValue.should('have.text', 'CURA Healthcare Service');
    });

    it('b. Scenario 2 - Appointment history empty', () => {
        cy.log('b. Scenario 2 - Appointment history empty');
        cy.log('i. Open https://katalon-demo-cura.herokuapp.com/');
        cy.visit('https://katalon-demo-cura.herokuapp.com/');

        cy.log('ii. Click - Make Appointment');
        appointmentPage.makeAppointmentBtn.click();

        cy.log('iii. Set username and password fields with the demo account credentials');
        appointmentPage.usernameField.type('John Doe');
        appointmentPage.passwordField.type('ThisIsNotAPassword');

        cy.log('iv. Click - Login');
        appointmentPage.loginBtn.click();

        cy.log('v. Click - Menu/Stack/Burger icon');
        appointmentPage.menuToggle.click();

        cy.log('vi. Validate that the sidebar is active');
        appointmentPage.sidebarWrapper.should('have.class', 'active');

        cy.log('vii. Click - History');
        appointmentPage.historyLink.click();

        cy.log('viii. Validate that - No appointment - is visible');
        appointmentPage.noAppointmentMessage.should('be.visible');
    });
});