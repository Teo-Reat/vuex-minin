export default {
    actions: {
        async fetchPosts (ctx, limit = 3) {
            const responce = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)
            const posts = await responce.json()
            ctx.commit('updatePosts', posts)
        }
    },
    getters: {
        getPosts (state) {
            return state.posts
        },
        getPostsCount (state) {
            return state.posts.length
        },
        getValidPosts (state) {
            return state.posts.filter(p => {
                return p.title && p.body
            })
        },
        getValidPostsCount (state) {
            return state.getters.getValidPosts.length
        }
    },
    mutations: {
        updatePosts (state, posts) {
            state.posts = posts
        },
        createPost (state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    state: {
        posts: []
    }
}