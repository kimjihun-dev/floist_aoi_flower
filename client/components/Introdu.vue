<template>
    <section class="intro">
        <div class="title">
            <h2>introducing</h2>
        </div>
        <div class="seo-pic"><img src="../assets/images/seo.png" alt="플로리스트 서현정"></div>
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
</style>