//SINGLE PLAYER
//FOOLISH AI
//computer starts always

var player,computer;

turn=0;check_flag=1;
board=["faltu",   "","","",  "","","",   "","",""];
board_copy=["faltu",   "","","",  "","","",   "","",""];

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
    
    $(".1").on("click",function(){
        
        console.log(board);
        if(turn==1 && board[1]==""){
            $(".1").html(player);
            board[1]=player;
            check(player,1);
            if(check_flag==1)
                comp();
        }       
     });
    $(".2").on("click",function(){
        if(turn==1 && board[2]==""){
            $(".2").html(player);
            board[2]=player;
            check(player,2);
            if(check_flag==1)
                comp();
        }
    });
    $(".3").on("click",function(){
        if(turn==1 && board[3]==""){
            $(".3").html(player);
            board[3]=player;
            check(player,3);
            if(check_flag==1)
                comp();
        }
    });
    $(".4").on("click",function(){
        if(turn==1 && board[4]==""){
            $(".4").html(player);
            board[4]=player;
            check(player,4);
            if(check_flag==1)
                comp();
        }
    });
    $(".5").on("click",function(){
        if(turn==1 && board[5]==""){
            $(".5").html(player);
            board[5]=player;
            check(player,5);
            if(check_flag==1)
                comp();
        }
    });
    $(".6").on("click",function(){
        if(turn==1 && board[6]==""){
            $(".6").html(player);
            board[6]=player;
            check(player,6);
            if(check_flag==1)
                comp();
        }
    });
    $(".7").on("click",function(){
        if(turn==1 && board[7]==""){
            $(".7").html(player);
            board[7]=player;
            check(player,7);
            if(check_flag==1)
                comp();
        }
    });
    $(".8").on("click",function(){
        if(turn==1 && board[8]==""){
            $(".8").html(player);
            board[8]=player;
            check(player,8);
            if(check_flag==1)
                comp();
        }
    });
    $(".9").on("click",function(){
        if(turn==1 && board[9]==""){
            $(".9").html(player);
            board[9]=player;
            check(player,9);
            if(check_flag==1)
                comp();
        }
    });
});

comp=function(){
    board_copy=board;
    switch(move()) {
        case 1: $(".1").html(computer);
                board[1]=computer;
                check(computer,1);
                break;
        case 2: $(".2").html(computer);
                board[2]=computer;
                check(computer,2);
                break;
        case 3: $(".3").html(computer);
                board[3]=computer;
                check(computer,3);
                break;
        case 4: $(".4").html(computer);
                board[4]=computer;
                check(computer,4);
                break;
        case 5: $(".5").html(computer);
                board[5]=computer;
                check(computer,5);
                break;
        case 6: $(".6").html(computer);
                board[6]=computer;
                check(computer,6);
                break;
        case 7: $(".7").html(computer);
                board[7]=computer;
                check(computer,7);
                break;
        case 8: $(".8").html(computer);
                board[8]=computer;
                check(computer,8);
                break;
        case 9: $(".9").html(computer);
                board[9]=computer;
                check(computer,9);
                break;
        
    }
    turn=1;
};

move=function(stage){
    //AI
    for(var i=0;i<9;i++){
        if(board[i]=="")
            return i;
    }
    
};

check=function(fora){
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
        display_winnercomputer;
    if(board[3]==board[5]&& board[5]==board[7]&&board[7]==fora)
        display_winner(turn);
};

display_winner=function(turn){   
    $("#won").css("display","block");                                                                       
    $("#res").html(turn);
    console.log(turn);
    turn=0  ;
    check_flag=0;
}