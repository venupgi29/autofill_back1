

function hello() {
    var serverUrl=document.getElementById("server").value;
    var uniqueId=document.getElementById("uniqueId").value;
    
     
    chrome.storage.sync.set({"SERVER_URL": serverUrl}, function() {
       
    });
    chrome.storage.sync.set({"UUID": uniqueId}, function() {
       
    });
}
function test(){
  var serverUrl=document.getElementById("server").value;
  var uniqueId=document.getElementById("uniqueId").value;

  $.ajax({
    
    url: serverUrl+'/getJsonFile?jsonId=' + uniqueId,
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json; charset=utf-8',
    success: function (data) {
      $("#details").html("valid");
    
    },error: function(jqXHR, textStatus, errorThrown) {
      $("#details").html("Error: ",textStatus );
    }
  
});
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('Test').addEventListener('click', test);
document.getElementById('submitd').addEventListener('click', hello);
  chrome.storage.sync.get(['SERVER_URL'], function(result) {
      if(result.SERVER_URL){
      //  document.getElementById("server").value=result.SERVER_URL;
        $("#server").val(result.SERVER_URL);
      }else{
       
      }
  });
  chrome.storage.sync.get(['UUID'], function(result) {
    if(result.UUID){
      //document.getElementById("uniqueId").value=result.UUID;
      $("#uniqueId").val(result.UUID);
    }else{
       
    }
});
});