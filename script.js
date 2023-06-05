var data1={image : "photo1.jpeg",name : "DECHU VARUN",designation : "Student"};
var data2={image : "photo4.jpeg",name : "VARUN",designation : "Software Developer"};
var isdata1 =true;
var dispalydata;
var changingpic=function(){
   if(isdata1)
    {
        dispalydata=data2;
        isdata1=false;
    }
    else{
        dispalydata=data1;
        isdata1=true;
    }
    document.getElementById("title").src=displaydata.image;
}
