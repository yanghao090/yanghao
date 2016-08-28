/**
 * Created by Administrator on 2016/8/27.
 */
window.onload =function(){
//游戏选择按钮
    GameChoose();

//点击右上角更多按钮显示框
    ClickShow();
};

//游戏选择按钮
function GameChoose(){
    $(function(){
        //找到所有的 li
        $('.gameChoose>.gameChoose-two>.tab>.tab-item').mouseover(function(){
            $(this).addClass('corru').siblings().removeClass('corru');
            //3. 让products下面对应下标的div添加一个selected类，并且排他
            var idx = $(this).index();
            $('.gameChoose>.gameChoose-two>.products>div').eq(idx).addClass("selected").siblings().removeClass("selected");
        })
    })

};


//点击右上角更多按钮显示框
function ClickShow() {
    var CliShow = document.getElementById('ClickShow');
    var gameChoose = document.getElementById('gameChoose');


    CliShow.onmouseover = function () {
        gameChoose.style.display = 'block';
    }

    CliShow.onmouseout = function () {
        gameChoose.style.display = 'none';
    }
    gameChoose.onmouseout = function () {
        gameChoose.style.display = 'none';
    }

    gameChoose.onmouseover = function () {
        gameChoose.style.display = 'block';
    }

};
