/* 
* @Author: Marte
* @Date:   2018-02-05 13:59:17
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 22:15:00
*/
// 头部
jQuery(function($){
     $("#header").load('../html/head.html',function(){
            $(".gdsZoom").load('../html/fangdajing.html',function(){

                    var $smallList = $('.smallList');
                    var $gds_zoom_big= $('gds-zoom-big')
                    var srt=getObj();
                    console.log(srt);

            
                 $.ajax({
                            url:'../api/detailPages.php',
                            dataType:'json',
                            data:{
                                id:srt.id
                            },
                            success:function(data){
                                    var res = data;
                                    console.log(res);
                                    $smallList.html(res.map(function(item){
                                        console.log(666)
                                        return `<img src="${item.img.split(",")[0]}" data-big="${item.img.split(",")[1]}" class="active" data-guid="${item.id}">
                                            <img src="${item.img.split(",")[2]}" alt="" class=
                                            "">
                                            <img src="${item.img.split(",")[3]}" alt="" class=
                                            "">
                                            <img src="${item.img.split(",")[4]}" alt="" class=
                                            "">`  
                                    }).join(''));
                                     $gds_zoom_big.html(res.map(function(item){
                                            console.log(666)
                                            return `
                                                <div class="goods gds-zoom">
                                                <img src="${item.img.split(",")[0]}" data-big="${item.img.split(",")[0]}">
                                                <span class="minzoom" style="display: none; width: 180px; height: 135px; left: 203.5px; top: 201px;"></span></div>
                                                    `
                                                }).join(''));
                                     $('.detail_cont_right').html(res.map(function(item){

                                            return `
                                                <div class="detail_cont_right">
                                                <h2 class="h2_name">${item.name}</h2>
                                                <div class="goods_info">
                                                    <ul>
                                                        <li>
                                                                <div class="goods_info_name">品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌：</div>
                                                                <div class="godds_info_data">
                                                                    
                                                                            <a href="" target="_blank">
                                                                                ${item.brand}
                                                                            </a>
                                                                        
                                                                </div>

                                                        </li>
                                                        <li>
                                                            <div class="goods_info_name">产品型号：</div>
                                                            <div class="godds_info_data">${item.model}</div>
                                                        </li>
                                                        <li class="goods_price_now">
                                                            <div class="goods_info_name">抢&nbsp;&nbsp;购&nbsp;&nbsp;价：</div>
                                                            <div class="godds_info_data">
                                                                <span id="priceValue">
                                                                
                                                                <span class="clf76"><em>¥&nbsp;</em><strong class="fs30">${item.price}</strong></span>
                                                                
                                                                </span>
                                                                
                                                                    
                                                                
                                                            </div>
                                                           
                                                        </li>
                                                        <li class="goods_info_choose goods_info_support">
                                                            <div class="goods_info_name">商品支持：</div>
                                                            <div class="godds_info_data">
                                                              <a href=" " class="goods_info_promise_logo" title="支持7天无理由退换货！">支持无理由退</a>
                                                            
                                                            </div>
                                                        </li>
                                                        <li class="goods_info_choose productProperty">
                                                            <div class="goods_info_name lh29">颜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色：</div>
                                                            <div class="godds_info_data">
                                                                
                                                                    <a>${item.color.split(",")[0]}</a>
                                                                
                                                                    <a>${item.color.split(",")[0]}</a>
                                                                
                                                            </div>
                                                        </li>
                                                        <li class="goods_info_cnts" id="buyQty">
                                                            <div class="goods_info_name">数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：</div>
                                                            <div class="godds_info_data">
                                                                <a>-</a>
                                                                <input class="num" type="text" value="1">
                                                                <a>+</a>
                                                                <span class="godds_cnts_tips"></span>
                                                                
                                                                    <span style="color:green">&nbsp;&nbsp;&nbsp;&nbsp;库存：有货</span>
                                                                
                                                                
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div class="goods_buy_btns">
                                                        <bottom id="quickBuy" class="pro_common_add_btn" title="立即购买">立即购买</bottom>
                                                        <bottom id="addToCart" class="pro_common_add_btn addShoppingCart" title="加入购物车">加入购物车</bottom>
                                                        <a href="" class="gray_btn">加入收藏夹</a>
                                                        <a href="" class="gray_btn fav">2</a>
                                                        <div class="share_icon">
                                                            <a title="分享到新浪微博"></a>
                                                            <a title="分享到腾讯微博"></a>
                                                            <a title="分享到豆瓣"></a>
                                                            <a title="分享到开心网"></a>
                                                            <a title="分享到人人网"></a>
                                                            <a title="分享到淘江湖"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                `
                                            }).join(''));
                            }
                })

            
            function test(){


                var $goods =$('.goods');
                var $smallList= $('.smallList');
                var $smallImg= $('.smallList img');
                var $goodsImg = $('.goods img');
                $goods.gdsZoom({position:'right'});
                $smallImg.first().addClass('active');
                $goodsImg.attr('src',$smallList.find('img').eq(0).attr('src'));
                $smallList.on('click','img',function(){
                     var idx = $(this).index();
                     console.log(idx);
                      $smallImg.eq(idx).addClass('active').siblings('').removeClass('active');
                      $goodsImg.attr({
                        src:this.src,
                        'data-big':this.dataset.big || this.src
                    })
                })
            }
            setTimeout(test, 500);

function gwc(){


    var addToCart = $('#addToCart')[0];
    // console.log(addToCart);
    var smallList = $('.smallList img')[0];
    console.log(smallList);

    var h2_name =  $('.h2_name')[0];
    var fs30 = $('.fs30')[0];
     console.log(fs30);

        var goodslist = [];

        // 获取cookie
        // 判断cookie是否有值
        
        var cookies = document.cookie;
        cookies = cookies.split('; ');
        cookies.forEach(function(item){
            var arr = item.split('=');
            if(arr[0] === 'goodslist'){
                goodslist = JSON.parse(arr[1]);
            }
        });

        
            // console.log(123123123);

        addToCart.onclick=function(){

                var id = smallList.getAttribute('data-guid');
                console.log(id);


                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === id){
                        goodslist[i].qty++;
                        break;
                    }
                }

                if(i===goodslist.length){
                    // 通过按钮获取商品信息
                    var goods = {
                        id:id,
                        imgurl:smallList.src,
                        name:h2_name.innerHTML,
                        price:fs30.innerText,
                        qty:1

                    }


                    // 添加到数组
                    goodslist.push(goods);
                    
                }
                    console.log(goods)

                

                // 写入cookie
                document.cookie = 'goodslist='+JSON.stringify(goodslist)+' ;path=/';
            
        }
}
setTimeout(gwc, 1000);






            })
     })//载入远程 HTML 文件代码并插入页面中。
       
});
// 尾部
jQuery(function($){
     $("#footer").load('../html/footer.html')//载入远程 HTML 文件代码并插入页面中。
});
jQuery(function($){
             var $detail_cont_top = $('.detail_cont_top');
            var $detailItem = $('.detail_cont_top dd');
            var $detail_cont_bot = $('.detail_cont_bot dl');
            //隐藏除第一张以外的图片
            $detail_cont_bot.not(':first').hide()
            //高亮显示第一个tab
            $detailItem.first().addClass('active')

            $detail_cont_top.on('click','header dd',function(){
                console.log(this)
                // $(this).eq().addClass('active')
                var idx = $(this).index();

                $detailItem.eq(idx).addClass('active').siblings('').removeClass('active');

                //显示对应的图片，隐藏其他图片
                $detail_cont_bot.eq(idx).stop(true,true).show().siblings().stop(true,true).hide() 
                        
                    

                         
            })
});


