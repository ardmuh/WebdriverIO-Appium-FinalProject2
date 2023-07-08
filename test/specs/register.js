describe('Open Application Diet Meal',() => {

    it('should open the app and view home screen', async() => {
        // 1. Open App Diet Meal
        // 2.  Verify  the welcome text is visible
        const headerWelcome = await $('[id$="header_welcome"]');
        await headerWelcome.waitForDisplayed();
        expect(headerWelcome).toBeDisplayed();

        // 3. Input Name on the inputName
        await $('[id$="et_name"]').setValue('Amar');

        // 4. Input Weight on the inputWeight
        await $('[id$="et_weight"]').click();
        await $('[id$="et_weight"]').setValue('55');
        await browser.hideKeyboard();

        // 5. Input Height on the inputHeight
        await $('[id$="et_height"]').click();
        await $('[id$="et_height"]').setValue('169');
        await browser.hideKeyboard();


        // 6. Click on the Male radio button
        await $('[id$="rb_male"]').click();

        // 7. Click on the  NEXT button
        await $('[id$="bt_next"]').click();

        // 8. Choose Aktivitas sehari-hari
        await $('[id$="rb_rest"]').click();

        // 9. Click on the SELESAI button
        await $('[id$="bt_finish"]').click();
        
        // 10. Verify home screen diet meal app
        const headerHi = await $('[id$="tv_header_name"]');
        await headerHi.waitForDisplayed();
        expect(headerHi).toBeDisplayed();


        
    })
})