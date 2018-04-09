let $ul = $("section").eq(0).find("ul");
// 点击footer 切换面板
$("footer > div").click(function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
  $("main > section")
    .hide()
    .eq($(this).index())
    .fadeIn();
});

// 获取豆瓣的数据
let index = 0; // 记录请求的条数目录
let isLoading = false; // 函数节流，加一个枷锁
let $loading = $('.loading'); // loading 图

getData();
function getData(){
    if (isLoading) return;
    isLoading = true;
    $loading.show();
    $.ajax({
        url: "http://api.douban.com/v2/movie/top250",
        type: "GET",
        dataType: "json",
        data: {
          start: index,
          count: 20
        },
        success: function(ret) {
          console.log(ret);
          if (ret.subjects) {
            // 渲染页面
            setData(ret);
            index+=20;
            isLoading = false;
            $loading.hide();
          } else {
            console.log("数据获取失败喽");
            $loading.hide();
          }
        },
        error: function (err) {
            console.log(err);
        }

      });
}

// 渲染数据节点
function setData(data) {
  data.subjects.forEach(function(e, index) {
    let dataHtml = `
                <li>
                <a href="#" class="clearfix">
                    <div class="cover">
                        <img src="${e.images.medium}" alt="">
                    </div>
                    <div class="detail">
                        <h3>${e.title}</h3>
                        <div class="other">
                            <span>${e.rating.average}</span>分 /
                            <span>${e.collect_count}</span>收藏</div>
                        <div class="other">
                            <span>${e.year}/ </span>
                            <p style="display: inline-block;" class="theme"></p>  
                        </div>
                        <div class="other">导演：
                            <span class="directors"></span>
                        </div>
                        <div class="other">主演：
                            <span>周星驰</span> 、
                            <span>吴孟达</span> 、
                            <span>吴孟达</span> 、
                            <span>吴孟达</span>
                        </div>
                    </div>
                </a>
            </li>
        `;
    let $node = $(dataHtml);
    let genresHtml = "";
    let directorsHtml = "";
    e.genres.forEach(function(el) {
      genresHtml += `${el}、`;
    });
    e.directors.forEach(function(el) {
      directorsHtml += `${el.name}、`;
    });
    $(".theme").text(genresHtml);
    $(".directors").text(directorsHtml);
    $ul.append(dataHtml);
  });
}

// 当内容滑动到底部时，再加载20条数据
let timer; // 函数节流
$('main').scroll(function () {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        if ($('section').eq(0).height()-50 <=  $('main').scrollTop() + $('main').height()) {
            // 获取豆瓣的数据
            getData();
        }
    },300)
   
})

