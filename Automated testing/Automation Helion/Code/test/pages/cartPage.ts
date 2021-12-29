import { createWatchCompilerHost } from "../../node_modules/typescript/lib/typescript";

class cartPage {
    get successMessage(){
        return $("div.successbox > p");
    }

    get totalPrice(){
        return $("#cart-edit-summary");
    }

    get checkbox(){
        return $("form#formularz tr th.checkbox");
    }

    get deleteSelectedLabel(){
        return $("#usun a");
    }

    get deleteAlertMessage(){
        return $("div.infobox > p");
    }

    async getDeletedAlertMessageValue():Promise<string>{
        const alert:WebdriverIO.Element = await this.deleteAlertMessage;
        await alert.waitForDisplayed();
        return await alert.getText();
    }

    async acceptDeleteAlert(){
        await browser.acceptAlert();
    }
    
    async clickOnSelectedLabel(){
        const label:WebdriverIO.Element = await this.deleteSelectedLabel;
        await label.waitForDisplayed();
        await label.scrollIntoView();
        await label.click();
    }

    async clickOnCheckbox(){
        const checkbox:WebdriverIO.Element = await this.checkbox;
        await checkbox.waitForDisplayed();
        await checkbox.scrollIntoView();
        await checkbox.click();
    }

    async getTotalPrice():Promise<string>{
        const price:WebdriverIO.Element = await this.totalPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }
    async getSuccessAlertValue():Promise<string>{
        const alert:WebdriverIO.Element = await this.successMessage;
        await alert.waitForDisplayed();
        return await alert.getText();
    }
}

export default new cartPage;