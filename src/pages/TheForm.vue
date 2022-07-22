<template>
	<section>
		<div class="background"></div>
		<div class="flex">
			<base-card>
				<base-button @click="$router.go(-1)" class="transparent">
					<img class="back_arrow" src="/assets/ic_back_grey@3x.png" />
					<p class="desktop">Back to previous page</p>
				</base-button>
			</base-card>
			<h1>{{ editOrNew }} listing</h1>
		</div>
		<form @submit.prevent="submitForm">
			<div class="form_control" :class="{ invalid: streetName.isValid === false }">
				<label for="streetName" class="input_label">Street name<sup>*</sup></label>
				<base-card class="input_card">
					<input
						type="text"
						class="input_field"
						id="streetName"
						name="streetName"
						v-model.trim="streetName.value"
						pattern="^[A-Za-z\.\-\s]+$"
						placeholder="Enter the street name"
						@blur="clearValidity('streetName')"
					/>
				</base-card>
				<p v-if="streetName.isValid === false" class="error_message">Required field missing</p>
			</div>

			<div class="double_input">
				<div class="form_control" :class="{ invalid: houseNumber.isValid === false }">
					<label for="houseNumber" class="input_label">House number<sup>*</sup></label>
					<base-card class="input_card">
						<input
							type="text"
							min="1"
							class="input_field"
							id="houseNumber"
							name="houseNumber"
							v-model.number="houseNumber.value"
							pattern="[0-9]+"
							placeholder="Enter house number"
							@blur="clearValidity('houseNumber')"
						/>
					</base-card>
					<p class="error_message" v-if="houseNumber.isValid === false">Required field missing</p>
				</div>

				<div class="form_control">
					<label for="houseNumberAddition" class="input_label">Addition (optional)</label>
					<base-card class="input_card">
						<input type="text" class="input_field" id="houseNumberAddition" name="numberAddition" v-model.trim="houseNumberAddition.value" pattern="[A-Za-z]+" placeholder="e.g. A" />
					</base-card>
				</div>
			</div>

			<div class="form_control" :class="{ invalid: postalCode.isValid === false }">
				<label for="postalCode" class="input_label">Postal code<sup>*</sup></label>
				<base-card class="input_card">
					<input
						type="text"
						id="postalCode"
						name="zip"
						class="input_field"
						v-model.trim="postalCode.value"
						placeholder="e.g. 1000 AA"
						pattern="[1-9][0-9]{3}\s?[a-zA-Z]{2}"
						@blur="clearValidity('postalCode')"
					/>
				</base-card>
				<p class="error_message" v-if="postalCode.isValid === false">Required field missing</p>
			</div>

			<div class="form_control" :class="{ invalid: city.isValid === false }">
				<label for="city" class="input_label">City<sup>*</sup></label>
				<base-card class="input_card">
					<input type="text" id="city" name="city" class="input_field" v-model.trim="city.value" pattern="^[A-Za-z\.\-\s]+$" placeholder="e.g. Utrecht" @blur="clearValidity('city')" />
				</base-card>
				<p class="error_message" v-if="city.isValid === false">Required field missing</p>
			</div>

			<div class="form_control" :class="{ invalid: image.isValid === false }">
				<label for="file-ip-1" class="input_label image_upload">
					<p>Upload picture (PNG or JPG)<sup>*</sup></p>
					<div class="preview" :class="imageSelected">
						<base-card class="image_card">
							<img class="image_preview" id="file-ip-1-preview" />
						</base-card>
						<img v-if="image.selected" class="icon_cross" id="icon-cross" title="remove" src="/assets/ic_clear_white@3x.png" @click="hidePreview" />
						<img class="icon_plus" id="icon-plus" src="/assets/ic_plus_grey@3x.png" />
					</div>
				</label>
				<input type="file" id="file-ip-1" accept=".png, .jpg" name="image" class="image_input" @change="showPreview()" />
				<p class="error_message" v-if="image.isValid === false">Required field missing</p>
			</div>

			<div class="form_control" :class="{ invalid: price.isValid === false }">
				<label for="price" class="input_label">Price<sup>*</sup></label>
				<base-card class="input_card">
					<input type="number" min="1" id="price" name="price" class="input_field" v-model.number="price.value" pattern="[0-9]+" placeholder="e.g. 150.000" @blur="clearValidity('price')" />
				</base-card>
				<p class="error_message" v-if="price.isValid === false">Required field missing</p>
			</div>

			<div class="double_input">
				<div class="form_control" :class="{ invalid: size.isValid === false }">
					<label for="size" class="input_label">Size<sup>*</sup></label>
					<base-card class="input_card">
						<input type="number" min="1" class="input_field" id="size" name="size" v-model.number="size.value" pattern="[0-9]+" placeholder="e.g. 60m2" @blur="clearValidity('size')" />
					</base-card>
				</div>

				<div class="form_control" :class="{ invalid: garage.isValid === false }">
					<label for="garage" class="input_label">Garage<sup>*</sup></label>
					<base-card class="input_card">
						<select id="garage" name="hasGarage" class="input_field select_field" v-model="garage.value" @blur="clearValidity('garage')">
							<option value="select" disabled>Select</option>
							<option value="true">yes</option>
							<option value="false">no</option>
						</select>
					</base-card>
				</div>
			</div>
			<p class="error_message" v-if="size.isValid === false || garage.isValid === false">Required field missing</p>

			<div class="double_input">
				<div class="form_control" :class="{ invalid: bedRooms.isValid === false }">
					<label for="bedRooms" class="input_label">Bedrooms<sup>*</sup></label>
					<base-card class="input_card">
						<input
							type="number"
							min="1"
							class="input_field"
							id="bedRooms"
							name="bedrooms"
							v-model.number="bedRooms.value"
							pattern="[0-9]+"
							placeholder="Enter amount"
							@blur="clearValidity('bedRooms')"
						/>
					</base-card>
				</div>

				<div class="form_control" :class="{ invalid: bathRooms.isValid === false }">
					<label for="bathRooms" class="input_label">Bathrooms<sup>*</sup></label>
					<base-card class="input_card">
						<input
							type="number"
							min="1"
							class="input_field"
							id="bathRooms"
							name="bathrooms"
							v-model.number="bathRooms.value"
							pattern="[0-9]+"
							placeholder="Enter amount"
							@blur="clearValidity('bathRooms')"
						/>
					</base-card>
				</div>
			</div>
			<p class="error_message" v-if="bedRooms.isValid === false || bathRooms.isValid === false">Required field missing</p>

			<div class="form_control" :class="{ invalid: constructionYear.isValid === false }">
				<label for="constructionYear" class="input_label">Construction year<sup>*</sup></label>
				<base-card class="input_card">
					<input
						type="text"
						class="input_field"
						id="constructionYear"
						name="constructionYear"
						v-model.number="constructionYear.value"
						pattern="[1-2][0-9]{3}"
						placeholder="e.g. 1900"
						@blur="clearValidity('constructionYear')"
					/>
				</base-card>
				<p class="error_message" v-if="constructionYear.isValid === false">Required field missing</p>
			</div>

			<div class="form_control" :class="{ invalid: description.isValid === false }">
				<label for="description" class="input_label">Description<sup>*</sup></label>
				<base-card class="input_card">
					<textarea
						name="description"
						id="description"
						cols="30"
						rows="8"
						class="input_field"
						v-model.trim="description.value"
						placeholder="Enter description"
						@blur="clearValidity('description')"
					></textarea>
				</base-card>
				<p class="error_message" v-if="description.isValid === false">Required field missing</p>
			</div>
			<base-card class="submit_button">
				<base-button class="default" :class="opacity">{{ saveOrPost }}</base-button>
			</base-card>
		</form>
	</section>
