var errors=0;
var cardlist=[
    "black",
    "blue",
    "moon",
    "dark blue",
    "purple",
    "pink",
    "gray",
    "green",
    "yellow",
    "earth"

]
var cardset;
var board=[];
var rows=4;
var columns=5;
var card1selected;
var card2selected;
window.onload=function(){
    shufflecards();
    startgame();
}
function  shufflecards(){
    cardset=cardlist.concat(cardlist);
    console.log(cardset);
    for(let i=0;i<cardset.length;i++){
        let j=Math.floor(Math.random()*cardset.length);
        let tamp=cardset[i];
        cardset[i]=cardset[j];
        cardset[j]=tamp;
    }
    console.log(cardset);
}
function startgame(){
    for(let r=0;r<rows;r++){
        let row=[];
        for(let c=0;c<columns;c++){
            let cardimg=cardset.pop();
            row.push(cardimg);
            let card=document.createElement("img");
            card.id=r.toString()+"-"+c.toString();
            card.src=cardimg+".jpg";
            card.classList.add("card");
            card.addEventListener("click",selectcard);
            document.getElementById("board").append(card);


        }
        board.push(row);
    }
console.log(board);
setTimeout(hidecards,1000);
}
function hidecards(){
    for(let r=0;r<rows;r++){
        for(let c=0;c<columns;c++){
            let card=document.getElementById(r.toString()+"-"+c.toString());
            card.src="qu.jpg";
        }
    }
}
function selectcard(){
    if(this.src.includes("qu")){
        if(!card1selected){
            card1selected=this;
            let coords=card1selected.id.split("-");
            let r=parseInt(coords[0]);
            let c=parseInt(coords[1]);
            card1selected.src=board[r][c]+".jpg";
        }
        else if(!card2selected&& this !=card1selected){
            card2selected=this;
            let coords=card2selected.id.split("-");
            let r=parseInt(coords[0]);
            let c=parseInt(coords[1]);
            card2selected.src=board[r][c]+".jpg";
            setTimeout(update,1000);
        }
    }
}
function update(){
    if(card1selected.src !=card2selected.src){
        card1selected.src="qu.jpg";
        card2selected.src="qu.jpg";
        errors+=1;
        document.getElementById("errors").innerText=errors;

    }
    card1selected=null;
    card2selected=null;
}