import { Locator, Page, expect } from '@playwright/test';
import testdata from '../../testdata/testdata.json';


export class PaymentSuccessPage {
    page: Page
    paymentCompleteText: Locator
    orderInfo: Locator
    
    constructor(page:Page){
        this.page = page
        this.paymentCompleteText = page.getByText('Payment Complete')
        this.orderInfo = page.locator('.success-description')
    }

    async paymentCompleteMessageShouldBeVisible(){
        await expect(this.paymentCompleteText).toBeVisible()
    }

    async itShouldNavigateToPaymentSuccessPageWithOrderId(){
        const completeContent = await this.orderInfo.textContent()
        const arr: string[] | undefined = completeContent?.split('ORDER ID: ')[1].split(' ')
        const orderId = arr ? arr[0] : arr
        await expect(this.page).toHaveURL(`${testdata.web_url.payment_success_url}${orderId}`)
    }

}

