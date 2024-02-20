import { Locator, Page, expect } from '@playwright/test';
import testdata from '../../testdata/testdata.json';

export class SignupPage {
    page: Page
    userIcon: Locator
    signupButton: Locator
    usernameBox: Locator
    passwordBox: Locator
    confirmPasswordBox: Locator
    signupSuccessfulText: Locator
    okButton: Locator
    
    constructor(page:Page){
        this.page = page
        this.usernameBox = page.locator('#basic_username')
        this.passwordBox = page.locator('#basic_password')
        this.confirmPasswordBox = page.locator('#basic_confirmPassword')
        this.signupButton = page.locator('//span[text()="SIGNUP"]')
        this.signupSuccessfulText = page.getByText('Register successfully')
        this.okButton = page.getByRole('button', {name: 'OK'})

    }
    
    async pageShouldBeSignupPage(){
        await expect(this.page).toHaveURL(testdata.web_url.register_url)
    }

    async inputUsername(username: string){
        await this.usernameBox.fill(username)
    }

    async inputPassword(password: string){
        await this.passwordBox.fill(password)
    }

    async inputConfirmPassword(confirmPassword: string){
        await this.confirmPasswordBox.fill(confirmPassword)
    }

    async clickSignupButton(){
        await this.signupButton.click()
    }

    async signupSuccessfullyMessageShouldBeDisplayed(){
        await expect(this.signupSuccessfulText).toBeVisible()
    }

    async clickOkButton(){
        await this.okButton.click()
    }
}