(function() {
  var DEFAULT_VERSION = 8;
  var ua = navigator.userAgent.toLowerCase();
  var isIE = ua.indexOf("msie") > -1;
  var safariVersion;
  if (isIE) {
    safariVersion = ua.match(/msie ([\d.]+)/)[1];
    if (Number(safariVersion) <= DEFAULT_VERSION) {
      // 跳转至页面1
      alert('请使用高级浏览器，本系统不支持IE9以下版本！')
    }
  }

  // document.location.hash = ""
}())