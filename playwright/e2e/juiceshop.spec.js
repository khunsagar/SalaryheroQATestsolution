import {test } from '@playwright/test';
import  * as cartPage from '../pages/cart.page'
import * as action from '../../utility/login'
import * as address from '../pages/address.page'
import * as search from '../pages/searcproduct.page'

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running Test ${testInfo.title}`);
  await page.goto('/#/',{ waitUntil: 'networkidle' })
  await action.loginToShop(page)
});
test('Should validate customer can add 1 product to cart and add new address ', async ({ page }) => {
  await action.verifyUSerEmailAfterLogin(page)
  await cartPage.addToProductToCart(page)
  await cartPage.clickCartIcon(page)
  await cartPage.clickCheckoutButton(page)
  await address.clickAddNewAddressButton(page)
  await address.addNewAddress(page)
});

test('Should validate customer can add 2 product to cart and add new address ', async ({ page }) => {
  await action.verifyUSerEmailAfterLogin(page)
  await cartPage.addtwoProductToCartBasedOnName(page,'Apple Juice (1000ml) 1.99¤Add to Basket')
  await cartPage.addtwoProductToCartBasedOnName(page,'Apple Pomace 0.89¤Add to Basket')
  await cartPage.clickCartIcon(page)
  await cartPage.clickCheckoutButton(page)
  await address.clickAddNewAddressButton(page)
  await address.addNewAddress(page) 
});
test('Should validate customer can search product and verify search result dont have banana  ', async ({ page }) => {
  await search.clickSearchButton(page)
  await search.enterSearchKeyword(page,'Apple')
  await search.verifySearchResult(page)
});





