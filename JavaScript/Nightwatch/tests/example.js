var nightwatchConfig = require('../nightwatch.json');

// EXAMPLE ONLY:

module.exports = {
    'Nightwatch.js Test' : function (browser) {
        console.log('Nightwatch test started');

        browser
        .url(nightwatchConfig.test_settings.default.launch_url)
        .url('https://github.com/pandorasNox')
        .resizeWindow(1280, 1024)
        .waitForElementVisible('#js-pjax-container', 60000)
        //.assert.containsText('#test', 'Hello, Docker World!')
        .saveScreenshot('/home/docker/app/tests_output/screenshots/test.png')
        // .assert.containsText('#test', 'this assertion will fail')
        .end();

        console.log('Nightwatch test finished');
        console.log('¸¸♬·¯·♩¸¸♪·¯·♫¸¸Happy Dance¸¸♬·¯·♩¸¸♪·¯·♫¸¸');
    },
};