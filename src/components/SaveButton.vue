<template>
  <button type="button" class="button is-primary" @click="onClick">Save</button>
</template>

<script>
export default {
  methods: {
    onClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style>

</style>
