//SINGLE PLAYER
//computer starts always

var player,computer;

turn=0;check_flag=1;
board=["",   "","","",  "","","",   "","",""];
copy=["",   "","","",  "","","",   "","",""];

$(document).ready(function(){
    
    $("#X").on("click",function(){
        player="X";computer="O";
        $("#choose").css("display","none");
        $(".5").html(computer);
        board[5]=computer;
        turn=1;
        
    });
    $("#O").on("click",function(){
        player="O";computer="X";
        $("#choose").css("display","none");
        $(".5").html(computer);
        board[5]=computer;
        turn=1;
    });
    
    $("."+1).on("click",function(){
        play(1);      
     });
    $(".2").on("click",function(){
        play(2);
    });
    $(".3").on("click",function(){
        play(3);
    });
    $(".4").on("click",function(){
        play(4);
    });
    $(".5").on("click",function(){
        play(5);
    });
    $(".6").on("click",function(){
        play(6);
    });
    $(".7").on("click",function(){
        play(7);
    });
    $(".8").on("click",function(){
        play(8);
<<<<<<< HEAD
        console.log("asdf"+board);
=======
        console.log("asdf");
>>>>>>> master
    });
    $(".9").on("click",function(){
        play(9);
    });
<<<<<<< HEAD
    $(".restart").on("click",function(){
        restart();
    })
=======
>>>>>>> master
});

play=function(i){
    if(turn==1 && board[i]==""){
        $("."+i).html(player);
        board[i]=player;
        check_winner(player);
        if(check_flag==1)
            comp();
    }
<<<<<<< HEAD
    else{
        console.log(turn + board[i]);   
    }
=======
>>>>>>> master
};

comp=function(){
    toMove=move();
    $("."+toMove).html(computer);
    board[toMove]=computer;
    check_winner(computer);
    turn=1;
};

move=function(stage){
    console.log("move");
    copy=board;
    console.log("c"+copy+"b"+board);
    var index=0;
    var bestScore = -1000;
    for (var i =1;i<=9;i++){
       if(copy[i]==""){             
           copy[i]=computer;
            var score = move_player();
           copy[i]="";console.log(i+" "+score);
           if (score > bestScore){ 
               bestScore = score;
               index=i;
            }
       }
    }
    return index;
};

move_computer=function(){
    check_value=check();
    if(check_value!=-500){
        return check_value;
    }
    var max = -10000;
    for (var i =1;i<=9;i++){
       if(copy[i]==""){
           copy[i]=computer;
           var score = move_player();
           copy[i]="";
           if (score > max) 
                max = score;
       }
    }
    return max;
}
move_player=function(){
    check_value=check();
    if(check_value!=-500)
        return check_value;
    var min = 10000;
    for (var i =1;i<=9;i++){
       if(copy[i]==""){
           copy[i]=player;
           var score = move_computer();
           copy[i]="";
           if(score<min)
                min = score;
       }
    }
    return min-1;
}

check=function(){
    for(var i=1;i<8;i=i+3){
        if(copy[i]==copy[i+1]&&copy[i+1]==copy[i+2]){
            if(copy[i+2]==computer)
                return 20;
            else if(copy[i+2]==player)
                return 0;
        }
    }    
    for(var i=1;i<4;i++){
        if(copy[i]==copy[i+3]&&copy[i+3]==copy[i+6]){
            if(copy[i+6]==computer)
                return 20;
            else if(copy[i+6]==player)
                return 0;
        }
    }
    if(copy[1]==copy[5]&& copy[5]==copy[9]){
        if(copy[9]==computer)
            return 20;
        else if(copy[9]==player)
            return 0;
    }
    if(copy[3]==copy[5]&& copy[5]==copy[7]){
        if(copy[7]==computer)
            return 20;
        else if(copy[7]==player)
            return 0;
    }
    if(copy[1]!=""&&copy[2]!=""&&copy[3]!=""&&copy[4]!=""&&copy[5]!=""&&copy[6]!=""&&copy[7]!=""&&copy[8]!=""&&copy[9]!=""){
        return 10;
    }
    
    return -500;
};

check_winner=function(fora){
    if(fora===computer)
        turn="COMPUTER WON";
    else
        turn="YOU WON";
    
    if(board[1]!=""&&board[2]!=""&&board[3]!=""&&board[4]!=""&&board[5]!=""&&board[6]!=""&&board[7]!=""&&board[8]!=""&&board[9]!=""){
        display_winner("IT'S A TIE");console.log("asdf"+board);
    }
    
    for(var i=1;i<8;i=i+3){
        if(board[i]==board[i+1]&&board[i+1]==board[i+2]&&board[i+2]==fora)
            display_winner(turn);
    }    
    for(var i=1;i<4;i++){
        if(board[i]==board[i+3]&&board[i+3]==board[i+6]&&board[i+6]==fora)
            display_winner(turn);
    }
    if(board[1]==board[5]&& board[5]==board[9]&&board[9]==fora)
        display_winner(turn);
    if(board[3]==board[5]&& board[5]==board[7]&&board[7]==fora)
        display_winner(turn);
};

display_winner=function(tur){
    turn=0;
    check_flag=0;   
    $("#won").css("display","block");                                                                       
<<<<<<< HEAD
    $("#res").html(tur);
};

restart=function(){
    board=["",   "","","",  "",computer,"",   "","",""];
    copy=["",   "","","",  "",computer,"",   "","",""];
    for(var i=1;i<=9;i++)
        $("."+i).html("");
    $(".5").html(computer);
    turn=1;check_flag=1;
    $("#won").css("display","none");
    console.log(board);
}
=======
    $("#res").html(tur);    
    
    
   /* setTimeout(function(){
        board=["",   "","","",  "",computer,"",   "","",""];
        copy=["",   "","","",  "",computer,"",   "","",""];
        for(var i=1;i<=9;i++)
            $("."+i).html("");
        $(".5").html(computer);    
    console.log("asd");
        turn=1;
        $("#won").css("display","none");                                                                       
    },2500);*/
};
>>>>>>> master
