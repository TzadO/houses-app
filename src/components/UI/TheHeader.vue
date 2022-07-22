<template>
	<header class="navigation">
		<nav class="base_container">
			<ul>
				<li class="desktop">
					<base-button link to="/houses" class="desktop_header_menu">Houses</base-button>
				</li>
				<li class="desktop">
					<base-button link to="/about" class="desktop_header_menu">About</base-button>
				</li>
				<li class="mobile">
					<base-button link to="/houses">
						<img v-if="home" src="/assets/ic_mobile_navigarion_home_active@3x.png" alt="home" class="nav_mobile_icon" />
						<img v-if="!home" src="/assets/ic_mobile_navigarion_home@3x.png" alt="home" class="nav_mobile_icon" />
					</base-button>
				</li>
				<li class="mobile">
					<base-button link to="/about">
						<img v-if="!home" src="/assets/ic_mobile_navigarion_info_active@3x.png" alt="info" class="nav_mobile_icon" />
						<img v-if="home" src="/assets/ic_mobile_navigarion_info@3x.png" alt="info" class="nav_mobile_icon" />
					</base-button>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	computed: {
		home() {
			return this.$route.path.includes("houses");
		},
	},
};
</script>

<style scoped>
.navigation {
	width: 100%;
	height: fit-content;
	padding: 1.5rem 0;
	background-color: var(--color-element--background-light);
	position: fixed;
	top: 0;
	z-index: 100;
}

div {
	margin-right: auto;
	display: flex;
	align-items: center;
	width: 100%;
}

h1 {
	display: flex;
}

img {
	width: 12.5rem;
	height: 4.3rem;
}

ul {
	list-style: none;
	display: flex;
	gap: 6rem;
}

nav {
	width: 100%;
}

.desktop_header_menu {
	font-family: "Montserrat";
	font-weight: 500;
	font-size: 1.8rem;
	opacity: 0.3;
	color: var(--color-element--primary);
	background-color: #ffe5da;
}

.router-link-active {
	font-weight: 700;
	opacity: 1;
}

.nav_mobile_icon {
	height: 3rem;
	width: 3rem;
}

.base_container {
	width: 55%;
	margin: 0 auto;
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

@media only screen and (max-width: 480px) {
	.navigation {
		top: auto;
		bottom: 0;
		padding: 0;
	}

	ul {
		width: 100%;
		margin: 0;
		justify-content: space-around;
		gap: 0;
	}
}
</style>
