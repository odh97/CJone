/*main2.js*/
var devWidth;
var limitsize = 768;

window.addEventListener('load',function(){

    devWidth = document.querySelector("body").offsetWidth;
    console.log(devWidth);

    window.addEventListener('resize',function(){
        devWidth = document.querySelector("body").offsetWidth;
        console.log(devWidth);
    });

    // 햄버거 버튼 클릭
    var mobBtn = document.querySelector('.mobtn');
    var mob = document.querySelector('.mob');
    var mobBtn_close = document.querySelector('.mobtn_close');
    var body = document.querySelector('body');
    var divbg = document.querySelector('div.bg');

    mobBtn.addEventListener('click',function(){
        mob.className += ' on';
        mobBtn_close.className += ' on';
        body.classList.add("on");
        divbg.classList.add("on");
        this.hide();

    });

    //모바일 버튼 닫기
    mobBtn_close.addEventListener('click',function(){
        body.classList.remove('on')
        mob.classList.remove('on');
        mobBtn_close.classList.remove('on');
        divbg.classList.remove('on');
        mobBtn.style.display = 'block';
    });

    //jQeury의 .is(":visible") 대신 : element.offsetWidth > 0 && element.offsetHeight > 0;
    //hasClass 대신 : classList.contains('on');
    //animate 대신 : css로 작성, transition 추가

    /* 주메뉴 */
    var gnbMenu = document.querySelectorAll('.gnb>ul>li');
    var headerWrap = document.querySelector('.header_wrap');
    var formSrch = document.querySelector('form.srch');
    var srchOpen = document.querySelector('.srch_open');
    var topMenuDD = document.querySelectorAll('dl.topMenu>dd');
    var subMenu = document.querySelectorAll('.gnb>ul>li>ul');

    for(var i= 0; i < gnbMenu.length; i++){
        // 마우스 오버
        gnbMenu[i].addEventListener('mouseover',function(){
            if(devWidth < limitsize) return false;

            if (formSrch.offsetWidth > 0 && formSrch.offsetHeight > 0) {
                formSrch.classList.remove('on');
                srchOpen.classList.remove('on');
            }
            if (topMenuDD[4].classList.contains('on')) {
                topMenuDD[4].classList.remove('on');
            }

            headerWrap.classList.add('on');
            subMenu.forEach(function(item) {
                item.classList.add('on');
            })
        })

        // 마우스 아웃
        gnbMenu[i].addEventListener('mouseout',function(){
            if(devWidth < limitsize) return false;

            headerWrap.classList.remove('on');
            subMenu.forEach(function(item) {
                item.classList.remove('on');
            })
        });
    };

    //로그인 이미지
    var appear = '';
        for(var i=0; i<=56; i++){
            if(i < 10){
                appear += "<img src='images/appear/appear_0000"+i+".png' alt='로그인버튼"+i+"'></img>"
            }else{
                appear += "<img src='images/appear/appear_000"+i+".png' alt='로그인버튼"+i+"'></img>"
            }

        }
        document.querySelector("a.appear").innerHTML = appear;

        var loop="";
        for(var i=0; i<=81; i++){
            if(i<10){
                loop += "<img src='images/loop/loop_0000"+i+".png' alt='로그인버튼"+i+"'></img>"
            }else{
                loop += "<img src='images/loop/loop_000"+i+".png' alt='로그인버튼"+i+"'></img>"
            }
            
        }
        document.querySelector("a.loop").innerHTML = loop;

    //로그인 애니메이션
    var appearImg = document.querySelectorAll(".appear>img");

    for(var k=0; k<57; k++){
        appearImg[k].style.animation = "ani 2.85s linear "+(k*0.05)+"s 1 normal";
    }

    var loopImg = document.querySelectorAll(".loop>img");

    for(var k=0; k < 82; k++){
        loopImg[k].style.animation = "ani 2.85s linear "+(2.85+k*0.05)+"s infinite normal";
    }

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
    document.querySelector(".quick1").innerHTML = quick1;
    document.querySelector(".quick2").innerHTML = quick2;
    document.querySelector(".quick3").innerHTML = quick3;
    document.querySelector(".quick4").innerHTML = quick4;

    // 마우스를 올렸을 때
    var content1Li = document.querySelectorAll(".content1 ul li");
    content1Li.forEach(function(item){
        item.addEventListener("mouseover",function(){
            for(var k=0; k<20; k++){
                var imgLi = this.children[0].children[0].children;
                imgLi[k].style.animation = "ani 2.85s linear "+(k*0.05)+"s 1 normal";
            } 
        });
    });

    // 마우스를 땟을 때
    content1Li.forEach(function(item){
        item.addEventListener("mouseout",function(){
            for(var k=0; k<20; k++){
                var imgLi = this.children[0].children[0].children;
                imgLi[k].style.animation = "none";
            } 
        });
    });




    // 검색열기
    srchOpen.addEventListener("click",function(){
        this.classList.toggle("on");
        formSrch.classList.toggle("on");
        
        if(this.classList.contains("on")){
            this.children[0].setAttribure("title","검색입력서식 닫기");
        }else{
            this.children[0].setAttribure("title","검색입력서식 열기");
        }
    });

    // 고객센터
    topMenuDD[4].addEventListener("click",function(){
        this.classList.toggle("on");
        if(this.classList.contains("on")){
            this.children[0].setAttribure("title","검색입력서식 닫기");
        }else{
            this.children[0].setAttribure("title","검색입력서식 열기");
        }
    });
    // 모바일 고객센터
    var MobTopMenuDD = document.querySelectorAll("dl.mob_topMenu > dd");
    MobTopMenuDD[4].addEventListener("click",function(){
        this.classList.toggle("on");
        if(this.classList.contains("on")){
            this.children[0].setAttribure("title","검색입력서식 닫기");
        }else{
            this.children[0].setAttribure("title","검색입력서식 열기");
        }
    });

    // 모바일 주메뉴 -작동됨 class가 안 지워짐-
    
    var MobgnbLi = document.querySelectorAll(".mob_gnb>ul>li");
    console.log(MobgnbLi);

    for(var i=0; i<MobgnbLi.length; i++){
        MobgnbLi[i].addEventListener("click",function(){
            this.classList.toggle("on");
            MobgnbLi.classList.remove("class")

        });
    }
    
   /* ------- 선생님이랑 하던거 -------
    var MobgnbLi = document.querySelectorAll(".mob_gnb>ul>li");
    console.log(MobgnbLi);

    for(var i=0; i<MobgnbLi.length; i++){
        MobgnbLi[i].addEventListener("click",function(){
            MobgnbLi.forEach(function(item){
                item.classList.toggle("on");
            });
            this.classList.toggle("on");
        });
    }
    */
    /* 배너 */
    //배너
    var bnnNum = 0;
    var lastNum = document.querySelectorAll('.banner_frame > section').length - 1;
    var bannerLi = document.querySelectorAll('.banner_frame > section');
    var bannerWid = document.querySelector('body>section').offsetWidth;
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var bannFrame = document.querySelector(".banner_frame");
    var bannFrameOn = document.querySelector(".banner_frame.on");
    var arrowBtn = document.querySelectorAll('.arrow a');
    var rollingBtn = document.querySelectorAll('.rolling a');
    var banner_rollA = document.querySelectorAll('.banner_roll a')

    window.addEventListener('resize',function(){
        bannerWid = document.querySelector('body>section').offsetWidth;
    });

    //배너-다음
    next.addEventListener('click',function(){
        bnnNum++;
        if(bnnNum > lastNum) {bnnNum = 0};

        bannFrame.classList.add('on');
        bannFrame.style.left = bnnNum *-bannerWid + "px";

        
        if(bannerLi[bnnNum].classList.contains('white')){
            arrowBtn.forEach(function(item){
                item.classList.add('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowBtn.forEach(function(item){
                item.classList.remove('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.remove('white');
            })
        }
        rollingBtn.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
    });

    //배너-이전
    prev.addEventListener('click',function(){
        bnnNum--;
        if(bnnNum < 0) {
            bnnNum = lastNum;
        }
        bannFrame.style.left = bnnNum * (-bannerWid) + "px";

        if(bannerLi[bnnNum].classList.contains('white')){
            arrowBtn.forEach(function(item){
                item.classList.add('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowBtn.forEach(function(item){
                item.classList.remove('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.remove('white');
            })
        }
        rollingBtn.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
    });

    //오토배너
    function autoBanner(){
        bnnNum++;
        if(bnnNum > lastNum) {
            bnnNum = 0;
        }
        // bannFrame.classList.add('on');
        bannFrame.style.left = bnnNum * (-bannerWid) + "px";
        
        if(bannerLi[bnnNum].classList.contains('white')){
            arrowBtn.forEach(function(item){
                item.classList.add('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowBtn.forEach(function(item){
                item.classList.remove('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.remove('white');
            })
        }
        rollingBtn.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
    }

    var autoBann = setInterval(autoBanner,5000);


    //재생 멈춤
    var flag = true;
    var play = document.querySelector('a.play');
    play.addEventListener('click',function(){
        if(flag){
            clearInterval(autoBann);
            this.classList.add('pause');
            flag = false;
        }else{
            autoBann = setInterval(autoBanner,5000);
            this.classList.remove('pause');
            flag = true;
        }
    });


    //클릭한 롤링의 해당 배너로 이동

    var banner_rollLi = document.querySelectorAll('.banner_roll li');

    banner_rollLi.forEach(function(item){
        item.addEventListener('click',rollAction);
    });

    function rollAction(item){
        curRoll = item.currentTarget; //클릭이벤트가 전달된 엘리먼트
        parentRoll = curRoll.parentElement // 연결된 엘리먼트의 부모
        childRoll = parentRoll.children; // 부모 엘리먼트의 자식 엘리먼트들
        bnnNum = Array.from(childRoll).indexOf(curRoll); //배열중에서 인덱스 번호 찾기
        bannFrame.style.left = bnnNum * (-bannerWid) + "px";
    
        if(bannerLi[bnnNum].classList.contains('white')){
            arrowBtn.forEach(function(item){
                item.classList.add('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowBtn.forEach(function(item){
                item.classList.remove('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.remove('white');
            })
        }
        rollingBtn.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
        
    }


    // content3
    //마우스를 올렸을때
    var contnt3Li = this.document.querySelectorAll(".content3_inner > div > ul > li");

    contnt3Li.forEach(function(item){
        item.addEventListener("mouseover", function(){
            this.classList.add("on");
        });
        item.addEventListener("mouseout", function(){
            this.classList.remove("on");
        });
        
    });
   
    //대분류
    var group = document.querySelectorAll(".content3_inner>ul>li>a");
    var all = document.querySelectorAll(".content3_inner>div>ul>li")
    var ent = document.querySelectorAll(".content3_inner>div>ul>li.ent");
    var shop = document.querySelectorAll(".content3_inner>div>ul>li.shop");
    var diner = document.querySelectorAll(".content3_inner>div>ul>li.diner");
    var box = document.querySelectorAll(".content3_inner>div>ul>li.box");

    for(var k=0; k<group.length; k++){
        group[k].addEventListener('click',function(event){
            event.preventDefault();

            group.forEach(function(idx){
                idx.classList.remove('on');
            });
            this.classList.add('on');

            var className = this.parentElement.getAttribute('class'); //.getAttribute("class")로도 가져올 수있음.
            console.log(className);

            //클릭한 메뉴의 li만 보여주기
           all.forEach(function(item){
                item.style.display = "none"
            });

            switch(className) {
                case 'all':
                   all.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                case 'ent':
                    ent.forEach(function(item){
                        item.style.display = "block";
                    });
                    break;
                case 'shop':
                    shop.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                case 'diner':
                    diner.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                case 'box':
                    box.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                default:
                    break;
            };//swithch
        });//click
    }//for


    // 패밀리 사이트
    var familysite = document.querySelector(".family_site");

    familysite.addEventListener('click',function(e){
        e.preventDefault();
        this.classList.toggle("on");

        if(this.classList.contains("on")){
            this.children[0].setAttribure("title","닫기");
        }else{
            this.children[0].setAttribure("title","열기");
        }

    });


    /* 스크롤 이벤트 */
    // top 버튼
    window.addEventListener("scroll",function(){
        var htmlScrtop = document.querySelector('html').scrollTop;
        console.log(htmlScrtop);

        if(htmlScrtop < 100){
            $("div.top").removeClass("on", "ab");
        }

        if(htmlScrtop >= 100 && htmlScrtop < 2800){
            $("div.top").removeClass("ab");
            $("div.top").addClass("on");
        }

        if(htmlScrtop >= 2800){
            $("div.top").addClass("ab");
        }
    });

    // top 버튼 클릭
    var Top = document.querySelector("div.top");
    Top.addEventListener("cliok",function(e){
        e.preventDefault();
        window.scroll({
            top:0,
            left:0,
            behavior:"smooth"
        });
    });


// "background-color":"red"
// box.style.backgroundColor = "red";
// box.style.cssText = "color: #000; background-color: red"; 
// element.textContent = "Text";


});
