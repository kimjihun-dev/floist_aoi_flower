<template>
    <section class="procucts">
        <div class="procucts-inner">
            <div class="title">
                <h4>products</h4>
                <p>아오이 플라워에서는 싱싱한 꽃과 식물을 고객님께 제공해드리고 있습니다.</p>
            </div>
            <div class="items">

                <div class="item">
                    <img src="~assets/images/flower01.png">
                    <h5>flower</h5>
                    <p>생화, 꽃바구니, 선물용, 꽃다발<br>
                    프리저브드 등
                    </p>
                </div>

                <div class="item">
                    <img src="~assets/images/flower02.png">
                    <h5>plant</h5>
                    <p>관상용, 공기정화용 선물용 등
                    </p>
                </div>

                <div class="item">
                    <img src="~assets/images/flower03.png">
                    <h5>event</h5>
                    <p>하바리움, 프로포즈<br>
                        어버이날 선물
                    </p>
                </div>                

                <div class="item">
                    <img src="~assets/images/flower04.png">
                    <h5>wedding</h5>
                    <p>웨딩부케, 웨딩카, 웨딩홀 <br>
                        꽃장식 등
                    </p>
                </div> 

            </div>
        </div>
        <div id="section-product" class="m-product-inner">
            <div class="m-title">
                <h4>products</h4>
                <p>아오이 플라워 에서는 싱싱한 꽃과<br>식물을 고객님께 제공해드리고 있습니다</p>
            </div>
            <div class="list">
                <ul class="m-items">
                    <li>
                        <div class="m-item">
                            <img src="~assets/images/flower01.png" alt="flower">
                            <h5>flower</h5>
                            <p>생화, 꽃바구니,<br> 선물용, 꽃다발<br> 프리저브드 등</p>
                        </div>
                    </li>
                    <li>
                        <div class="m-item">
                            <img src="~assets/images/flower02.png" alt="plant">
                            <h5>plant</h5>
                            <p>관상용, 공기정화용<br> 선물용 등</p>
                        </div>
                    </li>
                    <li>
                        <div class="m-item">
                            <img src="~assets/images/flower03.png" alt="event">
                            <h5>event</h5>
                            <p>하바리움, 프로포즈<br>
                                어버이날 선물 등</p>
                        </div>
                    </li>
                    <li>
                        <div class="m-item">
                            <img src="~assets/images/flower04.png" alt="wedding">
                            <h5>wedding</h5>
                            <p>웨딩부케, 웨딩카 <br>
                                웨딩홀 꽃장식 등</p>
                        </div>
                    </li>                                                            
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Products',
}
</script>

<style>
.procucts { margin-top: 250px; width: 100%; background-color: #f4f4f4; }
.procucts-inner { padding: 10%; }
.procucts-inner .title h4 { font-size: 30px; font-weight: bold; letter-spacing: -0.75px; text-transform: uppercase; }
.procucts-inner .title h4::before { content: ""; display: block; width: 91px; height: 17px; background: url('~assets/images/p-logo.png') no-repeat; }
.procucts-inner .title h4::after { margin-top: 18px; content: ""; display: block; width: 82px; height: 2px; background: #333; }
.procucts-inner .title p { margin-top: 51px; font-size: 16px; color: #797979; }
.items { margin-top: 100px; display: flex; }
.item { position: relative; width: 25%; margin-right: 5%; background: #fff; text-align: center; overflow: hidden;  }
.item:nth-child(4) { margin-right: 0%; }
.item img { max-width: 100%; width: 100%; }
.item img:hover { transform: scale(1.1); transition: all 0.6s ease-in-out; }
.item h5 { font-size: 16px; color: #444; letter-spacing: -0.45px; text-transform: uppercase; margin-top: 40px; }
.item h5::after { position: absolute; left: 50%; transform: translateX(-50%); margin-top: 12px; content: ""; display: block; width: 47px; height: 1px; background: #888; }
.item p { margin: 42px 0 50px 0; }

.m-product-inner { display: none; }

@media all and (max-width: 768px) {
    .procucts-inner { display: none; }
    .procucts { margin-top: 0px; margin-top: 200px; width: 100%; }
    .m-product-inner { display: block; padding: 40px 24px 46px 24px; }
    .m-title { text-align: center; margin-bottom: 27px; position: relative; }
    .m-title h4 { margin-top: 22px; font-size: 20px; font-weight: bold; letter-spacing: 0.5px; text-transform: uppercase; }
    .m-title h4::before { position: absolute; left: 36%; top: -15px; display: block; content: ""; width: 74px; height: 22px; background: url('~assets/images/p-logo.png') no-repeat; background-size: 100%;  }
    .m-title h4::after { display: block; content: ""; width: 40px; height: 1px; background: #333; position: absolute; left: 50%; transform: translateX(-50%); margin: 12px 0 26px 0; }
    .m-title p { margin-top: 42px; font-size: 14px; color: #797979; letter-spacing: 0.35px; }

    .m-item { background: #fff; text-align: center; padding-bottom: 26px; }
    .m-items { display: flex; flex-flow: row wrap; }
    .m-items li { display: block; width: 48%; margin: 1%; margin-bottom: 8px; }
    .m-items li:nth-child(2) .m-item { padding-bottom: 43px; }
    .m-item h5 { margin: 15px 0 17px 0; font-size: 15px; color: #444; letter-spacing: 0.38px; text-transform: uppercase; }
    .m-item img { width: 100%; }
    .m-item p { color: #444; letter-spacing: 0.35px; }
}

</style>