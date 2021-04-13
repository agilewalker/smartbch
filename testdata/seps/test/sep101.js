const SEP101Proxy = artifacts.require("SEP101Proxy");

const shortKey = "0x1234";
const shortVal = "0x5678";
const longKey = "0x0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789";
const longVal = "0x9876543210987654321098765432109876543210987654321098765432109876543210987654321098765432109876543210";

contract("SEP101", async (accounts) => {

    let sep101Proxy;

    before(async () => {
        sep101Proxy = await SEP101Proxy.new()
    });

    it('get/set delegate_call', async () => {
        await sep101Proxy.set(shortKey, shortVal);
        await sep101Proxy.get(shortKey);
        assert.equal(await sep101Proxy.resultOfGet(), shortVal);

        await sep101Proxy.set(longKey, longVal);
        await sep101Proxy.get(longKey);
        assert.equal(await sep101Proxy.resultOfGet(), longVal);
    });

    // it('get/set call_code', async () => {
    //     await sep101Proxy.set_callcode(shortKey, shortVal);
    //     await sep101Proxy.get_callcode(shortKey);
    //     assert.equal(await sep101Proxy.resultOfGet(), shortVal);

    //     await sep101Proxy.set_callcode(longKey, longVal);
    //     await sep101Proxy.get_callcode(longKey);
    //     assert.equal(await sep101Proxy.resultOfGet(), longVal);
    // });

    it('get/set call', async () => {
        try {
            await sep101Proxy.set_call(shortKey, shortVal);
            fail("error expected");
        } catch (e) {}
        try {
            await sep101Proxy.get_call(shortKey);
            fail("error expected");
        } catch (e) {}
    });

    it('get/set staticcall', async () => {
        try {
            await sep101Proxy.set_staticcall(shortKey, shortVal);
            fail("error expected");
        } catch (e) {}
        try {
            await sep101Proxy.get_staticcall(shortKey);
            fail("error expected");
        } catch (e) {}
    });

});
