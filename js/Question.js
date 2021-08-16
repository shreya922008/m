
    function ques(){
        fill("green")
        textSize(19)
        
   text("Are u experiencing any of the following symptoms ? ",190,120)

 ques1=createButton("COLD")
 ques1.position(250,130)

 ques2=createButton("COUGH")
 ques2.position(250,170)

 ques3=createButton("Difficulties while breathing")
 ques3.position(250,215)

 ques4=createButton("NONE OF THE FOLLOWING!!")
 ques4.position(250,260)
}


if ( ques4.mousePressed){
  text("AWSOME")


}