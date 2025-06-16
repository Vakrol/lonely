<template>
  <div class="posts-container">
    <div class="posts-boundary">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: this.generatePosts(),
      scrollSpeed: 0.5,
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
      return [
        {
          id: 1,
          title: "Witamy w LonelyNet",
          content: "Rozpocznij swoją podróż ku lepszemu samopoczuciu...",
          author: "Admin",
          position: 0
        },
        {
          id: 2,
          title: "LAMA KURWA OGANRIJ DUPE",
          content: "Poradnik dla nowych użytkowników...",
          author: "Support",
          position: 300
        },
        {
          id: 2,
          title: "DUPE",
          content: "Poradnik dla nowych użytkowników...",
          author: "Support",
          position: 300
        },
        {
          id: 2,
          title: "W KTORA WYRUCHAM",
          content: "Poradnik dla nowych użytkowników...",
          author: "Support",
          position: 300
        },
        {
          id: 2,
          title: "Xddddddddddddddddddddddddddddddddddddddddddddddd ",
          content: "Poradnik dla nowych użytkowników...",
          author: "Support",
          position: 300
        },
        {
          id: 2,
          title: "Jak korzystać z platformy?",
          content: "Poradnik dla nowych użytkowników...",
          author: "Support",
          position: 300
        },
        // Dodaj więcej postów...
      ]
    },
    startAnimation() {
      const animate = () => {
        this.posts.forEach(post => {
          post.position += this.scrollSpeed
          if (post.position > window.innerHeight) {
            post.position = -200
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
.posts-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 120px);
  overflow: hidden;
}

.posts-boundary {
  position: relative;
  width: 80%;
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
  padding: 0 40px;
}

.posts-boundary::before,
.posts-boundary::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(200, 200, 200, 0.3),
    rgba(200, 200, 200, 0.8),
    rgba(200, 200, 200, 0.3)
  );
  z-index: 1;
}

.posts-boundary::before {
  left: 20px;
}

.posts-boundary::after {
  right: 20px;
}

.post {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  padding: 25px;
  background: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  border-left: 3px solid #42b983;
  z-index: 2;
}

.post h3 {
  color: #42b983;
  margin-top: 0;
}

.post p {
  color: #e0e0e0;
  line-height: 1.6;
}
</style>