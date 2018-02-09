/* 
* @Author: Marte
* @Date:   2018-02-06 15:26:09
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 14:24:57
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
        // console.log(shopul)
        var shoppingTable_right_bot=$('.shoppingTable_right_bot p a')[0];
        var shoppingTable_right_bot2=$('.shoppingTable_right_bot p .pirce')[1];



        render();
var goodslist=JSON.parse(Cookie.get('goodslist'));
    function render(){

            var goodslist=JSON.parse(Cookie.get('goodslist'));

            var total = 0;

            if(goodslist.length===0){
                shopul.innerHTML =`<li><h1>您的购物车还没有宝贝，快去添加吧！</h1></l1>`;
            }else{
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
                                 <i class="addi">+</i>
                                 <i class="minusi">-</i>
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
                 
                }
                
                // console.log(666)

            // 添加到页面
            // shopul.innerHTML = '';
            car_list_cont.appendChild(shopul);


            // 写入总价
            // console.log(total);
            shoppingTable_right_bot.innerHTML =  total.toFixed(2);
            shoppingTable_right_bot2.innerHTML =  total.toFixed(2);
        }
        // 删除单个商品
        
         $('body').on('click','.del',function(){
                var id = $(this).closest('li');
                var ID =id.attr('data-id');
                console.log(id.attr('data-id'));
                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id ===ID){
                        goodslist.splice(i,1);
                        break;
                    }
                }
               id.remove();
               console.log(id.remove());
                 document.cookie = 'goodslist='+JSON.stringify(goodslist)+' ;path=/';
            render();
         });
        // 增加
        $('body').on('click','.qty_box i',function(){
            // console.log(this);
            var nima=$(this).closest('li');
            console.log(nima);
            
            if($(this).hasClass('addi')){
                var Qty =$(this).siblings('#qty').val();
                Qty=Qty*1+1;    
                // console.log(Qty);
                $(this).siblings('#qty').val(Qty);

                var aaaa=$(this).siblings('#qty').closest('li').attr('data-id');

                for(var value of goodslist){
                    if(value.id===aaaa){
                        value.qty=Qty*1;
                    }
                }
                 document.cookie = 'goodslist='+JSON.stringify(goodslist)+' ;path=/';
                render(); 
            }
        });
        // 减少
        $('body').on('click','.qty_box i',function(){
            // console.log(this);
            var nima=$(this).closest('li');
            console.log(nima);
            
            if($(this).hasClass('minusi')){
                var Qty =$(this).siblings('#qty').val();
                Qty=Qty*1-1;
                Qty=Qty<1?1:Qty;    
                // console.log(Qty);
                $(this).siblings('#qty').val(Qty);

                var aaaa=$(this).siblings('#qty').closest('li').attr('data-id');

                for(var value of goodslist){
                    if(value.id===aaaa){
                        value.qty=Qty*1;
                    }
                }
                 document.cookie = 'goodslist='+JSON.stringify(goodslist)+' ;path=/';
                render(); 
            }
        });


            
        
  
        
   
});

