
$(document).ready(function () {
    /* MAIN PAGE */
    /* 날짜 출력 */
    var date = new Date();
    var clockItems = [date.getFullYear(), date.getMonth()+1, date.getDate(), date.getDay()];
    var clockNames = ['년','월','일','요일'];
    var clockDay = ['일','월','화','수','목','금','토'];
    var clockText = "";
    var clock = document.getElementById('clock');
    for(var i=0; i<clockItems.length; i++) {
        switch(i) {
            case 3: clockText += clockDay[clockItems[i]]+clockNames[i]+' '; break;
            case 4: {
                if(clockItems[i] >= 12) { clockText += (clockItems[i]-12)+clockNames[i]+' '; break;}
                else { clockText += (clockItems[i])+clockNames[i]+' '; break; }
            }
            default: clockText += clockItems[i]+clockNames[i]+' ';
        }
        if(i == (clockItems.length - 1)) {
            $('#clock').text(clockText.toString());
            console.log(clockText);
        }
    }

    /* ABOUT */
    /* PREFERENCE CLICK */
    $('#pbook').click( function() { alert('어린 왕자, 피터팬, 이상한 나라의 앨리스') } );
    $('.flip').click(function() { $('#panel').slideToggle(2000); });

    /* HOBBY */
    /* IMG SLIDE */
    var swidth = $('[data-role="slider"]').width();
    var sheight = $('[data-role="slider"]').height();
    var scount = $('#con_musical div.slideitem').length;
    var snow = 0;
    var temp = (100 * scount) + "%";
    $('.imgcontainer').css({ width: temp, height: sheight });
    temp = (100 / scount) + "%";
    $('.slideitem').css({ width: temp, height: sheight });

    var currentPage = 0;
    var changePage = function() {
        var mov = (-currentPage * 100) + "%";
        $('.imgcontainer').animate({left: mov}, 500);
    };
    var toggleGroup = function() {
        if(snow == 0) {
            $('#groupname').text("Pictures");
            scount = $('#con_pic div.slideitem').length;
            snow = 1;
        } else {
            $('#groupname').text("Musicals");
            scount = $('#con_musical div.slideitem').length;
            snow = 0;
        }
        $('#con_musical').toggle();
        $('#con_pic').toggle();
        // 이미지 개수에 따라 내용 변경
        temp = (100 * scount) + "%";
        $('.imgcontainer').css({ width: temp, height: sheight });
        temp = (100 / scount) + "%";
        $('.slideitem').css({ width: temp, height: sheight });
        while(currentPage > 0) { // 다시 맨 앞 페이지로 초기화
            currentPage--;
            $('.imgcontainer').animate({left: -currentPage * swidth}, 0);
        }
    };

    $('#titlebtn').click(function() {
        toggleGroup();
    });
    $('#left-button').click(function() {
        if(currentPage > 0) { currentPage--; changePage(); }
    });
    $('#right-button').click(function() {
        if(currentPage < scount-1) { currentPage++; changePage(); }
    });
});
