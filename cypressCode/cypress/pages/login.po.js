class login{

    usernameInput(){

        return 'input[name="username"]'
    }

    passwordInput(){

        return 'input[name="password"]'
    }

    submit(){
        return 'button[type="submit"]'
    }

    errorMessage(){
        return 'Invalid credentials'
    }
    OptionDropDown(){
        return '#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > span > i'
    }
    logout(){
        return '#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > ul > li:nth-child(4) > a'
    }


}


const log = new login()

export default log;