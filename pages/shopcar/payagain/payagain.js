// pages/shopcar/payagain/payagain.js
const bases = require('../../../utils/base.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    odid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.odid)
    this.setData({ odid: options.odid})
  },  
  payagain:function(e){
    var type = e.currentTarget.dataset.type
    bases.postrequst('api/order/pay', { order_id: this.data.odid, payment: 'wechat'}).then(function (res) {
      console.log(res)
    })
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