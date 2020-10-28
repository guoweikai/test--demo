/*
 * @Date: 2020-08-20 14:40:30
 * @LastEditors: GWK
 * @LastEditTime: 2020-08-20 14:41:47
 * @FilePath: /test--demo/wirter.js
 */
const fs = require("fs");

fs.writeFile("dist/aaa.js", "bbb", "utf8", (err) => {
    if (err) {
      console.log(err);
    } else {
    }
  });