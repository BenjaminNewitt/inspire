import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
function _drawBackgroundImage() {
  console.log("_drawBackgroundImage");
  let template = "";
  let backgroundImage = store.State.backgroundImage;
  console.log("backgroundImage for _drawBackgroundImage", backgroundImage);
  template = `<div style="background-image: url('${backgroundImage}');" class="fixed-top" id="background-image-css">`;
  document.querySelector("#bg-image").innerHTML += template;
}
export default class ImageController {
  constructor() {
    store.subscribe("backgroundImage", _drawBackgroundImage);
    ImageService.getBackgroundImageAsync();
    console.log("Hello from image-controller");
  }
}
