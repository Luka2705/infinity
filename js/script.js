window.onload = function() {
    var cicors = document.getElementById("cicors");
    var stone = document.getElementById("stone");
    var paper = document.getElementById("paper");
    var counter_label = document.getElementById("counter");
    var counter = 0;

    document.getElementById("first");
    document.getElementById("second");
    document.getElementById("third");
    document.getElementById("fourth");
    document.getElementById("fifth");

    
    var elements = ["Cicors", "Stone", "Paper"];
    var highscore = [0, 0, 0, 0, 0];

    document.getElementById("first").innerHTML = highscore[0];
    document.getElementById("second").innerHTML = highscore[1];
    document.getElementById("third").innerHTML = highscore[2];
    document.getElementById("fourth").innerHTML = highscore[3];
    document.getElementById("fifth").innerHTML = highscore[4];

    cicors.onclick = function() {
        let random = Math.round(Math.random() * 2)
        document.getElementById('answer').innerHTML = elements[random];
        if (random == 0){
            document.body.style.backgroundColor = "black";
            counter += 0;
            counter_label.innerHTML = "Score : " + counter;
        }else if (random == 1){
            document.body.style.backgroundColor = "red";
            counter_label.innerHTML = "You LOSE";
            for(i = 0; i < highscore.length; i ++){
                if(highscore[i] < counter){
                    highscore.push(counter);
                    highscore.sort(function(a, b){return a-b});
                    highscore.shift();
                    break;
                }
            }
            document.getElementById("first").innerHTML = highscore[4];
            document.getElementById("second").innerHTML = highscore[3];
            document.getElementById("third").innerHTML = highscore[2];
            document.getElementById("fourth").innerHTML = highscore[1];
            document.getElementById("fifth").innerHTML = highscore[0];
            counter = 0;
        }else {
            document.body.style.backgroundColor = "green";
            counter += 1;
            counter_label.innerHTML = "Score : " + counter;
        }
    }

    stone.onclick = function() {
        let random = Math.round(Math.random() * 2)
        document.getElementById('answer').style.display = "block";
        document.getElementById('answer').innerHTML = elements[random];
        if (random == 0){
            document.body.style.backgroundColor = "green";
            counter += 1;
            counter_label.innerHTML = "Score : " + counter;
        }else if (random == 1){
            document.body.style.backgroundColor = "black";
            counter += 0;
            counter_label.innerHTML = "Score : " + counter;
        }else {
            document.body.style.backgroundColor = "red";
            counter_label.innerHTML = "You LOSE";
            highscore[0] = counter;
            counter = 0;
        }
    }

    paper.onclick = function() {
        let random = Math.round(Math.random() * 2)
        document.getElementById('answer').style.display = "block";
        document.getElementById('answer').innerHTML = elements[random];
        if (random == 0){
            document.body.style.backgroundColor = "red";
            counter_label.innerHTML = "You LOSE";
            highscore[0] = counter;
            counter = 0;
        }else if (random == 1){
            document.body.style.backgroundColor = "green";
            counter += 1;
            counter_label.innerHTML = "Score : " + counter;
        }else {
            document.body.style.backgroundColor = "black";
            counter += 0;
            counter_label.innerHTML = "Score : " + counter;
        }
    }
}