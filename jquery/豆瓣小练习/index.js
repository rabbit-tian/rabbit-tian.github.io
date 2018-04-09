
let $ul = $("section").eq(0).find("ul")
// 点击footer 切换面板
$("footer > div").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("main > section").hide().eq($(this).index()).fadeIn();
})

// 获取豆瓣的数据
$.ajax({
    url: 'http://api.douban.com/v2/movie/top250',
    type: 'GET',
    dataType: 'jsonp',
    data: {
        start: 0,
        count: 20
    }
}).done(function (ret) {
    console.log(ret);
    setData (ret)
}).fail(function () {
    console.log('error...')
})

// 渲染数据

function setData (data) {
    data.subjects.forEach(function (e, index) {
        let dataHtml=`
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
        `
        let $node = $(dataHtml)
        let genresHtml = '';
        let directorsHtml = '';
        e.genres.forEach(function(el){
            genresHtml += `${el}、`
        })
        e.directors.forEach(function (el) {
            directorsHtml += `${el.name}、`
        })
        $('.theme').text(genresHtml);
        $('.directors').text(directorsHtml);
        $ul.append(dataHtml);
    })
}