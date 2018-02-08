/* 
* @Author: Marte
* @Date:   2018-02-04 21:39:44
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 13:32:41
*/
jQuery(function($){
     $("#header").load('../html/head.html')//载入远程 HTML 文件代码并插入页面中。
});
// 尾部
jQuery(function($){
     $("#footer").load('../html/footer.html')//载入远程 HTML 文件代码并插入页面中。
});
// listTab
jQuery(function($){
     $(".listTab").load('../html/listTab.html',
            function(){
             //初始化
            var $list = $('.listtab');
            var $listItem = $('.listtab div');
            var $content_right = $('.content_right div');
            //隐藏除第一张以外的图片
            $content_right.not(':first').hide()
            //高亮显示第一个tab
            $listItem.first().addClass('active')

            $list.on('mouseover','header div',function(){
                console.log(this)
                // $(this).eq().addClass('active')
                var idx = $(this).index();
                $listItem.eq(idx).addClass('active').siblings('').removeClass('active');

                //显示对应的图片，隐藏其他图片
                $content_right.eq(idx).stop(true,true).show().siblings().stop(true,true).hide() 
                    
                

                     
            })
     })//载入远程 HTML 文件代码并插入页面中。
});


// 
// 
// 
jQuery(function($){
     $(".listTab_left").load('../html/listTab_left.html',
            function(){
             //初始化
             var $tab_left = $('.tab_left');
            var $tab_leftItem = $('.tab_left div');
            var $content = $('.content div');
            //隐藏除第一张以外的图片
            $content.not(':first').hide()
            //高亮显示第一个tab
            $tab_leftItem.first().addClass('active')

            $tab_left.on('mouseover','header div',function(){
                console.log(this)
                // $(this).eq().addClass('active')
                var idx = $(this).index();

                $tab_leftItem.eq(idx).addClass('active').siblings('').removeClass('active');

                //显示对应的图片，隐藏其他图片
                $content.eq(idx).stop(true,true).show().siblings().stop(true,true).hide() 
                    
                

                     
            })
     })//载入远程 HTML 文件代码并插入页面中。
});

jQuery(function($){
    // 海淘
let $pageNo = 1;



$.ajax({
        url:'../api/listpage.php',
        dataType:'json',
        data:{
            pageNo:$pageNo,
            
        },
        success:function(data){
        // let pageNo = 1;
        //    let qty = 4;
        aa(data);
        listgoods(data);

        // var res = JSON.parse(data);
         // 海淘                                                     
        }
       });              
function aa(data){
var $page = $('#page');
let pageQty = Math.ceil(data.total/data.qty);
$page.innerText = '';
for(let i=1;i<=pageQty;i++){
            let span = document.createElement('span');
            span.innerText = i;
            // return `<span>${i}</span>`
            if(i===data.pageNo){
                span.className = 'active';
            }
            page.appendChild(span);
}
$page.on('click','span',function(){
    var idx = $(this).index();
    console.log(idx);


    $(this).addClass('active').siblings('').removeClass('active');
    $.ajax({
        url:'../api/listpage.php',
        data:{pageNo:$(this).text()},
        dataType:'json',
        success:function(data){
            console.log(data)
            listgoods(data);
            
        }

    })
})

}   

function listgoods(data){

var $main_right_bot_list = $('.main_right_bot_list');
$main_right_bot_list.html(data.data.map(function(item){
    // var imgurl=item.img.split(",");
    // console.log(imgurl);

    return `<div class="haitao_list" id="${item.id}">

            
            <a href="../html/detailPages.html?id=${item.id}">
                    <img src="${item.img.split(",")[0]}"/>
                </a>
                <p class="title">
                    <a>
                        ${item.name}
                    </a>
                </p>
                <p class="pingfen">
                    <span style="background:none;"><img src = "${item.egg_img}"></span>
                        <a href="../html/detailPages.html">[<i>${item.dianji}</i>]</a>
                </p>
                <p class="priceline">                                    
                    <del><i>￥</i>${item.price}</del> 
                    <span class="price">${item.price}</span>
                </p>

                <p class="listbuy">
                    <a href="../html/detailPages.html" class="">购买</a>
                    <a href="" class="">收藏</a>
                    <a href="" class=""><input type="checkbox" />比较</a>
                </p>
    </div>`

}).join(""));

}
});








