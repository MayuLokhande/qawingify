import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/homePage.js';

test('Core UI Functional Test Automation', async ({ page, context }) => {
  const home = new HomePage(page);

  await home.goto();
   await page.screenshot({
    path: 'screenshots/loading.png',
    fullPage: true
  });
  await expect(home.loader).toBeVisible();
  await expect(home.loader).toBeHidden({ timeout: 4000 });;
  await expect(home.mainContent).toBeVisible();
  await expect(home.myDreamsButton).toBeVisible();

const [tab1, tab2] = await Promise.all([
  context.waitForEvent('page'),
  context.waitForEvent('page'),
  home.MyDreams()
]);

await tab1.waitForLoadState();
await tab2.waitForLoadState();

const urls = [tab1.url(), tab2.url()];


expect(urls.length).toBe(2);

urls.forEach(url => {
  expect(
    url.includes('dreams-diary.html') ||
    url.includes('dreams-total.html')
  ).toBeTruthy();
})

 await page.screenshot({
    path: 'screenshots/home-success.png',
    fullPage: true
  });
});
