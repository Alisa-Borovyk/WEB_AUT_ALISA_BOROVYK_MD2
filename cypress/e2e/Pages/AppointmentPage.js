class AppointmentPage {
    // Элементы
    get makeAppointmentBtn() { return cy.get('#btn-make-appointment'); }
    get usernameField() { return cy.get('#txt-username'); }
    get passwordField() { return cy.get('#txt-password'); }
    get loginBtn() { return cy.get('#btn-login'); }
    
    // Поля формы
    get facilitySelect() { return cy.get('#combo_facility, select[name="facility"], select').first(); }
    get readmissionCheckbox() {
        return cy.get('#chk_hospital_readmission, input[type="checkbox"]').then($el => {
            return $el.length ? cy.wrap($el) : cy.contains('label', 'Apply for hospital readmission').find('input[type="checkbox"]');
        });
    }
    get medicaidRadio() {
        return cy.get('#radio_program_medicaid, input[type="radio"][value="Medicaid"]').then($el => {
            return $el.length ? cy.wrap($el) : cy.contains('label', 'Medicaid').find('input[type="radio"]');
        });
    }
    get dateField() { return cy.get('#txt_visit_date, input[placeholder*="Visit Date"], input[name="visit_date"]'); }
    get commentField() { return cy.get('#txt_comment, textarea[name="comment"], textarea').first(); }
    get bookBtn() { return cy.contains('button', 'Book Appointment'); }
    get menuToggle() { return cy.get('#menu-toggle'); }
    get sidebarWrapper() { return cy.get('#sidebar-wrapper'); }
    get historyLink() { return cy.get('#sidebar-wrapper').contains('a', 'History'); }
    get noAppointmentMessage() { return cy.contains('No appointment.'); }

    // Элементы для валидации (Confirmation page)
    get facilityValue() { return cy.get('#facility'); }
    get readmissionValue() { return cy.get('#hospital_readmission'); }
    get programValue() { return cy.get('#program'); }
    get visitDateValue() { return cy.get('#visit_date'); }
    get commentValue() { return cy.get('#comment'); }
}

export default new AppointmentPage();
