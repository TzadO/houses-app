<template>
	<base-card class="listing">
		<li>
			<base-card>
				<div class="img-div">
					<img class="img_listing" :src="house.image" alt="house listing image" />
				</div>
			</base-card>
			<div class="details">
				<div class="flex_row">
					<h2>{{ street }} {{ house.houseNumber + house.houseNumberAddition.toLowerCase() }}</h2>
					<update-delete v-if="house.madeByMe" :id="house.id"></update-delete>
				</div>
				<p class="price">&euro; {{ price }}</p>
				<p class="postalcode_city">{{ postalCode }} {{ city }}</p>
				<div class="properties">
					<img class="icon_bed" src="/assets/ic_bed@3x.png" alt="bedrooms" /> {{ house.bedRooms }} <img class="icon_bath" src="/assets/ic_bath@3x.png" alt="bathrooms" />
					{{ house.bathRooms }} <img class="icon_size" src="/assets/ic_size@3x.png" alt="size" /> {{ house.size }} m2
				</div>
			</div>
		</li>
	</base-card>
</template>

<script>
import UpdateDelete from "../../components/UI/UpdateDelete";

export default {
	components: {
		UpdateDelete,
	},
	props: {
		house: {
			type: Object,
			required: true,
		},
	},
	computed: {
		price() {
			return this.house.price.toLocaleString();
		},
		postalCode() {
			return Number(this.house.postalCode.slice(0, 4)) + " " + this.house.postalCode.slice(-2).toUpperCase();
		},
		city() {
			return this.house.city.slice(0, 1).toUpperCase() + this.house.city.slice(1).toLowerCase();
		},
		street() {
			return this.house.street.slice(0, 1).toUpperCase() + this.house.street.slice(1).toLowerCase();
		},
	},
};
</script>

<style scoped>
li {
	width: 100%;
	padding: 2rem;
	list-style: none;
	background-color: var(--color-element--background-light);
	display: flex;
	gap: 2rem;
	cursor: pointer;
}
.listing {
	width: 100%;
}
.img-div {
	display: flex;
	align-items: center;
	width: 25rem;
	height: 18rem;
}

.img_listing {
	width: 100%;
	height: 100%;
}

.flex_row {
	width: 100%;
	display: flex;
	justify-content: space-between;
}

.details {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

.properties {
	width: 20rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: var(--color-text--secondary);
}

.postalcode_city {
	color: var(--color-element--tertiary-dark);
}

.icon_bed {
	width: 2.4rem;
	height: 2rem;
}

.icon_bath {
	width: 2rem;
	height: 2rem;
}

.icon_size {
	width: 2.4rem;
	height: 2.3rem;
}

@media only screen and (max-width: 480px) {
	.details {
		padding: 1rem 0;
		gap: 0.5rem;
		justify-content: flex-start;
	}

	.properties {
		margin-top: auto;
	}

	.img-div {
		width: 15rem;
		height: 11rem;
	}
}
</style>
