export class Dreamsdiary{
    constructor(page){
        this.page = page;
        this.row = page.locator('table tbody tr')
    }

async goto(){
    await this.page.goto('https://arjitnigam.github.io/myDreams/dreams-diary.html')
}
}