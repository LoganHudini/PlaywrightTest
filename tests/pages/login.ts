
import { test, expect } from '@playwright/test';
const tdata =JSON.parse(JSON.stringify(require('../tests/testdata.json')))
class Loginpage{
    page: any;
    emailfield: any;
    passfield: any;
    loginbtn: any;
    arrowbtn: any;
    constructor(page: any) {
        this.page = page;
        this.emailfield = page.locator('#email');
        this.passfield = page.locator('#password');
        this.loginbtn = page.locator('.MuiButton-label');
        this.arrowbtn = page.locator("//img[@alt='btn']");
        
    }
    async navigatetoCMS(){
        await this.page.goto(tdata.credentials.url);

    }
    async loginCMS(username,password){
        await this.emailfield.fill(username);
        await this.passfield.fill(password);
        await this.loginbtn.click();
        await this.arrowbtn.click({clickCount: 3});

        
    }
}
module.exports=Loginpage;