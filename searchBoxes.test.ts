import { test, chromium, expect,ElementHandle,Page } from "@playwright/test";

    test('Open', async()=>{
        const browser = await chromium.launch({
           headless : false
        })

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://automatenow.io/sandbox-automation-testing-practice-website/') 
        await page.click('//*[@id="post-399"]/div/div[3]/div/div[2]/div[17]/div/a')
        await page.click('//*[@id="wp-block-search__input-1"]')
        await page.fill('//*[@id="wp-block-search__input-1"]','Java')
        await page.click('//*[@id="post-1061"]/div/form/div/button')
    })