<template>
    <section class="map" id="section-contact">
        <div class="map-inner">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.052350695352!2d128.9723631297857!3d35.10540364768332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568c2624d85a1df%3A0xba31e0d050f037db!2z67aA7IKw6rSR7Jet7IucIOyCrO2VmOq1rCDri7nrpqzrj5kg7Iq57ZWZ66GcIDUwLTE!5e0!3m2!1sko!2skr!4v1614157376543!5m2!1sko!2skr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="map-info">
            <h4>aoiflower</h4>
            <address>부산광역시 사하구 당리동 승학로 50-1</address>
            <ul>
                <li>
                    <span>영업시간</span>
                    <p>오전 11시 ~ 오후 7시</p>
                </li>
                <li><span>연락처</span><p>010-4574-3607</p></li>
                <li><span>kakao</span><p>sshhjj7</p></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Map'
}
</script>

<style>
.map { position: relative; margin-top: 240px; }
.map-inner { width: 1300px; margin: 0 auto; }
.map-info { padding: 28px 0 0 27px; position: absolute; background: #fff; right: 150px; top: 10%; width: 322px; height: 265px; box-shadow: 10px 15px 5px rgba(24, 24, 24, 0.185); }
.map-info h4 { display: block; text-indent: -9999px; width: 130px; height: 40px; background: url('~assets/images/map-title.png') no-repeat; }
.map-info address { font-style: normal; margin: 38px 0 25px 0; font-style: 16px; letter-spacing: -0.4px; color: #333; }
.map-info ul { list-style: none; }
.map-info ul span { width: 60px; color: #666; letter-spacing: -0.4px; display: inline-block; }
.map-info ul li { margin-bottom: 13px; }
.map-info ul p { display: inline-block; }
.map::after { display: block; content: ""; width: 568px; height: 668px; position: absolute; z-index: -10; bottom: -300px; right: 0; background: url('~assets/images/map-flower.png') no-repeat; }

@media all and (max-width: 768px) {
    .map { margin-top: 0px; margin-top: 150px; }
    .map::after { display: none; }
    .map-inner { width: 100%; }
    .map-inner iframe { max-width: 100%; width: 100%; height: 361px; }
    .map-info {top: 0; left: 0; top: 80%; left: 50%; transform: translateX(-50%); padding-left: 0px; }
    .map-info h4 { display: block; margin: 0 auto; }
    .map-info address { text-align: center; }
    .map-info ul { padding-left: 48px; }
}
</style>