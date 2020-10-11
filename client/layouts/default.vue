<template>
  <div id="wrap">
    <Header />
    <Intro />
    <About />
    <Nuxt />
    <Products />
    <Lesson />
    <Instagram />
    <Map />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Intro from '../components/Introdu'
import About from '../components/About'
import Products from '../components/Products'
import Lesson from '../components/Lesson'
import Instagram from '../components/Instagram'
import Map from '../components/Map'
import Footer from '../components/Footer'


export default {
    components: {
        Header,
        Intro,
        About,
        Products,
        Lesson,
        Instagram,
        Map,
        Footer,
    }
}
</script>

<style>
body, html {
    box-sizing: border-box;
  font-family: 'NanumSquare', sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

</style>
