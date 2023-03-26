import { expect} from '@playwright/test';
import * as url from '../fixtures/urls.json';
import * as data from '../fixtures/helperdetails.json';
import { CART_PAGE as LOCATOR } from '../locators';


export async function addToProductToCart(page)
{
  await page
    .locator(LOCATOR.ADD_TO_CART_BUTTON)
    .first()
    .click();
}

export async function clickCartIcon(page)
{
  await page
    .locator(LOCATOR.SHOW_SHOPPING_CART_BUTTON)
    .click()
}

export async function clickCheckoutButton(page)
{
  await page
    .locator(LOCATOR.CHECK_OUT_BUTTON)
    .click();
  await expect(page)
    .toHaveURL(url.CHECKOUT_PAGE_URL)
}

export async function addtwoProductToCartBasedOnName(page,productname)
{
  await page
    .locator(LOCATOR.PRODUCT_NAME)
    .filter({ hasText: productname})
    .getByRole(data.details.BUTTON, { name: data.details.ADD_TO_BASKET })
    .click();
}

