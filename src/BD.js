import {getCookie, setCookie} from "./Cookies";
import $ from "jquery";

var exp = 0;
var lvl = 1;


var wordList_arr = [
    ["Слово", "Перевод"]
];


function DataSync(){
    if (getCookie("exp") || getCookie("exp") == 0){
        exp = getCookie("exp");
        console.log(exp);
    }
    lvl = getCookie("lvl");
    wordList_arr = JSON.parse(getCookie("wordList"));

    if (exp >= 100){
        alert("Поздравляю с переходом на новый уровень");
        setCookie("exp", 0);
        setCookie("lvl", 1+parseInt(lvl));
        DataSync();
    };
}
export {wordList_arr,lvl, exp, DataSync};
