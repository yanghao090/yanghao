/**
 * Created by Administrator on 2016/8/22.
 */

window.onload = function(){
    LittleRotate ();

    Key();

    big();

    //游戏选择按钮
    GameChoose();

    //点击右上角更多按钮显示框
   ClickShow();
    //点击显示轮播
    spread();

};

//首页小轮播图

function LittleRotate (){
    //获取dom对象
    var box =document.getElementById('content-right-one');
    var screen =box.children[0];


    var ul = screen.children[0];
    var ol = screen.children[1];

    var arr = screen.children[2];
    var arrLeft = arr.children[0];
    var arrRight = arr.children[1];


    //图片的宽度
    var imgWidth = screen.offsetWidth;
    //点击箭头的时候记录索引
    var index = 0;
    //记录序号的索引
    var olIndex = 0;

    //记录有多少张图片---真实图片的个数
    var count = ul.children.length;

    //1 动态生成ol中的序号
    for(var i = 0; i < count; i++) {
        //动态生成一个li
        var li = document.createElement("li");
        //把li追加到ol中
        ol.appendChild(li);
        //li.innerText = i + 1;
    }
    //让第一个序号高亮显示
    ol.children[0].className = "current";

    //2 点击序号切换图片
    for(i = 0; i < ol.children.length; i++) {
        li = ol.children[i];
        //记录li对应图片的索引
        li.index = i;
        //给li注册单击事假
        li.onclick = function () {
            //控制li的高亮显示
            for(i = 0; i < ol.children.length; i++) {
                li = ol.children[i];
                //移除类样式
                li.removeAttribute("class");
            }
            //当前li高亮显示
            this.className = "current";

            //动画切换图片
            animate(ul, -this.index * imgWidth);

            //------7 点击序号的时候，让索引同步
            index = olIndex = this.index;
        };

    }


    //3 点击箭头切换图片
    //3.1 显示箭头
    box.onmouseover = function () {
        arr.style.display = "block";
        //5.2 鼠标放到box上，停止自动播放的定时器
        clearInterval(timerId);
    };

    box.onmouseout = function () {
        arr.style.display = "none";
        //5.3 鼠标离开box  开启定时器，继续自动播放
        timerId = setInterval(function () {
            arrRight.click();
        }, 3000);
    };
    //下一张
    arrRight.onclick = function () {
        //如果当前是最后一张图片(克隆的第一张图片), 让index = 0 并且偷偷设置ul切换到第一张图片
        if(index === count) {
            index = 0;
            ul.style.left = "0px";
        }
        index++;
        animate(ul, -index * imgWidth);

        //-----6.2 切换到下一个序号
        if(olIndex < count - 1) {
            olIndex++;
        }else{
            //如果是最后一项的话，让index= 0； 设置第一项
            olIndex = 0;
        }

        //清除ol中所有li高亮显示
        for(i = 0; i < ol.children.length; i++) {
            li = ol.children[i];
            li.removeAttribute("class");
        }
        //让当前li高亮显示
        ol.children[olIndex].className = "current";


    };
    //上一张
    arrLeft.onclick = function () {
        //如果是第一张图片的话，让index=克隆的图片的索引，偷偷的切换到最后一张
        if(index === 0) {
            index = count;
            ul.style.left = -index * imgWidth + "px";
        }
        index--;
        animate(ul, -index * imgWidth);

        //-----6.3 切换到上一个序号
        if(olIndex > 0) {
            olIndex--;
        }else{
            //如果是第一张，把序号切换成最后一张
            olIndex = count - 1;
        }
        //清除ol中所有li高亮显示
        for(i = 0; i < ol.children.length; i++) {
            li = ol.children[i];
            li.removeAttribute("class");
        }
        //让当前li高亮显示
        ol.children[olIndex].className = "current";
    };


    //4 无缝滚动  -- 修改上一张和下一张的代码
    //4.1 把第一张图片对应的li克隆，追加到ul的最后
    var firstLi = ul.children[0];
    var cloneLi = firstLi.cloneNode(true);
    //追加到ul的最后
    ul.appendChild(cloneLi);

    //5 自动播放
    //5.1 开启定时器
    var timerId = setInterval(function () {
        //切换下一张图片
        //相当于 手动点击了一下按钮
        arrRight.click();
    },3000);

    //6 点击下一张的时候，切换序号

    //7 解决点击完序号切换图片，之后再点击下一张  不同步的问题

}

