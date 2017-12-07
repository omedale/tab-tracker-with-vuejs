<template>
  <div :class="containerClass">
    <h1>{{title}}</h1>
      <slot>
        No slot content defined.
      </slot>
  </div>
</template>

<script>

export default {
  props: [
    'title',
    'containerClass'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.authContainer {
    margin-top: 45px;
    margin-left: 25%;
    margin-right: 25%;
    padding: 15px;
    border-radius: 9px;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  }
  .contentContainer {
    margin-top: 35px;
  }
</style>
