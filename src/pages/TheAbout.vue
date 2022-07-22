<template>
    <section>
        <h1 class="mobile">ABOUT</h1>
        <h2>Information</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dicta saepe similique distinctio itaque quae dolorem, ducimus nam inventore temporibus dolore rerum earum dolorum aut officia maxime quo facilis excepturi, reprehenderit culpa reiciendis voluptatum minus sit. Officia debitis labore aspernatur, id, maiores temporibus, minima corporis blanditiis laboriosam nulla dicta laudantium est nemo eaque similique eius.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sequi, eius optio qui necessitatibus accusantium?</p>
        <h2>Design and Development</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil unde harum deleniti temporibus. Repellat iure doloremque facilis sed labore? Quasi perferendis, vero recusandae impedit neque ab libero nobis. Quo excepturi veniam veritatis accusantium natus. Neque alias praesentium nam perspiciatis corporis?</p>
    </section>
</template>


<style scoped>
section {
    margin-top: 15rem;
}

h1 {
    width: fit-content;
    margin: 0 auto 5rem;
}

h2 {
    margin: 4rem 0;
}

p  {
    color: var(--color-text--secondary);
    margin: 1rem 0;
    line-height: 1.8;
}

p:first-of-type {
    margin-bottom: 3rem;
}

.button {
    width: 30rem;
    text-transform: uppercase;
}

@media only screen and (max-width: 480px) {
    section {
        margin-top: 5rem;
    }
}
</style>