import { Locator, Page, expect } from '@playwright/test';


export class PaymentCreditCardPage {
    page: Page
    cardNumberBox: Locator
    expiredBox: Locator
    cvcBox: Locator
    cardOwnerBox: Locator
    submitFormButton: Locator
    confirmButton: Locator
    paymentSuccessfulText: Locator
    okButton: Locator


    
    constructor(page:Page){
        this.page = page
        this.cardNumberBox = page.locator('#basic_bin')
        this.expiredBox = page.locator('#basic_exp')
        this.cvcBox = page.locator('#basic_cvc')
        this.cardOwnerBox = page.locator('#basic_owner')
        this.confirmButton = page.locator('//button/span[text()="Confirm Payment"]')
        this.paymentSuccessfulText = page.getByText('Payment successfully')
        this.okButton = page.getByRole('button', {name: 'OK'})
    }

    async inputCardNumber(cardNumber: string){
        await this.cardNumberBox.fill(cardNumber)
    }

    async inputExpiredDate(expiredDate:string){
        await this.expiredBox.fill(expiredDate)
    }

    async inputCvc(cvc:string){
        await this.cvcBox.fill(cvc)
    }

    async inputOwnerName(ownerName:string){
        await this.cardOwnerBox.fill(ownerName)
    }

    async clickConfirm(){
        await this.confirmButton.click()
    }

    async paymentMessageSuccessfullyShouldBeDisplayed(){
        await expect(this.paymentSuccessfulText).toBeVisible()
    }

    async clickOkButton(){
        await this.okButton.click()
    }
}