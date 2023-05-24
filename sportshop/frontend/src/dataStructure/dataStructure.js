export const item = {
    id: 26367,
    name: 'Nike Air Force',
    produser: 'Nike',
    price: 5500,
    sizes: ['41','42','44'],
    composition: ['cotton', 'plastic'],
    discription: 'Внатуре хорошие кроссовки, подойдут для ходьюы по болоту',
    // info: {
    //     'parametr1':'discription',
    //     'parametr2':'discription',
    //     'parametr3':'discription'
    // },
    tags: ['унисекс', 'кроссовки'],
    pictures: ['https://krostore.ru/images/product/l/3371-nike-air-force-1-mid-007-e73144.jpg', 'https://mtuci.ru/nike-air-force'],
    rating: 3.5,
    reviews: [
        {
            rating: 2,
            name: 'Татьяна',
            reviews: 'кросы говно'
        },
        {
            rating: 5,
            name: 'Елена',
            reviews: 'Пушки'
        }
    ]
}




export const items = [
    {
        id: 52525,
        name: 'Nike Air Force',
        price: 5500,
        produser: 'Nike',
        picture: 'https://restokk.ru/images/catalog/24317/krossovki-muzhskie-nike-air-force-1-low-panda-black-white-3.jpg'
    },
    {
        id: 52525,
        name: 'Nike Air Force',
        price: 5500,
        produser: 'Nike',
        picture: 'https://restokk.ru/images/catalog/24317/krossovki-muzhskie-nike-air-force-1-low-panda-black-white-3.jpg'
    },
    {
        id: 52525,
        name: 'Nike Air Force',
        price: 5500,
        produser: 'Nike',
        picture: 'https://restokk.ru/images/catalog/24317/krossovki-muzhskie-nike-air-force-1-low-panda-black-white-3.jpg'
    }
]



export const pathOfItem='sportshop.ru/item/{id}'
export const pathOfItems='sportshop.ru/items/?{firstTag}?{secondTag}?...'




export const pathsStructure = {
    SportShop: {
        cloths: {
            tshorts: {},
            protection: {}
        },
        food: {
            bcaa: {},           //пока просто наброски
            creatine: {},       //есть мысль сделать всю систему на основе 'тегов' (+гибкость)
            aminoAcids: {},
            other: {}
        },
        shoes: {
            sneakers: {},
            boots: {}
        },
        sports: {}
    }
}