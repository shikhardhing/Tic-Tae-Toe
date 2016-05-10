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
    });
    $(".9").on("click",function(){
        play(9);
    });
});

play=function(i){
    if(turn==1 && board[i]==""){
            $("."+i).html(player);
            board[i]=player;
            check_winner(player,i);
            if(check_flag==1)
                comp();
        }
};

comp=function(){
    board_copy=board;
    toMove=move();
    $("."+toMove).html(computer);
    board[toMove]=computer;
    check_winner(computer,toMove);
    turn=1;
};

move=function(stage){
    //foolish AI
    for(var i=1;i<=9;i++){
        if(board[i]=="")
            return i;
    }    
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

display_winner=function(turn){   
    $("#won").css("display","block");                                                                       
    $("#res").html(turn);
    console.log(turn);
    turn=0  ;
    check_flag=0;
}