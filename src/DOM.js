import $ from "jquery";
import {rounds_arr} from "./index";

export function round_create(arr_round, round_id) {

    $('body').html("<div class='round_wrapper'>" +
        "<h1 class='round_head'>"+ arr_round[0] +"</h1>" +
        "<p class='round_text'>"+ arr_round[1] +"</p>" +
        "<input id='answer' class='round_answer' type='text' placeholder='Введите ответ'>" +
        "<input id='send' class='round_send' data-action='false' type='submit' value='Пропустить'>" +
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
        let func = arr_round[2];
        func($('.round_answer').val(), round_id);

    });

 }

export function nextStep(bool, id = -1) {
    if (bool) {
        let r_id = parseInt(Math.random() * (rounds_arr.length - 0) + 0);
        while(r_id == id){
            r_id = parseInt(Math.random() * (rounds_arr.length - 0) + 0);
        }
        round_create(rounds_arr[r_id], r_id);
    }
    else {
        $('.round_answer').val("");
        alert("Ошибка");
        let r_id = parseInt(Math.random() * (rounds_arr.length - 0) + 0);
        while(r_id == id){
            r_id = parseInt(Math.random() * (rounds_arr.length - 0) + 0);
        }
        round_create(rounds_arr[r_id], r_id);
    }
}
/*
arr_round[3] {
    name/id,
    text,
    callback
   }
*/
