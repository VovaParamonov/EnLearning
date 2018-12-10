import $ from "jquery";
import {translate, arr_rounds} from "./rounds";
import {wordList_arr} from "./BD";

//--------------Переменные DOM (Главной странцы)-----------
var $userLevel = $("<div class='userLevel' data-val='0'><div class='userLevel__progress'></div><div class='userLevel__display' data-level='1'><p>level.</p><span class='userLevel__levelCounter'>1</span></div></div>");
var $wordsListCard = $("<div class='wordListCard'></div>");
var $backgroundBlock = $("<div class='BackgroundBlock'></div>");
var $windowAdd = $("<div class='windowAdd'><h1>Добавить слово</h1><input class='windowAdd__word' placeholder='Новое слово'><input class='windowAdd__translate' placeholder='Перевод'><input type='submit' class='windowAdd__button' value='Добавить'></div>")


//--------------Переменные DOM (Уровня)-----------
var $counter = $("<span class='counter' data-value='-1'>0</span>");
var $progressBar_elem = $("<div class='progressBar__elem'></div>");
//---------------Переменные (уровня)----------------
var load = false //---true, когда идет загрузка---
var value = parseInt($counter.attr('data-value'));





//--------------Основные function-page ---------------------------

//--------Создание страницы уровня--------------------------------
export function level_create(round_arr ,arr_round, round_id) {
    $('body').html(
        "<header>"+
        "<h1 class='value'>Value: </h1>" +
        "<div class='progressBar'></div>" +
        "</header>" +
        "<div class='round_wrapper'>" +
        "<div class='round_wrapper_after'><p> Yes! </p></div>" +
        "<h1 class='round_head'>"+ arr_round[0] +"</h1>" +
        "<p class='round_text'>"+ arr_round[1] +"</p>" +
        "<input id='answer' class='round_answer' type='text' placeholder='Введите ответ'>" +
        "<input id='send' class='round_send' data-action='false' type='submit' value='Пропустить'>" +
        "<div class='round_wrapper_before'><p>"+arr_round[2]+"</p></div>" +
        "</div>"
    );
    $('.value').append($counter);
    $('.progressBar').append($progressBar_elem);

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
    if (id == -1){
        let r_id = parseInt(Math.random() * (round_arr.length - 0) + 0);
        $('.round_answer').val("");
        level_create(round_arr ,round_arr[r_id], r_id);
        $counter.attr("data-value", value);
        $counter.text(value);
        $progressBar_elem.css({"width" : value*10 + "%"});
        load = false;
    } else {
        setTimeout(function(){
            let r_id = parseInt(Math.random() * (round_arr.length - 0) + 0);
            while(r_id == id){
                r_id = parseInt(Math.random() * (round_arr.length - 0) + 0);
            }
            $('.round_answer').val("");
            level_create(round_arr ,round_arr[r_id], r_id);
            $counter.attr("data-value", value);
            $counter.text(value);
            $progressBar_elem.css({"width" : value*10 + "%"});
            if (value == 10){
                setTimeout(function(){main(arr_rounds);value = -1},500);
            }
            load = false;
        },1500);
    }

}
//------------Вызов уровня-------------------
export function level(round_arr) {
    nextStep(round_arr, true);
}


//----------------Создание главной страницы---------------
export function main(arr_levels){
    $('body').html(
        "<header>"+
        "</header>"+
        "<div class='section_main'>"+
            /*"<div class='section section_left'></div>" +*/
            "<div class='section section_middle'></div>" +
            "<div class='section section_right'></div>" +
        "</div>"
    );
    $('header').append($userLevel);
    $('header').append("<div class='Logo'><span class='Logo__local'>local</span><span class='Logo__EnLearning'>EnLearning</span></div>");
    arr_levels.forEach(function(item, id){
        $('.section_middle').append("<div class='level_card' data-name='"+item[0]+"' data-id='"+id+"'><h2>"+item[0]+"</h2><p>"+item[2]+"</p></div>");
    });
    var $wordList = $("<ol class='wordListCard__list'></ol>");

    function wordListCreate (arr_words) {
        arr_words.forEach(function(item){
            $wordList.append("<li class='wordList__item'>"+item[0]+" - "+item[1]+"</li>")
        });
        $wordsListCard.html("<h2>Words to learn</h2>");
        $wordsListCard.append($wordList);
        $wordsListCard.append("<input type='button' class='wordListCard__button' value='Добавить'>");
        $('.section_right').append($wordsListCard);
    }

    wordListCreate(wordList_arr);




    //-----------------------------Обработчики главной страницы------------------
    $('.wordListCard').delegate(".wordListCard__button", "click", function(){
        $backgroundBlock;
        $('body').prepend($backgroundBlock).prepend($windowAdd);

        $(".windowAdd__button").on("click", function(){
            if ($(".windowAdd__word").val() != '' && $(".windowAdd__translate").val() != ''){
                wordList_arr.push([$(".windowAdd__word").val(),$(".windowAdd__translate").val()]);
                $(".windowAdd__word").val('');
                $(".windowAdd__translate").val('');
                $wordList.html('');
                wordListCreate(wordList_arr);
            }
            $windowAdd.remove();
            $backgroundBlock.remove();
        });
        $(".windowAdd").delegate('input', "keyup", function(eventObj){
            if (eventObj.which == 13){
                $('.windowAdd__button').click();
            }
        })
    });


    $('.level_card').click(function(){
        level(arr_levels[$(this).attr("data-id")][1]);
    })
}



/*
arr_round[3] {
    name/id,
    text,
    callback
   }
*/
