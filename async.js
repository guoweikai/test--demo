/*
 * @Date: 2020-08-19 18:11:29
 * @LastEditors: GWK
 * @LastEditTime: 2020-08-20 14:39:21
 * @FilePath: /test--demo/async.js
 */
function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}
async function test() {
    const v = await takeLongTime();
    console.log(v);
}

test();
console.log("嘻嘻")


