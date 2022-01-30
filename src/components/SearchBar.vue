<template>
<div class="SearchBar">
    <Input :class="{'narrow':judgeWidth(),'wide':!judgeWidth()}" clearable v-model="content" />
    <Button style="margin-top:15px" @click="search(content)">Search</Button>
</div>
</template>

<script>
import { Input,Button} from '@varlet/ui';

export default {
    name: 'SearchBar',
    components:{Input,Button},
    data(){
        return{
            content:"",
            default_screen_width:700,
        }
    },
    methods:{
        search(content){
            let base_url = "https://cn.bing.com/search?q=";
            window.open(base_url+content, "_blank");
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