import Faker from 'faker';
import Puppeteer from 'puppeteer';

import { TEST_BASE_URL } from '../../../../../config/test';

// import { FIELDS } from './constants';

const person = {
  firstName: Faker.name.firstName(),
  lastName: Faker.name.lastName(),
  email: Faker.internet.email()
};

describe('Signup Form (use FIELDS constants)', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await Puppeteer.launch();
    page = await browser.newPage();
    page.setViewport({ width: 500, height: 2400 });
  });

  beforeEach(async () => {
    await page.goto(TEST_BASE_URL);
  });

  afterAll(() => {
    browser.close();
  });

  it('Can submit signup form', async () => {
    await page.$eval('.signup-form', form => form.submit());
  });
  it(
    'Successful submit',
    async () => {
      await page.waitForSelector('.signup-form');
      await page.click('input[name=firstName]');
      await page.type('input[name=firstName]', person.firstName);
      await page.click('input[name=lastName]');
      await page.type('input[name=lastName]', person.lastName);
      await page.click('input[name=email]');
      await page.type('input[name=email]', person.email);

      await page.click('button[type=submit]');
      await page.waitForSelector('.result');
    },
    16000
  );

  it(
    '3 fields are required',
    async () => {
      await page.waitForSelector('.signup-form');
      await page.click('input[name=firstName]');
      await page.type('input[name=firstName]', '');
      await page.click('input[name=lastName]');
      await page.type('input[name=lastName]', '');
      await page.click('input[name=email]');
      await page.type('input[name=email]', '');

      await page.click('button[type=submit]');
      await page.waitForSelector('.error-firstName');
      await page.waitForSelector('.error-lastName');
      await page.waitForSelector('.error-email');
    },
    16000
  );

  it(
    'First name is required',
    async () => {
      await page.waitForSelector('.signup-form');
      await page.click('input[name=firstName]');
      await page.type('input[name=firstName]', '');

      await page.click('button[type=submit]');
      await page.waitForSelector('.error-firstName');
    },
    16000
  );

  it(
    'Last name is required',
    async () => {
      await page.waitForSelector('.signup-form');
      await page.click('input[name=lastName]');
      await page.type('input[name=lastName]', '');

      await page.click('button[type=submit]');
      await page.waitForSelector('.error-lastName');
    },
    16000
  );

  it(
    'Email is required',
    async () => {
      await page.waitForSelector('.signup-form');
      await page.click('input[name=email]');
      await page.type('input[name=email]', '');

      await page.click('button[type=submit]');
      await page.waitForSelector('.error-email');
    },
    16000
  );
});
