export class HomePage {
  constructor(page) {
    this.page = page;
    this.loader = page.locator('#loadingAnimation');
    this.mainContent = page.locator('#mainContent');
    this.myDreamsButton = page.locator('#dreamButton');
  }

  async goto() {
    await this.page.goto('https://arjitnigam.github.io/myDreams/');
  }
  async MyDreams() {
    await this.myDreamsButton.click();
  }

}