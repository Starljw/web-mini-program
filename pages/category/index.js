// pages/category/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems:[
      "热搜推荐",
      "食品酒水",
      "生鲜果蔬",
      "美妆护肤",
      "生鲜果蔬",
      "个护清洁",
      "精品男装",
      "精品女装",
      "内衣配饰",
      "鞋靴箱包",
      "手机数码",
      "家用电器",
      "电脑办公",
      "运动户外",
      "汽车生活"
    ],
    navRightItems:[
      [
        {
          "title": "热门搜索",
          "desc": [
            {
              "text": "手机",
              "img": "/image/category_image/1-1.png"
            },
            {
              "text": "口红",
              "img": "/image/category_image/1-2.jpg"
            },
            {
              "text": "空调",
              "img": "/image/category_image/1-3.png"
            },
            {
              "text": "冰箱",
              "img": "/image/category_image/1-4.png"
            },
            {
              "text": "跑步鞋",
              "img": "/image/category_image/1-5.jpg"
            },
            {
              "text": "华为",
              "img": "/image/category_image/1-6.jpg"
            },
            {
              "text": "电风扇",
              "img": "/image/category_image/1-7.jpg"
            },
            {
              "text": "平板电视",
              "img": "/image/category_image/1-8.jpg"
            },
            {
              "text": "蓝牙耳机",
              "img": "/image/category_image/1-9.jpg"
            },
            {
              "text": "白酒",
              "img": "/image/category_image/1-10.png"
            },
            {
              "text": "笔记本",
              "img": "/image/category_image/1-11.jpg"
            },
            {
              "text": "洗衣机",
              "img": "/image/category_image/1-12.png"
            },
            {
              "text": "香水",
              "img": "/image/category_image/1-13.jpg"
            },
            {
              "text": "电饭煲",
              "img": "/image/category_image/1-14.jpg"
            },
            {
              "text": "方便食品",
              "img": "/image/category_image/1-15.jpg"
            }
          ]
        },
        {
          "title": "男士热搜",
          "desc": [
            {
              "text": "外套",
              "img": "/image/category_image/2-1.png"
            },
            {
              "text": "内衣",
              "img": "/image/category_image/2-2.png"
            },
            {
              "text": "牛仔裤",
              "img": "/image/category_image/2-3.jpg"
            },
            {
              "text": "休闲裤",
              "img": "/image/category_image/2-4.png"
            },
            {
              "text": "棉服外套",
              "img": "/image/category_image/2-5.png"
            },
            {
              "text": "皮带",
              "img": "/image/category_image/2-6.png"
            }
          ]
        },
        {
          "title": "家电热搜",
          "desc": [
            {
              "text": "微波炉",
              "img": "/image/classify/microwave.png"
            },
            {
              "text": "电饭煲",
              "img": "/image/classify/cooker.png"
            }
          ]
        }
      ],
      [
        {
          "title": "热销推荐",
          "desc": [
            {
              "text": "纯净水",
              "img": "/image/category_image/3-1.jpg"
            },
            {
              "text": "纯牛奶",
              "img": "/image/category_image/3-2.jpg"
            },
            {
              "text": "方便面",
              "img": "/image/category_image/3-3.jpg"
            },
            {
              "text": "白酒",
              "img": "/image/category_image/3-4.jpg"
            },
            {
              "text": "薯片",
              "img": "/image/category_image/3-5.jpg"
            }
          ]
        },
        {
          "title": "休闲食品",
          "desc": [
            {
              "text": "休闲零食",
              "img": "/image/category_image/4-1.jpg"
            },
            {
              "text": "膨化食品",
              "img": "/image/category_image/4-12.jpg"
            },
            {
              "text": "坚果炒货",
              "img": "/image/category_image/4-3.jpg"
            },
            {
              "text": "饼干蛋糕",
              "img": "/image/category_image/4-4.jpg"
            },
            {
              "text": "中华老字号",
              "img": "/image/category_image/4-5.jpg"
            }
          ]
        }
      ]
    ],
    curIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  switchRightTap(e){
    let curindex = parseInt(e.currentTarget.dataset.curindex); 
    // console.log(curindex)
    this.setData({
      curIndex: curindex
    })
  },
  showListView(e){
    // console.log(e.currentTarget.dataset.txt);
    let txt = e.currentTarget.dataset.txt;
    //导航跳转
    wx.navigateTo({
      url:"/pages/list/index?title="+txt,
    })
  }
})