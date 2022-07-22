<template>
	<div>
		<span @click="edit" title="edit"><img class="ignore" src="/assets/ic_edit@3x.png" alt="edit" /></span>
		<span @click="toggleModal" title="delete"><img class="ignore" src="/assets/ic_delete@3x.png" alt="delete" /></span>
	</div>
	<base-dialog v-if="modalOpen">
		<template #header>
			<h2>Delete listing</h2>
		</template>
		<template #default>
			<p>Are you sure you want to delete this listing?</p>
			<p>This action cannot be undone.</p>
		</template>
		<template #actions>
			<base-card>
				<div class="button">
					<base-button @click="confirmRemove" class="default">Yes, delete</base-button>
				</div>
			</base-card>
			<base-card>
				<div class="button">
					<base-button @click="toggleModal" class="dark">Go Back</base-button>
				</div>
			</base-card>
		</template>
	</base-dialog>
</template>

<script>
import BaseDialog from "./BaseDialog.vue";

export default {
	components: {
		BaseDialog,
	},
	props: {
		id: {
			required: true,
		},
		details: {
			required: false,
		},
	},
	data() {
		return {
			modalOpen: false,
		};
	},
	methods: {
		edit() {
			this.$router.push("/houses/editlisting/" + this.id);
		},
		toggleModal() {
			const body = document.querySelector("body");
			this.modalOpen = !this.modalOpen;
			if (this.modalOpen) {
				body.classList.add("modal-open");
			} else {
				body.classList.remove("modal-open");
			}
		},

		confirmRemove() {
			this.$store.dispatch("deleteListing", this.id);
			if (this.details) {
				this.$router.push("/houses");
			} else {
				location.reload();
			}
		},
	},
};
</script>

<style scoped>
img {
	width: 2.2rem;
	height: 2.2rem;
}

span {
	display: flex;
	cursor: pointer;
}

div {
	width: fit-content;
	height: fit-content;
	margin-left: auto;
	display: flex;
	gap: 2rem;
}

h2 {
	margin: 3rem 0;
}

p:last-of-type {
	margin-bottom: 4rem;
}
.button {
	width: 35rem;
	text-transform: uppercase;
}

@media only screen and (max-width: 768px) {
	img {
		width: 1.9rem;
		height: 1.9rem;
	}
}

@media only screen and (max-width: 480px) {
	img {
		width: 1.5rem;
		height: 1.5rem;
	}
}
</style>
