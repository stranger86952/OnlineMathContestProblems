// ==UserScript==
// @name         OnlineMathContestProblems 0.3
// @namespace    https://twitter.com/kstation_kagigi
// @version      0.3.1
// @description  you can see your correct/wrong easily
// @author       stranger_86952
// @match        https://onlinemathcontest.com/problems
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @license      MIT
// ==/UserScript==
function don(na){
    console.log('start');
    function func(con,cell,num){
        //console.log('start');
        var s = $(con).find('a').attr('href') ;
        s = String(s);
        var u = "https://onlinemathcontest.com" + s + "/tasks";
        $.ajax({
            url: u,
            type: 'GET',
            dataType: 'html',
        })
        .done(function(data) {
            $(data).find('challenge-container').find('table').find('tbody').each(function(){
                var ttds = $(this).find('tr');
                var bc = $(ttds[num]).attr('class');
                if(bc == 'table-success') $(cell[num]).css('background-color','#cde9ce');
                else $(cell[num]).css('background-color','#FFFFFF')
            });
            //console.log('ok');
        })
        .fail(function( data ) {
            //console.log('lol');
        });
        //console.log('end');
    }
    $('tbody').find('tr').each(function(i, contestInfo) {
        const ath = $(contestInfo).find('th');
        const tds = $(contestInfo).find('td');
        func(ath,tds,0);
        func(ath,tds,1);
        func(ath,tds,2);
        func(ath,tds,3);
        func(ath,tds,4);
        func(ath,tds,5);
        if(na == '7') func(ath,tds,6);
        if(na == '15'){
            func(ath,tds,6);
            func(ath,tds,7);
            func(ath,tds,8);
            func(ath,tds,9);
            func(ath,tds,10);
            func(ath,tds,11);
            func(ath,tds,12);
            func(ath,tds,13);
            func(ath,tds,14);
        }
    });
}
window.onload = function(){
    setTimeout(function(){
        don(6);
    },5000);
}
var tetete = $('.col-sm-12').find('span');
$(tetete[0]).on('click', function() {
    setTimeout(function(){
        don(6);
    },5000);
});
$(tetete[1]).on('click', function() {
    setTimeout(function(){
        don(6);
    },5000);
});
$(tetete[2]).on('click', function() {
    setTimeout(function(){
        don(7);
    },5000);
});
$(tetete[3]).on('click', function() {
    setTimeout(function(){
        don(6);
    },5000);
});
$(tetete[4]).on('click', function() {
    setTimeout(function(){
        don(15);
    },5000);
});
