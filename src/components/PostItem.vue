<template>
  <div class="post">
    <div>
      <div><strong>ID:</strong> {{ post.id }}</div>
      <div><strong>Title </strong> {{ post.title }}</div>
      <div><strong>Description </strong> {{ post.body }}</div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      Required: true,
    },
  },
};
</script>

<style scoped>
.post {
  border: 2px solid teal;
  padding: 15px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>