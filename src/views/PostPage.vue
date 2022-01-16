<template>
  <div>
    <h1>Page with the posts</h1>
    <post-list :posts="posts" />
    <pagination-component @sendPage="changePage"></pagination-component>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PaginationComponent from "@/components/PaginationComponent.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { PostList, PaginationComponent },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
    }),
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
};
</script>
