function verifyScore(score_val){
    if(score_val >=0 && score_val <=49){
        console.log("Failed");
    }else if(score_val >=50 && score_val <=100){
       console.log("Passed"); 
    }else{
        console.log("Error");
    }
}
verifyScore(100.5)