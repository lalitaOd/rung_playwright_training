import { Locator, Page, expect } from '@playwright/test';


export class ProductDetailPage {
    page: Page
    addToCartButton: Locator
    addCartSuccessfulText: Locator
    okButton: Locator
    cartIcon: Locator
    
    constructor(page:Page){
        this.page = page
        this.addToCartButton = page.locator('//span[text()="Add to cart"]')
        this.addCartSuccessfulText = page.getByText('Add product successfully')
        this.okButton = page.getByRole('button', {name: 'OK'})
        this.cartIcon = page.locator('//div[@class="icon-portion"]//span[contains(@class, "anticon-shopping-cart")]').locator('visible=true')
    }

    async clickAddToCart(){
        await this.addToCartButton.click()
    }

    async addCartSuccessfulMessageShouldBeDisplayed(){
        await expect(this.addCartSuccessfulText).toBeVisible()
    }

    async clickOkButton(){
        await this.okButton.click()
    }

    async clickCartIcon(){
        await this.cartIcon.click()
    }

}