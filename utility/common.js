

export async function clickElement(page,locator)
{
  await page
    .waitForSelector(locator),
  await page
    .locator(locator).click() 
}

export async function clickElementBasedOnRole(page,locator,text)
{
  page.waitForSelector(locator),
  await page
    .getByRole(locator, { name: text })
    .click({ force: true });
}

export async function clickElementBasedOnPlaceholderValue(page,placeholdertext)
{
  await page
    .getByPlaceholder(placeholdertext)
    .click({ force: true });
}

export async function inputTextBasedPlaceholder(page,placeholdertext,inputtet)
{
  await page
    .getByPlaceholder(placeholdertext)
    .fill(inputtet);
}