</template>

<script>
import {imageToBase64} from  '../Utils.mjs';

export default {
	props: {
		id: {
			type: String,
			required: false,
		},
	},
	data() {
		return {
			streetName: {
				value: "",
				isValid: true,
			},
			houseNumber: {
				value: null,
				isValid: true,
			},
			houseNumberAddition: {
				value: "",
			},
			postalCode: {
				value: "",
				isValid: true,
			},
			city: {
				value: "",
				isValid: true,
			},
			price: {
				value: null,
				isValid: true,
			},
			size: {
				value: null,
				isValid: true,
			},
			garage: {
				value: "select",
				isValid: true,
			},
			bedRooms: {
				value: null,
				isValid: true,
			},
			bathRooms: {
				value: null,
				isValid: true,
			},
			constructionYear: {
				value: null,
				isValid: true,
			},
			description: {
				value: "",
				isValid: true,
			},
			image: {
				selected: false,
				isValid: true,
			},
			formIsValid: true,
		};
	},
	methods: {
		async submitForm() {
			this.validateForm();
			if (!this.formIsValid) return;

			const house = {
				street: this.streetName.value,
				houseNumber: this.houseNumber.value,
				houseNumberAddition: this.houseNumberAddition.value,
				postalCode: this.postalCode.value,
				city: this.city.value,
				price: this.price.value,
				size: this.size.value,
				garage: this.garage.value,
				bedRooms: this.bedRooms.value,
				bathRooms: this.bathRooms.value,
				constructionYear: this.constructionYear.value,
				description: this.description.value,
				madeByMe: true
			}

			if (this.id) {
				if (document.getElementById("file-ip-1").files.length > 0) {
					const image = document.getElementById("file-ip-1").files[0];
					const formattedImage = await imageToBase64(image);
					const housePlusImagePlusId = {
						...house,
						id: this.id,
						image: formattedImage
					}
					this.$store.dispatch("editListing", housePlusImagePlusId);
				} else {
					const image = document.getElementById("file-ip-1-preview").src;
					const housePlusImagePlusId = {
					...house,
					id: this.id,
					image: image
					}
					this.$store.dispatch("editListing", housePlusImagePlusId);
				}
			} 
			
			else {
				const image = document.getElementById("file-ip-1").files[0];
				const formattedImage = await imageToBase64(image);
				const housePlusImage = {
					...house,
					image: formattedImage
				}
				this.$store.dispatch("postNewListing", housePlusImage);
			}
			
			this.$router.push('/houses');
		},
		validateForm() {
			this.formIsValid = true;
			if (this.streetName.value === "") {
				this.streetName.isValid = false;
				this.formIsValid = false;
				return;
			}
			if (this.houseNumber.value === null || typeof this.houseNumber.value === "string") {
				this.houseNumber.isValid = false;
				this.formIsValid = false;
				return;
			}
			if (this.postalCode.value === "") {
				this.postalCode.isValid = false;
				this.formIsValid = false;
				return;
			}
			if (this.city.value === "") {
				this.city.isValid = false;
				this.formIsValid = false;
				return;
			}
			if (!this.image.selected) {
				this.image.isValid = false;
				this.formIsValid = false;
				return;
			}
			if (this.price.value === null || typeof this.price.value === "string") {
				this.price.isValid = false;
				this.formIsValid = false;
				return;
			}
			if (this.size.value === null || typeof this.size.value === "string") {
				this.size.isValid = false;
				this.formIsValid = false;
				return;
			}
			if (this.garage.value === "select") {
				this.garage.isValid = false;
				this.formIsValid = false;
				return;
			}
			if (this.bedRooms.value === null || typeof this.bedRooms.value === "string") {
				this.bedRooms.isValid = false;
				this.formIsValid = false;
				return;
			}
			if (this.bathRooms.value === null || typeof this.bathRooms.value === "string") {
				this.bathRooms.isValid = false;
				this.formIsValid = false;
				return;
			}
			if (this.constructionYear.value === null || typeof this.constructionYear.value === "string") {
				this.constructionYear.isValid = false;
				this.formIsValid = false;
				return;
			}
			if (this.description.value === "") {
				this.description.isValid = false;
				this.formIsValid = false;
			}
		},
		clearValidity(input) {
			this[input].isValid = true;
		},
		showPreview() {
			const fileInput = document.getElementById("file-ip-1");
			if (!fileInput.files[0].name.includes(".png") && !fileInput.files[0].name.includes(".jpg")) {
				return;
			}

			if (fileInput.files.length > 0) {
				const src = URL.createObjectURL(fileInput.files[0]);
				const preview = document.getElementById("file-ip-1-preview");
				preview.src = src;
				preview.style.display = "block";
				this.image.selected = true;
				document.getElementById("icon-plus").style.display = "none";
				this.clearValidity("image");
			}
		},
		hidePreview() {
			const preview = document.getElementById("file-ip-1-preview");
			preview.src = "";
			preview.style.display = "none";
			this.image.selected = false;
			document.getElementById("icon-plus").style.display = "block";
		},
	},

	computed: {
		editOrNew() {
			return this.id ? "Edit" : "Create new";
		},
		saveOrPost() {
			return this.id ? "Save" : "Post";
		},
		opacity() {
			if (
				this.streetName.value === "" ||
				this.houseNumber.value === null ||
				typeof this.houseNumber.value === "string" ||
				this.postalCode.value === "" ||
				this.city.value === "" ||
				this.price.value === null ||
				typeof this.price.value === "string" ||
				this.size.value === null ||
				typeof this.size.value === "string" ||
				this.garage.value === "select" ||
				this.bedRooms.value === null ||
				typeof this.bedRooms.value === "string" ||
				this.bathRooms.value === null ||
				typeof this.bathRooms.value === "string" ||
				this.constructionYear.value === null ||
				typeof this.constructionYear.value === "string" ||
				this.description.value === ""
			) {
				return "opacity";
			} else {
				return "";
			}
		},
		imageSelected() {
			return this.image.selected ? "" : "image_selected";
		}
	},

	mounted() {
		if (!this.id) return;
		const houses = this.$store.getters.listHouses;
		const house = houses.find((house) => house.id === this.id);
		this.streetName.value = house.street;
		this.houseNumber.value = house.houseNumber;
		this.houseNumberAddition.value = house.houseNumberAddition;
		this.postalCode.value = house.postalCode;
		this.city.value = house.city;
		this.price.value = house.price;
		this.size.value = house.size;
		this.garage.value = house.garage;
		this.bedRooms.value = house.bedRooms;
		this.bathRooms.value = house.bathRooms;
		this.constructionYear.value = house.constructionYear;
		this.description.value = house.description;
		const preview = document.getElementById("file-ip-1-preview");
		preview.src = house.image;
		preview.style.display = "block";
		this.image.selected = true;
		document.getElementById("icon-plus").style.display = "none";
	},
};
</script>

