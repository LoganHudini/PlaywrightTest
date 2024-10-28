import { test, expect } from '@playwright/test';
const tdata =JSON.parse(JSON.stringify(require('../tests/testdata.json')))

  class CreateComponents{
    page: any;
    Designconfig: any;
    search: any;
    newPage: any;
    addcompbtn: any;
    carousals: any;
    Bcarousals: any;
    target: any;
    H2title: any;
    H3title: any;
    imageaddbtn: any;
    imageupbtn: any;
    img: any;
    redactivebtn: any;
    exbtn: any;
    link: any;
    viewall: any;
    slide2: any;
    slide3: any;
    slide4: any;
    button: any;
    buttonwithicon: any;
    target1: any;
    Bpagescroll: any;
    Bh2title: any;
    btntitle: any;
    Bexternal: any;
    blink: any;
    bslide2: any;
    bslide3: any;
    elevate: any;
    elevatecomp: any;
    target2: any;
    hotelmodule: any;
    drop: any;
    submodule: any;
    drop1: any;
    saveasDraft: any;
    bimg1: any;
    bimg2: any;
    saveAsDraftToastMessage: any;

    constructor(page){
        this.page = page;

        this.Designconfig = page.getByText('Design Configs');
        this.search = page.locator("//input[@type='text']");
        this.newPage = page.getByText(tdata.credentials.pagename);
        this.addcompbtn = page.locator("(//span[@class='MuiButton-label'])[4]");
        this.carousals = page.locator("//div[@id='carousals']");
        this.Bcarousals = page.locator("//div[text()='2B - Landscape Carousel']");
        this.target = page.locator('//div[text()="Drag & Drop component here"]');
        this.H2title = page.getByRole('textbox').first();
        this.H3title = page.locator("//div[@class='MuiFormControl-root MuiTextField-root col-md-12 mt-3']//input[@type='text']");
        this.imageaddbtn = page.locator('input[type=file]');
        this.imageupbtn = page.locator('.img-select');
        this.img = page.locator('img[alt="SelectedImage"]');
        this.redactivebtn = page.locator("//input[@value='redirect_status_active']");
        this.exbtn = page.locator("//input[@value='EXTERNAL']");
        this.link = page.locator("//textarea[@id='external_link_input']");
        this.viewall = page.locator("//div[@class='row align-items-center mb-2 mt-3']//label[@class='MuiFormControlLabel-root']");
        this.slide2 = page.locator("(//span[@class='MuiTab-wrapper'])[2]");
        this.slide3 = page.locator("(//span[@class='MuiTab-wrapper'])[3]");
        this.slide4 = page.locator("(//span[@class='MuiTab-wrapper'])[4]");
        this.button = page.locator("//div[@id='buttons']");
        this.buttonwithicon = page.locator('//div[contains(text(),"Button with Icon")]');
        this.target1 = page.locator("//div[@class='page-builder-scroll scroll-styled']"); 
        this.Bpagescroll = page.locator("//div[@class='col-md-10 mt-4']//div[@class='MuiFormControl-root MuiTextField-root col-md-12']");
        this.Bh2title = page.locator("//div[@class='col-md-10 mt-4']//input[@type='text']");
        this.btntitle = page.locator("//div[@class='col-md-12 mt-2']//input[@type='text']");
        this.bimg1 = page.locator('input[type=file]').nth(1);
        this.bimg2 = page.locator('input[type=file]').nth(2);
        this.Bexternal = page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//input[@value='EXTERNAL']");
        this.blink = page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//textarea[@id='external_link_input']");
        this.bslide2 = page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//span[text()='Button 2']");
        this.bslide3 = page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//span[text()='Button 3']");
        this.elevate = page.locator("//div[@id='elevate-component']");
        this.elevatecomp = page.locator('//div[contains(text(),"Detail Page")]');
        this.target2 = page.locator("//div[@class='page-builder-scroll scroll-styled']"); 
        this.hotelmodule = page.locator("((//div[@class='page-builder-component-item'])[3]//label[@id='hotel-module-'])[1]");
        this.drop = page.getByRole('option', { name: 'Offers' });
        this.submodule = page.locator("((//div[@class='page-builder-component-item'])[3]//div[@class='MuiFormControl-root w-100'])[2]");
        this.drop1 = page.getByRole('option', { name: 'Test Notification' });
        this.saveasDraft = page.locator("//span[text()='Save as Draft']");
        this.saveAsDraftToastMessage = page.locator("//div[@class='rnc__notification-message']")
   

    }
    async navigateToNewpage(pageName){
        await this.Designconfig.click();
        await this.search.click();
        await this.search.fill(pageName);
        await this.newPage.click();

    }
    async addCarousals(){
        await this.addcompbtn.click();
        await this.carousals.click();
        await this.Bcarousals.dragTo(this.target);
        await this.H2title.click();
        await this.H2title.fill(tdata.credentials.H2title);
        await this.page.waitForTimeout(500);
        expect(this.H2title).toHaveValue(tdata.credentials.H2title);
        await this.H3title.click();
        await this.H3title.fill(tdata.credentials.slide1);
        await this.page.waitForTimeout(500);
        expect(this.H3title).toHaveValue(tdata.credentials.slide1);
        this.imageaddbtn.scrollIntoViewIfNeeded();
        await this.imageaddbtn.setInputFiles('./testData/Lan.jpg');
        await this.page.waitForTimeout(500);
        expect(this.img).toBeVisible();
        await this.redactivebtn.click();
        await this.exbtn.click();
        await this.link.click();
        await this.link.fill(tdata.credentials.hotelurl);
        expect(this.link).toContainText(tdata.credentials.hotelurl);

        //slide2:
        await this.slide2.click();
        await this.H3title.fill(tdata.credentials.slide2);
        await this.page.waitForTimeout(500);
        expect(this.H3title).toHaveValue(tdata.credentials.Slide2);
        this.imageaddbtn.scrollIntoViewIfNeeded();
        await this.imageaddbtn.setInputFiles('./testData/Lan.jpg');
        await this.page.waitForTimeout(500);
        expect(this.img).toBeVisible();
        await this.redactivebtn.click();
        await this.exbtn.click();
        await this.link.click();
        await this.link.fill(tdata.credentials.hotelurl);
        expect(this.link).toContainText(tdata.credentials.hotelurl);

        //slide3:
        await this.slide3.click();
        await this.H3title.fill(tdata.credentials.slide3);
        await this.page.waitForTimeout(500);
        expect(this.H3title).toHaveValue(tdata.credentials.slide3);
        this.imageaddbtn.scrollIntoViewIfNeeded();
        await this.imageaddbtn.setInputFiles('./testData/Lan.jpg');
        await this.page.waitForTimeout(500);
        expect(this.img).toBeVisible();
        await this.redactivebtn.click();
        await this.exbtn.click();
        await this.link.click();
        await this.link.fill(tdata.credentials.hotelurl);
        expect(this.link).toContainText(tdata.credentials.hotelurl);

        //slide4:
        await this.slide4.click();
        await this.H3title.fill(tdata.credentials.slide4);
        await this.page.waitForTimeout(500);
        expect(this.H3title).toHaveValue(tdata.credentials.slide4);
        this.imageaddbtn.scrollIntoViewIfNeeded();
        await this.imageaddbtn.setInputFiles('./testData/Lan.jpg');
        await this.page.waitForTimeout(500);
        expect(this.img).toBeVisible();
        await this.redactivebtn.click();
        await this.exbtn.click();
        await this.link.click();
        await this.link.fill(tdata.credentials.hotelurl);
        expect(this.link).toContainText(tdata.credentials.hotelurl);

    }
    async buttonComponent(){
        await this.button.scrollIntoViewIfNeeded();
        await this.button.click();
        await this.buttonwithicon.dragTo(this.target1);
        await this.Bpagescroll.scrollIntoViewIfNeeded();
        await this.Bh2title.click();
        await this.Bh2title.fill(tdata.credentials.buttonname);
        await this.page.waitForTimeout(500);
        expect(this.Bh2title).toContainText(tdata.credentials.buttonname);
        await this.btntitle.click();
        await this.btntitle.fill(tdata.credentials.buttontitle);
        await this.page.waitForTimeout(500);
        expect(this.Bh2title).toContainText(tdata.credentials.buttontitle);
        await this.bimg1.scrollIntoViewIfNeeded();
        await this.bimg1.setInputFiles('./testData/Rest.jpg');
        await this.page.waitForTimeout(500);
        expect(this.img).toBeVisible();
        await this.bimg2.setInputFiles('./testData/Spa.jpg');
        await this.page.waitForTimeout(500);
        expect(this.img).toBeVisible();
        await this.Bexternal.click();
        await this.blink.click
        await this.blink.fill(tdata.credentials.hotelurl);
        expect(this.blink).toContainText(tdata.credentials.hotelurl);

        //slide2:
        await this.bslide2.click();
        await this.btntitle.click();
        await this.btntitle.fill(tdata.credentials.buttontitle);
        await this.page.waitForTimeout(500);
        expect(this.Bh2title).toContainText(tdata.credentials.buttontitle);
        await this.bimg1.scrollIntoViewIfNeeded();
        await this.bimg1.setInputFiles('./testData/Rest.jpg');
        await this.page.waitForTimeout(500);
        expect(this.img).toBeVisible();
        await this.bimg2.setInputFiles('./testData/Spa.jpg');
        await this.page.waitForTimeout(500);
        expect(this.img).toBeVisible();
        await this.Bexternal.click();
        await this.blink.click
        await this.blink.fill(tdata.credentials.hotelurl);
        expect(this.blink).toContainText(tdata.credentials.hotelurl);

        //slide3:
        await this.bslide3.click();
        await this.btntitle.click();
        await this.btntitle.fill(tdata.credentials.buttontitle);
        await this.page.waitForTimeout(500);
        expect(this.Bh2title).toContainText(tdata.credentials.buttontitle);
        await this.bimg1.scrollIntoViewIfNeeded();
        await this.bimg1.setInputFiles('./testData/Rest.jpg');
        await this.page.waitForTimeout(500);
        expect(this.img).toBeVisible();
        await this.bimg2.setInputFiles('./testData/Spa.jpg');
        await this.page.waitForTimeout(500);
        expect(this.img).toBeVisible();
        await this.Bexternal.click();
        await this.blink.click
        await this.blink.fill(tdata.credentials.hotelurl);
        expect(this.blink).toContainText(tdata.credentials.hotelurl);


    }
    async addElevateComponents(){
        await this.elevate.click();
        await this.elevatecomp.dragTo(this.target2);
        await this.hotelmodule.click();
        await this.drop.click();
        await this.page.waitForTimeout(500);
        await this.submodule.click();
        await this.drop1.click();
        
   
    }
    async saveAsDraft(){
        await this.saveasDraft.click();
        await this.page.waitForTimeout(1000)
        const saveAsDraftToastMsg=await this.saveAsDraftToastMessage.textContent()
        expect(saveAsDraftToastMsg).toEqual(saveAsDraftToastMsg)
        console.log(saveAsDraftToastMsg)



    }
}
module.exports = CreateComponents;

