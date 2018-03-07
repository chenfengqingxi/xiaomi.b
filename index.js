
    $(function () {

        let div=$('.banner0')
        let pic=$('ul.banner li')
        let left=$('.banner-jiantou.left1')
        let right=$('.banner-jiantou.right2')
        let cirs=$('.yd li')
        let n=0
        function move() {
            n++;
            if (n>=pic.length) {
                n=0;
            }
            pic.removeClass('banlist').eq(n).addClass('banlist')
            cirs.removeClass('active').eq(n).addClass('active')
        }
        let time=setInterval(move,3000);
        div.mouseenter(function () {
            clearInterval(time)
        })
        div.mouseleave(function () {
            time=setInterval(move,3000)
        })


        right.click(function () {
            move()
        })
        left.click(function () {
            n--;
            if(n<0){
                n=pic.length-1
            }
            pic.removeClass('banlist')
            pic[n].addClass('banlist')
        })

            cirs.click(function () {
                    let a=$(this).index()
                    pic.removeClass('banlist')

                    pic.eq(a).addClass('banlist')
                    cirs.removeClass('active')
                cirs.eq(a).addClass('active')
                  n=a
            })






        function xxka(a,b) {
           let nav=$(a);
           let list=$(b)
           nav.mouseenter(function () {
                 let a=$(this).index()
                 nav.removeClass('active1')
               nav.eq(a).addClass('active1')
               list.removeClass('active1')
                 list.eq(a).addClass('active1')

               })
         }
        xxka('#jjdd .header_right a','#jjdd .dibu1 .dibu-right')
        xxka('#zhineng .header_right a','#zhineng .dibu1 .dibu-right')
        xxka('#dapei .header_right a','#dapei .dibu1 .dibu-right')
        xxka('#peijian .header_right a','#peijian .dibu1 .dibu-right')
        xxka('#zhoubian .header_right a','#zhoubian .dibu1 .dibu-right')




        $(".jtrdanpin").click(function () {
            $('.h-dibubox .dibu:eq(0)').animate({left:-($('.h-dibubox').width())}, function () {
                $('.jtldanpin').removeClass('active')
            })
            $('.h-dibubox .dibu:eq(1)').animate( {left: 0}, function () {
                $(".jtrdanpin").addClass('active')
            })
        })
        $(".jtldanpin").click(function () {
            $('.h-dibubox .dibu:eq(1)').animate({left:$('.h-dibubox').width()}, function () {
                $('.jtldanpin').addClass('active')
            })
            $('.h-dibubox .dibu:eq(0)').animate( {left: 0}, function () {
                $(".jtrdanpin").removeClass('active')
            })
        })







    function box1(bo) {
        let box=$(bo)
        let now=0;
        let next=0;
        let pic1=$(bo).children('.nrul li')
        let right1=$(bo).children('.right')
        let left1=$(bo).children('.left')
        let cirs1=$(bo).children('.yuandian li')
        let width=box.width
        // let flag=true
        function move1() {
            next=now+1
            if(next>pic1.length){
                return
            }
            pic.eq(now).animate({left:-width},200)
            pic.eq(next).animate({left:0},200)
            cirs1.eq(now).removeClass('active')
            cirs1.eq(next).addClass('active')
            now=next
        }
        right1.onclick=function () {
            move1()
        }
        left1.click(function () {
            next=now-1
            if(next<0){
                return
            }
            pic1.eq(next).animate({left:0},200)
            pic1.eq(now).animate({left:width},200)
            cirs1[now].removeClass('active')
            cirs1[next].addClass('active')
            now=next
        })
        cirs1.click(function () {
                next=index
                if(next>now){
                    pic1[next].css(left='100%')
                    pic1[now].animate({left:'-width'},400)
                    pic1[next].animate({left:'0'},400)

                    cirs1[now].removeClass('active')
                    cirs1[next].addClass('active')
                    now=next
                }else if(next<now){
                    pic1[next].css(left='100%')
                    pic1[now].animate({left:width},400)
                    pic1[next].animate({left:0},400)
                    cirs1[now].removeClass('active')
                    cirs1[next].addClass('active')
                    now=next
                }
        })
    }
        box1(($('.nrbox')));


        let  ce=$('ul.celan li')
        let displ=$('.bannertop li')
        let celan=$('ul.bannertop')
        let dis=$('ul.celan')
        ce.mouseenter(function () {
            let t=$(this).index();
            ce.removeClass('z').eq(t).addClass('z')
            dis.removeClass('z').eq(t).addClass('z')
            displ.removeClass('z').eq(t).addClass('z')
        })
        ce.mouseleave(function () {
            displ.removeClass('z')

        })
        displ.mouseenter(function () {
            let a =$(this).index()
            displ.eq(a).addClass('z')
        })
        displ.mouseleave(function () {

            displ.removeClass('z')
        })
        // displ.forEach(function (dom,index) {
        //     dom.onmouseenter=function () {
        //         dom.setAttribute('class','z')
        //     }
        //     dom.onmouseleave=function () {
        //         dom.classList.remove('z')
        //     }
        // })





        let big=document.querySelector('.wn-big')
        let wnright=document.querySelector('.wntj-toubu .jtright')
        let wnleft=document.querySelector('.wntj-toubu  .jtleft')
        // let flag=true
        let wa=big.offsetWidth
        function movewn() {
            if(!flag){
                return
            }
            flag=false
            let first=big.firstElementChild
            animate(big,{left:-wa},function () {
                big.appendChild(first)
                big.style.left=0
                flag=true
            })
        }
        wnright.onclick=function () {
            movewn()
        }
        wnleft.onclick=function () {
            if(!flag){
                return
            }
            flag=false
            let last=big.lastElementChild
            let first=big.firstElementChild
            big.insertBefore(last,first)
            big.style.left=-wa+'px'
            animate(big,{left:0},function () {
                flag=true
            })
        }




$(function () {

        let dao=$('.daohangdibu')
        let daohang=$('.daohang-wenzi')
        let li=$('.daohangdibu li')
        let asq=$('.daohang-wenzi a')
        daohang.mouseenter(function () {
            dao.css('borderTop','1px solid #ccc').slideDown(200)
            asq.mouseenter(function () {
                asq.removeClass('active').eq($(this).index()).addClass('active')
                li.removeClass('active').eq($(this).index()).addClass('active')
            })
        })
        // }).queue(function () {
        //         dao.mouseenter(function () {
        //          dao.css('display','block')
        //         })
        //          dao.mouseleave(function () {
        //              dao.css({'diaplay':'none'})
        //          })
        // })
    console.log($('.bigger'))
     $('.bigger').mouseleave(function () {

                dao.removeClass('borderTop').slideUp(200)
            })

})

        // let dao=$('.daohangdibu')
        // let daohang=$('.daohang-wenzi')
        // let li=$('.daohangdibu li')
        // let asq=$('.daohang-wenzi a')
        //
        // li.mouseenter(function () {
        //     console.log(dao)
        //     // dao.css('borderTop','1px solid #ccc').slideDown(200)
        //     dao.slideDown(200)
        //     // dao.style.borderTop='1px solid #ccc';
        //     // animate(dao,{height:200},200)
        //
        //
        //     asq.forEach(function (dom,index) {
        //         dom.onmouseenter=function () {
        //             li.forEach(function (val) {
        //                 val.classList.remove('active')
        //             })
        //             li[index].classList.add('active')
        //         }
        //     })
        //
        // })
        // daohang.onmouseleave=function () {
        //     dao.style.border='none'
        //     animate(dao,{height:0},200)
        // }


    })