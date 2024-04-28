var request = new XMLHttpRequest();
  
  request.open("GET","https://restcountries.com/v3.1/all");
  request.send();
  request.onload = function(){
   var res = JSON.parse(request.response); 
   for(let i = 0 ; i< res.length ; i++){
    console.log(res);
    console.log(res[i].flags);   


   
   
  }
}