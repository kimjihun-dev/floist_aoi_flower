<template>
    <header class="header">
        <div class="words">
            <p class="name">floist seo hyun jeong</p>
            <p class="title">aoi flower</p>
        </div>
        <!-- mobile -->
        <div class="mBtn">
            <a href="javascript:void(0)" @click="openNav">button</a>
        </div>
        <div id="sideNav" class="sNav">
            <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
            <ul>
                <li v-for="data in navData" :key="data.id">
                    <a :href='data.href' :class='data.class'>{{ data.name }}</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
            navData: [
                { name: 'introducing', href: '#section-intro', class: 'goToSec' },
                { name: 'about', href: '#section-about', class: 'goToSec' },
                { name: 'products', href: '#section-product', class: 'goToSec' },
                { name: 'class', href: '#section-class', class: 'goToSec' },
                { name: 'sns', href: '#section-sns', class: 'goToSec' },
                { name: 'contact', href: '#section-contact', class: 'goToSec' },
            ] 
        }
    },
    mounted(){
        $(document).ready(function(){
            $('.goToSec').click(function(){
                $('#sideNav').css('width', 0)
            })            
        })
    },
    methods: {
        openNav() {
            console.log('open')
            document.getElementById('sideNav').style.width = "250px"
        },
        closeNav() {
            console.log('close')
            document.getElementById('sideNav').style.width = "0"
        },
    },
}
</script>

<style>
.header { margin-bottom: 70px; position: relative; max-width: 100%; width: 100%; height: 713px; background: url('~assets/images/header-bg.jpg') no-repeat center/cover; }
.header .words { position: absolute; margin-top: 299px; margin-left: 181px; }
.words .name { display: block; text-indent: -9999px; width: 277px; height: 43px; background: url('~assets/images/header-name.png') no-repeat; }
.words .title { display: block; margin-top: 10px; text-indent: -9999px; width: 470px; height: 101px; background: url('~assets/images/logo.png') no-repeat; }
.mBtn { display: none; }

@media all and (max-width: 768px) {
    .header { width: 100%; height: 505px; background: url('~assets/images/m-header-bg.png') no-repeat bottom/cover; }
    .words, .name, .title { display: none; }
    .mBtn { display: block; position: absolute; top: 23px; right: 25px; }
    .mBtn a { display: block; text-indent: -9999px; width: 29px; height: 29px; background: url('~assets/images/mBtn.png') no-repeat; }
    /* side Nav */
    .sNav { position: fixed; width: 0; right: 0; z-index: 300; height: 100%; background-color: #111; top: 0; overflow-x: hidden; padding-top: 60px; transition: all 0.5s; }
    .closebtn { position: absolute; top: 10px; left: 10px; font-size: 36px; color: #fff; text-decoration: none; }
    .sNav ul { padding: 30px 20px 0 20px; }
    .sNav ul li { margin-bottom: 40px; text-align: center; border-bottom: 1px solid #929292b7; padding-bottom: 35px; }
    .sNav ul li a { font-style: 16px; color: grey; text-decoration: none; text-transform: uppercase; }
    .sNav ul li a:hover { color: #fff; }
}

</style>