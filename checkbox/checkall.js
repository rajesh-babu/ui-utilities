var inputArr = document.getElementsByTagName("input");
for(var i=0;i<inputArr.length;i++){
  if(inputArr[i].value.contains("TC_PDF")){
    inputArr[i].checked=true;
  }
} 