<style scoped>
section {
	margin: 13rem 0 4rem;
}

.background {
	background-image: url(../../public/assets/img_background@3x.png);
	background-size: cover;
	width: 100vw;
	height: 100rem;
	position: fixed;
	top: 0;
	z-index: -1;
}

.back_arrow {
	width: 2rem;
	height: auto;
}

h1 {
	margin: 3rem 0 4rem;
}

form {
	width: 30%;
}

.double_input {
	display: flex;
	width: 100%;
	justify-content: space-between;
	gap: 1.5rem;
}
.input_card {
	width: 100%;
}

.input_label {
	color: var(--color-text--secondary);
	display: flex;
	width: fit-content;
	margin: 1.5rem 0 1rem;
}

.input_field {
	padding: 1.5rem;
	border-style: none;
	width: 100%;
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

.select_field {
	width: 18.5rem;
}

textarea {
	resize: none;
	display: flex;
	font-family: inherit;
}

.opacity {
	opacity: 0.5;
}
.submit_button {
	width: 50%;
	margin: 3rem 0 0 auto;
}

.invalid .input_card,
.invalid .preview {
	border: 1px solid var(--color-element--primary);
}

.invalid label,
.error_message {
	color: var(--color-element--primary);
}

.image_selected {
	border: 1px dashed var(--color-element--tertiary-dark);
}
.preview {
	width: 10rem;
	height: 10rem;
	position: relative;
	cursor: pointer;
}
.image_preview {
	display: none;
}
.image_upload {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.image_preview {
	width: 100%;
	height: 100%;
}

.image_input {
	display: none;
}

.image_card {
	width: 100%;
	height: 100%;
}

.icon_plus {
	opacity: 0.3;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.icon_cross {
	width: 2rem;
	height: auto;
	position: absolute;
	top: -9%;
	right: -9%;
	z-index: 100;
	cursor: pointer;
}

.flex {
	display: flex;
	flex-direction: column;
}

@media only screen and (max-width: 1920px) {
	form {
		width: 35%;
	}
}

@media only screen and (max-width: 1200px) {
	form {
		width: 50%;
	}
}

@media only screen and (max-width: 1024px) {
	form {
		width: 75%;
	}
}

@media only screen and (max-width: 768px) {
	form {
		width: 100%;
	}
}

@media only screen and (max-width: 480px) {
	form {
		width: 100%;
	}

	section {
		margin: 2rem 0 10rem;
	}

	.submit_button {
		width: 100%;
	}

	.flex {
		flex-direction: row;
		align-items: center;
		align-content: center;
		margin: 3rem 0 1rem;
	}

	h1 {
		margin: 0 auto;
	}
}
</style>
