
import { expect} from '@playwright/test';
import { ADDRESS_PAGE as  LOCATOR } from '../locators';
import * as url from '../fixtures/urls.json'
import * as data from '../fixtures/helperdetails.json'

export async function clickAddNewAddressButton(page)
{
  await page.getByRole(data.details.BUTTON, { name: data.details.ADD_NEW_ADDRESS }).click();
  await expect(page).toHaveURL(url.ADD_NEW_ADDRESS_PAGE_URL)
}

export async function addNewAddress(page)
{
  //await expect(page.locator('input')).toContainText('Details');
  await page
    .getByPlaceholder(data.placeholdertext.PLEASE_PROVIDE_COUNTRY_NAME)
    .click();
  await page
    .getByPlaceholder(data.placeholdertext.PLEASE_PROVIDE_COUNTRY_NAME)
    .fill(data.details.COUNTRY_NAME);
  await page
    .getByPlaceholder(data.placeholdertext.PLEASE_PROVIDE_NAME)
    .click();
  await page
    .getByPlaceholder(data.placeholdertext.PLEASE_PROVIDE_NAME)
    .fill(data.details.NAME);
  await page
    .locator(LOCATOR.DIV)
    .filter({ hasText: /^Mobile Number \*$/ })
    .nth(2)
    .click();
  await page
    .getByPlaceholder(data.placeholdertext.PLEASE_PROVIDE_MOBILE_NUMBER).fill(
      data.details.MOBILE_NUMBER)
  await page
    .getByPlaceholder(data.placeholdertext.PLEASE_PROVIDE_ZIP_CODE).click();
  await page
    .getByPlaceholder(data.placeholdertext.PLEASE_PROVIDE_ZIP_CODE).fill(
      data.details.ZIP_CODE)
  await page
    .locator(LOCATOR.DIV)
    .filter({ hasText: /^Address \*$/ })
    .nth(1)
    .click();
  await page
    .getByPlaceholder(data.placeholdertext.PLEASE_PROVIDE_ADDRESS).fill(
      data.details.ADDRESS)
  await page
    .locator(LOCATOR.DIV)
    .filter({ hasText: /^City \*$/ })
    .nth(2)
    .click();
  await page
    .getByPlaceholder(data.placeholdertext.PLEASE_PROVIDE_CITY).fill(
      data.details.CITY_NAME)
  await page
    .locator(LOCATOR.DIV).filter({ hasText: /^State$/ })
    .nth(2)
    .click();
  await page
    .getByPlaceholder(data.placeholdertext.PLEASE_PROVIDE_STATES).fill(
      data.details.STATES)
  await page
    .getByPlaceholder(data.placeholdertext.PLEASE_PROVIDE_STATES)
    .press(data.details.TAB);
  await page
    .getByRole(LOCATOR.BUTTON, { name: data.details.BACK, exact: true })
    .press(data.details.TAB);
  await page
    .getByRole(LOCATOR.BUTTON, { name: data.details.SEND_SUBMIT })
    .press(data.details.ENTER); 
}