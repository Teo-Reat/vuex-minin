<template>
  <div id="app">
    <div>
      <h1>All posts: {{ getPostsCount }} | {{ getValidPostsCount }} :Valid Posts</h1>
      <app-post-form />
    </div>
    <ul>
      <li v-for="post in getValidPosts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostForm from './components/PostForm'

export default {
  name: 'App',
  components: {
    appPostForm: PostForm
  },
  async mounted() {
    this.fetchPosts(5)
  },
  computed: {
    ...mapGetters(['getPosts', 'getValidPosts', 'getPostsCount', 'getValidPostsCount'])
  },
  methods: {
    ...mapActions(['fetchPosts'])
  }
}
</script>

<style>
  ul {
    padding: 20px 40px;
  }
  li {
    list-style-type: none;
    margin-bottom: 10px;
    border: 2px solid gray;
    border-radius: 10px;
    padding: 10px 20px;
  }
  #app {
    width: 960px;
    margin: 60px auto;
  }
</style>
