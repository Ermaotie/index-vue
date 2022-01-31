<template>
<div class="Box" style="margin-top:50px">
    <p v-for="site in sites" v-bind:key="site">
    
    <Card
        v-bind:title="site.name"
        :class="{'narrow':judgeWidth(),'wide':!judgeWidth()}"
        @click="jump2(site.url)"
></Card>
</p>
</div>
</template>

<script>
import { Card } from '@varlet/ui'
export default {
    name: 'Box',
    components:{
        Card
    },
    data: function(){
        return {
            sites:[
                {
                    name:"Translator",
                    url: "https://translate.1b.mk/",
                    icon: "icon 1",
                },
                // {
                //     name:"Url Shortener",
                //     url: "https://1b.mk",
                //     icon: "icon 2",
                // },
                {
                    name:"RssHub Server",
                    url: "https://rss.1b.mk",
                    icon: "icon 3",
                },
                {
                    name:"NetEase Music API server",
                    url: "https://netease-cloud-music-api-azure-kappa.vercel.app/",
                    icon: "icon 3",
                },
            ],
            enough:true,
            default_screen_width:500,
        }
    },
    methods:{
        alert(content){
            window.alert(content);
        },
        jump2(url){
            window.open(url, "_blank");
        },
        judgeWidth(){
            if(this.default_screen_width>=document.body.clientWidth){
                return true;
            }else{
                return false;
            }
            
        }
    }
    
}
</script>

<style>
.narrow{
    margin:auto;
    width: 85%;
}
.wide{
    margin:auto;
    width: 600px;
}
</style>