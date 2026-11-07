class LoginPage {

    constructor(page) {
        this.page = page;

        // Two fields
        this.username = page.locator('#username');
        this.password = page.locator('#password');

        // Login button
        this.loginButton = page.locator('#login');
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}

module.exports = LoginPage;