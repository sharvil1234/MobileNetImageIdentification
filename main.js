Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 90,

    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function() {
        document.getElementById("result").innerHTML = '<img id="captured_image" class="flower" src="Camera.jpg"/>';

    });
}

console.log('ml5 version: ', ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
    console.log('Model is loaded');
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("object_name").innerHTML += "Object -  " + results[0].label;
        document.getElementById("object_name").innerHTML += "Accuracy -  " + results[0].confidence.toFixed(3);

    }
}