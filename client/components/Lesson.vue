<template>
    <section class="lesson">
        <!-- pc -->
        <div class="lesson-pc-inner">
            <div class="lesson-img-section">
                <div class="hand"><img src="~assets/images/hand.png" alt="핸드타이드"></div>
                <div class="basket"><img src="~assets/images/basket.png" alt="바스켓바구니"></div>
            </div>
            <div class="lesson-info">
                <div class="info">
                    <h2>class</h2>
                    <p>
                        꽃에 대해 몰라도  꽃을 사랑하는  모든 분들을 위한 플라워 클래스가 준비되어 있습니다.<br>
                        원하시는 날짜 및 시간조정 가능합니다.
                    </p>
                    <ul>
                        <li><span>01</span>기초 클래스</li>
                        <li><span>02</span>취미 클래스</li>
                        <li><span>03</span>원데이 클래스</li>
        
                    </ul>
                    <ul>
                        <li><span>04</span>꽃바구니 클래스</li>
                        <li><span>05</span>핸드타이드 클래스</li>
                        <li><span>06</span>플로리스트 클래스</li>
                    </ul>
                </div>
                <div class="oneday"><img src="~assets/images/oneday.png" alt="원데이클래스"></div>
            </div>
        </div>
        <!-- mobile -->
        <div id="section-class" class="m-lesson-inner">
            <h2>class</h2>
            <p class="class-info">
                꽃에 대해 몰라도  꽃을 사랑하는  모든 분들을 위한 <br>
                플라워 클래스가 준비되어 있습니다.<br>
                원하시는 날짜 및 시간조정 가능합니다.                
            </p>
            <ul class="class-list">
                <li>
                    <span>01</span>
                    <p>기초 클래스</p>
                </li>
                <li>
                    <span>02</span>
                    <p>취미 클래스</p>
                </li>
                <li>
                    <span>03</span>
                    <p>원데이 클래스</p>
                </li>
                <li>
                    <span>04</span>
                    <p>꽃바구니 클래스</p>
                </li>
                <li>
                    <span>05</span>
                    <p>핸드타이드 클래스</p>
                </li>
                <li>
                    <span>06</span>
                    <p>플로리스트 클래스</p>
                </li>
            </ul>
           
        </div>
        <!-- bxslider -->
        <div class="slider">
            <ul class="bxslider">
                <li><img src="~assets/images/m-class-01.png" alt="원데이클래스"></li>
                <li><img src="~assets/images/m-class-02.png" alt="바스켓클래스"></li>
                <li><img src="~assets/images/m-class-03.png" alt="핸드타이클랙스"></li>
            </ul> 
        </div>
    </section>
</template>

<script>
export default {
    name: 'Lesson',
    // bxslider
    mounted() {
        $(document).ready(function(){
            $('.bxslider').bxSlider({
                auto: true,
                autoControls: false,
                controls: false,
                pager: false,
            });
        });
    }
}
</script>

<style>
.lesson { max-width: 1440px; width: 100%; margin: 0 auto; margin-top: 230px !important;  }
.lesson-pc-inner { display: flex; justify-content: space-between; }
.lesson-pc-inner img { width: 100%; }
.lesson-img-section { margin-right: 40px; }
.lesson-img-section .hand { margin-bottom: 40px; }
.info h2 { font-family: 'Noto Sans KR', sans-serif; font-size: 144px; letter-spacing: -12.96px; text-transform: uppercase; color: #e5e5e5;}
.info p::after { margin: 20px 0 50px 0; display: block; content: ""; width: 43px; height: 1px; background: #444; }
.info ul { list-style: none; margin-bottom: 27px; }
.info ul li { font-size: 18px; color: #222; letter-spacing: -0.36px; display: inline-block; margin-right: 30px; }
.info ul li span { font-family: 'Noto Sans KR', sans-serif; font-size: 24px; font-weight: bold; color: #f9c5c5; vertical-align: middle; margin-right: 10px; }
.oneday { margin-top: 80px; }
.m-lesson-inner { display: none; }
.slider { display: none; }

@media all and (max-width: 768px) {
    .lesson-pc-inner { display: none; }
    .lesson { margin-top: 0px !important; margin-top: 100px !important; }
    .m-lesson-inner { display: block; padding: 0 40px; position: relative; }
    .m-lesson-inner h2 { font-family: 'Noto Sans KR', sans-serif; font-size: 48px; color: #e5e5e5; font-weight: bold; letter-spacing: -4.32px; text-transform: uppercase; }
    .m-lesson-inner h2::after { display: block; content: ""; width: 43px; height: 1px; background: rgb(134, 134, 134); position: absolute; left: 40px;}
    .class-info { margin-top: 30px; margin-bottom: 50px; text-align: center; letter-spacing: -0.28px; color: #333; line-height: 20px; }
    .class-list { list-style: none; }
    .class-list li { border-bottom: 1px solid #f0f0f0; margin-bottom: 40px; padding-bottom: 20px; }
    .class-list li span, .class-list li p { display: inline-block; }
    .class-list li span { font-family: 'Noto Sans KR', sans-serif; font-weight: bold; margin-right: 22px; font-size: 24px; color: #f9c5c5; letter-spacing: -0.48px; vertical-align: middle; }
    .class-list li p { font-size: 18px; color: #222; letter-spacing: -0.36px; }
    /* bxslider css */
    /* image border remove */
    .slider { display: block; }
    .slider { padding: 0 10px; }
    .bx-wrapper { -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; border: 0; }
    .bxslider img { width: 100%; }
}

</style>