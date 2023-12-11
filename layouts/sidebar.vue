<template>

    <main class="userLayout">
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