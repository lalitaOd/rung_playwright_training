function verifyScore(score_val,callback){
    if(score_val >=0 && score_val <=49){
        console.log("Failed");
    }else if(score_val >=50 && score_val <=100){
       console.log("Passed"); 
    }else{
        console.log("Error");
    }
    callback();
}

function scoreMessage(){
    console.log("---That's my test result assignment---")
}

verifyScore(0,scoreMessage)