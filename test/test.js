const cartPage = require('../pageobjects/cart.page')
const homePage = require('../pageobjects/home.page')
const loginPage = require('../pageobjects/login.page')
const { expect } = require('@wdio/globals')

describe('Shopping', () => {

    it('login', async () => {
        await loginPage.open();
        await expect(loginPage.loginLogo).toBeDisplayed();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(homePage.titleProduct).toBePresent();
    })

    it('Add to chart', async () =>{
        await homePage.productBag.click();
        await expect(homePage.detileBag).toBeDisplayed();
        await expect(homePage.btnAddToCart).toBeClickable();
        await homePage.btnAddToCart.click();
        await expect(homePage.btnRemove).toBeDisplayed();
    })

    it('CheckOut', async () =>{
        await homePage.btnCart.click();
        await expect(cartPage.titleCart).toBePresent();
        await expect(cartPage.titleBag).toBeDisplayed();
        await cartPage.btnCheckOut.click();
        await expect(cartPage.titleCheckOut).toBePresent();
        await cartPage.inputFirstName.setValue("edo");
        await cartPage.inputLastName.setValue("df");
        await cartPage.inputPostalCode.setValue("123");
        await cartPage.btnContinue.click();
        await expect(cartPage.titleCOOverview).toBePresent();
        await expect(cartPage.titleBag).toBeDisplayed();
        await cartPage.btnFinish.click();
        await expect(cartPage.titleComplete).toBePresent();
        await cartPage.btnBackHome.click();
        await expect(homePage.titleProduct).toBePresent();
    })
})