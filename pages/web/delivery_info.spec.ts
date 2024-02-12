import { Locator, Page, expect } from '@playwright/test';


export class DeliverInfoPage {
    page: Page
    firstnameBox: Locator
    lastnameBox: Locator
    addressBox: Locator
    phoneNumberBox: Locator
    emailBox: Locator
    payButton: Locator
    
    constructor(page:Page){
        this.page = page
        this.firstnameBox = page.locator('#form_item_name')
        this.lastnameBox = page.locator('#form_item_surName')
        this.addressBox = page.locator('#form_item_address')
        this.phoneNumberBox = page.locator('#form_item_phone')
        this.emailBox = page.locator('#form_item_email')
        this.payButton = page.locator('//span[text()="PAY"]')
    }

    async selectedProductShouldBeDisplayed(selectedProduct: string){
        await expect(this.page.getByText(selectedProduct)).toBeVisible()
    }

    async inputFirstname(firstname: string){
        await this.firstnameBox.fill(firstname)
    }

    async inputLastname(lastname: string){
        await this.lastnameBox.fill(lastname)
    }

    async inputAddress(address: string){
        await this.addressBox.fill(address)
    }

    async inputPhoneNumber(phoneNumber: string){
        await this.phoneNumberBox.fill(phoneNumber)
    }

    async inputEmail(email: string){
        await this.emailBox.fill(email)
    }

    async clickPayButton(){
        await this.payButton.click()
    }

}

//   await expect(page.getByText(selectedProduct)).toBeVisible()
//   await page.locator('#form_item_name').fill('test')
//   await page.locator('#form_item_surName').fill('test')
//   await page.locator('#form_item_address').fill('test')
//   await page.locator('#form_item_phone').fill('0811111111')
//   await page.locator('#form_item_email').fill('r_test_pw53@gmail.com')
//   await page.locator('//span[text()="PAY"]').click()