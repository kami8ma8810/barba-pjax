(function (Barba) {
  //Barba.jsの初期化
  document.addEventListener("DOMContentLoaded", function (event) {
    console.log('pjax start');
    Barba.Pjax.start();
    //Prefetch機能はマウスがリンクをホバーした際にリンク先のコンテンツを先に取得する機能※サーバー負担増
    Barba.Prefetch.init();
  });
}(Barba));