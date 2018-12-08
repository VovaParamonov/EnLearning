import $ from "jquery";
import {translate} from "./rounds";


//alert("Prverka ".indexOf(" ") == "Prverka ".length-1 );

//--------------Переменные DOM-----------
var $counter = $('.counter');


//---------------Переменные----------------

var load = false //---true, когда идет загрузка---

var value = parseInt($counter.attr('data-value'));





//--------------Основные function-page ---------------------------

//--------Создание страницы уровня--------------------------------
export function round_create(round_arr ,arr_round, round_id) {
    $('.section_main').html("<div class='round_wrapper'>" +
        "<div class='round_wrapper_after'><p> Yes! </p></div>" +
        "<h1 class='round_head'>"+ arr_round[0] +"</h1>" +
        "<p class='round_text'>"+ arr_round[1] +"</p>" +
        "<input id='answer' class='round_answer' type='text' placeholder='Введите ответ'>" +
        "<input id='send' class='round_send' data-action='false' type='submit' value='Пропустить'>" +
        "<div class='round_wrapper_before'><p>"+arr_round[2]+"</p></div>" +
        "</div>"
    );
    $('.round_answer').ready(function(){$('.round_answer').focus()})
    $('.round_answer').on("keyup", function(eventObj){
        if (eventObj.which == 13){
            $('.round_send').click();
        }
        if($('.round_answer').val()!=""){
            $('.round_send').addClass("button_action")
            $('.round_send').val("Отправить");
            $('.round_send').attr('data-action', 'true');
        } else {
            $('.round_send').removeClass("button_action");
            $('.round_send').val("Пропустить");
            $('.round_send').attr('data-action', 'false');
        }
    });
    $('.round_send').on("click", function(){
        if (!load){
            let func = translate(round_arr ,arr_round[2]);
            func($('.round_answer').val(), round_id);
            load = true;
        }
    });
 }
//-----------Переход к след. раунду в уровне ---------
export function nextStep(round_arr, bool, id = -1) {

    if (bool) {
        value = value + 1;
        $('.round_wrapper_after').css({"transform" : "translate(-10px, -50px)"})
    }
    else {
        if (value > 0) {
            value--;
        }
        $('.round_wrapper_before').css({"transform" : "translate(-10px, 135px)"});

    }

    setTimeout(function(){
        let r_id = parseInt(Math.random() * (round_arr.length - 0) + 0);
        while(r_id == id){
            r_id = parseInt(Math.random() * (round_arr.length - 0) + 0);
        }
        $('.round_answer').val("");
        round_create(round_arr ,round_arr[r_id], r_id);
        $counter.attr("data-value", value);
        $counter.text(value);
        load = false;
    },1500);
}

//------------Вызов уровня-------------------
export function level(round_arr) {
    nextStep(round_arr, true);
}
/*
arr_round[3] {
    name/id,
    text,
    callback
   }
*/
