function xp(xPath) {
    var selector = convertXPath(xPath);
    return $(selector);
}
 
function convertXPath(x) {
 
    //parse //*
    x = replace(x, '//\\*', '');
 
    //parse id
    x = replace(x, '\\[@id="([^"]*)"\\]', '#$1');
 
    //parse [1]
    x = replace(x, '\\[1\\]', ':first');
 
    //parse [n]
    x = replace(x, '\\[([0-9]+)\\]', ':eq($1)');
 
    //parse :eq's and lower 1
    var z = x.split(':eq(');
    x = z[0];
    if (z.length > 1) {
        for (var i = 1; i < z.length; i++) {
            var end = z[i].indexOf(')');
            var number = parseInt(z[i].substr(0, end)) - 1;
            x = x + ':eq(' + number + z[i].substr(end);
        }
    }
 
    //parse /
    x = replace(x, '/', ' > ');
    console.log(x);
    return x;
}
 
function replace(txt, r, w) {
 var re = new RegExp(r, "g");
 return txt.replace(re, w);
}




// end xpath code






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
    if(val && val.length>0){
        chrome.storage.sync.set({"UUID": val}, function() {
           
          });
        }
    return val;
    //return "7a88e79b-d4b4-4c5d-97d4-ae4b4eb13488";
 }

 rand = 1000;

 function getRand(){
   rand = rand + Math.floor(Math.random() * (2000 - 1000));
   //alert(rand);
   return rand;
 }


 function modifyValue(field, value, kind) {

      ref = document.getElementById(field);

      if(ref == null){
          ref = document.getElementsByClassName(field);
          if(ref != null){
            ref = ref[0];
          }
      }
      if(ref == null){
           ref = document.getElementsByName(field);
           if(ref != null){
               ref = ref[0];
          }
      }
      if(ref == null){
        //alert("Cant find: " + field);
        return "NA";
      }
      var createEvent = function(name) {
        var event = document.createEvent('Event');
        event.initEvent(name, true, true);
        return event;
      }
      ref.dispatchEvent(createEvent('focus'));
      if(kind === 'radio'){
            ref.checked = true;
      }else if(kind =='text' || kind == 'select'){
           ref.value = value;
      }else if(kind === 'checkbox'){
          ref.checked = value;
      }
      ref.dispatchEvent(createEvent('change'));
      ref.dispatchEvent(createEvent('input'));
      ref.dispatchEvent(createEvent('blur'));
}

function fieldExists(field){

     ref = document.getElementById(field);

      if(ref == null){
          ref = document.getElementsByClassName(field);
          if(ref != null){
            ref = ref[0];
          }
      }
      if(ref == null){
           ref = document.getElementsByName(field);
           if(ref != null){
               ref = ref[0];
          }
      }

      if(ref == null){
        return false;
      }else{
        return true;
      }

}
 $(document).ready(function () {

        alert(window.location.hostname);

        val = getVal(window.location.href);
        if(!val || val.length==0){
            chrome.storage.sync.get(['UUID'], function(result) {
                updateVal(result.UUID);
              });
        }else{
            updateVal(val);
           
        }
        
        if(window.location.href.indexOf('applicantInfo')>=0){

            
            val = getVal(window.location.href);
             
            alert(val);
            $.ajax({
               url: 'http://localhost:8000/getJsonFile?jsonId=' + val,
               type: 'GET',
               dataType: 'json',
               contentType: 'application/json; charset=utf-8',
               success: function (data) {
                console.log(data);
                window.setTimeout( function(){ 
                alert(10);
                window.setTimeout( function(){ modifyValue('nameCapture', data['uFname'] +' '+data['uLname'], "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('firstName', data['uFname'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('lastName', ' '+data['uLname'], "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('middleName', data['uMname'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('suffix', data['suffix'] , "select" );}, 1000);
                window.setTimeout( function(){ modifyValue('birthDate', data['uDOB'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('email', data['uMail'], "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('phoneNumber', data['uMobilePhone'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('employmentStatus', data['uSincome'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('incomeAmount', data['uGincome'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('occupation', data['uOccupation'] +' '+data['uLname'], "text" );}, 1000);

                window.setTimeout( function(){ modifyValue('residenceAddressLine1', data['uAddr1'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('residenceAddressLine2', data['uAddr2'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('residenceZipCode', data['uZip'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('residenceCity', data['uCity'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('residenceState', data['uState'] , "select" );}, 1000);
             

                if(data['uMailAddr']=='Y'){
                    window.setTimeout( function(){ modifyValue('mailingCheckbox', true , "checkbox" );}, 1000);
                    
                }
                else{
                    window.setTimeout( function(){ modifyValue('mailingCheckbox', true , "checkbox" );}, 1000);
                    window.setTimeout( function(){ modifyValue('mailingAddressLine1', data['uMAddr1'] , "text" );}, 1000);
                    window.setTimeout( function(){ modifyValue('mailingAddressLine2', data['uMAddr2'] , "text" );}, 1000);
                    window.setTimeout( function(){ modifyValue('mailingZipCode', data['uMZip'] , "text" );}, 1000);
                    window.setTimeout( function(){ modifyValue('mailingCity', data['uMCity'] , "text" );}, 1000);
                    window.setTimeout( function(){ modifyValue('mailingState', data['uMState'] , "select" );}, 1000);
    
                }
                
                
                
        

                if(data['uRtype']=='Rent'){
                    $('#housingStatus_Rent').attr('checked', true);   
                }else{
                    $('#housingStatus_Own').attr('checked', true);   
                }
                
                if(data['uUSCitizen']=='Y'){
                    $('#citizenshipRadioButton_01').attr('checked', true);   
                }else{
                    $('#citizenshipRadioButton_03').attr('checked', true);   
                }
                        
            }, 2000);

               }});

               
        }else{
            href = $("#OTM_CreditCard_Apply").find(".span8.content-module p").find(".btn.btn-primary").attr('href');
            loc = window.location.href;
            val = getVal(loc);
            if( loc.indexOf("?") > 0  ){
                  href = href + "&clno=" + val;
            }else{
                  href = href + "?clno=" + val;
            }
            alert(href);
            $("#OTM_CreditCard_Apply").find(".span8.content-module p").find(".btn.btn-primary").attr("href", href);
        }
         
 });