import { test, chromium, expect,ElementHandle,Page } from "@playwright/test";

    test('Open', async()=>{
        const browser = await chromium.launch({
           headless : false
        })

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://automatenow.io/sandbox-automation-testing-practice-website/') 
        await page.click('//*[@id="post-399"]/div/div[3]/div/div[1]/div[17]/div/a')
        await page.dblclick('//*[@id="moveMeHeader"]')

        let isCompleted=false;
        const s=await page.$('//*[@id="moveMeHeader"]')

if(s){
    let srcBound= await s.boundingBox();
    if(srcBound){
        while(!isCompleted){
            await page.mouse.move(srcBound.x +srcBound.width/2,srcBound.y +srcBound.height/2)
            await page.mouse.down();
            await page.mouse.move(srcBound.x+500,srcBound.y+srcBound.height/2)
            await page.mouse.up()
            isCompleted=true;
        }
    }
}
await page.pause()
    })