// jQuery(function($){
//     // 海淘
//             var $smallList = $('.smallList')
//              var srt=getObj();
//              console.log(srt);
            
//                  $.ajax({
//                         url:'../api/detailPages.php',
//                         dataType:'json',


//                         data:{
//                             id:srt.id
//                         },
                        
//                         success:function(data){
//                                 var res = data;
//                                 console.log(res);
//                                  $smallList.html(res.map(function(item){
//                                     console.log(666)
//                                     return `<img src="${item.img.split(",")[0]}" data-big="${item.img.split(",")[1]}" class="active">
//                                         <img src="${item.img.split(",")[2]}" alt="">
//                                         <img src="${item.img.split(",")[3]}" alt="">
//                                         <img src="${item.img.split(",")[4]}" alt="">`  
//                                 }).join(''));
//                             }
//                         })
// });
// 
// // 
//  jQuery(function($){

// function xiding(){
        
//             var $detail_cont_top = $('.detail_cont_top')
//             console.log($detail_cont_top)
//             window.onscroll = function(){
//                 // 获取滚动跳滚动果的距离
//                 var scrollTop = window.scrollY;
//                 // console.log(scrollTop);
//                 console.log(666);
//                 // 

//                 if(scrollTop >=10){
//                     // class是关键字
//                     // 修改元素的类使用：className属性
//                     $detail_cont_top[0].className = 'fixed';
//                 }else{
//                     $detail_cont_top[0].className = '';
//                 }
//             }
        
//     }
//     xiding();
// });
// 


        



