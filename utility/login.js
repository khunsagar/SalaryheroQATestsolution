import { expect} from '@playwright/test';
import * as url from '../playwright/fixtures/urls.json'
import * as data from '../playwright/fixtures/helperdetails.json'
import { LOGIN_PAGE as  LOCATOR } from '../playwright/locators';

export async function loginToShop(page)
{

  const [welcomePopup] = await Promise.all([
    page
      .waitForSelector(LOCATOR.POPUP_LOGIN_PAGE),
    page
      .locator(LOCATOR.POPUP_LOGIN_PAGE)
      .last()
      .click() 
  ])
  console.log(welcomePopup)
  await page
    .getByRole(data.details.BUTTON, { name: data.details.SHOW_HIDE })
    .click();
  await page
    .getByRole(data.details.MENU_ITEM, { name: data.details.GO_TO_LOGIN_PAGE })
    .click();
  await page
    .locator(LOCATOR.EMAIL)
    .click()
  await page
    .locator(LOCATOR.EMAIL)
    .fill(data.details.USER_EMAIL)
  await page
    .locator(LOCATOR.PASSWORD)
    .click()
  await page
    .locator(LOCATOR.PASSWORD)
    .fill(data.details.USER_PASSWORD)
  await page
    .locator(LOCATOR.LOGIN_BUTTON)
    .click()
  await expect(page)
    .toHaveURL(url.LANDING_PAGE_AFTER_LOGIN_URL);  
}

export async function verifyUSerEmailAfterLogin(page)
{
  await page.getByRole(data.details.BUTTON, { name: data.details.SHOW_HIDE })
    .click();
  const emailAfterLogin = await page
    .locator(LOCATOR.EMAIL_AFTER_LOGIN)
    .textContent()
  expect(emailAfterLogin.trim())
    .toEqual(data.details.USER_EMAIL)
  await page.getByRole(data.details.MENU_ITEM, { name: data.details.GOTO_PROFILE })
    .click();
  await page.getByRole(data.details.LINK, { name: data.details.BACK, exact: true })
    .click();
}