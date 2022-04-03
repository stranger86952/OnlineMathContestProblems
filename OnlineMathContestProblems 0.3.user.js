// ==UserScript==
// @name         OnlineMathContestProblems 0.3
// @namespace    https://twitter.com/kstation_kagigi
// @version      0.3.1.1
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
                for(var ij = 0;ij < num;ij++){
                    var bc = $(ttds[ij]).attr('class');
                    if(bc == 'table-success') $(cell[ij]).css('background-color','#cde9ce');
                    else $(cell[ij]).css('background-color','#FFFFFF')
                }
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
        if(na == '6') func(ath,tds,6);
        if(na == '7') func(ath,tds,7);
        if(na == '15') func(ath,tds,15);
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
