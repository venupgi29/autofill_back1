function getVal(loc){
    val = "";
    if(loc != "undefined" || loc != null && loc != ''){
         var index = loc.indexOf("?");
         var splitted = loc.substr(index+1).split('&');
         var paramObj = [];
         for(var i=0;i<splitted.length;i++){
             var params = splitted[i].split('=');
             var key = params[0];
             var value = params[1];
             if(params[0] == "clno"){
                val = params[1];
                break;
             }
         }
    }
}
$(document).ready(function () {
    alert("In Navy Feed");
   val = getVal(window.location.href);
  if( $("#field-37").length){
      alert(23434);
  }
  console.log(chrome);
  chrome.runtime.onMessage.addListener(
    function(request, msg, sendResponse) {
      console.log(msg);
      console.log(request);
      //URL changed
      var  url = getVal(window.location.href);
      var hash = location.hash.substr(1);
      console.log(hash);

      if('/step/applicant-personal-info' === hash){
          alert('personal');
          window.setTimeout(function(){
  
              $('#field-42').val( 'asdasdasd');
              $('#field-43').val( 'asdasdasd');
              $('#field-44').val( 'asdasdasd');
              $('#field-45').val( 'asdasdasd');

               
            
             alert(1);
        }, 2000);
    

      }
    });
  

})
