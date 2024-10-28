import { test, expect } from '@playwright/test';
const tdata =JSON.parse(JSON.stringify(require('../tests/testdata.json')))

class createDesinpage{
    page: any;
    designconfig: any;
    addpage: any;
    pageName: any;
    addBtn: any;
    pagetxt: any;
    toastmsg: any;
    constructor(page: any) {
        this.page = page;

        this.designconfig = page.getByText('Design Configs');
        this.addpage = page.getByRole('button', { name: 'Add Page' });
        this.pageName = page.locator("//textarea[@id='name_input']");
        this.addBtn = page.getByRole('button', { name: 'Add' });
        this.pagetxt = page.locator("//input[@type='text']");
        this.toastmsg = page.locator("//div[@class='rnc__notification-message']");

}
async navigateToDesign(){
    await this.designconfig.click();
}

async createDesignpage(){
    await this.addpage.click();
    await this.pageName.fill(tdata.credentials.pagename);
    await this.addBtn.click();
    const successtoastMsg = await this.toastmsg.textContent();
    expect(successtoastMsg).toContain(tdata.credentials.toastmsg);
    await this.page.waitForTimeout(500);

}
}
module.exports=createDesinpage;