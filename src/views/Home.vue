<template>
  <div class="home">
  <button @click="this.$router.push({name: 'PostPage'})">go to post page</button>
  </div>
</template>

<script>

export default {
  name: 'Home',

}
</script>
