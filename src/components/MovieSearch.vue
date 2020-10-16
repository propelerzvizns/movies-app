<template>
    <input class="input col-sm-4" type="text" @input="handleInput" />
</template>
<script>
import { mapMutations } from 'vuex'
export default {

    methods: {
        ...mapMutations(['setSearchText']),
        handleInput(event){
            // console.log(event.target.value);
            this.setSearchText(event.target.value)
        }
    }
}
</script>