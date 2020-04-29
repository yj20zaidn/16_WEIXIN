// pages/p03/p03.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //此处声明当前组件可用的Model数据
    myMarkers: [
      {
        latitude: 39.908732,
        longitude: 116.397464,
        title:'天安门城楼',
        iconPath: '/assets/images/star_full.png',
        width:30,
        height: 30
      },
      {
        latitude: 39.908090,
        longitude: 116.396563,
        title:'西侧华表'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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