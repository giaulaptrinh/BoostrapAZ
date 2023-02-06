$(document).ready(function(){
    // 1. Xu ly su kien khi click vao thumb-item
    $('.list-thumb .thumb-item').click(function(e){
       let link_picture= $(this).find('img').attr('src');
      // console.log(link_picture);
      $('.show-picture img').attr('src',link_picture);
      $('.list-thumb .thumb-item').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();

    });
    // 2. Xu ly su kien khi click vao next -pre
    $('.slider-nav .next-btn').click(function(){
        if($('.list-thumb .thumb-item:last-child').hasClass('active')){
            $('.list-thumb .thumb-item:first-child').click();
        }else{
            $('.list-thumb .thumb-item.active').next().click();
        }       
    });
    $('.slider-nav .pre-btn').click(function(){
        if($('.list-thumb .thumb-item:first-child').hasClass('active')){
            $('.list-thumb .thumb-item:last-child').click();
        }else{
            $('.list-thumb .thumb-item.active').prev().click();
        }   
          
    });
});