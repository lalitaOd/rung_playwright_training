import { test as base } from '@playwright/test';
import { LoginPage } from "./web/login_page.spec"
import { SignupPage } from "./web/signup_page.spec"
import { SearchPage } from "./web/search_page.spec"
import { ProductDetailPage } from "./web/product_detail.spec"
import { DeliverInfoPage } from './web/delivery_info.spec';
import { PaymentMethodPage } from './web/payment_method_page.spec';
import { PaymentCreditCardPage } from './web/payment_creditcard_page.spec';
import { PaymentSuccessPage } from './web/payment_success_page.spec';



export const test = base.extend<{ loginPage: LoginPage, signupPage: SignupPage, searchPage: SearchPage, 
  productDetailPage: ProductDetailPage, deliverInfoPage: DeliverInfoPage, paymentMethodPage: PaymentMethodPage,
  paymentCreditCardPage: PaymentCreditCardPage, paymentSuccessPage: PaymentSuccessPage }>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    signupPage: async ({ page }, use) => {
      await use(new SignupPage(page))
    },
    searchPage: async ({ page }, use) => {
      await use(new SearchPage(page))
    },
    productDetailPage: async ({ page }, use) => {
      await use(new ProductDetailPage(page))
    },
    deliverInfoPage: async ({ page }, use) => {
      await use(new DeliverInfoPage(page))
    },
    paymentMethodPage: async ({ page }, use) => {
      await use(new PaymentMethodPage(page))
    },
    paymentCreditCardPage: async ({ page }, use) => {
      await use(new PaymentCreditCardPage(page))
    },
    paymentSuccessPage: async ({ page }, use) => {
      await use(new PaymentSuccessPage(page))
    }
});