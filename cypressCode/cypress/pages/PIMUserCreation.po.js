class PIMUserCreation{

    PIMSection(){

        return '#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(2) > a > span'
    }

    AddButton(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-header-container > button'
    }

    PIMFirstName(){
        return 'input[name="firstName"]'
    }

    PIMMiddleName(){
        return 'input[name="middleName"]'
    }

    PIMLastName(){
        return 'input[name="lastName"]'
    }

    EmployeeID(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2) > input'
    }

    SaveButton1(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space'
    }

    otherID(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > input'
    }

    driverLicenseNumber(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > input'
    }

    licenseExpiryDate(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div > div > input'
    }

    NationalityDropDown(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text--after > i'
    }

    nationalityValue(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(2)'
    }

    martialStatusDropDown(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div > div > div.oxd-select-text--after > i'
    }

    martialStatusValue(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(2)'
    }

    DOB(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > div > div > input'
    }

    Gender(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div > div.--gender-grouped-field > div:nth-child(1) > div:nth-child(2) > div > label > span'
    }

    bloodType(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-custom-fields > div > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text--after > i'
    }

    bloodValue(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-custom-fields > div > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(2) > span'
    }

    saveButton2(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-custom-fields > div > form > div.oxd-form-actions > button'
    }

   

}


const PIM = new PIMUserCreation()

export default PIM;