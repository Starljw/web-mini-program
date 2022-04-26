/* pages/home/index.js */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navbarActiveIndex: 0,
    navbarTitle:[
      "首页",
      "补贴爆品",
      "女鞋",
      "宠物",
      "爱车",
      "箱包皮具"
    ],
    swipers:[{ "image": "/image/jd1.jpg" }, { "image": "/image/jd2.jpg" }, { "image": "/image/jd3.jpg" }, { "image": "/image/jd4.png" }, { "image": "/image/jd5.jpg" }],
    logos:[{ "image": "/image/logo1.png", "title": "京东超市" }, { "image": "/image/logo2.png", "title": "京东家电" }, { "image": "/image/logo3.png", "title": "京东服饰" }, { "image": "/image/logo4.png", "title": "京东手机" }, { "image": "/image/logo5.png", "title": "京喜" }, { "image": "/image/logo6.gif", "title": "一元疯抢" }, { "image": "/image/logo7.png", "title": "领京豆" }, { "image": "/image/logo8.png", "title": "领优惠卷" }, { "image": "/image/logo9.png", "title": "免费水果" }, { "image": "/image/logo10.png", "title": "充值中心" }],
    quicks:[{ "image": "/image/quick1.jpg", "price": "￥2449" }, { "image": "/image/quick2.jpg", "price": "￥2798" }, { "image": "/image/quick3.jpg", "price": "￥99" }, { "image": "/image/quick4.jpg", "price": "￥2280" }, { "image": "/image/quick5.jpg", "price": "￥2596" }, { "image": "/image/quick6.jpg", "price": "￥128" }],
    pageRow:[{"image": "/image/ad-0.jpg", "title":"品牌闪购"}, {"image":"/image/ad-1.jpg", "title":"排行榜"}, {"image":"/image/ad-2.jpg", "title":"每日特价"},{"image":"/image/ad-3.png", "title":"新品首发"}],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //loading
  }

})