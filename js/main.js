//SINGLE PLAYER
//FOOLISH AI
//ONLY "+"

turn=0;check_flag=1;

$(document).ready(function(){
    comp();
    $(".1").on("click",function(){
        if(turn==1 && $(".1").html()==""){
            $(".1").html("+");
            check("+",1);
            if(check_flag==1){console.log("asdfg");
                comp();}
        }       
     });
    $(".2").on("click",function(){
        if(turn==1 && $(".2").html()==""){
            $(".2").html("+");
            check("+",2);
            if(check_flag==1)
                comp();
        }
    });
    $(".3").on("click",function(){
        if(turn==1 && $(".3").html()==""){
            $(".3").html("+"); 
            check("+",3);
            if(check_flag==1)
                comp();
        }
    });
    $(".4").on("click",function(){
        if(turn==1 && $(".4").html()==""){
            $(".4").html("+"); 
            check("+",4);
            if(check_flag==1)
                comp();
        }
    });
    $(".5").on("click",function(){
        if(turn==1 && $(".5").html()==""){
            $(".5").html("+"); 
            check("+",5);
            if(check_flag==1)
                comp();
        }
    });
    $(".6").on("click",function(){
        if(turn==1 && $(".6").html()==""){
            $(".6").html("+");
            check("+",6);
            if(check_flag==1)
                comp();
        }
    });
    $(".7").on("click",function(){
        if(turn==1 && $(".7").html()==""){
            $(".7").html("+");
            check("+",7);
            if(check_flag==1)
                comp();
        }
    });
    $(".8").on("click",function(){
        if(turn==1 && $(".8").html()==""){
            $(".8").html("+");
            check("+",8);
            if(check_flag==1)
                comp();
        }
    });
    $(".9").on("click",function(){
        if(turn==1 && $(".9").html()==""){
            $(".9").html("+");
            check("+",9);
            if(check_flag==1)
                comp();
        }
    });
});
comp=function(){
    if($(".5").html()==""){
        $(".5").html("O");
        check("O",5);
    }
    else if($(".1").html()==""){
        $(".1").html("O");
        check("O",1);
    }    
    else if($(".2").html()==""){
        $(".2").html("O");
        check("O",2);
    }    
    else if($(".3").html()==""){
        $(".3").html("O");
        check("O",3);
    }    
    else if($(".4").html()==""){
        $(".4").html("O");
        check("O",4);
    }        
    else if($(".6").html()==""){
        $(".6").html("O");
        check("O",6);
    }    
    else if($(".7").html()==""){
        $(".7").html("O");
        check("O",7);
    }
    else if($(".8").html()==""){
        $(".8").html("O");
        check("O",8);
    }    
    else if($(".9").html()==""){
        $(".9").html("O");
        check("O",9);
    }
    turn=1;
};


check=function(fora,bl){
    var val1=$(".1").html();
    var val2=$(".2").html();
    var val3=$(".3").html();
    var val4=$(".4").html();
    var val5=$(".5").html();
    var val6=$(".6").html();
    var val7=$(".7").html();
    var val8=$(".8").html();
    var val9=$(".9").html();
    
    if(fora==='O')
        turn="COMPUTER WON";
    else
        turn="YOU WON";
    
    if(val1!=""&&val2!=""&&val3!=""&&val4!=""&&val5!=""&&val6!=""&&val7!=""&&val8!=""&&val9!=""){
        display_winner("IT'S A TIE");
    }
    
    switch(bl) {
    case 1:
            if((val1==val2 && val2==val3)||(val1==val4&& val4==val7)||(val1==val5&& val5==val9)){
                display_winner(turn);            //draw line
            }
            break;
    case 2: if((val1==val2 && val2==val3)||(val2==val5 && val5==val8)){
                display_winner(turn);  
            }
            break;
    case 3: if((val1==val2 && val2==val3)||(val3==val6&& val6==val9)||(val3==val5&& val5==val7)){
                display_winner(turn);  
            }
            break;
    case 4: if((val4==val5 && val5==val6)||(val1==val4&& val4==val7)){
                display_winner(turn);  
            }
            break;
    case 5: if((val4==val5 && val5==val6)||(val2==val5&& val5==val8)||(val1==val5&& val5==val9)||(val3==val5&& val5==val7)){
                display_winner(turn);  
            }
            break;
    case 6: if((val4==val5 && val5==val6)||(val3==val6&& val6==val9)){
                display_winner(turn);  
            }
            break;
    case 7: if((val7==val8 && val8==val9)||(val1==val4&& val4==val7)||(val3==val5&& val5==val7)){
                display_winner(turn);  
            }
            break;
    case 8: if((val7==val8 && val8==val9)||(val2==val5&& val5==val8)){
                display_winner(turn);  
            }
            break;
    case 9: if((val7==val8 && val8==val9)||(val3==val6&& val6==val9)||(val1==val5&& val5==val9)){
               display_winner(turn);  
            }
            break;
    }
    
    
};

display_winner=function(turn){
    $("#res").html(turn);
    $("#won").css("display","block");
    turn=0  ;
    check_flag=0;
}