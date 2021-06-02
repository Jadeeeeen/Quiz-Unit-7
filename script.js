let count = 0;


$("button").click(function(){
    let casOrSer = $(".Two").val();
    let peopleLiveWith = $(".One").val();
    count = count + 1;
    $(".taken").text("You have taken the quiz: " + count +" times");


if(peopleLiveWith >= 4 && casOrSer === "casual") {
    $(".answer").append("<p> You live with "+ peopleLiveWith +" people and you are more "+ casOrSer +". You are: Brooklyn </p> <img src=https://i.pinimg.com/originals/3d/83/05/3d8305dda26df9988e39afd3b51f3e9b.gif>"); 
   
    
} else if(peopleLiveWith >= 4 && casOrSer === "serious") {
    $(".answer").append("<p> You live with "+ peopleLiveWith +" people and you are more "+ casOrSer +". You are: Manhattan </p> <img src=https://i.pinimg.com/originals/08/87/87/0887872d6de244c0bd0e24d64f5852e6.gif> "); 
     
}  else if(peopleLiveWith < 4 && casOrSer === "serious") {
    $(".answer").append("<p> You live with "+ peopleLiveWith +" people and you are more "+ casOrSer +". You are: Bronx </p> <img src=https://i.icanvas.com/MCP74?d=3&sh=h&s=xl&p=1&bg=g&t=1611597601> "); 
} else if(peopleLiveWith < 4 && casOrSer === "casual") {
    $(".answer").append("<p> You live with "+ peopleLiveWith +" people and you are more "+ casOrSer +". You are: Queens </p> <img src=https://i.pinimg.com/originals/43/37/41/4337412cf49687533c8d6d80d85ecbb1.jpg>"); 
}
   
});