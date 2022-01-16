<template>
  <div>
    <h1>Page with the posts</h1>

    <post-list :posts="posts" />
  </div>
  <div class="page__wrapper">
    <div
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      class="page"
      :class="{
        'current-page': page === pageNumber,
      }"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import { mapState, mapActions } from "vuex";
export default {
  components: { PostList },
  data() {
    return {
    };
  },

  methods: {
    ...mapActions({
      fetchPosts: "post/fetchPosts",
      changePage: "post/changePage",
    }),
  },
  watch: {
    page() {
      this.fetchPosts();
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
    }),
  },
};
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid red;
  font-size: x-large;
}
</style>
