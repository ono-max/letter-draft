$(function(){
  $(".wrapper__header__right-box__box2").on('click', function(e){
    let html = `
                <html><head>
                <meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
                <title>FutureLetter</title>
                <meta name="csrf-param" content="authenticity_token">
                <meta name="csrf-token" content="UAd/6c+llAWJ5gtK88Er0chYfgOd5PUUJ0VAAYozDDX2HCo/VsqEZS+tdD4bG9R38FA0KGpZuM02+OV0T/+u0A==">

                <link rel="stylesheet" media="all" href="/assets/application.self-9e9fd6f394136b4b56e1bdf4351a3e917026c694103c93d1687594cd1cb0f920.css?body=1">
                <script src="/assets/rails-ujs.self-43e81c501e7e36871a34b4b950451cc7cb047af4e846ec742539e64724582452.js?body=1"></script>
                <script src="/assets/activestorage.self-1ed4604ac2170045f1ffca4edb81a75246661555e4f9cf682bb8a21825e32e1c.js?body=1"></script>
                <script src="/assets/jquery.self-bd7ddd393353a8d2480a622e80342adf488fb6006d667e8b42e4c0073393abee.js?body=1"></script>
                <script src="/assets/jquery_ujs.self-784a997f6726036b1993eb2217c9cb558e1cbb801c6da88105588c56f13b466a.js?body=1"></script>
                <script src="/assets/action_cable.self-69fddfcddf4fdef9828648f9330d6ce108b93b82b0b8d3affffc59a114853451.js?body=1"></script>
                <script src="/assets/cable.self-8484513823f404ed0c0f039f75243bfdede7af7919dda65f2e66391252443ce9.js?body=1"></script>
                <script src="/assets/post.self-00a22c3d0d61c280171530533c89778e1cd907f1127f71110a3e51f4e1ce2f4c.js?body=1"></script>
                <script src="/assets/posts.self-877aef30ae1b040ab8a3aba4e3e309a11d7f2612f44dde450b5c157aa5f95c05.js?body=1"></script>
                <script src="/assets/users.self-877aef30ae1b040ab8a3aba4e3e309a11d7f2612f44dde450b5c157aa5f95c05.js?body=1"></script>
                <script src="/assets/application.self-12be097b9a2442b0b6cdcb5146d1d63c00abcde3675ff34d1de6126cb13e6714.js?body=1"></script>
                </head>
                <body>
                <div class="wrapper">
                <div class="wrapper__header">
                </div>
                <div class="wrapper__main">
                <form action="/" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="UAd/6c+llAWJ5gtK88Er0chYfgOd5PUUJ0VAAYozDDX2HCo/VsqEZS+tdD4bG9R38FA0KGpZuM02+OV0T/+u0A==">
                <div class="wrapper__main__main-content">
                <div class="wrapper__main__main-content__date">
                <select id="_date_1i" name="[date(1i)]">
                <option value="2020" selected="selected">2020年</option>
                <option value="2021">2021年</option>
                <option value="2022">2022年</option>
                <option value="2023">2023年</option>
                <option value="2024">2024年</option>
                <option value="2025">2025年</option>
                </select>
                <select id="_date_2i" name="[date(2i)]">
                <option value="1" selected="selected">1月</option>
                <option value="2">2月</option>
                <option value="3">3月</option>
                <option value="4">4月</option>
                <option value="5">5月</option>
                <option value="6">6月</option>
                <option value="7">7月</option>
                <option value="8">8月</option>
                <option value="9">9月</option>
                <option value="10">10月</option>
                <option value="11">11月</option>
                <option value="12">12月</option>
                </select>
                <select id="_date_3i" name="[date(3i)]">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31" selected="selected">31</option>
                </select>
                <div class="wrapper__main__main-content__form">
                <input type="email" name="email" id="email", placeholder = "送り主のEmail">
                <i class="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
                </div>
                <div class="wrapper__main__main-content__submit">
                <input type="submit" name="commit" value="登録する" data-disable-with="登録する">
                </div>
                </div>
                </form></div>
                </div>
                </body></html>
                `

    e.preventDefault()
    console.log("wow")
    $(".wrapper").html(html)
  });
});
