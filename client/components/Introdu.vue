<template>
    <section class="intro">
        <div class="title">
            <h2>introducing</h2>
        </div>
        <div class="seo-pic"><img src="~assets/images/seo.jpg" alt="플로리스트 서현정"></div>
        <div class="resume">
            <h4>Florist 서현정 </h4>
            <ul>
                <li>
                    <p>Catherine Muller Event & Party Diploma, Paris France</p>
                </li>
                <li>
                    <p>Yannick Suznjev Wedding Diploma, Paris France</p>
                </li>
                <li>
                    <p>Miho Flower OneDay Lesson, Tokyo Japan</p>
                </li>
                <li>
                    <p>화훼장식기능사, 플로리스트사범</p>
                </li>
            </ul>
        </div>
        <div class="m-intro" id="section-intro">
            <h2>introducing</h2>
            <div class="seo">
                <img src="~assets/images/seo.jpg" alt="플로리스트 서현정 사진">
            </div>
            <div class="m-resume">
                <h4>Florist 서현정 </h4>
                <ul>
                    <li>Catherine Muller Event & <br>
                        Party Diploma, Paris France
                    </li>
                    <li>
                        Yannick Suznjev <br>
                        Wedding Diploma, Paris France 
                    </li>
                    <li>
                        Miho Flower OneDay Lesson <br>Tokyo Japan
                    </li>
                    <li>
                        화훼장식기능사, 플로리스트사범
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Introdu',
}
</script>

<style>
.intro { max-width: 1440px; width: 100%; height: 600px; margin: 0 auto; position: relative; }
.intro .title { font-family: 'Noto Sans KR', sans-serif;  }
.intro .title > h2 { display: block; position: absolute; left: 100px; top: 0; font-size: 96px; font-weight: bold; color: #e5e5e5; letter-spacing: -8.64px; text-transform: uppercase; }
.intro .seo-pic { position: absolute; right: 0; top: 50px; z-index: 100; }
.intro .seo-pic img { width: 80%; }
.intro .seo-pic::after { display: block; top: 50px; right: 80px; position: absolute; z-index: -1; content: ""; width: 500px; height: 475px; background-color: #e5e5e5; }
.intro .resume { position: absolute; bottom: 120px; left: 295px; text-align: right; }
.intro .resume ul { list-style: none; }
.intro .resume ul li { margin-bottom: 20px; }
.intro .resume ul li p { font-size: 16px; color: #333;  }
.intro .resume h4 { font-size: 22px; color: #222; letter-spacing: 0.55px; margin-bottom: 66px; }
.intro .resume h4::after { content: ""; display: block; width: 82px; height: 1px; background-color: #333; position: absolute; right: -130px;  }
.intro .m-intro { display: none; }

@media all and (max-width: 768px) {
    .intro { z-index: -10; width: 100%; height: 100%; }
    .title, .seo-pic, .resume { display: none; }
    .intro .m-intro { display: block; width: 100%; position: relative; }
    .m-intro h2 { text-align: center; font-family: 'Noto Sans KR', sans-serif; font-size: 36px; font-weight: bold; color: #e5e5e5; letter-spacing: -3.24px; text-transform: uppercase; margin-bottom: 15px; }
    .m-intro img { width: 308px; height: 290px; display: block; margin: 0 auto; }
    .seo::after { display: block; position: absolute; content: ""; background: #e5e5e5; width: 100%; height: 284px; z-index: -10; top: 100px; }
    .m-resume {  margin-top: 58px; padding: 0 24px; position: relative; }
    .m-resume h4 { font-size: 18px; font-weight: bold; color: #222; letter-spacing: -0.45px; }
    .m-resume h4::after { display: block; content: ""; width: 106px; height: 13px; background: #e4e4e4b0; position: absolute; top: 8px; left: 30px; z-index: -10; }
    .m-resume ul { margin-top: 40px; list-style: none; text-align: center; }
    .m-resume ul li { color: #333; letter-spacing: 0.35px; border-bottom: 1px solid #f0f0f0; padding-bottom: 11px; margin-bottom: 20px; }
    .m-resume ul li:nth-child(4) { border-bottom: none; }
}
</style>