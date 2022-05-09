/*main.js*/

var $devWidth;
var $limitsize=768;

$(document).ready(function(){

        $devWidth = $("body").width();
        console.log($devWidth);

        $(window).resize(function(){
            $devWidth = $("body").width();
            console.log($devWidth);
        });

    // 주메뉴
    $("nav.gnb ul li a").bind("mouseover focus",function(){
        if($devWidth<$limitsize) return false;//함수 실행 정지
        
        if( $("form.srch").is(":visible") ){
            $("form.srch").removeClass("on");
            $(".srch_open").removeClass("on");
        }
        
        if( $("dl.topMenu > dd").eq(4).hasClass("on") ){
            $("dl.topMenu > dd").eq(4).removeClass("on")
        }

        $(".header_wrap").animate({"height":"445px"},300,"linear",function(){
            $("nav.gnb ul li ul").css("display","block");
        });
    });

    $("nav.gnb").bind("mouseleave blur",function(){
        if($devWidth<$limitsize) return false;//함수 실행 정지
        $(".header_wrap").animate({"height":"120px"},300,"linear",function(){
            $("nav.gnb ul li ul").css("display","none");
        });
    });


    // 햄버거 버튼 클릭
    $("div.mobtn").click(function(){
        $("div.mob").addClass("on");
        $("div.mobtn_close").addClass("on");
        $("body").addClass("on")
        $("div.bg").addClass("on")
        $(this).hide();

    });

    // 햄버거 닫기 버튼 클릭
    $("div.mobtn_close").click(function(){
        $("div.mob").removeClass("on");
        $("div.mobtn_close").removeClass("on");
        $("body").removeClass("on");
        $("div.bg").removeClass("on");
        $("div.mobtn").show();

    });


    //로그인 이미지
    var appear = '';
        for(var i=0; i<=56; i++){
            if(i < 10){
                appear += "<img src='images/appear/appear_0000"+i+".png' alt='로그인버튼"+i+"'></img>"
            }else{
                appear += "<img src='images/appear/appear_000"+i+".png' alt='로그인버튼"+i+"'></img>"
            }

        }
        $("a.appear").html(appear);


        var loop="";
        for(var i=0; i<=81; i++){
            if(i<10){
                loop += "<img src='images/loop/loop_0000"+i+".png' alt='로그인버튼"+i+"'></img>"
            }else{
                loop += "<img src='images/loop/loop_000"+i+".png' alt='로그인버튼"+i+"'></img>"
            }
            
        }
        $("a.loop").html(loop);

    //로그인 애니메이션
    for(var k=0; k<57; k++){
        $("a.appear>img").eq(k).css({"animation":"ani 2.85s linear "+(k*0.05)+"s 1 normal"});
    }

    for(var k=0; k < 82; k++){
        $("a.loop>img").eq(k).css({"animation":"ani 4.1s linear "+ (2.85 + k*0.05)+"s normal infinite"});
    }

    //검색열기
    $("span.srch_open").click(function(){
        $(this).toggleClass("on");
        $("form.srch").toggleClass("on");

        if($(this).hasClass("on")){
            $(this).children("a").attr("title","검색입력서식 닫기");//.setAttribure()
        }else{
            $(this).children("a").attr("title","검색입력서식 열기");
        }
    });

    // 고객센터
    $("dl.topMenu > dd").eq(4).click(function(){
        $(this).toggleClass("on");
    });

    // 모바일_고객센터
    $("dl.mob_topMenu > dd").eq(4).click(function(){
        $(this).toggleClass("on");

        if($(this).hasClass("on")){
            $(this).children("a").attr("title","고객센터 닫기");
        }else{
            $(this).children("a").attr("title","고객센터 열기");
        }

        
    });

    // 모바일_주메뉴 2단
    $(".mob_gnb ul li").click(function(){
        $(this).siblings().removeClass("on");
        $(this).toggleClass("on");
    });



    // 배너
    var $bnnNum = 0;
    var $lastNum = $(".banner_frame>section").size()-1;
    var $banner_w = $("body > section").width();

    // 리사이즈
    $(window).resize(function(){
        $banner_w = $("body > section").width();
    });

    // 다음
    $(".next").click(function(){
        $bnnNum++;
        if($bnnNum > $lastNum) $bnnNum=0;
        $(".banner_frame").stop().animate({"left":$bnnNum * -$banner_w},600,"linear",function(){
            if($(".banner_frame > section").eq($bnnNum).hasClass("white")){
                $(".arrow > a").addClass("white");
                $(".rolling a").addClass("white");
            }else{
                $(".arrow > a").removeClass("white");
                $(".rolling a").removeClass("white");
            }

            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    });

    //이전
    $(".prev").click(function(){
        $bnnNum--;
        if($bnnNum < 0) $bnnNum=$lastNum;
        $(".banner_frame").stop().animate({"left":$bnnNum *-$banner_w},600,"linear",function(){
            if($(".banner_frame > section").eq($bnnNum).hasClass("white")){
                $(".arrow > a").addClass("white");
                $(".rolling a").addClass("white");
            }else{
                $(".arrow > a").removeClass("white");
                $(".rolling a").removeClass("white");
            }

            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    });

    // 오토배너
    function autoBanner(){
        // next버튼 눌렀을때
        $bnnNum++;
        if($bnnNum > $lastNum) $bnnNum=0;
        $(".banner_frame").stop().animate({"left":$bnnNum * -$banner_w},600,"linear",function(){

            if($(".banner_frame > section").eq($bnnNum).hasClass("white")){
                $(".arrow > a").addClass("white");
                $(".rolling a").addClass("white");
            }else{
                $(".arrow > a").removeClass("white");
                $(".rolling a").removeClass("white");
            }

            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    }

    // 일정한 시간동안 계속반복
    var $autoBnn = setInterval(autoBanner,5000);

    // 재생멈춤
    var flag=true;
    $("a.play").click(function(){
        if(flag){
            //멈춰라
            clearInterval($autoBnn);
            $(this).addClass("pause");
            flag = false;
        }else{
            //재생
            $autoBnn = setInterval(autoBanner,5000);
            $(this).removeClass("pause");
            flag = true;
        }
    });

    // 롤링클릭
    var $banner = $(".banner_roll a").click(function(){
        $bnnNum = $banner.index(this);
        console.log($bnnNum);

        $(".banner_frame").stop().animate({"left":$bnnNum * -$banner_w},600,"linear",function(){

            if($(".banner_frame > section").eq($bnnNum).hasClass("white")){
                $(".arrow > a").addClass("white");
                $(".rolling a").addClass("white");
            }else{
                $(".arrow > a").removeClass("white");
                $(".rolling a").removeClass("white");
            }

            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    });


    // 퀵메뉴 이미지
    var quick1 = "";
    var quick2 = "";
    var quick3 = "";
    var quick4 = "";
    for(var i=0; i<20; i++){
        if(i<10){
            quick1 += "<img src='images/quick01/quick01_0000"+i+".png' alt='quick1_"+i+"'></img>"
            quick2 += "<img src='images/quick02/quick02_0000"+i+".png' alt='quick2_"+i+"'></img>"
            quick3 += "<img src='images/quick03/quick03_0000"+i+".png' alt='quick3_"+i+"'></img>"
            quick4 += "<img src='images/quick04/quick04_0000"+i+".png' alt='quick4_"+i+"'></img>"


        }else{
            quick1 += "<img src='images/quick01/quick01_000"+i+".png' alt='quick1_"+i+"'></img>"
            quick2 += "<img src='images/quick02/quick02_000"+i+".png' alt='quick2_"+i+"'></img>"
            quick3 += "<img src='images/quick03/quick03_000"+i+".png' alt='quick3_"+i+"'></img>"
            quick4 += "<img src='images/quick04/quick04_000"+i+".png' alt='quick4_"+i+"'></img>"
        }
    }
    $(".quick1").html(quick1);
    $(".quick2").html(quick2);
    $(".quick3").html(quick3);
    $(".quick4").html(quick4);
    

    // 마우스를 올렸을 때
    $(".content1 a").hover(function(){
        // 마우스를 올렸을때
        for(var k=0; k<57; k++){
            $(this).find("span").children().eq(k).stop().css({"animation":"ani 2.85s linear "+(k*0.05)+"s normal"});
        }
    },function(){
        // 마우스를 땟을때
        for(var k=0; k<57; k++){
        $(this).find("span").children().css({"animation":"none"});
        }
    });

    //content3
    //마우스를 올렸을떄
    $(".content3_inner > div > ul > li").hover(function(){
        $(this).addClass("on");
    },function(){
        $(this).removeClass("on");
    });

    //대분류
    $(".content3_inner > ul > li > a").bind("click focus",function(e){
        e.preventDefault();
        $(".content3_inner > ul > li > a").removeClass("on");
        $(this).addClass("on");

        var $className = $(this).parent().attr("class");
        $(".content3_inner > div > ul > li").hide();

        switch($className){
            case "all" :
                $(".content3_inner > div > ul > li").show();
                break;
            case "ent" :
                $(".content3_inner > div > ul > li.ent").show();
                break;
            case "shop" :
                $(".content3_inner > div > ul > li.shop").show();
                break;
            case "diner" :
                $(".content3_inner > div > ul > li.diner").show();
                break;
            case "box" :
                $(".content3_inner > div > ul > li.box").show();
                break;
            default :
                break;
        };
    });
                
                

    // 패밀리 사이트

    $(".family_site").click(function(e){
        e.preventDefault();
        $(this).toggleClass("on");

        if($(this).hasClass("on")){
            $(this).children("a").attr("title","닫기");
        }else{
            $(this).children("a").attr("title","열기");
        }
    });

    // 스크롤 이벤트

    $(window).scroll(function(){
        var scroll=$(this).scrollTop();
        console.log(scroll);

        // top버튼
        if(scroll < 100){
            $("div.top").removeClass("on ad");
        }

        if(scroll >= 100 && scroll < 2800){
            $("div.top").removeClass("ad");
            $("div.top").addClass("on");
        }

        if(scroll >= 2800){
            $("div.top").addClass("ab");
        }

        //도넛
        $(".doughnut_Left_L").css({"top":-1200+scroll*1.3});
        $(".doughnut_Left_s").css({"top":796+scroll*1.1});
        $(".combine_Left").css({"top":1726+scroll*0.1});

        $(".doughnut_Center_M").css({"top":722+scroll*0.1});
        $(".doughnut_Center_s").css({"top":991+scroll*1.1});

        $(".doughnut_right_M").css({"top":365+scroll*0.5});
        $(".doughnut_right_s").css({"top":947+scroll*0.1});
        $(".combine_right").css({"top":-300+scroll*0.7});

    });

});

