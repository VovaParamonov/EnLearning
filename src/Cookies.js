function setCookie(name, value) {
    document.cookie = name + "=" + value;
}

function getCookie (name) {
    let result = "Fail";
    let arrCookie = document.cookie.split("; ").map(function(item, i, arr){
        return item.split('=');
    });
    arrCookie.forEach(function(item){
        if (item[0] == name){
            result = item[1];
            return;
        }
    });
    return result;
}

export {setCookie, getCookie};