// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      id: 1,
      latitude: 22.628113,
      longitude: 113.200711,
      name: ''
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  bindmarkertap: function (options){
    wx.openLocation({
      latitude: 22.628113,
      longitude: 113.200711,
      scale: 25,
      name:'中山市古镇瑞丰灯配城15栋10号'
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})