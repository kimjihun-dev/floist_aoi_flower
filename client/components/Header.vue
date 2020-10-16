<template>
    <header class="header">
        <div class="words">
            <p class="name">floist seo hyun jeong</p>
            <p class="title">aoi flower</p>
        </div>
        <div class="mBtn">
            <a href="#!">button</a>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header',

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
}

</style>