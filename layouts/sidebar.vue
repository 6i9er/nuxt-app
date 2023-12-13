<template>

    <main class="bg-gray-500">
        <article class="sideBar">
            <p>Dashboard</p>
            <p>settings</p>
        </article>
    </main>
    


    <section>
        <slot></slot>
    </section>
</template>

<style scoped>
    .sideBar{
        display: flex;
        flex-direction: column;
    }
</style>