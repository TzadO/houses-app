<template>
	<section>
		<h2 v-if="searchAmount">{{ filteredHouses.length }} results found</h2>
		<slot></slot>
		<ul>
			<house-listing v-for="house in filteredHouses" :key="house.id" :house="house" @click="showDetails(house.id)"> </house-listing>
		</ul>
		<div v-if="noResult">
			<img src="/assets/img_empty_houses@3x.png" alt="empty house" />
			<p class="empty_state">No results found</p>
			<p class="empty_state">Please try another keyword</p>
		</div>
	</section>
</template>

<script>
import HouseListing from "../layout/HouseListing.vue";

export default {
	components: {
		HouseListing,
	},
	props: {
		filter: {
			type: Object,
			default: function () {
				return {
					searchInput: "",
					sortedByPrice: true,
				};
			},
			required: false,
		},
		fetch: {
			required: false,
		},
	},
	computed: {
		filteredHouses() {
			const houses = this.$store.getters.listHouses;
			const filter = this.filter;
			let searchedHouses = houses;

			if (filter.searchInput !== "") {
				const searchInput = filter.searchInput.toLowerCase();
				searchedHouses = houses.filter((house) => {
					if (`${house.street}`.toLowerCase().includes(searchInput)) return true;
					if (`${house.price}`.toLowerCase().includes(searchInput)) return true;
					if (`${house.size}`.toLowerCase().includes(searchInput)) return true;
					if (`${house.postalCode}`.toLowerCase().includes(searchInput)) return true;
					if (`${house.city}`.toLowerCase().includes(searchInput)) return true;
					if (`${house.houseNumber}`.toLowerCase().includes(searchInput)) return true;
					return false;
				});
			}

			searchedHouses.sort((house1, house2) => {
				if (filter.sortedByPrice) {
					return house1.price - house2.price;
				} else {
					return house1.size - house2.size;
				}
			});

			return searchedHouses;
		},
		searchAmount() {
			return this.filter.searchInput !== "" && this.filteredHouses.length !== 0;
		},
		noResult() {
			return this.filteredHouses.length === 0;
		},
	},
	methods: {
		showDetails(id) {
			if (event.target.classList.contains("ignore")) return;
			this.$router.push("/houses/housedetails/" + id);
			window.scrollTo(0,0)
		},
	},
};
</script>

<style scoped>
section {
	margin-bottom: 2rem;
}

ul {
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

div {
	display: flex;
	flex-direction: column;
	align-items: center;
}

img {
	margin: 10rem 0 5rem;
	max-width: 45rem;
	height: auto;
}

@media only screen and (max-width: 480px) {
	img {
		margin: 4rem 0;
		max-width: 15rem;
		height: auto;
	}

	section {
		margin-bottom: 10rem;
	}
}
</style>
