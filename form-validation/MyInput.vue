<template>
  <div class="label" >
    <label :for="name">{{name}} </label>
  </div>
  <input :id="name" />
  <!-- SPEC v-bind:는 :로 생략 가능 -->
</template>

<script>
  export default {
    props: {
name:{
  type: String,
  required: true
}
    }
  }
</script>

<style scoped>
  .input-wrapper {
    display: flex;
    flex-direction: column;
  }

  .error {
    color: #f00;
  }

  label {
    cursor: pointer;
  }

  .label {
    display: flex;
    justify-content: space-between;
  }

  input {
    background-color: none;
    color: #000;
    border: 1px solid silver;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
    font-size: 16px;
  }
</style>