<template>
    <div class="posts-track">
        <div
            v-for="post in posts"
            :key="post.id"
            class="post"
            :style="{ top: `${post.position}px` }"
        >
            <h3>{{ post.title }}</h3>
            <p>{{ post.content }}</p>
            <small>Autor: {{ post.author }}</small>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: this.generatePosts(),
            scrollSpeed: 1,
            animationFrame: null
        }
    },
    mounted() {
        this.startAnimation()
    },
    beforeUnmount() {
        cancelAnimationFrame(this.animationFrame)
    },
    methods: {
        generatePosts() {
            return Array.from({ length: 10 }, (_, i) => ({
                id: i,
                title: `Post ${i+1}`,
                content: `Przykładowa treść posta numer ${i+1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
                author: `User${i+1}`,
                position: i * 120
            }))
        },
        startAnimation() {
            const animate = () => {
                this.posts.forEach(post => {
                    post.position += this.scrollSpeed
                    if (post.position > 600) { // Wysokość viewportu
                        post.position = -100 // Reset na górę
                    }
                })
                this.animationFrame = requestAnimationFrame(animate)
            }
            animate()
        }
    }
}
</script>

<style scoped>
.posts-track {
    position: relative;
    width: 100%;
    height: 100%;
}

.post {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    max-width: 600px;
    padding: 20px;
    margin-bottom: 15px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: top 0.05s linear;
}
</style>