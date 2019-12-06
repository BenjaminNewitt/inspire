import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getBackgroundImageAsync() {
    let res = await imgApi.get("");
    console.log("imgApi res", res);
    store.commit("backgroundImage", res.data.url);
    console.log("backgroundImageUrl from store", store.State.backgroundImage);
  }
}

const imageService = new ImageService();
export default imageService;
