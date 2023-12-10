<template>
   <h3>Hello world</h3>>
</template>

<script setup>

  const count = ref(0)

  function increment(){
    count.value++;
  }

  function decrement(){
    count.value--;
  }

</script>