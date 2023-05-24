import axios from 'axios'

const instance = axios.create({
    baseURL: "http://127.0.0.1:9000/",
})

export const itemsAPI = {
    getItem(id) {
        return instance.get(`item/${id}`)
    },
    getItems(tags, typeOfSort = "default") {
        return instance.get(`items/${tags}/${typeOfSort}`)
    },
    // chooseSortType(tags, typeOfSort) {
    //     return instance.get(`items/${tags}#${typeOfSort}`)
    // }
}  