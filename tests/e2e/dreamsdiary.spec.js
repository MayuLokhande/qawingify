import {test, expect} from '@playwright/test'
import {Dreamsdiary} from '../page-objects/dreamsDiary'
test('Validate table', async ({ page }) => {
    const diary = new Dreamsdiary(page);

    await diary.goto();
    
    await expect(diary.row).toHaveCount(10);
    const rcount = await diary.row.count()
    for(let i=0; i<rcount; i++){
        const rows = diary.row.nth(i)
        
        const dreamName = await rows.locator('td').nth(0).textContent()
        const daysAgo = await rows.locator('td').nth(1).textContent();
        const dreamType = await rows.locator('td').nth(2).textContent();

        expect(dreamName).not.toBe('');
        expect(daysAgo).not.toBe('');
        expect(dreamType).not.toBe('');


        expect(['Good', 'Bad']).toContain(dreamType)
    }

    await page.screenshot({
        path: 'screenshots/validate-table.png',
        fullPage: true
    });
});

test('Validate rows', async ({ page }) => { 

  const diary = new Dreamsdiary(page);

    await diary.goto();
    
    await expect(diary.row).toHaveCount(10);
    const rcount = await diary.row.count()
    let goodCount = 0;
    let badcount = 0;
    let recurringcount = 0;
    const dream = {}
    for(let i=0; i<rcount; i++){
        const rows = diary.row.nth(i)
        
        const dreamNames = (await rows.locator('td').nth(0).textContent());
        console.log("Name is ",dreamNames)
        const dreamTypes = (await rows.locator('td').nth(2).textContent());
        console.log("Type is ",dreamTypes)
    
    if (dreamTypes === 'Good') goodCount++;
    if (dreamTypes === 'Bad') badcount++;
    dream[dreamNames] = (dream[dreamNames] || 0) + 1;

    }

    for (const dreams in dream) {
    if (dream[dreams]>1) recurringcount ++;
   }
    expect(goodCount).toBe(6);
    expect(badcount).toBe(4);
    expect(rcount).toBe(10);
    expect(recurringcount).toBe(2);

    expect(dream['Flying over mountains']).toBeGreaterThan(1);
    expect(dream['Lost in maze']).toBeGreaterThan(1);

})



