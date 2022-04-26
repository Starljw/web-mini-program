/* pages/list/index.js */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    prolist:[
      {
        "id": "4a4c8b8e4d8c22a97a94b46f58c1f3b9",
        "cover": "/image/info_image/10.jpg",
        "title": "华为HMS超薄便宜智能手机学生价游戏长续航大屏百元机 6.5寸大屏 4000mAh大电池——",
        "price": "599.00",
        "comment": "5000+",
        "rate": "97%",
        "shopname": "百事乐手机官方营业店"
      },
      {
        "id": "ziying",
        "cover": "/image/info_image/14.jpg",
        "title": "荣耀Play5T Pro 6400万双摄 6.6英寸全视屏 22.5W超级快充 4000mAh大电池 全……",
        "price": "1099.00",
        "comment": "20万+",
        "rate": "96%",
        "shopname": "荣耀京东自营旗舰店"
      },
      {
        "cover": "/image/info_image/12.jpg",
        "title": "荣耀Play5 活力版 66W超级快充 120Hz全速屏 6400万超清影像 全网通版 8GB+128GB……",
        "price": "1399.00",
        "comment": "5万+",
        "rate": "97%",
        "id": "ziying",
        "shopname": "荣耀京东自营旗舰店"
      },
      {
        "id": "ziying",
        "cover": "/image/info_image/14.jpg",
        "title": "小米（MII）Redmi 9A 活力版 66W超级快充 120Hz全速屏 6400万超清影像 全网通版 8GB+128GB……",
        "price": "599.00",
        "comment": "2万+",
        "rate": "98%",
        "shopname": "小米京东自营旗舰店"
      }
    ],
    page:1,
    size:5,
    noData:false
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  }
})