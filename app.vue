<template>
  <div>

    <!-- <a href="javascript:void(0)" @click="view('home')">Home</a> | 
    <a href="javascript:void(0)" @click="view('aaa')">Not found page</a> | 
    <a href="javascript:void(0)"  @click="view('counter')">Counter</a> -->
    <!-- calling component with parent Folder-->
    <!-- <HomeWelcome /> -->
    <!-- calling component -->
    <!-- <Counter></Counter>  -->

    <!-- <button @click="toggle">Toggle</button>

    <div v-if="MyComponenet == 'welcome'">
      <HomeWelcome></HomeWelcome>
    </div> -->
    <NuxtLayout>  </NuxtLayout>
    <NuxtPage></NuxtPage>

    <!-- <LazyHomeWelcome v-if="page == 'home'" />
    <LazyCounter  v-if="page == 'counter'" /> -->

    <!-- dynamic components -->
    <!-- <component :is="MyComponenet" /> -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script setup>
  // const page = ref('home')
  // function view(name){
  //   page.value = name;
  // }
</script>
