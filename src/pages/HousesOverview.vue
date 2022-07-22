<template>
    <houses-search @change-filter="setFilter"></houses-search>
    <houses-list :filter="filter"></houses-list>
</template>

<script>
import HousesSearch from '../components/UI/HousesSearch';
import HousesList from '../components/layout/HousesList.vue';

export default {
    components: {
        HousesSearch,
        HousesList
    },
    data() {
        return {
            filter: undefined,
        }
    },
    methods: {
        setFilter(filter) {
            this.filter = filter;
        }
    }
}
</script>