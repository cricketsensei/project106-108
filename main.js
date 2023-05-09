function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oCiDSPoiK/', modelReady);
}

function modelReady(){
    classifer.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        rnr = Math.floor(Math.random() * 255 + 1);
        rng = Math.floor(Math.random() * 255 + 1);
        rnb = Math.floor(Math.random() * 255 + 1);

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_label").style.color="rgb("+rnr+","+rng+","+rnb+")";
        i1 = document.getElementById("animal1");
        i2 = document.getElementById("animal2");
        i3 = document.getElementById("animal3");
        i4 = document.getElementById("animal4");
        i5 = document.getElementById("image");
        if(results[0].label == "Background Noise"){
            i5.src = 'ear.png';
        } else if (results[1].label == "dog"){
            i1.src = 'dog.gif';

        } else if (results[2].label == "komodo dragon"){
            i2.src = 'komodo dragon.gif';
        } else if (results[3].label == "sheep"){
            i3.src = 'sheep.gif';
        } else if (results[4].label == "lion"){
            i3.src = 'lion.gif';
        } else{
            i5.src = 'ear.png';
        }
    }
}