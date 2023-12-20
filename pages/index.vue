<template>
    <div>
                <p>
            Hello index

        </p>
        <button @click="navigateToAnotherPage('about')">Navigate to about us</button>
    </div>
</template>

<script setup>


    

    import { onMounted } from 'vue';

    
    


    function navigateToAnotherPage(pageName){
        navigateTo(pageName);
    }
</script>