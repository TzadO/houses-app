class Database {
    constructor() {
        if (localStorage.getItem("houses") == null) localStorage.setItem("houses", JSON.stringify({}))
    }

    createNewHouse = (house) => {
        const houses = this.getAllHouses();
        house.id = self.crypto.randomUUID();
        houses[house.id] = house;
        this.saveHouses(houses);
    }
    editHouse = (house) => {
        const houses = this.getAllHouses();
        houses[house.id] = house;
        this.saveHouses(houses);
    }
    deleteHouse = (id) => {
        const houses = this.getAllHouses();
        const housesArray = Object.entries(houses)
        const housesArrayMinDeleted = housesArray.filter(house => house[0] !== id);
        const newHousesObject = Object.fromEntries(housesArrayMinDeleted);
        this.saveHouses(newHousesObject);
    }
    getHouseByID = (id) => this.getAllHouses()[id]
    getAllHouses = () => JSON.parse(localStorage.getItem("houses"))
    saveHouses = (houses) => localStorage.setItem("houses", JSON.stringify(houses))
    clearAll = () => this.saveHouses({})
}

export default new Database();