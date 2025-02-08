import Api from "../Api";

class DogApi extends Api {
    static async getAllDogBreeds() {
        try {
            return await this.request('dogs/breeds');
        } catch (err) {
            console.error('API Error:', err);
            throw err;
        }
    }

    static async searchDogs(data) {
        try {
            console.log('data', data);
            const { breeds=null, zipCodes=null, ageMin=null, ageMax=null } = data;
            return await this.request('dogs/search', data, 'get');
        } catch (err) {
            console.error('API Error:', err);
            throw err;
        }
    }

    static async getDogBreed(data) {
        try {
            return await this.request(`dogs/`, data, 'post');
        } catch (err) {
            console.error('API Error:', err);
            throw err;
        }
    }
}

export default DogApi;