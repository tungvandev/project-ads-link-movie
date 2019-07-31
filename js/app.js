!function (window, $) {

    // DOM ready
    $(function () {
        var searchInputWidth = $(window).width() - 100;
        console.log(searchInputWidth);
        $('#search-toogle .search-input input[name=keyword]').css('width', searchInputWidth + 'px');

        var bodyPaddingTop = parseInt($('#header').outerHeight());
        if ($('#alert').length > 0) {
            var alertHeight = parseInt($('#alert').outerHeight());

            $('#header').css('top', alertHeight + 'px');

            bodyPaddingTop = bodyPaddingTop + alertHeight;
        }

        $('body').css('padding-top', bodyPaddingTop + 'px');

        $('.swiper-container._items').swiper({
            loop: false,
            pagination: '.swiper-pagination',
            nextButton: null,
            prevButton: null,
            initialSlide: 0,
            slidesPerView: 'auto'
        });

        $('#banner .swiper-container').swiper({
            pagination: '.swiper-pagination',
            nextButton: null,
            prevButton: null,
            autoplay: 3000,
            paginationClickable: true
        });

        if ($('.slide-menu').length > 0) {
            $('.slide-menu.swiper-container').swiper({
                loop: false,
                pagination: '.swiper-pagination',
                nextButton: null,
                prevButton: null,
                slidesPerView: 'auto'
            });

            var menuActiveOffset = $('.slide-menu .swiper-slide.active').position();
            if (menuActiveOffset != undefined) {
                $('.slide-menu .swiper-wrapper').css('transform', 'translate3d(-' + menuActiveOffset.left + 'px, 0px, 0px)');
            }
        }

        $('#to-top').click(function () {
            $("html, body").animate({scrollTop: 0}, "100");
        });

        $('#menu-toggle').click(function () {
            $('#menu').toggle();
        });

        $('#close-menu').click(function () {
            $('#menu').hide();
        });

        $('#fillter-toggle').click(function () {
            $('#live-fillter').show();
        });

        $(document).on('click', '.modal .close', function () {
            $(this).closest('.modal').hide();
        });

        if ($(".ddd").length > 0) {
            $(".ddd").dotdotdot({});
        }

        var has_scroll_load = false;
        $(window).scroll(function () {
            $('.has-scroll-load').each(function () {
                var $this = $(this),
                    $data = $this.find('.scroll-load-data'),
                    $icon = $this.find('.scroll-load-icon');

                if (($(document).height() - $(window).scrollTop()) == $(window).height() && $this.hasClass('active') && !has_scroll_load) {
                    var $page = parseInt($this.data('page')) + 1;
                    console.log($this);
                    has_scroll_load = $.ajax({
                        url: $this.data('url'),
                        type: 'post',
                        data: {
                            page: $page,
                            json: $this.data('json')
                        },
                        beforeSend: function () {
                            $icon.show();
                        },
                        success: function (data) {
                            if (data.status == 1) {
                                $this.data('page', $page);
                                $icon.hide();

                                $data.append(data.html);

                                has_scroll_load = false;
                            }
                        }
                    });
                }

            });
        });

        $(document).on('click', '#film-filter-toogle', function () {
            $('#select-filter').show();
        });

        $(document).on('click', '#film-filter-submit', function () {
            var url = '/phim', type = $('#film-filter-type').val(), category = $('#film-filter-category').val(),
                country = $('#film-filter-country').val();

            url = type == 'all' ? url : url + '/' + type;
            url = category == 'all' ? url : url + '/' + category;
            url = country == 'all' ? url : url + '/' + country;

            window.location = url;
        });

        $('.select').each(function () {
            var $this = $(this),
                $item = $this.find('ul.options > li.active');

            if ($item.length > 0) {
                $this.find('.text').text($item.text());
                $this.find('.value').val($item.data('value'));
            }
        });

        $(document).on('click', '.select', function (e) {
            var $this = $(this);

            $('.select.open').each(function () {
                if (!$(this).is($this)) {
                    $(this).removeClass('open');
                }
            });

            if ($this.hasClass('open')) {
                $this.removeClass('open');
            } else {
                $this.addClass('open');
            }
        }).on('click', '.select > ul.options > li', function () {
            var $this = $(this),
                $select = $this.closest('.select'),
                $input = $select.find('.value'),
                $value = $this.data('value'),
                $text = $this.text();

            $input.val($value);

            $select.find('.text').text($text);

            $select.removeClass('open');

            return false;
        }).on('click', function (e) {
            if ($(e.target).closest(".select").length === 0) {
                $(".select").removeClass('open');
            }
        });

        $(document).on('click', '.btn_vnm_register', function (e) {
            var $this = $(this), url = $this.data('href');

            $.ajax({
                url: '/telco/vnm/request',
                type: 'post',
                data: {
                    url: url
                },
                success: function (res) {
                    // alert(res);
                    try {
                        if (res == '') {
                            window.location.href = '/telco/thong-bao/loi';
                        } else {
                            data = JSON.parse(res);
                            if (data.status == 0) {
                                window.location.href = '/telco/thong-bao/thanh-cong';
                            } else {
                                window.location.href = '/telco/thong-bao/loi';
                            }
                        }
                    }
                    catch (err) {
                        location.reload();
                    }
                }
            });

            return false;
        });

        $(document).on('click', '.btn_vnm_cancel', function (e) {
            var $this = $(this), url = $this.data('href');

            $.ajax({
                url: '/telco/vnm/request',
                type: 'post',
                data: {
                    url: url
                },
                success: function (res) {
                    // data = JSON.parse(res);

                    window.location.href = '/telco/thong-bao-huy';
                }
            });

            return false;
        });

    });
}(window, window.jQuery);