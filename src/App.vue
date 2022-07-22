<template>
  <the-header></the-header>
  <div class="base_container">
    <router-view></router-view>
  </div>
</template>


<script>
import TheHeader from './components/UI/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;1,500&family=Open+Sans:wght@400;600&display=swap');

:root {
  --color-element--primary: #EB5440;
  --color-element--secondary: #4A4B4C;
  --color-element--tertiary-light: #E8E8E8;
  --color-element--tertiary-dark: #C3C3C3;
  --color-element--background-light: #FFFFFF;
  --color-element--background-dark: #F6F6F6;
  --color-text--primary: #000000;
  --color-text--secondary: #4A4B4C;
  --color-text--hyperlink: #067BC2;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

a:link,
a:visited {
  color: var(--color-text--hyperlink);
  text-decoration: none;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  background-color: var(--color-element--background-dark);
  color: var(--color-text--primary);
}

body.modal-open {
  overflow: hidden;
}

body,
.listing_info,
.input_field {
  font-family: 'Open Sans';
}

h1,
h2, 
.button,
.back_button,
.tab,
.input_label,
.empty_state,
.error_message {
  font-family: 'Montserrat';
}

h1,
h2,
.button,
.tab {
  font-weight: 700;
}

.back_button,
.input_label,
.listing_info {
  font-weight: 600;
}

.empty_state,
.error_message {
  font-weight: 500;
}

body,
.input_field {
  font-weight: 400;
}

.error_message {
  font-style: italic;
}

h1 {
  font-size: 3.2rem;
}

h2 {
  font-size: 2.2rem;
}

body,
.button,
.tab,
.empty_state {
  font-size: 1.8rem;
}

.back_button,
.listing_info {
  font-size: 1.6rem;
}

.input_label,
.input_field
.error_message {
  font-size: 1.4rem;
}

@media only screen and (max-width: 480px ) {
  h1 {
    font-size: 1.8rem;
  }

  h2,
  .empty_state {
    font-size: 1.4rem;
  }

  body,
  .button,
  .tab,
  .input_label,
  .input_field,
  .error_message,
  .listing_info {
    font-size: 1.2rem;
  }

  .desktop {
    display: none;
  }
}

@media only screen and (min-width: 481px ) {
  .mobile {
    display: none;
  }
}


.base_container {
    width: 55%;
    margin: 0 auto;
    /* border: 1px solid black; */
}

@media only screen and (max-width: 1920px) {
    .base_container {
        width: 69%;
    }
}

@media only screen and (max-width: 1200px) {
    .base_container {
        width: 80%;
    }
}

@media only screen and (max-width: 1024px) {
    .base_container {
        width: 85%;
    }
}

@media only screen and (max-width: 768px) {
    .base_container {
        width: 90%;
    }
}

</style>
