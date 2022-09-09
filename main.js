status = "";
object  = "";
 function preload()
 {

 }

function setup(){
    canvas = createCanvas(500 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    
}

function start()
{
    Obj_given = document.getElementById("Object_name").value;
    console.log("object given to detect is " +   Obj_given);
    
        objectDetector = ml5.objectDetector('coccossd', modelLoaded);
        document.getElementById('status').innerHTML = "Status : Detecting Objects";
    
}

function modelLoaded() {
    console.log("Model Loaded !!")
    status = true;
}


function draw() {
    image(video,16,16,500,300)
}
