import { Locator, Page, expect } from '@playwright/test';


export class SearchPage {
    page: Page
    userIcon: Locator
    searchBox: Locator
    expectedSearchLabel: Locator
    foundProduct: Locator
    
    constructor(page:Page){
        this.page = page
        this.userIcon = page.locator('//div[@class="icon-portion"]//span[contains(@class, "anticon-user")]').locator('visible=true')
        this.searchBox = page.getByPlaceholder('input search text')
        this.expectedSearchLabel = page.getByText('Eoppee phone').nth(1)
        this.foundProduct = page.locator('.ant-card-meta-title')
        
    }
    
    async goToSearchPage(){
        await this.page.goto('https://training-platform.doppio-tech.com/');
    }

    async pageShouldContainTextDoppee(){
        await expect(this.page.getByText('Doppee')).toBeVisible()
    }

    async clickUserIcon(){
        await this.userIcon.click()
    }

    async searchProduct(keyword: string){
        await this.searchBox.fill(keyword)
    }

    async submitSearchAction(){
        await this.page.keyboard.press('Enter')
    }

    async getProductByIndex(index: number){
        const selectedProduct = await this.foundProduct.nth(index).textContent() ?? 'can not get value'
        return selectedProduct
    }

    async allSearchedProductNameShouldContainExpectedKeyword(expectedKeyword: string){
        for(let i=0; i<=5; i++){
            let productTitle = await this.foundProduct.nth(i).textContent()
            expect(productTitle).toEqual(expect.stringContaining(expectedKeyword))
        }
    }

    async clickProductByIndex(index: number){
        await this.foundProduct.nth(index).click()
    }
    
}