/* 
* @Author: Marte
* @Date:   2018-02-06 15:26:09
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 22:33:30
*/
jQuery(function($){
     $("#header").load('../html/login_header.html')

     //载入远程 HTML 文件代码并插入页面中。


});
// 尾部
jQuery(function($){
     $("#footer").load('../html/footer.html')//载入远程 HTML 文件代码并插入页面中。
});

//购物车
jQuery(function($){

        var car_list_cont = $('.car_list_cont')[0]
        var shopul = $('.shopul')[0];
        console.log(shopul)
        var shoppingTable_right_bot=$('.shoppingTable_right_bot p a')[0];
        var shoppingTable_right_bot2=$('.shoppingTable_right_bot p .pirce')[1];


        // var oSubPrice = shopul.nextElementSibling;

        // var btnClear = document.getElementById('btnClear');

        var goodslist = Cookie.get('goodslist');
        console.log(goodslist);
        if(goodslist.length===0){
            goodslist = [];
        }else{
            goodslist = JSON.parse(goodslist);
        }

        render();
           function render(){

                var total = 0;
 
                shopul.innerHTML = goodslist.map(function(item){
                // console.log(8797989);
                total += item.price*item.qty;
                // console.log(666)
                return `
                        <li data-id="${item.id}">
                            <input type="checkbox" id="checkbox"><div class="list_box">
                        
                            <img src="${item.imgurl}"><div class="list_box_name"><a href="">${item.name}</a></div> </div>
                            <span class="pirce">
                                <i>￥</i>
                                ${item.price}
                            </span>
                             <div class="qty_box">
                                 <input id="qty" type="text" value="${item.qty}">
                                 <i>+</i>
                                 <i>-</i>
                             </div>
                             <span class="pirce">
                                <i>￥</i>
                                ${item.price*item.qty}
                            </span>
                            <span class="chaozuo_box">
                                <button class="del">删除</button>
                                <button href="">移入收藏夹</button>
                            </span>
                        </li>`

                }).join('')
                 
                
                console.log(666)

            // 添加到页面
            // shopul.innerHTML = '';
            car_list_cont.appendChild(shopul);


            // 写入总价
            shoppingTable_right_bot.innerHTML =  total.toFixed(2);
            shoppingTable_right_bot2.innerHTML =  total.toFixed(2);
        }



                
       
        // 删除单个商品
        
         $('.del').on('click',function(){
                console.log(666)


                var id = $(this).closest('li')
                id.attr('data-id');
                console.log(id);

                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === id){
                        goodslist.splice(i,1);
                        break;
                    }
                }
               
               id.remove();
                // 重新写入cookie
                Cookie.set('goodslist',JSON.stringify(goodslist))+' ;path=/';

                

         })
            
        
  
        
   
});

