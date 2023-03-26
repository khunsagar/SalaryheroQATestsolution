import { expect} from '@playwright/test';
import { SEARCH_PAGE as  LOCATOR } from '../locators';
import * as data from '../fixtures/helperdetails.json';

export async function clickSearchButton(page)
{
  await page
    .getByText(LOCATOR.SEARCH_BUTTON)
    .click();
  await page
    .locator(LOCATOR.SEARCH_TEXT_AREA)
    .fill(data.details.APPLE);
  await page
    .locator(LOCATOR.SEARCH_TEXT_AREA)
    .press(data.details.ENTER);
}

export async function enterSearchKeyword(page,keyword )
{
  await page
    .locator(LOCATOR.SEARCH_TEXT_AREA)
    .fill(keyword);
  await page
    .locator(LOCATOR.SEARCH_TEXT_AREA)
    .press(data.details.ENTER);
}

export async function verifySearchResult(page)
{
  const searchProductResultCount = await page
    .locator(LOCATOR.SEARCH_RESULT_PORDUCT)
    .count()
  expect(searchProductResultCount)
    .toEqual(2)
  for (let i = 0; i< (searchProductResultCount -1 ); i++ )
  { 
    expect(await page
      .locator(LOCATOR.SEARCH_RESULT_PRODUCT_NAME)
      .nth(i))
      .not.toContainText(/banana|Banana/);
  }
}
