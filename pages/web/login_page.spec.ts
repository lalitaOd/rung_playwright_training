import { Locator, Page, expect } from '@playwright/test';


export class LoginPage {
    page: Page
    userIcon: Locator
    signupButton: Locator
    
    constructor(page:Page){
        this.page = page
        this.userIcon = page.locator('//div[@class="icon-portion"]//span[contains(@class, "anticon-user")]').locator('visible=true')
        this.signupButton = page.locator('//span[text()="Sign up"]')
    }

    async pageShouldBeLoginUrl(){
        await expect(this.page).toHaveURL('https://training-platform.doppio-tech.com/login')
    }

    async clickSignupButton(){
        await this.signupButton.click()
    }

}