class claim{

    claimSection(){

        return '#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(11) > a > span'
    }

    assignClaim(){

        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div.orangehrm-paper-container > div.orangehrm-header-container > button > i'
    }


    EmployeeTextBox(){

        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div > div > div:nth-child(2) > div > div'
    }
    EmployeeDropdownclick(){
        return ' div[role="listbox"] div:nth-child(2) span:nth-child(1)'
    }


    RemarksTextBox(){

        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div > div > div:nth-child(2) > textarea'
    }
    
    EventDropDownClick(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text--after > i'
    }


    EventDropDownValue(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(2) > span'
    }

    CurrencyDropDownClick(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div.oxd-select-text--after > i'
    }


    CurrencyDropDownValue(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(2) > span'
    }

    ClickSave(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space'
    }




    

}


const cla = new claim()

export default cla;