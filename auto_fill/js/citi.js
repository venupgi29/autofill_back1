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
var createEvent = function(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
  }
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
    if(!value){ return ;}
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
function updateRadioButton(elementId){
    var  ref=document.getElementById(elementId)
    ref.dispatchEvent(createEvent('focus'));
    $("#"+elementId).attr('checked', true);
    ref.dispatchEvent(createEvent('click'));
    ref.dispatchEvent(createEvent('change'));
	ref.dispatchEvent(createEvent('blur'));    
}
function updateVal(val){
    chrome.storage.sync.get(['SERVER_URL'], function(result) {
        if(result.SERVER_URL){
            $.ajax({
               url: result.SERVER_URL+'/getJsonFile?jsonId=' + val,
               type: 'GET',
               dataType: 'json',
               contentType: 'application/json; charset=utf-8',
               success: function (data) {
            // alert(4);
            if(window.location.href.endsWith('t')){  
            alert(9);
            window.setTimeout( function(){modifyValue('FIRST_NAME', data['uFname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('MIDDLE_NAME',data['uMname'], "text" );}, getRand());
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
            }else  if( data['uSuffix']=='IV'){
              window.setTimeout( function(){modifyValue('SUFFIX','IV', "select" );}, getRand());
            }
            // here
            var x=data['uDOB'].split("/");
            const monthNames = ["","01", "02", "03", "04", "05", "06",
                "07", "08", "09", "10", "11", "12"
            ];     
            window.setTimeout( function(){ modifyValue('DOB1', monthNames[Number(x[0])] , "select" );}, 1000);
            window.setTimeout( function(){ modifyValue('DOB2', x[1], "select" );}, 1000);
            window.setTimeout( function(){ modifyValue('DOB3', x[2] , "select" );}, 1000);alert(11111);
          //  // console.log(y[2]);
          //   //console.log("v");
          //   window.setTimeout( function(){ //modifyValue('DOB3', y[2]+'' , "select" );
          //   $("#DOB3").val(''+ y[2]);$("#DOB3").blur()
          //   //$("#DOB3 option[value='"+y[2]+"']").attr('selected',true);
          
          // }, 5000); alert(123456);
            window.setTimeout( function(){modifyValue('SSN-citiTextBlur', data['uSSNumber'], "text" );}, getRand());
            if(data['uResidentType']=='Citizen'){
              $("#CONSUMER_ARE_YOU_A_US_CITIZEN_0").click();
            }
            else if(data['uResidentType']=='NonResident'){
              $("#CONSUMER_ARE_YOU_A_US_CITIZEN_1").click();

              var xhr = new XMLHttpRequest();
              xhr.open('GET', chrome.runtime.getURL('js/countries.json'));
              xhr.onload = function() {
                  if (xhr.status === 200) {
                     
                      var jsonTxt= xhr.responseText;
                      var json=JSON.parse(jsonTxt);
                      json.forEach(element => {

                          if(element.code==data['uCountryOfResidence'].toUpperCase()){
                            
                            window.setTimeout( function(){ modifyValue('COUNTRY_OF_CITIZENSHIP', element.citycode, "select" );;}, 1000);
                           
                          }
                      });
                  }
                  else {
                     // alert('Request failed.  Returned status of ' + xhr.status);
                  }
              };
              xhr.send();


              
            }
            else if(data['uResidentType']=='Resident'){
              $("#CONSUMER_ARE_YOU_A_US_CITIZEN_1").click();
             
              var xhr = new XMLHttpRequest();
              xhr.open('GET', chrome.runtime.getURL('js/countries.json'));
              xhr.onload = function() {
                  if (xhr.status === 200) {
                     
                      var jsonTxt= xhr.responseText;
                      var json=JSON.parse(jsonTxt);
                      json.forEach(element => {
                          if(element.code==data['uCountryOfResidence'].toUpperCase()){
                             
                            window.setTimeout( function(){ modifyValue('COUNTRY_OF_CITIZENSHIP', element.citycode, "select" );;}, 1000);
                            
                           
                          }
                      });
                  }
                  else {
                     // alert('Request failed.  Returned status of ' + xhr.status);
                  }
              };
              xhr.send();
             
            }
            // Address and Contact Information
            window.setTimeout( function(){modifyValue('ADDRESS_LINE1', data['uAddr1'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('ADDRESS_LINE2', data['uAddr2'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('ZIP-citiTextBlur', data['uZip'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('CITY', data['uCity'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('STATE', data['uState'].toUpperCase(), "select" );}, getRand());

            if(data['uPOBox']=='Y'){
            $("#ADD_PO_BOX").click();
              window.setTimeout( function(){modifyValue('PHYSICAL_ADDRESS_LINE1', data['uPOB'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('PHYSICAL_ZIP-citiTextBlur', data['uPOZip'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('PHYSICAL_CITY', data['uPOCity'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('PHYSICAL_STATE', data['uPOState'].toUpperCase(), "select" );}, getRand());
             }
            else if(data['uPOBox']=='N'){ return }

            
            if(data['uPreferredPhone']=='Home'){
            window.setTimeout( function(){modifyValue('HOME_PHONE-citiTextBlur',data['uHomePhone'], "text" );                
            }, getRand());                
            }
            else if(data['uPreferredPhone']=='Mobile'){
                window.setTimeout( function(){modifyValue('HOME_PHONE-citiTextBlur',data['uMobilePhone'], "text" );                    
            }, getRand()); 
            }
             else if(data['uPreferredPhone']=='Work'){
                window.setTimeout( function(){modifyValue('HOME_PHONE-citiTextBlur',data['uWorkPhone'], "text" );                    
            }, getRand()); 
            }

            if (data['uPreferredPhone']=='Work') {
                window.setTimeout( function(){modifyValue('WORK_PHONE-citiTextBlur',data['uWorkPhone'], "text" );                    
            }, getRand());                
            }
            if(data['uPreferredPhone']=='Mobile'){
            $("#CELL_PHONE").click();
            }
            window.setTimeout( function(){modifyValue('EMAIL_ADDRESS-citiTextBlur', data['uMail'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('SECPASSTYPE_CODE', data['uSecurityWordHint'], "select" );}, getRand());
            window.setTimeout( function(){modifyValue('MOTHERS_MAIDEN_NAME-citiTextBlur', data['uSecurityWord'], "text" );}, getRand());    
            // Financial Information
            window.setTimeout( function(){modifyValue('ANNUAL_INCOME', data['uGincome'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('MRTG_RENT_AMT', data['uMortgage'], "text" );}, getRand());
            if(data['uChecking']=='Y'){
              $("#CHECKING_ACCOUNT").click();
            }
            if(data['uSavings']=='Y'){
              $("#SAVING_ACCOUNT").click();
            }
            if(data['uMonMarket']=='Y'){
              $("#MONEY_MARKET").click();
            }


            // $("#authUser").click();

            if(data['uAuthorised']=='Y'){
              $("#authUser").click();
              window.setTimeout( function(){modifyValue('AUTH_FIRST_NAME_1', data['uAFname'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('AUTH_MIDDLE_INITIAL_1',data['uAMname'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('AUTH_LAST_NAME_1',data['uALname'], "text" );}, getRand());
              if( data['uASuffix']=='Jr'){
               window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','JR', "select" );}, getRand());
              }else if( data['uASuffix']=='Sr'){
               window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','SR', "select" );}, getRand());
              }
              else if( data['uASuffix']=='I'){
               window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','I', "select" );}, getRand());
              }
              else if( data['uASuffix']=='II'){
               window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','II', "select" );}, getRand());
              }
              else if( data['uASuffix']=='III'){
               window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','III', "select" );}, getRand());
              }else if( data['uASuffix']=='IV'){
                window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','IV', "select" );}, getRand());
              }
              // here
              var y=data['uADOB'].split("/");
              const monthNames = ["","01", "02", "03", "04", "05", "06",
                  "07", "08", "09", "10", "11", "12"
              ];     
              window.setTimeout( function(){ modifyValue('AUTH_DOB1', monthNames[Number(y[0])] , "select" );}, 1000);
              window.setTimeout( function(){ modifyValue('AUTH_DOB2', y[1], "select" );}, 1000);
              window.setTimeout( function(){ modifyValue('AUTH_DOB3', y[2] , "select" );}, 1000);
              if(data['uAAddress']=='N'){
                // Address and Contact Information
                $("#authUserAddress").click();
                window.setTimeout( function(){modifyValue('AUTHC_ADDRESS1', data['uAAddr1'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('AUTHC_ADDRESS2', data['uAAddr2'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('AUTHC_ZIP-citiTextBlur', data['uAZip'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('AUTHC_CITY', data['uACity'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('AUTHC_STATE', data['uAState'], "select" );}, getRand());
              }
              else if(data['uAAddress']=='Y'){ return  }
            }

            $("#TERMS_CHECK").click();
            $("#DISCLOSURE_READ").click();
            //             
            }
            // end main if condition


            else if(window.location.href.endsWith('000')){  
            //alert(9);
            window.setTimeout( function(){modifyValue('FIRST_NAME', data['uFname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('MIDDLE_NAME',data['uMname'], "text" );}, getRand());
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
            }else  if( data['uSuffix']=='IV'){
              window.setTimeout( function(){modifyValue('SUFFIX','IV', "select" );}, getRand());
            }
            // here
            var x=data['uDOB'].split("/");
            const monthNames = ["","01", "02", "03", "04", "05", "06",
                "07", "08", "09", "10", "11", "12"
            ];     
            window.setTimeout( function(){ modifyValue('DOB1', monthNames[Number(x[0])] , "select" );}, 1000);
            window.setTimeout( function(){ modifyValue('DOB2', x[1], "select" );}, 1000);
            window.setTimeout( function(){ modifyValue('DOB3', x[2] , "select" );}, 1000);alert(22222);
            // console.log(y[2]);
            // console.log("v");
            // window.setTimeout( function(){ //modifyValue('DOB3', y[2]+'' , "select" );
            // $("#DOB3").val(''+ y[2]);$("#DOB3").blur()
            // //$("#DOB3 option[value='"+y[2]+"']").attr('selected',true);          
            // }, 5000);
            // alert(123);
           
            window.setTimeout( function(){modifyValue('SSN-citiTextBlur', data['uSSNumber'], "text" );}, getRand());
            if(data['uResidentType']=='Citizen'){
              $("#CONSUMER_ARE_YOU_A_US_CITIZEN_0").click();
            }
            else if(data['uResidentType']=='NonResident'){
              $("#CONSUMER_ARE_YOU_A_US_CITIZEN_1").click();

              var xhr = new XMLHttpRequest();
              xhr.open('GET', chrome.runtime.getURL('js/countries.json'));
              xhr.onload = function() {
                  if (xhr.status === 200) {
                     
                      var jsonTxt= xhr.responseText;
                      var json=JSON.parse(jsonTxt);
                      json.forEach(element => {

                          if(element.code==data['uCountryOfResidence'].toUpperCase()){
                            
                            window.setTimeout( function(){ modifyValue('COUNTRY_OF_CITIZENSHIP', element.citycode, "select" );;}, 1000);
                           
                          }
                      });
                  }
                  else {
                     // alert('Request failed.  Returned status of ' + xhr.status);
                  }
              };
              xhr.send();

          
            }
            else if(data['uResidentType']=='Resident'){
              $("#CONSUMER_ARE_YOU_A_US_CITIZEN_1").click();
            
              var xhr = new XMLHttpRequest();
              xhr.open('GET', chrome.runtime.getURL('js/countries.json'));
              xhr.onload = function() {
                  if (xhr.status === 200) {
                     
                      var jsonTxt= xhr.responseText;
                      var json=JSON.parse(jsonTxt);
                      json.forEach(element => {

                          if(element.code==data['uCountryOfResidence'].toUpperCase()){
                            
                            window.setTimeout( function(){ modifyValue('COUNTRY_OF_CITIZENSHIP', element.citycode, "select" );;}, 1000);
                           
                          }
                      });
                  }
                  else {
                     // alert('Request failed.  Returned status of ' + xhr.status);
                  }
              };
              xhr.send();

            
            }
            // Address and Contact Information
            window.setTimeout( function(){modifyValue('ADDRESS_LINE1', data['uAddr1'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('ADDRESS_LINE2', data['uAddr2'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('ZIP-citiTextBlur', data['uZip'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('CITY', data['uCity'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('STATE', data['uState'], "select" );}, getRand());

            if(data['uPOBox']=='Y'){
            $("#ADD_PO_BOX").click();
              window.setTimeout( function(){modifyValue('PHYSICAL_ADDRESS_LINE1', data['uPOB'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('PHYSICAL_ZIP-citiTextBlur', data['uPOZip'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('PHYSICAL_CITY', data['uPOCity'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('PHYSICAL_STATE', data['uPOState'].toUpperCase(), "select" );}, getRand());
             }
            else if(data['uPOBox']=='N'){ return }
            
            if(data['uPreferredPhone']=='Home'){
            window.setTimeout( function(){modifyValue('HOME_PHONE-citiTextBlur',data['uHomePhone'], "text" );                
            }, getRand());                
            }
            else if(data['uPreferredPhone']=='Mobile'){
                window.setTimeout( function(){modifyValue('HOME_PHONE-citiTextBlur',data['uMobilePhone'], "text" );                    
            }, getRand()); 
            }
             else if(data['uPreferredPhone']=='Work'){
                window.setTimeout( function(){modifyValue('HOME_PHONE-citiTextBlur',data['uWorkPhone'], "text" );                    
            }, getRand()); 
            }

            if (data['uPreferredPhone']=='Work') {
                window.setTimeout( function(){modifyValue('WORK_PHONE-citiTextBlur',data['uWorkPhone'], "text" );                    
            }, getRand());                
            }
            if(data['uPreferredPhone']=='Mobile'){
            $("#CELL_PHONE").click();
            }
            window.setTimeout( function(){modifyValue('EMAIL_ADDRESS-citiTextBlur', data['uMail'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('SECPASSTYPE_CODE', data['uSecurityWordHint'], "select" );}, getRand());
            window.setTimeout( function(){modifyValue('MOTHERS_MAIDEN_NAME-citiTextBlur', data['uSecurityWord'], "text" );}, getRand());    
            // Financial Information
            window.setTimeout( function(){modifyValue('ANNUAL_INCOME', data['uGincome'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('MRTG_RENT_AMT', data['uMortgage'], "text" );}, getRand());
            if(data['uChecking']=='Y'){
              $("#CHECKING_ACCOUNT").click();
            }
            else if(data['uSavings']=='Y'){
              $("#SAVING_ACCOUNT").click();
            }
            else if(data['uMonMarket']=='Y'){
              $("#MONEY_MARKET").click();
            }
            // $("#authUser").click();
             if(data['uAuthorised']=='Y'){
              $("#authUser").click();
              window.setTimeout( function(){modifyValue('AUTH_FIRST_NAME_1', data['uAFname'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('AUTH_MIDDLE_INITIAL_1',data['uAMname'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('AUTH_LAST_NAME_1',data['uALname'], "text" );}, getRand());
              if( data['uASuffix']=='Jr'){
               window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','JR', "select" );}, getRand());
              }else if( data['uASuffix']=='Sr'){
               window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','SR', "select" );}, getRand());
              }
              else if( data['uASuffix']=='I'){
               window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','I', "select" );}, getRand());
              }
              else if( data['uASuffix']=='II'){
               window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','II', "select" );}, getRand());
              }
              else if( data['uASuffix']=='III'){
               window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','III', "select" );}, getRand());
              }else if( data['uASuffix']=='IV'){
                window.setTimeout( function(){modifyValue('AUTH_SUFFIX_1','IV', "select" );}, getRand());
              }
              // here
              var y=data['uADOB'].split("/");
              const monthNames = ["","01", "02", "03", "04", "05", "06",
                  "07", "08", "09", "10", "11", "12"
              ];     
              window.setTimeout( function(){ modifyValue('AUTH_DOB1', monthNames[Number(y[0])] , "select" );}, 1000);
              window.setTimeout( function(){ modifyValue('AUTH_DOB2', y[1], "select" );}, 1000);
              window.setTimeout( function(){ modifyValue('AUTH_DOB3', y[2] , "select" );}, 1000);
               if(data['uAAddress']=='N'){
                // Address and Contact Information
                $("#authUserAddress").click();
                window.setTimeout( function(){modifyValue('AUTHC_ADDRESS1', data['uAAddr1'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('AUTHC_ADDRESS2', data['uAAddr2'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('AUTHC_ZIP-citiTextBlur', data['uAZip'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('AUTHC_CITY', data['uACity'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('AUTHC_STATE', data['uAState'], "select" );}, getRand());
              }
               else if(data['uAAddress']=='Y'){ return }

            }
            $("#TERMS_CHECK").click();
            $("#DISCLOSURE_READ").click();
            //             
            }
            // end main if condition
           }});
          }
      });
    }

function executeClear(){
       
      localStorage.setItem('start','true');
      chrome.runtime.sendMessage({
      message: "clearCache"},
      function (response) { console.log(response);}
     );
     //location.href = newURL[1];
    // location.href = "https://www.google.com";
}
$(document).ready(function () {
    // alert(window.location.hostname);
     
    if(window.location.hostname.startsWith('www.citicards.')){
      val = getVal(window.location.href);
      if(!val || val.length==0){
       // alert(50);
          chrome.storage.sync.get(['UUID'], function(result) {
              updateVal(result.UUID);                    
            });
        }
        else{
            updateVal(val);              
        }         
    }
    else{      
      executeClear();      
        val = getVal(window.location.href);           
    }
 });