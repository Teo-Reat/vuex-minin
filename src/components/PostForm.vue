<template>
    <form @submit.prevent="submit">
        <label><input v-model="title" type="text" placeholder="title"></label>
        <label><input v-model="body" type="text" placeholder="body"></label>
        <button type="submit">Create post</button>
    </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: "PostForm",
    data () {
        return {
            title: '',
            body: ''
        }
    },
    methods: {
        ...mapMutations (['createPost']),
        submit () {
            this.createPost ({
                title: this.title,
                body: this.body,
                id: Date.now()
            })
            this.title = this.body = ''
        }
    }
}
</script>

<style scoped>
    input,
    button {
        display: block;
        border-radius: 5px;
        border: 2px solid gray;
        width: 600px;
        margin: 20px auto;
        padding: 15px 20px;
    }
    button {
        width: 200px;
    }
</style>