<template>

</template>

<script>
    import MenuHeader from 'components/block-menu-header'
    import BlockExperience from 'components/block-experience'
    import BlockBrands from 'components/block-brands'
    import BlockNews from 'components/block-news'
    import BlockFoods from 'components/block-foods'
    import BlockFooter from 'components/block-footer'

    import VueFullPage from 'vue-fullpage.js'

    import VueScrollbar from 'vue2-scrollbar';

    import PerfectScrollbar from 'perfect-scrollbar';


    export default {
        data: function () {
            return {

            }
        },
	    mounted() {
		    jQuery(document).ready(()=> {
                
                window.addEventListener('resize', this.handleResize());

		    });
        },
        methods: {
            
            
        },
        components: {

        },
        
    }
</script>

<style lang="sass" scoped>
    @import "~fullpage.js/dist/fullpage.css"
    
    
</style>