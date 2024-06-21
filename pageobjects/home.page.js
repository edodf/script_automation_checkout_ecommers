const { $ } = require('@wdio/globals')

class HomePage {

    get titleProduct () {
        return $(`//span[normalize-space()='Products']`);
    }

    get productBag () {
        return $(`//img[@alt='Sauce Labs Backpack']`);
    }

    get detileBag () {
        return $(`//div[@class='inventory_details_name large_size']`);
    }

    get btnAddToCart () {
        return $(`//button[@id='add-to-cart']`)
    }

    get btnRemove(){
        return $(`//button[@id='remove']`)
    }

    get btnCart(){
        return $(`//span[@class='shopping_cart_badge']`)
    }

    get btnSort(){
        return $(`//select[@class='product_sort_container']`)
    }

    get btnAZ(){
        return $(`//option[normalize-space()='Name (A to Z)']`)
    }

    get btnZA(){
        return $(`//option[normalize-space()='Name (Z to A)']`)
    }

    get btnPriceLowHigh(){
        return $(`//option[normalize-space()='Price (low to high)']`)
    }

    get btnPriceHighLow(){
        return $(`//option[normalize-space()='Price (low to high)']`)
    }
}

module.exports = new HomePage();
