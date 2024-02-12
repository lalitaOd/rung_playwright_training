import { Locator, Page, expect } from '@playwright/test';


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
        await expect(this.page).toHaveURL(`https://training-platform.doppio-tech.com/paymentSuccess?id=${orderId}`)
    }

}


//   await expect(page.getByText('Payment Complete')).toBeVisible()
//   let completeContent = await page.locator('.success-description').textContent()
//   const arr: string[] | undefined = completeContent?.split('ORDER ID: ')[1].split(' ')
//   const orderId = arr ? arr[0] : arr
//   await expect(page).toHaveURL(`https://training-platform.doppio-tech.com/paymentSuccess?id=${orderId}`)
// });