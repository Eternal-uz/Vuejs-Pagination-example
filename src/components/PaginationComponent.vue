<template>
  <div class="page__wrapper">
    <div
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      class="page"
      :class="{
        'current-page': page === pageNumber,
      }"
      @click="sendPage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
import { mapState, } from "vuex";
export default {
  methods: {
    sendPage(pageNumber) {
      this.$emit("sendPage", pageNumber);
    },
  },
    computed: {
    ...mapState({
      page: (state) => state.post.page,
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
