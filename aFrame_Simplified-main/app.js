// Use this function to setup 3D models, Images etc you need at the start of your application.
function Setup() {
  console.log(`Starting setup!`);
  
  // Create variables
  let modelCar, materialCar, car;
  
  // Create strings with paths to files
  modelCar = "models/sampleCar/Shelby.obj";
  materialCar = "models/sampleCar/Shelby.mtl";
  
  // Create the 3D model
  car = new VRModel();
  
  // Set the model and material
  car.setModel(modelCar);
  car.setMaterial(materialCar);  
  car.setPosition(0, 0, -5);
  car.setRotation(0, 40, 0);
  
  function ClickedOnCar() {
  console.log(`Someone clicked the car.`);
  }
  car.addEventListener("click", ClickedOnCar);
  
  let modelBucket, materialBucket, bucket;
  
  modelBucket = "models/voxel/Bucket.obj";
  materialBucket = "models/voxel/Bucket.mtl";

  bucket = new VRModel();

  bucket.setModel(modelBucket);
  bucket.setMaterial(materialBucket);  
  bucket.setPosition(3, -2, 3);
  bucket.setScale(0.3, 0.3, 0.3);
  
  let painting, image;
  
  image = "images/sampleImage.jpg";
  
  painting = new VRImage();
  painting.setImage(image);
  painting.setPosition(0, 3, -8);
  painting.setScale(3,3,0)
  
  
  
  description = new VRText;
  description.setText("I am sad toad :(");
  description.setPosition(2.5, 3, -7);
  description.setVisible(false);
  
  function OpenText() {
  description.setVisible(true);
  painting.removeEventListener("click", OpenText);
  painting.addEventListener("click", CloseText);
}

  function CloseText() {
  description.setVisible(false);
  painting.addEventListener("click", OpenText);
  painting.removeEventListener("click", CloseText);
}
  painting.addEventListener("click", OpenText);
  
}



