import { Locator, Page, expect } from '@playwright/test';


export class PaymentMethodPage {
    page: Page
    creditCardOption: Locator
    nextButton: Locator
    
    constructor(page:Page){
        this.page = page
        this.creditCardOption = page.locator('//span[contains(@class,"ant-radio-checked")]/input[@value="creditCard"]')
        this.nextButton = page.locator('//span[text()="Next"]')
    }

    async selectedCreditCardOptionShouldBeDisplayed(){
        await expect(this.creditCardOption).toBeVisible()
    }

    async clickNextButton(){
        await this.nextButton.click()
    }

}