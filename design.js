var Player1={
    name: "Player 1",
    p1_count :0,
    p1_val : []
};

var Player2={
    name: "Player 2",
    p2_count :0,
    p2_val : []
};

var count = 0;

function playEvenOdd(){
    var p1 = Math.floor(Math.random()*25+1);
    var p2 = Math.floor(Math.random()*25+1);
    Player1.p1_val.push(p1);
    Player2.p2_val.push(p2);
    if(count ==5)
    {
        if(Player1.p1_count == Player2.p2_count)
        {
            document.getElementById("res").textContent = "🥴😕Match Draw😵😕";
        }
        else if(Player1.p1_count > Player2.p2_count)
        {
            document.getElementById("res").textContent = Player1.name+" 💪💥Wins !!!🥳";
        }
        else{
            document.getElementById("res").textContent = Player2.name+"💪💥 Wins !!!🥳";
        }
    }
    else{
        count++;
        if(p1%2==0){
            Player1.p1_count++;
            document.getElementById("c1").textContent = Player1.p1_count;
        }
        if(p2%2==0){
            Player2.p2_count++;
            document.getElementById("c3").textContent = Player2.p2_count;
        }
        updateCircle();
    }
}

function updateCircle(){
    var p1_circle=document.getElementById("Player1").children;
    Player1.p1_val.forEach((run,value)=>{
        if(run%2==0)
        {
           p1_circle[value].style.backgroundColor="greenyellow";
        }
        else
        {
            p1_circle[value].style.backgroundColor="red";
        }
    });
    var p2_circle=document.getElementById("Player2").children;
    Player2.p2_val.forEach((run,value)=>{
        if(run%2==0)
        {
           p2_circle[value].style.backgroundColor="greenyellow";
        }
        else
        {
            p2_circle[value].style.backgroundColor="red";
        }
    });
    }