// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usericon: [
      { id: 0, img: '../../imgs/user/order1.png', text: '待付款', src: '../calculator/calculator' },
      { id: 1, img: '../../imgs/user/order2.png', text: '待收货', src: '../joke/joke' },
      { id: 1, img: '../../imgs/user/order3.png', text: '待评价', src: '../weather/weather' },
      // { id: 1, img: '../../imgs/user/order4.png', text: '售后服务', src: '../sofa/sofa' },
      { id: 1, img: '../../imgs/user/order5.png', text: '全部订单', src: '../sofa/sofa' }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.navigationbarcolor()
  },
  navigationbarcolor: function () {
    wx.setNavigationBarTitle({
      title: '用户中心',
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#d81e06',
      animation: {duration: 100,timingFunc: 'easeIn'}
    })
  },
  order:function(e){
    var idx = e.currentTarget.dataset.idx
    wx.navigateTo({url:'/pages/shopcar/order/order?idx=' + idx})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})