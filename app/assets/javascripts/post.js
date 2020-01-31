$(function(){
  $(".wrapper__header__right-box__box2").on('click', function(e){
    let html = `
                <div class="wrapper">
                  <div class="wrapper__header">
                    <div class="wrapper__header__left-box">
                      <a class="btn-flat" href="#">マイページ</a>
                    </div>
                    <div class="wrapper__header__right-box">
                      <div class="wrapper__header__right-box__box1">
                        <a class="btn-simple" href="javascript:history.back()">戻る</a>
                      </div>
                      <div class="wrapper__header__right-box__box2">
                        <a class="btn-gradient" href="#">送信</a>
                      </div>
                    </div>
                  </div>
                  <div class="wrapper__main">
                    <div class = "wrapper__main__form">
                      <div class="wrapper__main__form__email">
                        <input type="text" placeholder="送り先E-Mail">
                        <i class="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
                      </div>
                    </div>
                </div>
                `

    e.preventDefault()
    console.log("wow")
    $(".wrapper").html(html)
  });
});
