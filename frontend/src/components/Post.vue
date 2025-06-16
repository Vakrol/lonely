<template>
    <div ref="postContainer" class="post-container">
        <div v-for="post in posts" :key="post.id" class="post">
            <b>{{ post.user }}:</b> {{ post.message }}
        </div>
    </div>
</template>

<script>
    export default {
    <template>
      <div ref="postContainer" class="post-container">
        <div v-for="post in posts" :key="post.id" class="post">
          <b>{{ post.user }}:</b> {{ post.message }}
        </div>
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          allPosts: [
            { id: 1, user: 'Kasia', message: 'Od kilku dni nie mogę wstać z łóżka. Czuję, że wszystko mnie przerasta.' },
            { id: 2, user: 'Tomek', message: 'Mam ciągły lęk przed wyjściem z domu. Serce wali, ręce się trzęsą.' },
            { id: 3, user: 'Ania', message: 'Nie wiem, jak rozmawiać z bliskimi o depresji. Boję się odrzucenia.' },
            { id: 4, user: 'Marek', message: 'Codziennie budzę się z poczuciem winy. Nie potrafię tego zatrzymać.' },
            { id: 5, user: 'Ewa', message: 'Czuję się pusta. Nic mnie nie cieszy, nawet rzeczy, które kiedyś kochałam.' },
            { id: 6, user: 'Paweł', message: 'Lęk nocny doprowadza mnie do bezsenności. Boję się zasypiać.' },
            { id: 7, user: 'Ola', message: 'Chciałabym porozmawiać z kimś, kto rozumie moje myśli.' },
            { id: 8, user: 'Bartek', message: 'Trudno mi mówić o emocjach. Czuję się osamotniony.' },
          ],
          posts: [],
          scrollInterval: null,
          postHeight: 100 // wysokość pojedynczego posta w px
        };
      },
      mounted() {
        this.posts = this.allPosts.slice(0, 5);
        this.startScrollLoop();
      },
      methods: {
        startScrollLoop() {
          this.scrollInterval = setInterval(() => {
            const postContainer = this.$refs.postContainer;
            if (!postContainer) return;

            // Animacja przesuwania w górę o wysokość posta
            postContainer.style.transition = 'transform 1.5s ease';
            postContainer.style.transform = `translateY(-${this.postHeight}px)`;

            setTimeout(() => {
              // Wyłącz animację i resetuj przesunięcie
              postContainer.style.transition = 'none';
              postContainer.style.transform = 'translateY(0)';

              // Usuń pierwszy post (który „wyszedł” na górę)
              this.posts.shift();

              // Dodaj nowy post na koniec listy, z unikalnym id
              const next = this.allPosts[Math.floor(Math.random() * this.allPosts.length)];
              this.posts.push({ ...next, id: Date.now() });
            }, 1500);
          }, 4000);
        }
      },
      beforeDestroy() {
        clearInterval(this.scrollInterval);
      }
    };
</script>

<style scoped>
    .post-container {
      height: 500px; /* 5 postów * 100px */
      overflow: hidden;
    }
    .post {
      height: 100px;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      background: #f9f9f9;
    }
</style>

