const canvas = document.querySelector("#canvas");
const downloadBtn = document.querySelector("#download-btn");
const uploadFile = document.querySelector("#upload-file");
const revertBtn = document.querySelector("#revert-btn");
const ctx = canvas.getContext("2d");
import filterEffect from "./filterEffect";
import style from "./style.css";

let img = new Image();
let fileName = "";

//Upload file image.
uploadFile.addEventListener("change", () => {
  //Grab file
  const file = document.querySelector("#upload-file").files[0];
  //Initialize fileReader
  const reader = new FileReader();
  if (file) {
    //Set file name
    fileName = file.name;
    //read data as url
    reader.readAsDataURL(file);
  }
  //Add image to canvas
  reader.addEventListener(
    "load",
    () => {
      //Create image
      img = new Image();
      //Set source
      img.src = reader.result;
      //When image loads, add to canvas
      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.removeAttribute("data-caman-id");
      };
    },
    false
  );
});

//Add Filters and Effects
document.addEventListener("click", e => {
  filterEffect(e, img);
});

//Remove filters
revertBtn.addEventListener("click", e => {
  Caman("#canvas", img, function() {
    this.revert();
  });
});

//Download Eventhandler
downloadBtn.addEventListener("click", e => {
  //Get file extension
  const fileExtension = fileName.slice(-4);
  //Initialize new filename
  let newFileName;
  //Check image type
  if (fileExtension === ".jpg" || fileExtension === ".png") {
    newFileName = fileName.substring(0, fileName.length - 4) + "-edited.jpg";
  }
  //Call download
  download(canvas, newFileName);
});

//Download function
function download(canvas, filename) {
  //Initialize event
  let e;
  //Create link
  const link = document.createElement("a");
  //Set props
  link.download = filename;
  link.href = canvas.toDataURL("image/jpeg", 0.8);
  //New Mouse event
  e = new MouseEvent("click");
  //Dispatch event
  link.dispatchEvent(e);
}
