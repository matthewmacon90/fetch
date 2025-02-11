import axios from "axios";
import Api from "../Api";

class DogApi extends Api {
    static async CarouselDogImages() {
        try {
            const result = await axios.get('https://dog.ceo/api/breeds/image/random/30');
            return result.data.message;
        } catch (err) {
            throw err;
        }
    }

    static async getAllDogBreeds() {
        try {
            return await this.request('dogs/breeds');
        } catch (err) {
            throw err;
        }
    }

    static async searchDogs(data) {
        try {
            const { breeds=null, zipCodes=null, ageMin=null, ageMax=null } = data;
            return await this.request('dogs/search', data, 'get');
        } catch (err) {
            throw err;
        }
    }

    static async searchDogsNext(url, data) {
        try {
            url = url.replace('/', '');
            const { breeds=null, zipCodes=null, ageMin=null, ageMax=null } = data;
            return await this.request(url, data, 'get');
        } catch (err) {
            throw err;
        }
    }

    static async getDogBreed(data) {
        try {
            return await this.request(`dogs/`, data, 'post');
        } catch (err) {
            throw err;
        }
    }
}

export default DogApi;