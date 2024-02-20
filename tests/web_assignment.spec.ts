import { expect } from '@playwright/test';
import { test } from '../pages/fixtures'
import { sign } from 'crypto';
import testdata from '../testdata/testdata.json';

test('assignment web with fixture', async ({loginPage, signupPage, searchPage, productDetailPage, deliverInfoPage, paymentMethodPage, paymentCreditCardPage, paymentSuccessPage})=>{
  await searchPage.goToSearchPage()
  await searchPage.pageShouldContainTextDoppee()
  await searchPage.clickUserIcon()
  await loginPage.pageShouldBeLoginUrl()
  await loginPage.clickSignupButton()
  await signupPage.pageShouldBeSignupPage()
  await signupPage.inputUsername(testdata.username)
  await signupPage.inputPassword(testdata.password)
  await signupPage.inputConfirmPassword(testdata.confirm_password)
  await signupPage.clickSignupButton()
  await signupPage.signupSuccessfullyMessageShouldBeDisplayed()
  await signupPage.clickOkButton()

  await searchPage.searchProduct(testdata.search_product)
  await searchPage.submitSearchAction()
  const selectedProduct = await searchPage.getProductByIndex(testdata.product_index)
  await searchPage.allSearchedProductNameShouldContainExpectedKeyword(testdata.search_product)
  await searchPage.clickProductByIndex(testdata.product_index)

  await productDetailPage.clickAddToCart()
  await productDetailPage.addCartSuccessfulMessageShouldBeDisplayed()
  await productDetailPage.clickOkButton()
  await productDetailPage.clickCartIcon()
  await deliverInfoPage.selectedProductShouldBeDisplayed(selectedProduct)
  await deliverInfoPage.inputFirstname(testdata.firstname)
  await deliverInfoPage.inputLastname(testdata.lastname)
  await deliverInfoPage.inputAddress(testdata.address)
  await deliverInfoPage.inputPhoneNumber(testdata.phone_number)
  await deliverInfoPage.inputEmail(testdata.email)
  await deliverInfoPage.clickPayButton()

  await paymentMethodPage.selectedCreditCardOptionShouldBeDisplayed()
  await paymentMethodPage.clickNextButton()
  await paymentCreditCardPage.inputCardNumber(testdata.credit_card_number)
  await paymentCreditCardPage.inputExpiredDate(testdata.expired_date)
  await paymentCreditCardPage.inputCvc(testdata.cvc)
  await paymentCreditCardPage.inputOwnerName(testdata.card_owner_name)
  await paymentCreditCardPage.clickConfirm()
  await paymentCreditCardPage.paymentMessageSuccessfullyShouldBeDisplayed()
  await paymentCreditCardPage.clickOkButton()
  await paymentSuccessPage.paymentCompleteMessageShouldBeVisible()
  await paymentSuccessPage.itShouldNavigateToPaymentSuccessPageWithOrderId()
})
