// top250 板块
let top250 = {
    init: function () {
        this.$element = $('#top250');
        this.$loading = this.$element.find('.loading');
        this.isLoading = false;
        this.index = 0;
        this.bind();
        this.start();
    },
    // 绑定一些事件
    bind: function () {
        let _this = this;
        this.$element.scroll(function () {
            if ($(this).find('.container').height()-50 <= $(this).scrollTop()+$(this).height()) {
                _this.start();
            }
        })
    },
    // 开始获取数据和渲染的控制
    start: function () {
        let _this = this;
        this.getDate(function (data) {
            console.log(data);
            _this.render(data);
        });
    },
    // 获取数据
    getDate: function (callback) {
        let _this = this;
        if (_this.isLoading) return;
        _this.isLoading = true;
        _this.$loading.show();
        $.ajax({
            url: "http://api.douban.com/v2/movie/top250",
            type: "GET",
            dataType: "jsonp",
            data: {
              start: _this.index || 0,
              count: 20
            },
            success: function(data) {
              if (data.subjects) {
                // 渲染页面
                callback&&callback(data)
                _this.index+=20;
                _this.isLoading = false;
                _this.$loading.hide();
              } else {
                console.log("数据获取失败喽");
                _this.$loading.hide();
              }
            },
            error: function (err) {
                console.log(err);
            }
        });
    },
    // 渲染
    render: function (data) {
        let _this = this;
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
            _this.$element.find('.container').append(dataHtml);
          });
    },
}




// 整个项目控制中心
let app = {
    init: function () {
        this.$tabs = $('footer div');
        this.$panels = $('section');
        this.bind();
        top250.init();
    },
    bind: function () {
        let _this = this;
        this.$tabs.click(function () {
            $(this).addClass('active').siblings().removeClass();
            _this.$panels.eq($(this).index()).fadeIn().siblings().hide();
        })
    },
}
app.init();

