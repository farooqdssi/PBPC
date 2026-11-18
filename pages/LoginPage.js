
class LoginPage {

    constructor(page) {

        this.page = page;

        // Login page locators
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');

        // Error messages
        this.invalidMessage = page.getByText('Invalid username or password');
        this.lockedMessage = page.getByText('Account locked');
    }

    async navigateToLogin() {

        await this.page.goto(
            'http://13.232.176.110:711/prebook/login'
        );
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

    async login(username, password) {

        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async getLoginResult() {

        if (await this.invalidMessage.isVisible().catch(() => false)) {
            return 'invalid';
        }

        if (await this.lockedMessage.isVisible().catch(() => false)) {
            return 'locked';
        }

        return 'success';
    }
}

module.exports = LoginPage;
