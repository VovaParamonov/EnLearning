import {getCookie, setCookie} from "./Cookies";

var exp = 0;
var lvl = 1;


var wordList_arr = [

];


function DataSync(){
    //---------------------Сионхонизация с куки или их установка---------------
    if (getCookie("exp") != "Fail"){
        exp = getCookie("exp");
        console.log(exp);
    } else {
        setCookie("exp", exp);
    }
    if (getCookie("lvl") != "Fail"){
        lvl = getCookie("lvl");
    } else {
        setCookie("lvl", lvl);
    }
    if (getCookie("wordList") != "Fail"){
        wordList_arr = JSON.parse(getCookie("wordList"));
    } else {
        setCookie("wordList",JSON.stringify(wordList_arr));
    }
    //=========================================================================


    //------------------------------------Повышение уровня----------------------
    if (exp >= 100){
        alert("Поздравляю с переходом на новый уровень");
        setCookie("exp", 0);
        setCookie("lvl", 1+parseInt(lvl));
        DataSync();
    };
}
export {wordList_arr,lvl, exp, DataSync};
