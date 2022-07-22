import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import db from './Database.mjs';

const store = createStore({
	plugins: [
		createPersistedState({
			storage: window.sessionStorage,
		}),
	],

	state() {
    const houses = [
      {
        id: "3268",
        image: "/assets/houses/house1.jpg",
        price: 274000,
        bedRooms: 4,
        bathRooms: 2,
        size: 125,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil unde harum deleniti temporibus. Repellat iure doloremque facilis sed labore? Quasi perferendis, vero recusandae impedit neque ab libero nobis. Quo excepturi veniam veritatis accusantium natus. Neque alias praesentium nam perspiciatis corporis?",
        street: "Overtoom",
        houseNumber: "211",
        houseNumberAddition: "",
        city: "Amsterdam",
        postalCode: "1181TY",
        constructionYear: 1960,
        hasGarage: false,
        madeByMe: false,
      },
      {
        id: "3267",
        image: "/assets/houses/house2.jpg",
        price: 333300,
        bedRooms: 2,
        bathRooms: 2,
        size: 214,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil unde harum deleniti temporibus. Repellat iure doloremque facilis sed labore? Quasi perferendis, vero recusandae impedit neque ab libero nobis. Quo excepturi veniam veritatis accusantium natus. Neque alias praesentium nam perspiciatis corporis?",
        street: "Grevelsingel",
        houseNumber: 33,
        houseNumberAddition: "AB",
        city: "Rotterdam",
        postalCode: "2222CD",
        constructionYear: 2020,
        hasGarage: false,
        madeByMe: false,
      },
      {
        id: "3020",
        image: "/assets/houses/house3.jpg",
        price: 350000,
        bedRooms: 1,
        bathRooms: 1,
        size: 33,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil unde harum deleniti temporibus. Repellat iure doloremque facilis sed labore? Quasi perferendis, vero recusandae impedit neque ab libero nobis. Quo excepturi veniam veritatis accusantium natus. Neque alias praesentium nam perspiciatis corporis?",
        street: "Blaak",
        houseNumber: 22,
        houseNumberAddition: "D",
        city: "Rotterdam",
        postalCode: "9805GH",
        constructionYear: 2020,
        hasGarage: false,
        madeByMe: false,
      },
      {
        id: "10",
        image: "/assets/houses/house4.jpg",
        price: 475000,
        bedRooms: 4,
        bathRooms: 1,
        size: 89,
        description:
          "Op een werkelijk fenomenale plek midden in het centrum van Amsterdam ligt dit sfeervolle en lichte dubbele bovenhuis met 3 slaapkamers en een woonoppervlakte van bijna 90 m². Het appartement bevindt zich op eigen grond op de 6e en 7e (bovenste) etages van een traditioneel wijnpakhuis gelegen aan het rustige gedeelte van de Spuistraat.",
        street: "Oud Heinstraat",
        houseNumber: 78,
        houseNumberAddition: "",
        city: "Utrecht",
        postalCode: "1012 TS",
        constructionYear: 2020,
        hasGarage: false,
        madeByMe: false,
      },
      {
        id: "11",
        image: "/assets/houses/house5.jpg",
        price: 500000,
        bedRooms: 3,
        bathRooms: 5,
        size: 201,
        description:
          "De woning is gelegen in een Rijksmonument aan het begin van de Spuistraat net om de hoek bij het oude Kattegat en de Koepelkerk. De ligging van het pand is ideaal. Op loopafstand van het Centraal Station maar ook van o.a. de Kalverstraat en Nieuwendijk met een diversiteit aan winkels. En om de hoek treft u een supermarkt waar u terecht kunt voor de dagelijkse boodschappen.",
        street: "Ruyterlaan",
        houseNumber: 66,
        houseNumberAddition: "",
        city: "Nijmegen",
        postalCode: "1012 TS",
        constructionYear: 2020,
        hasGarage: false,
        madeByMe: false,
      },
      {
        id: "7",
        image: "/assets/houses/house6.jpg",
        price: 645000,
        bedRooms: 3,
        bathRooms: 1,
        size: 95,
        description: "Midden in het centrum van Amsterdam ligt, met uitzicht op het Oosterdok en het Centraal Stationsgebied, dit monumentale appartementencomplex, OP EIGEN GROND!",
        street: "Mandemaker",
        houseNumber: 14,
        houseNumberAddition: "",
        city: "Sittard",
        postalCode: "1012 AE",
        constructionYear: 2020,
        hasGarage: false,
        madeByMe: false,
      },
      {
        id: "6",
        image: "/assets/houses/house7.jpg",
        price: 725000,
        bedRooms: 6,
        bathRooms: 3,
        size: 157,
        description:
          "Op een prachtige locatie in het buitengebied van Amsterdam hebben wij onlangs dit vrijstaande woonhuis in de verkoop gekregen. De woning is gelegen op maar liefst 570 m2 eigen grond en heeft een rondom gelegen prachtig aangelegde tuin met diverse terrassen waarvan een aan het water is gelegen. Genoeg over het buitenleven, je bent vast nieuwsgierig naar wat het binnenshuis voor jou in petto heeft!",
        street: "Vereinder",
        houseNumber: 55,
        houseNumberAddition: "",
        city: "Arnhem",
        postalCode: "1067 TV",
        constructionYear: 2020,
        hasGarage: false,
        madeByMe: false,
      },
      {
        id: "4",
        image: "/assets/houses/house8.jpg",
        price: 795000,
        bedRooms: 3,
        bathRooms: 1,
        size: 153,
        description:
          "Heerlijk licht en groot bovenhuis van 153 m² met eigen opgang. Het karakteristieke pand uit 1886 staat op EIGEN GROND en ligt in de populaire Oosterparkbuurt. De woning ligt op een steenworp afstand van het mooie Oosterpark en de Dappermarkt. Alle denkbare voorzieningen vindt u in de buurt. Zeer goed bereikbaar met zowel de auto als het openbaar vervoer en op loopafstand van het NS station Muiderpoort.",
        street: "Oud Heinstraat",
        houseNumber: 55,
        houseNumberAddition: "",
        city: "Amsterdam",
        postalCode: "1092 CK",
        constructionYear: 2020,
        hasGarage: false,
        madeByMe: false,
      },
      {
        id: "3",
        image: "/assets/houses/house9.jpg",
        price: 969000,
        bedRooms: 3,
        bathRooms: 1,
        size: 153,
        description:
          "Dit bijzondere appartement is gelegen op de bel-etage en in het souterrain van een Rijks monumentaal grachten pand ter hoogte van de 'Negen-straatje'. Deze woning kenmerkt zich door de vele originele details die behouden zijn. Bij de renovatie is met de grootste aandacht zorg gedragen voor het conserveren van de oorspronkelijke stijlelementen. Met name in de monumentale stijlkamer aan de voorzijde van de woning. Terwijl de keuken dan weer modern en state of the art is.",
        street: "Oudelaan",
        houseNumber: 66,
        houseNumberAddition: "e",
        city: "Groningen",
        postalCode: "1016 BV",
        constructionYear: 2020,
        hasGarage: false,
        madeByMe: false,
      },
      {
        id: "8",
        image: "/assets/houses/house11.jpg",
        price: 1175000,
        bedRooms: 4,
        bathRooms: 3,
        size: 185,
        description:
          "Thans mogen we aanbieden, een riante benedenwoning op EIGEN GROND met een wel zeer royale woonkamer! Een parel met vrij uitzicht over het achterliggende Amsterdamse Bos.",
        street: "Velperplein",
        houseNumber: 14,
        houseNumberAddition: "",
        city: "Arnhem",
        postalCode: "1081 JP",
        constructionYear: 2020,
        hasGarage: false,
        madeByMe: false,
      },
      {
        id: "9",
        image: "/assets/houses/house1.jpg",
        price: 1300000,
        bedRooms: 3,
        bathRooms: 1,
        size: 116,
        description:
          "Op de derde en vierde (bovenste) etages van een historisch grachtenpand in het hart van de Jordaan, vindt u deze unieke en zeer ruime designwoning van 116 m2 met open karakter, twee grote slaapkamers en een balkon aan de achterzijde met uitkijk op de Westertoren. De woning kent een bijzonder luxe afwerking en is volledig onder interieur architectuur gerealiseerd in 2016. De woning is per direct bewoonbaar en wordt opgeleverd “as is” (rekeninghoudend met de roerende zakenlijst).",
        street: "dorpsstraat",
        houseNumber: 901,
        houseNumberAddition: "b",
        city: "Dorp",
        postalCode: "1016 TS",
        constructionYear: 2020,
        hasGarage: false,
        madeByMe: false,
      },
      {
        id: "5",
        image: "/assets/houses/house2.jpg",
        price: 1500000,
        bedRooms: 5,
        bathRooms: 2,
        size: 160,
        description:
          "Op een top locatie in Oud-Zuid ligt dit zojuist hoogwaardige gerenoveerde dubbel bovenhuis van 160 m² (NEN-meting) met eigen opgang vanaf de straat en met ruim dakterras en nieuwe fundering.",
        street: "Oud Heinstraat",
        houseNumber: 89,
        houseNumberAddition: "c",
        city: "Amsterdam",
        postalCode: "1071 EV",
        constructionYear: 2020,
        hasGarage: false,
        madeByMe: false,
      },
    ];
    const localStorageHouses = db.getAllHouses();
    for (const key of Object.keys(localStorageHouses)) {
      houses.push(localStorageHouses[key]);
    }

		return {
			houses: houses 
		};
	},

	actions: {
    deleteListing(_, id) {
      db.deleteHouse(id);
    },

    editListing(_, payload) {
      db.editHouse(payload);
    },

    postNewListing(_, payload) {
      db.createNewHouse(payload)
    }
  },

	getters: {
		listHouses(state) {
			return state.houses;
		},
	},
});

export default store;
