"use strict";
exports.__esModule = true;
var example_enum_1 = require("./example.enum");
var example = '';
// let ex2 = example.map((element)=>{
//     return element +1
// })
function add(num1, num2) {
    return (num1 + num2).toString();
}
add(example_enum_1.NumsEnum.Num1, example_enum_1.NumsEnum.Num2);
