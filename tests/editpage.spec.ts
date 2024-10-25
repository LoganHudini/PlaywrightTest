import { test, expect } from '@playwright/test';


test.beforeEach('Loginpage', async ({ page }) => {
  
const tdata = require('../tests/testdata.json')

  await page.goto('https://cms.hudinielevate-stage.io/login', { timeout: 30000 }); 

  await page.waitForSelector('form');
  await page.locator('#email').fill(tdata.credentials.username);
  await page.locator('#password').fill(tdata.credentials.password);
  await page.locator('.MuiButton-label').click();
  const pageText = await page.textContent('body'); 
  expect(pageText).toContain('elevate');

  const element = await page.locator("//img[@alt='btn']");

  for(let i=0; i<3; i++){
    await element.click();
  }
  
   const Dashbordtext = await page.locator("//h4[@class='mt-4']")
   await Dashbordtext.waitFor({state:'visible', timeout:30000});
   await expect(Dashbordtext).toContainText('Dashboard')
  console.log('Login successful');



 
});


test('Edit Designpage', async({page})=> {
  test.setTimeout(60000);

 
const element = page.getByText('Design Configs');
await expect(element).toBeVisible();
await expect(element).toBeEnabled();
await element.click();

//Search designpage
await page.locator("//input[@type='text']").fill('About Leela');
const row = page.locator('tr', { hasText: 'About Leela' });
await expect(page.locator('tr:has-text("About Leela")')).toBeVisible({ timeout: 10000 });
await row.click();
const AboutleelaText = page.locator("//span[@class='page-title']"); 
await expect(AboutleelaText).toBeVisible();

//Edit Carousel
await page.locator("(//div[@class='px-2 mt-2 pointer image-details text-underlined'])[1]").click();
const fileInput = page.locator('input[type=file]').nth(0);
await fileInput.setInputFiles('./testData/Bar1.jpg');
await page.waitForSelector("(//img[@alt='SelectedImage'])[1]", { timeout: 10000 });
await page.waitForSelector("(//img[@alt='SelectedImage'])[1]", { state: 'visible' });

//Slide2:
await page.locator("(//span[@class='MuiTab-wrapper'])[2]").click();
await page.locator("(//div[@class='px-2 mt-2 pointer image-details text-underlined'])[1]").click();
const fileInput1 = page.locator('input[type=file]').nth(0);
await fileInput1.setInputFiles('./testData/Bar1.jpg');
await page.waitForSelector("(//img[@alt='SelectedImage'])[1]", { timeout: 10000 });
await page.waitForSelector("(//img[@alt='SelectedImage'])[1]", { state: 'visible' });

//Slide3:
await page.getByRole('button', { name: 'Slide 3' }).click();
await page.locator("(//div[@class='px-2 mt-2 pointer image-details text-underlined'])[1]").click();
const fileInput2 = page.locator('input[type=file]').nth(0);
await fileInput2.setInputFiles('./testData/Bar1.jpg');
await page.waitForSelector("(//img[@alt='SelectedImage'])[1]", { timeout: 10000 });
await page.waitForSelector("(//img[@alt='SelectedImage'])[1]", { state: 'visible' });

//Slide4:
await page.locator("(//span[@class='MuiTab-wrapper'])[4]").click();
await page.locator("(//div[@class='px-2 mt-2 pointer image-details text-underlined'])[1]").click();
const fileInput3 = page.locator('input[type=file]').nth(0);
await fileInput3.setInputFiles('./testData/Bar1.jpg');
await page.waitForSelector("(//img[@alt='SelectedImage'])[1]", { timeout: 10000 });
await page.waitForSelector("(//img[@alt='SelectedImage'])[1]", { state: 'visible' });

//Edit Button with icon:
await page.locator("(//div[@class='px-2 mt-2 pointer image-details text-underlined'])[2]").click();
const fileInput4 = page.locator('input[type=file]').nth(1);
await fileInput4.setInputFiles('./testData/Rest1.jpg');
await page.waitForSelector("(//img[@alt='SelectedImage'])[2]", { timeout: 10000 });
await page.waitForSelector("(//img[@alt='SelectedImage'])[2]", { state: 'visible' });

// const rem = await page.waitForSelector("((//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//div[@class='px-2 mt-2 pointer image-details text-underlined'])[2]", { timeout: 10000 });
// await rem.click();
const fileInput5 = page.locator('input[type=file]').nth(2);
await fileInput5.setInputFiles('./testData/Spa1.jpg');
await page.waitForSelector("(//img[@alt='SelectedImage'])[3]", { timeout: 10000 });
await page.waitForSelector("(//img[@alt='SelectedImage'])[3]", { state: 'visible' });

//Slide2:
await page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//span[text()='Button 2']").click();
await page.locator("(//div[@class='px-2 mt-2 pointer image-details text-underlined'])[2]").click();
const fileInput6 = page.locator('input[type=file]').nth(1);
await fileInput6.setInputFiles('./testData/Rest1.jpg');
await page.waitForSelector("(//img[@alt='SelectedImage'])[2]", { timeout: 10000 });
await page.waitForSelector("(//img[@alt='SelectedImage'])[2]", { state: 'visible' });

await page.locator("(//div[@class='px-2 mt-2 pointer image-details text-underlined'])[3]").click();
const fileInput7 = page.locator('input[type=file]').nth(2);
await fileInput7.setInputFiles('./testData/Spa1.jpg');
await page.waitForSelector("(//img[@alt='SelectedImage'])[3]", { timeout: 10000 });
await page.waitForSelector("(//img[@alt='SelectedImage'])[3]", { state: 'visible' });

//Slide3:
await page.locator("(//div[@class='col-md-12 mt-1 mx-0 px-2 custom-accordion-body'])[2]//span[text()='Button 3']").click();
await page.locator("(//div[@class='px-2 mt-2 pointer image-details text-underlined'])[2]").click();
const fileInput8 = page.locator('input[type=file]').nth(1);
await fileInput8.setInputFiles('./testData/Rest1.jpg');
await page.waitForSelector("(//img[@alt='SelectedImage'])[2]", { timeout: 10000 });
await page.waitForSelector("(//img[@alt='SelectedImage'])[2]", { state: 'visible' });

await page.locator("(//div[@class='px-2 mt-2 pointer image-details text-underlined'])[3]").click();
const fileInput9 = page.locator('input[type=file]').nth(2);
await fileInput9.setInputFiles('./testData/Spa1.jpg');
await page.waitForSelector("(//img[@alt='SelectedImage'])[3]", { timeout: 10000 });
await page.waitForSelector("(//img[@alt='SelectedImage'])[3]", { state: 'visible' });


await page.waitForSelector("//span[text()='Save as Draft']", { timeout: 10000 });
await page.locator("//span[text()='Save as Draft']").click();


});