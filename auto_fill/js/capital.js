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

    chrome.storage.sync.get(['SERVER_URL'], function(result) {
        if(result.SERVER_URL){

    $.ajax({
        url:  result.SERVER_URL+'/getJsonFile?jsonId=' + val,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            
         var busName=data['uBusinessName'];
            if($("#legalBusinessName").length>0){
           //small business
          
           //alert("small business");
            window.setTimeout( function(){modifyValue('legalBusinessName', data['uBusinessName'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('businessNameOnCard', data['uBusinessName'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('combinedBusinessStreetAddress', data['uBusinessAddr'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('businessPhoneNumber', data['uBusinessPhone'], "text" );}, getRand());

           window.setTimeout( function(){modifyValue('businessStreetAddress2', data['uBusinessCity'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('businessTIN', data['uBusinesTIN'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('industryTypeMain', data['uNatureOfBusiness'], "text" );}, getRand());
            if(data['uMonthlyBusinessPay'] && data['uMonthlyBusinessPay'].length>0){
            window.setTimeout( function(){modifyValue('businessRevenue', (+data['uMonthlyBusinessPay']*12), "text" );}, getRand());
             }
           window.setTimeout( function(){modifyValue('businessSpend', data['uBusinesSpend'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('industryTypeSubCategory', data['uCategory'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('industryTypeSpecialty', data['uSpeciality'], "text" );}, getRand());
         
            //$('#businessRole_input').find('div')[0].textContent="Officer";
           //$('#businessRole_input').find('div')[0].outerText="Officer";
           
           if(data['uloanduration']=='36months'){
             $('#36months_').click();
           }
           else if(data['uloanduration']=='48months_'){
              $('#48months_').click();
           }
           else if(data['uloanduration']=='60months_'){
              $('#60months_').click();
           }
           else if(data['uloanduration']=='72months_'){
              $('#72months_').click();
           }
           else if(data['uloanduration']=='84months_'){
              $('#84months_').click();
           }

           if(data['isCashAdvance']=='Y'){
             $('#cashAdvanceYes').click();
           }else{
             $('#cashAdvanceNo').click();
           }
           


            if(data['isBusinesINC']=='Y'){
             $('#businessLocationQuestionINC_Y').click();
                 
             }else{
                 $('#businessLocationQuestionINC_N').click();
                 window.setTimeout( function(){modifyValue('businessLocationCountryINC', data['uBusineslegalCountry'], "text" );}, getRand());
             }

            if(data['isBusinesHeadQuertes']=='Y'){
             $('#businessLocationQuestionHQ_Y').click();
                 
             }else{
                 $('#businessLocationQuestionHQ_N').click();
                 window.setTimeout( function(){modifyValue('businessLocationCountryHQ', data['uBusinesHQ'], "text" );}, getRand());
             }
             
             if(data['isBusinesCountryBsd']=='Y'){
                 $('#businessLocationQuestionBASED_Y').click();
                     
                 }else{
                     $('#businessLocationQuestionBASED_N').click();
                     window.setTimeout( function(){modifyValue('businessLocationCountryBASED', data['uBusinesPrimary'], "text" );}, getRand());
                 }
           
           
            window.setTimeout( function(){modifyValue('firstName', data['uFname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('lastName', data['uLname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('middleInitial', data['uMMname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('socialSecurityNumber', data['uSSNumber'], "text" );}, getRand());

            window.setTimeout( function(){modifyValue('monthlyRentMortgage', data['uMortgage'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('annualIncome', data['uGincome'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('combinedStreetAddress', data['uAddr1'], "text" );}, getRand());
            
             if(data['uPreferredPhone']=='Home'){
                window.setTimeout( function(){modifyValue('phoneNumber',data['uHomePhone'], "text" );
               
            }, getRand());
               
            }else if(data['uPreferredPhone']=='Mobile'){
                window.setTimeout( function(){modifyValue('phoneNumber',data['uMobilePhone'], "text" );
                
            }, getRand());
                
                
            }else  {
                window.setTimeout( function(){modifyValue('phoneNumber',data['uWorkPhone'], "text" );
               
            }, getRand());
             
            }
            window.setTimeout( function(){modifyValue('email', data['uMail'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('streetAddress2', data['uAddr2'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('dateOfBirth', data['uDOB'], "text" );}, getRand());
            $("#electronicSignStatus").click()
         }else{

            //quick silver
             
            alert("quick silver");
             window.setTimeout( function(){modifyValue('firstName', data['uFname'], "text" );}, getRand());
             window.setTimeout( function(){modifyValue('lastName', data['uLname'], "text" );}, getRand());
             window.setTimeout( function(){modifyValue('middleInitial', data['uMMname'], "text" );}, getRand());
             window.setTimeout( function(){modifyValue('socialSecurityNumber', data['uSSNumber'], "text" );}, getRand());

             window.setTimeout( function(){modifyValue('monthlyRentMortgage', data['uMortgage'], "text" );}, getRand());
             window.setTimeout( function(){modifyValue('annualIncome', data['uGincome'], "text" );}, getRand());


            



             window.setTimeout( function(){modifyValue('combinedStreetAddress', data['uAddr1'], "text" );}, getRand());






             if(data['uPreferredPhone']=='Home'){
                window.setTimeout( function(){modifyValue('phoneNumber',data['uHomePhone'], "text" );
               
            }, getRand());
               
            }else if(data['uPreferredPhone']=='Mobile'){
                window.setTimeout( function(){modifyValue('phoneNumber',data['uMobilePhone'], "text" );
                
            }, getRand());
                
                
            }else  {
                window.setTimeout( function(){modifyValue('phoneNumber',data['uWorkPhone'], "text" );
               
            }, getRand());
             
            }



            
             window.setTimeout( function(){modifyValue('email', data['uMail'], "text" );}, getRand());
             window.setTimeout( function(){modifyValue('streetAddress2', data['uAddr2'], "text" );}, getRand());
             window.setTimeout( function(){modifyValue('dateOfBirth', data['uDOB'], "text" );}, getRand());




             if(data['uResidentType']=='Citizen'){
                 $('#citizenYes').click();
                    if(data['uDualCitizen']=='Y'){
                     $('#dualCitizenYes').click();

                     window.setTimeout( function(){modifyValue('citizenCountry2', data['uCitizenCountry'], "text" );}, getRand());
                    }else{
                     $('#dualCitizenNo').click();
                    }
                     
                 }else    if(data['uResidentType']=='Resident'){
                 
                 $('#citizenNo').click();
            
                
                     $('#resident').click();
                     
                     var xhr = new XMLHttpRequest();
                     xhr.open('GET', chrome.runtime.getURL('js/countries.json'));
                     xhr.onload = function() {
                         if (xhr.status === 200) {
                            
                             var jsonTxt= xhr.responseText;
                             var json=JSON.parse(jsonTxt);
                             json.forEach(element => {
                                 if(element.code==data['uCountryOfResidence'].toUpperCase()){
                                    window.setTimeout( function(){modifyValue('citizenCountry1',element.name, "text" );}, getRand());
                                 }
                             });
                         }
                         else {
                             alert('Request failed.  Returned status of ' + xhr.status);
                         }
                     };
                     xhr.send();


                 }else{
                    $('#nonResidence').click();
                 
                    $('#citizenNo').click();
            
                
                     $('#resident').click();
                     
                     var xhr = new XMLHttpRequest();
                     xhr.open('GET', chrome.runtime.getURL('js/countries.json'));
                     xhr.onload = function() {
                         if (xhr.status === 200) {
                            
                             var jsonTxt= xhr.responseText;
                             var json=JSON.parse(jsonTxt);
                             json.forEach(element => {
                                 if(element.code==data['uCountryOfResidence'].toUpperCase()){
                                    window.setTimeout( function(){modifyValue('citizenCountry1',element.name, "text" );}, getRand());
                                 }
                             });
                         }
                         else {
                             alert('Request failed.  Returned status of ' + xhr.status);
                         }
                     };
                     xhr.send();
                 }
                 
                 // window.setTimeout( function(){ 
                 window.setTimeout( function(){ modifyValue('streetAddress', data['uAddr1'], "text" );}, getRand());
                  window.setTimeout( function(){ modifyValue('streetAddress2', data['uAddr2'], "text" );}, getRand());
                  window.setTimeout( function(){modifyValue('city', data['uCity'], "text" );}, getRand());
                  window.setTimeout( function(){modifyValue('state_province_1', 'string:'+(data['uState'].toUpperCase()), "select" );}, getRand());

                  
                  window.setTimeout( function(){modifyValue('zipCode', data['uZip'], "text" );}, getRand());
               
                // }, getRand());
                window.setTimeout( function(){modifyValue('occupation', data['uOccupation'], "text" );}, getRand());
                

                
                $("#electronicSignStatus").click()
               


         }

             

        }});
    }
})
}
var check=null;
 $(document).ready(function () {

      
        if('www.capitalone.com'==window.location.hostname){
            val = getVal(window.location.href);
           /*href1 = $("a.c1-button.green").attr('href');
           href2= $(".component-cta").find('a')[1].attributes[0].value;
         
           //href= $(".component-cta").find('a')[1].attributes[0].value;
           // href = $("c1-button icat-product-data icat-rendered").attr('href');
           // href=$(".component-cta").find('a')[1].attributes[3].nodeValue;
            
            loc = window.location.href;
            val = getVal(loc);
            if( loc.indexOf("?") > 0  ){
                if("/credit-cards/cash-back/" == href2){      
                    href = href1 + "&clno=" + val;
                }else{
                    href = href2 + "&clno=" + val;
                    check="Test";
                }
            
            }else{
                if("/credit-cards/cash-back/" == href2){
                    href = href1 + "?clno=" + val;
                }else{
                    href = href2 + "?clno=" + val;
                }
            }
          
            if("/credit-cards/cash-back/" == href2){
               $("a.c1-button.green").attr("href", href);
            }else{
            $(".component-cta").find('a')[1].attributes[0].value=href;
            $(".component-cta").find('a')[1].attributes[3].nodeValue=href; 
            $(".component-cta").find('a')[0].attributes[0].value=href;
            $(".component-cta").find('a')[0].attributes[3].nodeValue=href;
            }*/
         }else if(window.location.hostname.startsWith('applynow.capitalone.com')){
           
            val = getVal(window.location.href);
          
            if(!val || val.length==0){
                chrome.storage.sync.get(['UUID'], function(result) {
                    updateVal(result.UUID);
                  });
            }else{
                updateVal(val);
               
            }

         
        }else{
            val = getVal(window.location.href);
        }
 });