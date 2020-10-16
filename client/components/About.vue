<template>
    <section class="about">
        <!-- pc 용 -->
        <div class="title"><h2>about</h2></div>
        <div class="about-img"><img src="~assets/images/about-img.png" alt="about-img"></div>
        <div class="about-word">
            <p>
                행복한 순간 <br>
                바라만 봐도 행복해지는 꽃, <br>
                고객님의 가장 기쁜 순간에 아오이 플라워가 함께 합니다.
            </p>
            <p>
                다년간의 경험으로 꽃의 색감과 형태를 유지하고 손상없이<br>
                고객님께 전달해드립니다.
            </p>
            <p>
                특별한 날, 소중한 순간.<br>
                아오이 플라워를 통해 따스한 온기와 감동을 전해주세요.
            </p>
        </div>
        <div class="about-name"><img src="~assets/images/aoi-name.png" alt="aoi-name"></div>
        <!-- 모바일용 -->
        <div class="m-about" id="section-about">
            <h2>about</h2>
            <img src="~assets/images/about-img.png" alt="about-이미지">
            <div class="m-about-word">
                <p>
                    행복한 순간 <br>
                    바라만 봐도 행복해지는 꽃, <br>
                    고객님의 가장 기쁜 순간에 <br>
                    아오이 플라워가 함께 합니다. <br>              
                </p>
                <p>
                    다년간의 경험으로 꽃의 색감과 형태를 유지하고 <br>
                    손상없이 고객님께 전달해드립니다.                
                </p>
                <p>
                    특별한 날, 소중한 순간.<br>
                    아오이 플라워를 통해 따스한 온기와 감동을 전해주세요.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style>
.about { position: relative; display: flex; justify-content: flex-end; max-width: 1440px; width: 100%; margin-top: 185px; }
.about .title { position: absolute; top: 0; right: 50px; font-family: 'Noto Sans KR', sans-serif; }
.about .title h2 { font-size: 96px; color: #e5e5e5; text-transform: uppercase; letter-spacing: -8.64px; font-weight: bold; }
.about .about-img img { width: 450px; }
.about-img { margin-top: 120px; margin-right: 100px; }
.about-word { margin-top: 285px; margin-right: 150px; }
.about-word p { font-size: 16px; margin-bottom: 22px; color: #222; }
.about-name { position: absolute; top: 25%; left: 60%; }
.m-about { display: none; }

@media all and (max-width: 768px) {
    .about { display: block; margin-top: 0px; margin-top: 70px; }
    .title, .about-img, .about-word, .about-name { display: none; }
    .m-about { display: block; }
    .m-about h2 { margin-bottom: 25px; font-size: 36px; color: #e5e5e5; letter-spacing: -3.24px; text-align: center; font-weight: bold; font-family: 'Noto Sans KR', sans-serif; text-transform: uppercase; }
    .m-about img { width: 100%; height: 300px; }
    .m-about-word { padding: 44px 0 0 18px; position: relative; }
    .m-about p { color: #222; line-height: 20.5px; letter-spacing: 0.35px; margin-bottom: 10px; }
    .m-about-word::after { display: block; content: ""; width: 108px; height: 1px; background: #bebebe; position: absolute; left: 50%; bottom: -63px; transform: translateX(-50%); }
}
</style>