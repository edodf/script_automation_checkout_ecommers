const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }

    get search () {
        return $(`//textarea[@id='APjFqb']`)
    }

    get loginLogo (){
        return $(`.login_logo`)
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
