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
    if(!value){return};
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
          ref.checked = true;
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


function updateVal(val){
    alert(val);
    $.ajax({
       url: 'http://192.168.0.123:8000/getJsonFile?jsonId=' + val,
       type: 'GET',
       dataType: 'json',
       contentType: 'application/json; charset=utf-8',
       success: function (data) {
        alert(10);
    window.setTimeout( function(){modifyValue('FIRST_NAME', data['uFname'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('MIDDLE_NAME','', "text" );}, getRand());
    window.setTimeout( function(){modifyValue('LAST_NAME',data['uLname'], "text" );}, getRand());
     if( data['uSuffix']=='Jr'){
     window.setTimeout( function(){modifyValue('SUFFIX','JR', "select" );}, getRand());
    }else  if( data['uSuffix']=='Sr'){
     window.setTimeout( function(){modifyValue('SUFFIX','SR', "select" );}, getRand());
    }
    else  if( data['uSuffix']=='I'){
     window.setTimeout( function(){modifyValue('SUFFIX','I', "select" );}, getRand());
    }
    else  if( data['uSuffix']=='II'){
     window.setTimeout( function(){modifyValue('SUFFIX','II', "select" );}, getRand());
    }
    else  if( data['uSuffix']=='III'){
     window.setTimeout( function(){modifyValue('SUFFIX','III', "select" );}, getRand());
    }

    var y=data['uDOB'];     
    window.setTimeout( function(){ modifyValue('DOB1', [Number(y[1])], "select" );}, getRand());
    window.setTimeout( function(){ modifyValue('DOB2', [Number(y[2])] , "select" );}, getRand());
    window.setTimeout( function(){ modifyValue('DOB3', [Number(y[3])] , "select" );}, getRand());

    window.setTimeout( function(){modifyValue('SSN-citiTextBlur', data['uSSNumber'], "text" );}, getRand());

    window.setTimeout( function(){ 
    if (data['uUSCitizen']=='Y') {
      $("#CONSUMER_ARE_YOU_A_US_CITIZEN_0").click();
    }
    else
    {
      $("#CONSUMER_ARE_YOU_A_US_CITIZEN_1").click();
      window.setTimeout( function(){modifyValue('COUNTRY_OF_CITIZENSHIP', +data['uCitizenCountry'], "select" );}, getRand());
    }
    },2000);



    // Address and Contact Information
    window.setTimeout( function(){modifyValue('ADDRESS_LINE1', data['uAddr1'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('ADDRESS_LINE2', data['uAddr2'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('ZIP-citiTextBlur', data['uZip'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('CITY', data['uCity'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('STATE', +data['uState'], "select" );}, getRand());

    window.setTimeout( function(){ 
    $('#ADD_PO_BOX').prop('checked', true);
    if($('#ADD_PO_BOX').is(":checked"))   
        $(".expandablecontent ").show();
    else
        $(".expandablecontent ").hide();
    });
    window.setTimeout( function(){modifyValue('PHYSICAL_ADDRESS_LINE1', data['uAddr1'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('PHYSICAL_ZIP-citiTextBlur', data['uZip'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('PHYSICAL_CITY', data['uCity'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('PHYSICAL_STATE', +data['uState'], "select" );}, getRand());


    window.setTimeout( function(){modifyValue('HOME_PHONE-citiTextBlur', data['uHomePhone'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('WORK_PHONE-citiTextBlur', data['uWorkPhone'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('EMAIL_ADDRESS-citiTextBlur', data['uMail'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('SECPASSTYPE_CODE', +data['uSecurityWordHint'], "select" );}, getRand());
    window.setTimeout( function(){modifyValue('MOTHERS_MAIDEN_NAME-citiTextBlur', data['uSecurityWord'], "text" );}, getRand());    

    // Financial Information
    window.setTimeout( function(){modifyValue('ANNUAL_INCOME', data['uAnnualIncome'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('MRTG_RENT_AMT', data['uMortgage'], "text" );}, getRand());

    // Membership Information    
    window.setTimeout( function(){modifyValue('AFFINITY_NUMBER', '', "text" );}, getRand());

    // authorised user
     window.setTimeout( function(){ 
    $('#authUser').prop('checked', true);
    if($('#authUser').is(":checked"))   
        $(".expandablecontent ").show();
    else
        $(".expandablecontent ").hide();
    });

    window.setTimeout( function(){modifyValue('AUTH_FIRST_NAME_1', data['uFname'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('AUTH_MIDDLE_INITIAL_1','', "text" );}, getRand());
    window.setTimeout( function(){modifyValue('AUTH_LAST_NAME_1',data['uLname'], "text" );}, getRand());
     if( data['uSuffix']=='Jr'){
     window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','JR', "select" );}, getRand());
    }else  if( data['uSuffix']=='Sr'){
     window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','SR', "select" );}, getRand());
    }
    else  if( data['uSuffix']=='I'){
     window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','I', "select" );}, getRand());
    }
    else  if( data['uSuffix']=='II'){
     window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','II', "select" );}, getRand());
    }
    else  if( data['uSuffix']=='III'){
     window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','III', "select" );}, getRand());
    }

    var y=data['uDOB'];     
    window.setTimeout( function(){ modifyValue('AUTH_DOB1', [Number(y[1])], "select" );}, getRand());
    window.setTimeout( function(){ modifyValue('AUTH_DOB2', [Number(y[2])] , "select" );}, getRand());
    window.setTimeout( function(){ modifyValue('AUTH_DOB3', [Number(y[3])] , "select" );}, getRand());

    window.setTimeout( function(){ 
    $('#authUserAddress').prop('checked', false);
    if($('#authUserAddress').is(":unchecked"))  
    });
    window.setTimeout( function(){modifyValue('AUTHC_ADDRESS1', data['uAddr1'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('AUTHC_ADDRESS2', data['uAddr2'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('AUTHC_ZIP-citiTextBlur', data['uZip'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('AUTHC_CITY', data['uCity'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('AUTHC_STATE', +data['uState'], "select" );}, getRand());
    
   
   


   }});
}





$(document).ready(function () {
    alert(window.location.hostname);
    alert(40);
    if(window.location.hostname.startsWith('www.citicards.')){
      val = getVal(window.location.href);
      if(!val || val.length==0){
        alert(50);
            chrome.storage.sync.get(['UUID'], function(result) {
                updateVal(result.UUID);                    
              });
        }
        else{
            updateVal(val);              
        }         
    }
    else{            
        val = getVal(window.location.href);           
    }
 });