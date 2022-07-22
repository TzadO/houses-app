<template>
    <button v-if="!link" class="button" :class="style">
        <slot></slot>
    </button>
    <router-link v-else :to="to" class="button router_button" :class="style">
        <slot></slot>
    </router-link>
</template>


<script>
export default {
    props: {
        style: {
            type: String,
            default: null,
            required: false
        },
        link: {
            type: Boolean,
            default: false,
            required: false
        },
        to: {
            type: String,
            default: '/',
            required: false
        }
    }
}
</script>


<style scoped>
button {
    width: 100%;
    padding: 1.5rem 2rem;
    border-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: var(--color-element--background-light);
    cursor: pointer;
}

.router_button {
    width: 100%;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    gap: 1rem;
}

.default {
    background-color: var(--color-element--primary);
    color: var(--color-element--background-light);
}

.light {
    background-color: var(--color-element--tertiary-dark);
}

.dark {
    background-color: var(--color-element--secondary);
}

.transparent {
    background-color: transparent;
    color: var(--color-text--primary);
    padding: 0;
}


</style>