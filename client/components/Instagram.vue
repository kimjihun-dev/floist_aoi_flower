<template>
    <section class="insta" id="section-sns">
        <div class="title">
            <div class="ico"><img src="~assets/images/instagram_ico.png" alt="인스타아이콘"></div>
            <div class="id">
                <p>#florist.aoi</p>
                <p>인스타그램에서 아오이플라워 검색</p>
            </div>
        </div>
        <div class="insta-imgs">
            <div><a href="https://www.instagram.com/p/BRYnLrsAkPC/?igshid=1rmawj1791yqr" target="_blank"><img src="~assets/images/i01.png" alt="인스타이미지"></a></div>
            <div><a href="https://www.instagram.com/p/BMHoDfkg_we/?igshid=bt1w44anr1pm" target="_blank"><img src="~assets/images/i02.png" alt="인스타이미지"></a></div>
            <div><a href="https://www.instagram.com/p/BMXYfzLgeRH/?igshid=1utl3gtmm9jo" target="_blank"><img src="~assets/images/i06.png" alt="인스타이미지"></a></div>
            <div><a href="https://www.instagram.com/p/BMUrFqxATdN/?igshid=1sswsvrxwr786" target="_blank"><img src="~assets/images/i04.png" alt="인스타이미지"></a></div>
            <div><a href="https://www.instagram.com/p/BMbfT7uAmXd/?igshid=1a0w6mr1cr30t" target="_blank"><img src="~assets/images/i05.png" alt="인스타이미지"></a></div>
            <div><a href="https://www.instagram.com/p/BMbEmb4AKoQ/?igshid=c8yheiqi648d" target="_blank"><img src="~assets/images/i03.png" alt="인스타이미지"></a></div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Instagram'
}
</script>

<style>
.insta { margin-top: 240px !important; max-width: 1009px; margin: 0 auto; }
.insta .title { display: flex; }
.insta .title .ico { margin-right: 18px; }
.insta .title .id p:nth-child(1) { margin-top: 5px; font-family: 'Noto Sans KR', sans-serif; font-size: 24px; color: #333; font-weight: 500; }
.insta .title .id p:nth-child(2) { margin-top: 14px; font-size: 14px; color: #666; }
.insta-imgs { margin-top: 32px; display: flex; flex-flow: row wrap; }
.insta-imgs div { width: 33.33%; height: 306px; overflow: hidden; }
.insta-imgs img { width: 100%; height: 306px; }
.insta-imgs div:hover img { transform: scale(1.1); transition: transform 1s ease-out; opacity: 0.8; }

@media all and (max-width: 768px) {
    .insta { margin-top: 0px !important; margin-top: 150px !important; }
    .insta .title { padding-left: 36px; }
    .insta .title .ico img { width: 75px; height: 75px; }
    .insta .title .id p:nth-child(1) { font-size: 18px; letter-spacing: -1.62px; }
    .insta .title .id p:nth-child(2) { letter-spacing: -1.26px; }
    .insta-imgs { flex-flow: column wrap; padding: 0 32px; }
    .insta-imgs div { width: 100%; }
}
</style>