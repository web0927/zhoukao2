require(['jquery', 'handlebars'], function ($, handlebars) {
    var str = '';
    $.ajax({
        url:'/login',
        success:function (data) {
            $.each(data, function (i, v) {
                console.log(i,v)
                str += `<div class="commit">
                            <p><b>目标金额</b><span>${v.ma}</span></p>
                            <em>元</em>
                        </div>
                        <div class="commit">
                            <p><b>资金用途</b><span>${v.yong}</span></p>
                        </div>`;
            })
            $('.cont').append(str)
        },
        error:function (eor) {
            console.warn(eor)
        }
    })
    $('.drag').on('mousedown', function (ev) {
        var x = ev.clientX  - $(this).offset().left;
        var y = ev.clientY - $(this).offset().top;

        $('.drag').on('mousemove', function (ev) {
            var _x = ev.clientX - x;
            var _y = ev.clientY - y;
            $(this).css({'left':_x + 'px'})
            $(this).css({'top':_y + 'px'})
            
        })
    })
})