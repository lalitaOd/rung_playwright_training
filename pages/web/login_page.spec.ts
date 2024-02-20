import { Locator, Page, expect } from '@playwright/test';
import testdata from '../../testdata/testdata.json';

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
        await expect(this.page).toHaveURL(testdata.web_url.login_url)
    }

    async clickSignupButton(){
        await this.signupButton.click()
    }

}