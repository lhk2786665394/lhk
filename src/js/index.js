/* 
* @Author: Marte
* @Date:   2018-02-02 16:16:04
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 12:22:30
*/

// 头部
jQuery(function($){
     $("#header").load('../html/head.html')//载入远程 HTML 文件代码并插入页面中。

     // lxCarousel轮播图插件
     $(".benner_top").lxCarousel({
        width:771,
        height:245,
        imgs:['../img/benner1.jpg','../img/benner2.jpg','../img/benner3.jpg','../img/benner4.jpg','../img/benner5.jpg','../img/benner6.jpg','../img/benner7.jpg','../img/benner8).jpg']
     })
     $(".benner_right_top").lxCarousel({
        width:230,
        height:240,
        imgs:['../img/benner_right_top1.jpg','../img/benner_right_top2.jpg','../img/benner_right_top3.jpg','../img/benner_right_top4.jpg','../img/benner_right_top5.jpg']
     })
     $(".interest_right").lxCarousel({
        width:240,
        height:270,
        imgs:['../img/interest_right_01.jpg','../img/interest_right_02.jpg']
     })
     $(".hot_right_bot").lxCarousel({
        width:230,
        height:130,
        imgs:['../img/benner1.jpg','../img/benner2.jpg','../img/benner3.jpg','../img/benner4.jpg','../img/benner5.jpg','../img/benner6.jpg','../img/benner7.jpg','../img/benner8).jpg']
     })
     $(".haitaolunbo2").lxCarousel({
        width:480,
        height:205,
        imgs:['../img/benner1.jpg','../img/benner2.jpg','../img/benner3.jpg',]
     })
     $(".shoujisheying").lxCarousel({
        width:480,
        height:205,
        imgs:['../img/shoujisheying1.jpg','../img/shoujisheying2.jpg','../img/shoujisheying3.jpg',]
     })
     $(".pingbandiannao").lxCarousel({
        width:480,
        height:205,
        imgs:['../img/pingbandiannao1.jpg','../img/pingbandiannao2.jpg','../img/pingbandiannao3.jpg','../img/pingbandiannao4.jpg','../img/pingbandiannao5.jpg']
     })
     $(".jiadian").lxCarousel({
        width:480,
        height:205,
        imgs:['../img/jiadian1.jpg','../img/jiadian2.jpg']
     })
     $(".shenghuo").lxCarousel({
        width:480,
        height:205,
        imgs:['../img/shenghuo1.jpg','../img/shenghuo2.jpg']
     })
});
// 尾部
jQuery(function($){
     $("#footer").load('../html/footer.html')//载入远程 HTML 文件代码并插入页面中。
});

// 热卖区+手风琴动画
jQuery(function($){
     $(".good_bot").load('../html/shoufengqin.html',function(){
        var $main = $('#main');
                // console.log($main);
                $main.on('mouseenter','li',function(){
                    // console.log(this);
                    $(this).stop().animate({width:660}).siblings('li').stop().animate({width:175})
                    // $(this).find('.des').fadeOut()
                })
                
     })//载入远程 HTML 文件代码并插入页面中。
});

// interest_tab tab切换动画
jQuery(function($){
     $(".interest_tab").load('../html/tab.html',
     function(){
     //载入远程 HTML 文件代码并插入页面中。
      //初始化
            var $tab = $('.tab');
            var $tabItem = $('.tab div');
            var $content = $('.content div');
            //隐藏除第一张以外的图片
            $content.not(':first').hide()
            //高亮显示第一个tab
            $tabItem.first().addClass('active')

            $tab.on('mouseover','header div',function(){
                console.log(this)
                // $(this).eq().addClass('active')
                var idx = $(this).index();
                $tabItem.eq(idx).addClass('active').siblings('').removeClass('active');

                //显示对应的图片，隐藏其他图片
                $content.eq(idx).stop(true,true).show().siblings().stop(true,true).hide() 
                    
                })

                     
            })
});

//海淘区
//右边tab
// jQuery(function($){
     
//         var $tab = $('#tab');
//             var $tabItem = $('#tab div');
//             var $content = $('#content div');
//             //隐藏除第一张以外的图片
//             $content.not(':first').hide()
//             //高亮显示第一个tab
//             $tabItem.first().addClass('active')

//             $tab.on('mouseover','header div',function(){
//                 console.log(this)
//                 // $(this).eq().addClass('active')
//                 var idx = $(this).index();
//                 $tabItem.eq(idx).addClass('active').siblings('').removeClass('active');

//                 //显示对应的图片，隐藏其他图片
//                 $content.eq(idx).stop(true,true).show().siblings().stop(true,true).hide() 
            
//      })//载入远程 HTML 文件代码并插入页面中。
// });
// 
// 
// 
// 
// 
// D数据库
jQuery(function($){
    // 海淘
            var $haitao_box_bot = $('.haitao_box_bot');

            var $shouiji_box = $('.shouiji_box');
            var $pingban = $('.pingban');
            var $jiayong = $('.jiayong');
            var $shenghuo_box = $('.shenghuo_box');
            
            
                 $.ajax({
                        url:'../api/goods.php',
                        dataType:'json',

                        success:function(data){
                                var res = data;

                                console.log(data);

                                //热卖区
                                $('.hot_left_bot')
                                 // 海淘
                                $haitao_box_bot.html(res.slice(0, 7).map(function(item){
                                    // var imgurl=item.img.split(",");
                                    // console.log(imgurl);
                                     return xieru(item);
                                     

                                    
                                    
                                }).join(''));
                                 // 手机
                                $shouiji_box.html(res.slice(11, 18).map(function(item){
                                    // var imgurl=item.img.split(",");
                                    // console.log(imgurl);

                                    return xieru(item);

                                }).join(''));
                                 // 平板
                                $pingban.html(res.slice(18, 25).map(function(item){
                                    // var imgurl=item.img.split(",");
                                    // console.log(imgurl);

                                    return xieru(item);

                                }).join(''));
                                 // 家电
                                $jiayong.html(res.slice(24, 23).map(function(item){
                                    // var imgurl=item.img.split(",");
                                    // console.log(imgurl);

                                    return xieru(item);

                                }).join(""));
                                 // 生活
                                $shenghuo_box.html(res.slice(23, 30).map(function(item){
                                    // var imgurl=item.img.split(",");
                                    // console.log(imgurl);

                                    return xieru(item);

                                }).join(""));                       
                        }
                })
                        
            function xieru(item){

                return `<div class="haitao_list" id="${item.id}">

                        <a href="../html/detailPages.html?id=${item.id}"><img src=${item.img.split(",")[0]}></a>
                        <p class="title"> <a target="_blank" title="" href="../html/detailPages.html"><img  alt="" height="12px" width="65px" src=${item.small_img}>${item.name}</a>
                            </p>
                             <p class="priceline">
                             
                                <del>${item.price}</del> 
                             
                             <span class="price">${item.price}</span>
                         </p>
                </div>`
            }

});




