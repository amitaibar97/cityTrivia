function guessCity(capital, coastal, famous, ancient) {
    let city;
    if(capital==false&& coastal==true && famous==false && ancient==false){
        city= "Zikim";
        
    }
    else if(capital==false&& coastal==true && famous==true && ancient==false){
            city= "Acre";
            
    }
    else if(capital==true && coastal== false && famous==true && ancient==true){
        city= "Jerusalem";
        
    }
    else if(capital== false&& coastal== true && famous==true && ancient==false  ){
        city="Tel Aviv";
       
    }
    else{
        city= "Musmus";
        
    }
    return city;

    }
    
    answer= (guessCity(true, false, true,true))
    console.log(answer)