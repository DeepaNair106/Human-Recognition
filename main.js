Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach(camera);
    
    function take_snapshot(){
    
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src= '+data_uri+'>';
    
    })
    
    }
    
    console.log("ml5 version" , ml5.version);
    
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/15cBvLag7/", modelLoded);
    
    function modelLoded(){
    
    console.log("Model loaded");
    
    }

    function check(){

        img = document.getElementById("captured_image");
        classifier.classify(img , getResult);
        
        }
        
        function getResult(error , result){
        
        if (error){
            console.error(error);
        }
        else{
            console.log(result);
            document.getElementById("object_name").innerHTML = result[0].label;
            percentage =  result[0].confidence.toFixed(2) *100;
            document.getElementById("object_accuracy").innerHTML = percentage +"%";
        }
        
        }