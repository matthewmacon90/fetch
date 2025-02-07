import Api from "../Api";

class DogApi extends Api {
    static async getAllDogBreeds() {
        try {
            const response = await this.request('dogs/breeds');
            console.log('dog api response', response);
            return response;
        } catch (err) {
            console.error('API Error:', err);
        }
    }
}

export default DogApi;