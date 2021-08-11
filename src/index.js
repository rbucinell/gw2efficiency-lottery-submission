const pw = require('playwright');
require('dotenv').config();

(async ()=>{

    //Setup Browswer
    const browser = await pw[process.env.DRIVER].launch();
    const context = await browser.newContext();
    const page    = await context.newPage();

    //Do work
    await page.goto('https://gw2efficiency.com/community/lottery');
    await page.fill('input[type="text"]', process.env.GW2ACCT);
    await page.click('.enter-button');
    
    //Close when finished
    await browser.close();
})();