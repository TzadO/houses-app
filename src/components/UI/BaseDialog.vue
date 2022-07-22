<template>
    <teleport to="body">
        <div></div>
        <dialog open>
            <header>
                <slot name="header">
                    <h2>{{title}}</h2>
                </slot>
            </header>
            <section>
                <slot></slot>
            </section>
            <menu>
                <slot name="actions" class="actions"></slot>
            </menu>
        </dialog>
    </teleport>
</template>


<script>
export default {
    props: {
        title: {
            type: String,
            required: false
        }
    }
}
</script>


<style scoped>
div {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 10;
}

dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25%;
    padding: 3rem;
    border-radius: 12px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    z-index: 100;
    overflow: hidden;
    overscroll-behavior-y: contain;
    background-color: var(--color-element--background-light);
}

dialog,
section,
menu {
    display: flex;
    flex-direction: column;
    align-items: center;
}

menu {
    padding: 1rem;
    gap: 3rem;
}

@media only screen and (max-width: 1920px) {
    dialog {
        width: 37%;
    }
}

@media only screen and (max-width: 1200px) {
    dialog {
        width: 45%;
    }
}

@media only screen and (max-width: 1024px) {
    dialog {
        width: 60%;
    }
}

@media only screen and (max-width: 768px) {
    dialog {
        width: 90%;
    }
}
</style>