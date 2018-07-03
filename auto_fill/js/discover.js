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
                url: 'http://localhost:8000/getJsonFile?jsonId=' + val,
                type: 'GET',
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
            
             
            if(window.location.href.endsWith('ac1')){  
            
            window.setTimeout( function(){modifyValue('firstName', data['uFname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('middleName', data['uMname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('lasttName', data['uLname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('streetAdress', data['uAddr1'], "text" );}, getRand());
             window.setTimeout( function(){modifyValue('aptSuite', data['uAddr2'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('city', data['uCity'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('state', data['uState'].toUpperCase(), "text" );
            
            var $sel = $("#state");
            var value = $sel.val();
            var text = $("option:selected",$sel).text(); 
            $("#selectDropDownLabelstate").html(text);
           
            }, getRand());

            window.setTimeout( function(){modifyValue('zip', data['uZip'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('loanAmt', data['uLoanAmount'], "text" );}, getRand());


          window.setTimeout( function(){modifyValue('loanUsage-custom', data['uLoanFor'], "text" );}, getRand());
           
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

            
            if(data['uPreferredPhone']=='Home'){
                window.setTimeout( function(){modifyValue('preferredPhnNo',data['uHomePhone'], "text" );
                
            }, getRand());
            
            }else if(data['uPreferredPhone']=='Mobile'){
                window.setTimeout( function(){modifyValue('preferredPhnNo',data['uMobilePhone'], "text" );
                
            }, getRand());
                
                
            }else  {
                window.setTimeout( function(){modifyValue('preferredPhnNo',data['uWorkPhone'], "text" );
                
            }, getRand());
            
            }


            window.setTimeout( function(){modifyValue('emailId', data['uMail'], "text" );}, getRand());
        }

        else if(window.location.href.endsWith('ac2')){
           
            // alert(12);
           if(data['uEmployerStatus']=='FT'){
             $('#employed-full-time_').click();
              window.setTimeout( function(){modifyValue('employerName', data['uEmployer'], "text" );}, getRand());              
              // window.setTimeout( function(){modifyValue('occupation-custom', data['uOccupation'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('individualIncome', data['uGincome'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('nontaxableIncome', data[''], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('householdIncome', data[''], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('nontaxablehouseholdIncome', data[''], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('monthlyHousingPayment', data['uMortgage'], "text" );}, getRand());
              if(data['UhasAccount']=='Y'){
                 $('#savings-acnt-yes_').click();
               }
               else{
                  $('#savings-acnt-no_').click();
               }

              window.setTimeout( function(){modifyValue('ssn', data['uSSNumber'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('dob', data['uDOB'], "text" );}, getRand());
           }
           else if(data['uEmployerStatus']=='PT'){
              $('#employed-part-time_').click();
               window.setTimeout( function(){modifyValue('employerName', data['uEmployer'], "text" );}, getRand());              
              // window.setTimeout( function(){modifyValue('occupation-custom', data['uOccupation'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('individualIncome', data['uGincome'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('nontaxableIncome', data[''], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('householdIncome', data[''], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('nontaxablehouseholdIncome', data[''], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('monthlyHousingPayment', data['uMortgage'], "text" );}, getRand());
              if(data['UhasAccount']=='Y'){
                 $('#savings-acnt-yes_').click();
               }
               else{
                  $('#savings-acnt-no_').click();
               }
              window.setTimeout( function(){modifyValue('ssn', data['uSSNumber'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('dob', data['uDOB'], "text" );}, getRand());
           }
           else if(data['uEmployerStatus']=='SE'){
              $('#employed-self_').click();

               window.setTimeout( function(){modifyValue('employerName', data['uBusinessName'], "text" );}, getRand());              
              // window.setTimeout( function(){modifyValue('occupation-custom', data['uOccupation'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('individualIncome', data['uGincome'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('nontaxableIncome', data[''], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('householdIncome', data[''], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('nontaxablehouseholdIncome', data[''], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('monthlyHousingPayment', data['uMortgage'], "text" );}, getRand());
              if(data['UhasAccount']=='Y'){
                 $('#savings-acnt-yes_').click();
               }
               else{
                  $('#savings-acnt-no_').click();
               }
              window.setTimeout( function(){modifyValue('ssn', data['uSSNumber'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('dob', data['uDOB'], "text" );}, getRand());

           }
           else if(data['uEmployerStatus']=='UE'){
              $('#unemployed_').click();

               window.setTimeout( function(){modifyValue('unemployment-custom', data[''], "text" );}, getRand());              
              // window.setTimeout( function(){modifyValue('occupation-custom', data['uOccupation'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('individualIncome', data['uGincome'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('nontaxableIncome', data[''], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('householdIncome', data[''], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('nontaxablehouseholdIncome', data[''], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('monthlyHousingPayment', data['uMortgage'], "text" );}, getRand());
              if(data['UhasAccount']=='Y'){
                 $('#savings-acnt-yes_').click();
               }
               else{
                  $('#savings-acnt-no_').click();
               }
              window.setTimeout( function(){modifyValue('ssn', data['uSSNumber'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('dob', data['uDOB'], "text" );}, getRand());

           }
            // employed-full-time_
            // employed-part-time_
            // employed-self_
            // unemployed_
            }

            else if(window.location.href.endsWith('ac-softpull-disclosure')){
            // alert(15);
            $("#TermsNConditionCheck").click();

            }


            }});
       
        }
    });
    }
     $(document).ready(function () {
        
      
        if(window.location.hostname == 'www.discoverpersonalloans.com'){
            val = getVal(window.location.href);
                if(!val || val.length==0){
                    chrome.storage.sync.get(['UUID'], function(result) {

                        updateVal(result.UUID);

                        
                    });
                }else{
                    updateVal(val);
                
                }
          

         
        }
 });
