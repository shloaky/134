objectDetector = "";
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    objectDetector = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    Status = true;
    objectDetector.detect(video,gotresults);

}

function gotresults(error,results){
if (error){
    console.log(error);
}
console.log(results);
object = results;
}

img = "";
object = [];
Status = "";



function draw(){
    image(video,0,0,640,420);
    if (Status != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video,gotresults);
        for(var i = 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "status : Object Detected";
            document.getElementById("num_of_obj").innerHTML = "number of objects detected are"+objects.length;
            fill(r,g,b);
            percent = floor(object[i].confidence*100);
            text(object[i].label+""+percent+"%",object[i].x+13,object[i].y+15);
            noFill();
            stroke(r,b,g);
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
}
