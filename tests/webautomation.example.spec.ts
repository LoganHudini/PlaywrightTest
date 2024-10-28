import { test, expect } from '@playwright/test';

import tdata from '../tests/testdata.json';
const url = 'https://cms.hudinielevate-stage.io/login'.trim();

test.beforeEach('Loginpage', async ({ page }) => {
  
  await page.goto(url, { timeout: 30000 }); 

  await page.waitForSelector('form');
  await page.locator('#email').fill(tdata.credentials.username);
  await page.locator('#password').fill(tdata.credentials.password);
  await page.locator('.MuiButton-label').click();
  const pageText = await page.textContent('body'); 
  expect(pageText).toContain('elevate');

  const element =page.locator("//img[@alt='btn']");

  for(let i=0; i<3; i++){
    await element.click();
  }
  
   const Dashbordtext = await page.locator("//h4[@class='mt-4']")
   await Dashbordtext.waitFor({state:'visible', timeout:30000});
   await expect(Dashbordtext).toContainText('Dashboard')
  console.log('Login successful');



 
});


test('Create Carousels', async({page})=> {
test.setTimeout(100000);

 
const element = page.getByText('Design Configs');
await expect(element).toBeVisible();
await expect(element).toBeEnabled();
await element.click();


  await page.getByRole('button', { name: 'Add Page' }).click();
  await page.locator("//textarea[@id='name_input']").click();
  await page.locator("//textarea[@id='name_input']").fill(tdata.credentials.pagename);
  await page.getByRole('button', { name: 'Add' }).click();
  const toastMessage = page.locator("//div[@class='rnc__notification-message']");
  //await expect(toastMessage).toBeVisible();  
  //await expect(toastMessage).toHaveText('Page created successfully');
  await page.waitForSelector('//div[@class="rnc__notification-message"]', { timeout: 10000 });
  await expect(page.locator('//div[@class="rnc__notification-message"]')).toHaveText("Page created successfully");
  console.log('Page created successfully')

  await page.locator("//input[@type='text']").fill(tdata.credentials.pagename);
  const row = page.locator('tr', { hasText: 'About Leela' });
  await expect(page.locator('tr:has-text("About Leela")')).toBeVisible({ timeout: 10000 });
  await row.click();
  const AboutleelaText = page.locator("//span[@class='page-title']"); 
  await expect(AboutleelaText).toBeVisible();
  await page.locator("(//span[@class='MuiButton-label'])[4]").click();

  await page.locator("//div[@id='carousals']").click();
  page.locator("//div[text()='2B - Landscape Carousel']");
  const sourceElement = page.locator('//div[text()="2B - Landscape Carousel"]');
  const targetElement = page.locator('//div[text()="Drag & Drop component here"]');
  await sourceElement.dragTo(targetElement, { timeout: 60000 }); 

  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('Hotels');
  const inputLocator = page.locator("//div[@class='MuiFormControl-root MuiTextField-root col-md-12 mt-3']//input[@type='text']");
  await inputLocator.fill(tdata.credentials.slide1);

  //await page.click("//div[@class='d-flex align-items-center img-select justify-content-center']");
  const fileInput = page.locator('input[type=file]');
  await fileInput.setInputFiles('./testData/Lan.jpg');
  await page.waitForSelector('img[alt="SelectedImage"]', { state: 'visible' });
  
  await page.locator("//input[@value='redirect_status_active']").click();
  await page.waitForSelector("//input[@value='EXTERNAL']", { timeout: 10000 });
  await page.locator("//input[@value='EXTERNAL']").isEnabled();
  await page.locator("//input[@value='EXTERNAL']").click();

  await page.locator("//textarea[@id='external_link_input']").fill(tdata.credentials.hotelurl);
  await page.locator("//div[@class='row align-items-center mb-2 mt-3']//label[@class='MuiFormControlLabel-root']").waitFor({timeout:40000});
  await page.locator("//input[@value='view_all_status_inactive']").isEnabled();
  await page.locator("//input[@value='view_all_status_inactive']").click();




// Slide 2:
  await page.locator("(//span[@class='MuiTab-wrapper'])[2]").click();
  const inputLocator1 = page.locator("//div[@class='MuiFormControl-root MuiTextField-root col-md-12 mt-3']//input[@type='text']");
  await inputLocator1.fill(tdata.credentials.slide2);

//await page.click("//div[@class='d-flex align-items-center img-select justify-content-center']");
const fileInput1 = page.locator('input[type=file]');
await fileInput1.setInputFiles('./testData/Lan.jpg');
await page.waitForSelector('img[alt="SelectedImage"]', { state: 'visible' });
  
  await page.locator("//input[@value='redirect_status_active']").click();
  await page.waitForSelector("//input[@value='EXTERNAL']", { timeout: 10000 });
  await page.locator("//input[@value='EXTERNAL']").isEnabled();
  await page.locator("//input[@value='EXTERNAL']").click();

  await page.locator("//textarea[@id='external_link_input']").fill(tdata.credentials.hotelurl);

  //Slide 3:
  await page.getByRole('button', { name: 'Slide 3' }).click();
  const inputLocator2 = page.locator("//div[@class='MuiFormControl-root MuiTextField-root col-md-12 mt-3']//input[@type='text']");
  await inputLocator2.fill(tdata.credentials.slide3);

  //await page.click("//div[@class='d-flex align-items-center img-select justify-content-center']");
  const fileInput2 = page.locator('input[type=file]');
  await fileInput2.setInputFiles('./testData/Lan.jpg');
  await page.waitForSelector('img[alt="SelectedImage"]', { state: 'visible' });
  
  await page.locator("//input[@value='redirect_status_active']").click();
  await page.waitForSelector("//input[@value='EXTERNAL']", { timeout: 10000 });
  await page.locator("//input[@value='EXTERNAL']").isEnabled();
  await page.locator("//input[@value='EXTERNAL']").click();

  await page.locator("//textarea[@id='external_link_input']").fill(tdata.credentials.hotelurl);

  //Slide 4:
  await page.locator("(//span[@class='MuiTab-wrapper'])[4]").click();
  const inputLocator3 = page.locator("//div[@class='MuiFormControl-root MuiTextField-root col-md-12 mt-3']//input[@type='text']");
  await inputLocator3.fill(tdata.credentials.slide4);

  //await page.click("//div[@class='d-flex align-items-center img-select justify-content-center']");
  const fileInput3 = page.locator('input[type=file]');
  await fileInput3.setInputFiles('./testData/Lan.jpg');
  await page.waitForSelector('img[alt="SelectedImage"]', { state: 'visible' });
  
  await page.locator("//input[@value='redirect_status_active']").click();
  await page.waitForSelector("//input[@value='EXTERNAL']", { timeout: 10000 });
  await page.locator("//input[@value='EXTERNAL']").isEnabled();
  await page.locator("//input[@value='EXTERNAL']").click();

  await page.locator("//textarea[@id='external_link_input']").fill(tdata.credentials.hotelurl);

//BUTTON WITH ICON(S)
await page.locator("//div[@id='buttons']").click();

await page.locator('//div[contains(text(),"Button with Icon")]');
const sourceElement1 = page.locator('//div[contains(text(),"Button with Icon")]'); 
const targetElement1 = page.locator("//div[@class='page-builder-scroll scroll-styled']"); 
await sourceElement1.dragTo(targetElement1); 

//Slide 1:
await page.locator("//div[@class='col-md-10 mt-4']//div[@class='MuiFormControl-root MuiTextField-root col-md-12']").scrollIntoViewIfNeeded();
await page.locator("//div[@class='col-md-10 mt-4']//input[@type='text']").fill(tdata.credentials.buttonname)
await page.locator("//div[@class='col-md-12 mt-2']//input[@type='text']").fill(tdata.credentials.buttontitle);
const fileInput4 = page.locator('input[type=file]').nth(1);
await fileInput4.setInputFiles('./testData/Rest.jpg');
await page.waitForSelector('img[alt="SelectedImage"]', { state: 'visible' });

const fileInput7 = page.locator('input[type=file]').nth(2);
await fileInput7.setInputFiles('./testData/Spa.jpg');
await page.waitForSelector('img[alt="SelectedImage"]', { state: 'visible' });
await page.waitForSelector("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//input[@value='EXTERNAL']", { timeout: 10000 });
await page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//input[@value='EXTERNAL']").isEnabled();
await page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//input[@value='EXTERNAL']").click();
await page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//textarea[@id='external_link_input']").fill(tdata.credentials.hotelurl);

//Slide 2:
await page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//span[text()='Button 2']").click();
await page.locator("//div[@class='col-md-12 mt-2']//input[@type='text']").fill(tdata.credentials.buttontitle1);
const fileInput5 = page.locator('input[type=file]').nth(1);
await fileInput5.setInputFiles('./testData/Rest.jpg');
await page.waitForSelector('img[alt="SelectedImage"]', { state: 'visible' });

const fileInput8 = page.locator('input[type=file]').nth(2);
await fileInput8.setInputFiles('./testData/Spa.jpg');
await page.waitForSelector('img[alt="SelectedImage"]', { state: 'visible' });
await page.waitForSelector("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//input[@value='EXTERNAL']", { timeout: 10000 });
await page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//input[@value='EXTERNAL']").isEnabled();
await page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//input[@value='EXTERNAL']").click();
await page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//textarea[@id='external_link_input']").fill(tdata.credentials.hotelurl);

//Slide 3:
await page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//span[text()='Button 3']").click();
await page.locator("//div[@class='col-md-12 mt-2']//input[@type='text']").fill(tdata.credentials.buttontitle2);
const fileInput6 = page.locator('input[type=file]').nth(1);
await fileInput6.setInputFiles('./testData/Rest.jpg');
await page.waitForSelector('img[alt="SelectedImage"]', { state: 'visible' });

const fileInput9 = page.locator('input[type=file]').nth(2);
await fileInput9.setInputFiles('./testData/Spa.jpg');
await page.waitForSelector('img[alt="SelectedImage"]', { state: 'visible' });
await page.waitForSelector("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//input[@value='EXTERNAL']", { timeout: 10000 });
await page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//input[@value='EXTERNAL']").isEnabled();
await page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//input[@value='EXTERNAL']").click();
await page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//textarea[@id='external_link_input']").fill(tdata.credentials.hotelurl);

//ELEVATE COMPONENTS
await page.locator("//div[@id='elevate-component']").click();

await page.locator('//div[contains(text(),"Detail Page")]');
const sourceElement2 = page.locator('//div[contains(text(),"Detail Page")]'); 
//const targetElement2 = page.locator("//div[@class='droppable page-builder-space']"); 
const targetElement2 = page.locator("//div[@class='page-builder-scroll scroll-styled']"); 
await sourceElement2.dragTo(targetElement2);

await page.locator("((//div[@class='page-builder-component-item'])[3]//label[@id='hotel-module-'])[1]").click();
await page.getByRole('option', { name: 'Offers' }).click();
await page.locator("((//div[@class='page-builder-component-item'])[3]//div[@class='MuiFormControl-root w-100'])[2]").click();
await page.getByRole('option', { name: 'Test Notification' }).click();

await page.waitForSelector("//span[text()='Save as Draft']", { timeout: 10000 });
await page.locator("//span[text()='Save as Draft']").click();



});







