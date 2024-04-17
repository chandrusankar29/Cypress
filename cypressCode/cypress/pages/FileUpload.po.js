class fileUpload{

    myInfoSection(){

        return 'My Info'
    }

    ProfileClick(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-navigation > div.orangehrm-edit-employee-imagesection > div.orangehrm-edit-employee-image-wrapper > div > img'
    }

    imageupload(){
        return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div > form > div.oxd-form-row > div > div > div:nth-child(2) > div > button > i'
    }


}


const file = new fileUpload()

export default file;