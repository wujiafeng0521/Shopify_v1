import "slick-carousel";

$('.product-slider').slick({//产品滑块

  infinite: false,//不是无限滚动
  arrows: false,//不显示循环
  slidesToShow:1,//显示一张幻灯片
  asNavFor:'.product-slider-nav'//指定了与当前轮播关联的导航轮播（.product-slider-nav）。意味着它们之间会同步滑动，当在主轮播中切换时，关联的导航轮播也会相应切换

});

$('.product-slider-nav').slick({//产品导航滑块

  infinite: true,//无限滚动
  arrows: false,//不显示循环
  slidesToShow:3,//显示3张幻灯片
  asNavFor:'.product-slider',//指定了与当前轮播关联的主轮播（.product-slider)
  slidesToScroll:1,//一次滚动一张幻灯片
  centerMode: true,//启用中心模式
  focusOnSelect: true//在导航元素上点击时，将焦点设置到相应的主轮播元素

});