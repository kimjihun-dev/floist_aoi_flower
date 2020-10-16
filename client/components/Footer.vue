<template>
    <footer class="footer">
        <div class="footer-inner">
            <h4>aoi flower</h4>
            <p>Copyright &copy; zodlab 2020</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
.footer { margin-top: 300px; font-family: 'Noto Sans KR', sans-serif; width: 100%; height: 200px; background: #333; }
.footer-inner { text-align: center; padding-top: 100px; color: #fff; }
.footer-inner h4 { font-size: 18px; font-weight: 500; text-transform: uppercase; }
.footer-inner p { font-size: 14px; color: #bababa; }

@media all and (max-width: 768px) { 
    .footer-inner { padding-top: 0px; padding-top: 20%; }
}
</style>