//tab栏按键
  function Key(){
      $(function(){
//1. 找到所有li，注册mouseenter事件
          $(".content-right-two>.tab>.tab-item").click(function(){
              //2. 让当前元素添加active的类，并且排他
              $(this).addClass('line').siblings().removeClass('line');
              //3. 让products下面对应下标的div添加一个selected类，并且排他
              var idx = $(this).index();
          $(".content-right-two>.products>div").eq(idx).addClass("selected").siblings().removeClass("selected");

          })
      });
  };


//底部轮播全黑透明背景图
   function big() {
       //准备工作  获取对象

       var box = document.getElementById("carousel-one");
       var close = box.children[0];
       var screen = box.children[1];
       var arr1 = box.children[2];
       //
       var ul = screen.children[0];
       //
       var arrLeft = arr1.children[0];
       var arrRight = arr1.children[1];
       //图片的宽度
       var imgWidth = screen.offsetWidth;
       //点击箭头的时候记录索引
       var index = 0;


       //记录有多少张图片---真实图片的个数
       var count = ul.children.length;

       ////1 动态生成ol中的序号
       //for(var i = 0; i < count; i++) {
       //    //动态生成一个li
       //    var li = document.createElement("li");
       //    //把li追加到ol中
       //    ol.appendChild(li);
       //    li.innerText = i + 1;
       //}
       ////让第一个序号高亮显示
       //ol.children[0].className = "current";

       ////2 点击序号切换图片
       //for(i = 0; i < ol.children.length; i++) {
       //    li = ol.children[i];
       //    //记录li对应图片的索引
       //    li.index = i;
       //    //给li注册单击事假
       //    li.onclick = function () {
       //        //控制li的高亮显示
       //        for(i = 0; i < ol.children.length; i++) {
       //            li = ol.children[i];
       //            //移除类样式
       //            li.removeAttribute("class");
       //        }
       //        //当前li高亮显示
       //        this.className = "current";
       //
       //        //动画切换图片
       //        animate(ul, -this.index * imgWidth);
       //    };
       //}


       //3 点击箭头切换图片
       //3.1 显示箭头
       box.onmouseover = function () {
           arr1.style.display = "block";
       };

       box.onmouseout = function () {
           arr1.style.display = "none";
       };
       //下一张
       arrRight.onclick = function () {
       //如果当前是最后一张图片(克隆的第一张图片), 让index = 0 并且偷偷设置ul切换到第一张图片
           if (index === count) {
               index = 0;
               ul.style.left = "0px";
           }
           index++;
           animate(ul, -index * imgWidth);

       };
       //上一张
       arrLeft.onclick = function () {


           //如果是第一张图片的话，让index=克隆的图片的索引，偷偷的切换到最后一张
           if (index === 0) {
               index = count;
               ul.style.left = -index * imgWidth + "px";
           }
           index--;

           animate(ul, -index * imgWidth);

       };


       //4 无缝滚动  -- 修改上一张和下一张的代码
       //4.1 把第一张图片对应的li克隆，追加到ul的最后
       var firstLi = ul.children[0];
       var cloneLi = firstLi.cloneNode(true);
       //追加到ul的最后
       ul.appendChild(cloneLi);


       //5 自动播放

       //6 点击下一张的时候，切换序号


       //当点击 关闭的时候都关闭
       close.onclick = function () {
           carousel.style.display = 'none';
       };



   }

function  spread(){
    //当点击 所有图片的其中一个  就显示 全屏轮播
    var carousel = document.getElementById('carousel');
    var ul = document.getElementById('option');
    var lis = ul.children;

    for (var i = 0; i < lis.length; i++) {
        var li = lis[i];

        li.onclick = function () {
            carousel.style.display = "block";
        }
    }

}







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