<template>
	<section>
		<div class="header_create-div">
			<h1>Houses</h1>
			<base-card>
				<div class="desktop">
					<base-button link to="createlisting" class="default">
						<img class="icon icon_plus_white" src="/assets/ic_plus_white@3x.png" />
						CREATE NEW
					</base-button>
				</div>
				<div class="mobile">
					<base-button link to="createlisting">
						<img class="icon icon_plus_white" src="/assets/ic_plus_grey@3x.png" />
					</base-button>
				</div>
			</base-card>
		</div>
		<div class="search_sort-div">
			<base-card class="search_input-card">
				<div class="search_input-div">
					<label for="search" class="search_input_label">
						<img class="icon icon_search" src="/assets/ic_search@3x.png" alt="search" />
					</label>
					<input type="text" name="search" id="search" class="input_field" placeholder="Search for a house" v-model.trim="filter.searchInput" autocomplete="off" />
					<span class="clear_input-span" v-if="filter.searchInput !== ''" @click="clearInput" title="clear input">
						<img class="icon icon_clear_input" src="/assets/ic_clear@3x.png" alt="clearfield" />
					</span>
				</div>
			</base-card>
			<base-card class="sorting_buttons-card">
				<div class="sorting_buttons-div">
					<base-button @click="sortByPrice" :class="isSortedByPrice">Price</base-button>
					<base-button @click="sortByPrice" :class="isSortedBySize">Size</base-button>
				</div>
			</base-card>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			filter: {
				searchInput: "",
				sortedByPrice: true,
			},
		};
	},
	watch: {
		filter: {
			handler(val) {
				this.$emit("change-filter", val);
			},
			deep: true,
		},
	},
	emits: ["change-filter"],
	methods: {
		sortByPrice() {
			this.filter.sortedByPrice = !this.filter.sortedByPrice;
		},
		clearInput() {
			this.filter.searchInput = "";
		},
	},
	computed: {
		isSortedByPrice() {
			return this.filter.sortedByPrice ? "default" : "light";
		},
		isSortedBySize() {
			return this.filter.sortedByPrice ? "light" : "default";
		},
	},
};
</script>

<style scoped>
section {
	margin: 10rem 0 3rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
}

.icon {
	height: 2rem;
	width: 2rem;
}

.icon_search {
	margin-left: 1rem;
}

.icon_clear_input {
	margin-right: 1rem;
}

.clear_input-span {
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 1rem;
}

.header_create-div {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.search_sort-div {
	height: 100%;
	display: flex;
	justify-content: space-between;
	gap: 25vw;
}
.search_input-div {
	width: 100%;
	height: 5.2rem;
	background-color: var(--color-element--tertiary-light);
	display: flex;
	gap: 1rem;
}
.sorting_buttons-div {
	display: flex;
	width: 100%;
}

.search_input-card {
	width: 100%;
	flex: 1 1 45%;
}

.sorting_buttons-card {
	width: 100%;
	flex: 1 1 30%;
}

.search_input_label {
	height: 100%;
	padding: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
}

.input_field {
	background-color: transparent;
	border-style: none;
	width: 100%;
	height: 100%;
}

.input_field:focus {
	outline: none;
}

.input_field::placeholder {
	opacity: 0.5;
	transition: color 0.7s ease;
}

.input_field:focus::placeholder {
	color: transparent;
}

@media only screen and (max-width: 1200px) {
	.search_sort-div {
		gap: 10vw;
	}
}
@media only screen and (max-width: 768px) {
	.search_sort-div {
		gap: 5vw;
	}
}

@media only screen and (max-width: 480px) {
	h1 {
		margin-left: 39vw;
	}

	.search_sort-div {
		flex-direction: column;
	}

	.search_input-div {
		height: 4.2rem;
	}

	section {
		margin: 3rem 0 3rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
}
</style>
