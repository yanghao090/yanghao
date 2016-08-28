window.onload = function(){
    //tab栏
    Golden();
    //拖拽
    drag();
    //游戏选择按钮
    GameChoose();
    //点击右上角更多按钮显示框
    ClickShow();


};


//tab栏
function Golden(){
  $('.ActionBar>.ActionBar-tab>li').click(function(){
     $(this).addClass('active').siblings().removeClass('active');
      var idx =$(this).index();
      $('.ActionBar>.matter>.main').eq(idx).addClass('selected').siblings().removeClass('selected');
  });
}

//拖拽人物
function drag(){
   //获取 关闭按钮的dom对象
    var close =document.getElementById('close');
    var womanHero =document.getElementById('womanHero');

      //注册close按钮的点击事件
    close.onclick=function(){
        womanHero.style.display='none';
    };

//大盒子
    var DragPart = document.getElementById("womanHero");

    DragPart.onmousedown = function(e){
        e = e || window.event;
        //求鼠标在当前盒子中的位置
        var spaceX = EventTools.getPageX(e) - DragPart.offsetLeft;
        var spaceY = EventTools.getPageY(e) - DragPart.offsetTop;

        document.onmousemove = function(e){
            e = e || window.event;
            //计算盒子的位置  鼠标当前的位置- 鼠标在盒子中的位置
            var x = EventTools.getPageX(e) - spaceX;
            var y = EventTools.getPageY(e) - spaceY;

            DragPart.style.left = x + "px";
            DragPart.style.top = y + "px";
        }
    }
    document.onmouseup = function () {
        //当鼠标弹起的时候，移除事件，不拖动box
        document.onmousemove = null;
    }




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




