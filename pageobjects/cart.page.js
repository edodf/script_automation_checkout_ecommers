const { $ } = require('@wdio/globals')

class CartPage {

    get titleCart(){
        return $(`//span[normalize-space()='Your Cart']`)
    }

    get titleBag(){
        return $(`//div[normalize-space()='Sauce Labs Backpack']`)
    }

    get btnCheckOut(){
        return $(`//button[@id='checkout']`)
    }

    get titleCheckOut(){
        return $(`//span[normalize-space()='Checkout: Your Information']`)
    }

    get inputFirstName(){
        return $(`//input[@id='first-name']`)
    }

    get inputLastName(){
        return $(`//input[@id='last-name']`)
    }

    get inputPostalCode(){
        return $(`//input[@id='postal-code']`)
    }

    get btnContinue(){
        return $(`//input[@id='continue']`)
    }

    get btnCancel(){
        return $(`//button[@id='cancel']`)
    }

    get btnFinish(){
        return $(`//button[@id='finish']`)
    }

    get btnBackHome(){
        return $(`//button[@id='back-to-products']`)
    }

    get titleCOOverview(){
        return $(`//span[normalize-space()='Checkout: Overview']`)
    }

    get titleComplete(){
        return $(`//h2[normalize-space()='Thank you for your order!']`)
    }
}

module.exports = new CartPage();
