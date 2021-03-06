(function ($) {
    var defaultOpts = {
        pageIndex: 1,
        pageSize: 5,
        pageSizes: [5, 10, 50, 100],
        pageChange: function () {}
    };
    var htmlMap = {
        first: "<button class=\"pager-first\" disabled=\"disabled\">« 首页</button>",
        prev: "<button class=\"pager-prev\">‹ 前一页</button>",
        list: {
            wrap: "<ul class=\"pager-list\">%list%</ul>",
            normal: "<li class=\"pager-item-normal\">%index%</li>",
            active: "<li class=\"pager-item-active\">%index%</li>",
            ellipsis: "<li class=\"pager-item-ellipsis\">...</li>"
        },
        next: "<button class=\"pager-next\">后一页 ›</button>",
        last: "<button class=\"pager-last\">尾页 »</button>",
        sizes: {
            wrap: "<div class=\"pager-sizes\"><span>每页</span><div class=\"sizes-select\">%sizes%</div><span>条</span></div>",
            input: "<input type=\"text\" readonly=\"readonly\" value=\"%value%\" class=\"sizes-input\">",
            icon: "<span class=\"sizes-icon\">▼</span>",
            sizesWrap: "<div class=\"sizes-dropdown\"><div class=\"sizes-list\"><ul>%list%</ul></div>%arrow%</div>",
            sizesSelected: "<li class=\"sizes-select-item selected\">%sizes%</li>",
            sizesNormal: "<li class=\"sizes-select-item\">%sizes%</li>",
            arrowUp: "<div class=\"arrow up\"></div>",
            arrowDown: "<div class=\"arrow down\"></div>"
        },
        jump: "<div class=\"pager-jump\"><span>前往</span><input type=\"text\" maxlength=\"3\" class=\"jump-input\" value=\"1\"><span>页</span></div>",
        total: "<div class=\"pager-total\"><span>共 %total% 条</span></div>"
    };

    $.fn.extend({
        "pagination": function (opts) {
            console.log(defaultOpts, htmlMap);
        }
    });
})(window.jQuery);
