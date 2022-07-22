<template>
	<section class="section">
		<base-button @click="$router.push('/houses')" class="back_button transparent">
			<img class="back_arrow" src="/assets/ic_back_grey@3x.png" />
			<!-- <img class="back_arrow mobile" src="/assets/ic_back_white@3x.png" /> -->
			<p class="desktop">Back to previous page</p>
		</base-button>
		<div class="container_flex">
			<div class="house">
				<div class="listing_image-div">
					<img class="listing_image" :src="listing.image" alt="listing image" />
				</div>
				<div class="details">
					<div class="details_flex_row">
						<h1>{{ street }} {{ listing.houseNumber + listing.houseNumberAddition }}</h1>
						<update-delete v-if="listing.madeByMe" :id="id" details="true"></update-delete>
					</div>
					<div class="details_sub">
						<img class="icon icon_location" src="/assets/ic_location@3x.png" />
						<p class="listing_info">{{ postalCode }} {{ city }}</p>
					</div>
					<div class="details_flex_row">
						<div class="details_sub">
							<img class="icon" src="/assets/ic_price@3x.png" />
							<p class="listing_info">{{ listing.price.toLocaleString() }}</p>
						</div>
						<div class="details_sub">
							<img class="icon" src="/assets/ic_size@3x.png" />
							<p class="listing_info">{{ listing.size }} m2</p>
						</div>
						<div class="details_sub">
							<img class="icon" src="/assets/ic_construction_date@3x.png" />
							<p class="listing_info">Built in {{ listing.constructionYear }}</p>
						</div>
					</div>
					<div class="details_flex_row">
						<div class="details_sub">
							<img class="icon" src="/assets/ic_bed@3x.png" />
							<p class="listing_info">{{ listing.bedRooms }}</p>
						</div>
						<div class="details_sub">
							<img class="icon" src="/assets/ic_bath@3x.png" />
							<p class="listing_info">{{ listing.bathRooms }}</p>
						</div>
						<div class="details_sub">
							<img class="icon" src="/assets/ic_garage@3x.png" />
							<p class="listing_info">{{ listing.garage ? "yes" : "no" }}</p>
						</div>
					</div>
					<p class="listing_info">{{ listing.description }}</p>
				</div>
			</div>
			<div class="recommended">
				<houses-list>
					<h2>Recommended</h2>
				</houses-list>
			</div>
		</div>
	</section>
</template>

<script>
import UpdateDelete from "../components/UI/UpdateDelete.vue";
import HousesList from "../components/layout/HousesList.vue";

export default {
	components: {
		UpdateDelete,
		HousesList,
	},
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			listing: {},
		};
	},
	created() {
		const houses = this.$store.getters.listHouses;
		const house = houses.find((house) => house.id === this.id);
		this.listing = house;
	},
	watch: {
		$route(to, from) {
			if (to !== from) {
				location.reload();
			}
		},
	},
	computed: {
		postalCode() {
			return Number(this.listing.postalCode.slice(0, 4)) + " " + this.listing.postalCode.slice(-2).toUpperCase();
		},
		city() {
			return this.listing.city.slice(0, 1).toUpperCase() + this.listing.city.slice(1).toLowerCase();
		},
		street() {
			return this.listing.street.slice(0, 1).toUpperCase() + this.listing.street.slice(1).toLowerCase();
		},
	},
};
</script>

<style scoped>
.section {
	margin: 13rem 0 5rem;
	display: flex;
	flex-direction: column;
}

.back_arrow {
	width: 2rem;
	height: auto;
}

.back_button {
	width: fit-content;
	margin-bottom: 3rem;
	margin-right: auto;
}

h1 {
	width: fit-content;
}

.container_flex {
	display: flex;
	position: relative;
	gap: 5rem;
}

.house {
	width: 62%;
	display: flex;
	flex-direction: column;
}

.listing_image-div {
	height: 58vh;
	display: flex;
	justify-content: center;
}

.listing_image {
	width: 100%;
	height: 100%;
}

.details {
	background-color: var(--color-element--background-light);
	padding: 3rem 2rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.details_sub {
	display: flex;
	align-items: center;
	align-content: center;
}

.details_flex_row {
	display: flex;
	gap: 2.5rem;
}

.listing_info {
	color: var(--color-text--secondary);
	letter-spacing: 1px;
	line-height: 1.8;
}

.icon {
	height: 1.9rem;
	width: 1.9rem;
	margin-right: 1rem;
}

.icon_location {
	height: 1.8rem;
	width: 1.6rem;
}

.recommended {
	height: 98rem;
	overflow: hidden;
}

@media only screen and (max-width: 1024px) {
	.container_flex {
		flex-direction: column;
		width: 100%;
		gap: 2rem;
	}

	.recommended {
		height: fit-content;
	}

	.house {
		width: 80%;
		margin: 0 auto;
	}
}

@media only screen and (max-width: 768px) {
	.house {
		width: 100%;
	}

}

@media only screen and (max-width: 480px) {
	.section {
		margin: 0 0 1rem;
	}

	.back_arrow {
		position: fixed;
		top: 3rem;
		z-index: 100;
	}

	.back_button {
		margin-bottom: 0;
	}

	.details {
		border-radius: 30px;
		margin-top: 5rem;
	}


	.listing_image {
		width: 100vw;
		height: 49rem;
		z-index: -1;
	}
}
</style>
