<template>
  <b-field :label="label">
    <b-input v-model="value"></b-input>
  </b-field>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    label: '',
    value: ''
  }
}
</script>

<style>

</style>
