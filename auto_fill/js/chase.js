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
            if(window.location.href.endsWith('DF01')){  
           // alert(9);
            window.setTimeout( function(){modifyValue('sFirstName', data['uFname'], "text" );}, getRand());            
            window.setTimeout( function(){modifyValue('sMiddleInitial',data['uMname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('sLastName',data['uLname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('sSuffix', data['uSuffix'], "select" );}, getRand());
            window.setTimeout( function(){ modifyValue('sStreetAddr1', data['uMAddr1'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('sStreetAddr2', data['uMAddr2'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('sApartment', data['uUnit'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('sCity', data['uCity'], "text" );}, getRand());
            // window.setTimeout( function(){modifyValue('sState1', +data['uState'], "select" );}, getRand());

            window.setTimeout( function(){modifyValue('sState1', data['uState'].toUpperCase(), "select" );}, getRand());
            window.setTimeout( function(){modifyValue('sZip', data['uZip'], "text" );}, getRand());
          }


          // start second step
            var inb=1;
             window.setTimeout(function(){

                // alert(111);
               if(data['uSavings']=='Y'){  
               $("#savings-checkbox").focus();              
                // alert(23434);  
                $("#savings-checkbox").click();
				}
               if(data['uChecking']=='Y'){  
               $("#checking-checkbox").focus();              
                // alert(23434);  
                $("#checking-checkbox").click();
				}
                window.setTimeout( function(){modifyValue('sHousingType', data['uRtype'], "select" );}, getRand());
                window.setTimeout( function(){modifyValue('sMonthlyMortgage', data['uMortgage'], "select" );}, getRand());
                window.setTimeout( function(){modifyValue('sAnnualIncome', data['uGincome'], "text" );}, getRand());
               
               if(data['uPrimarySourcesOfEmployment']=='SelfEmployed'){
                window.setTimeout( function(){modifyValue('sPosition','Self Employed' , "select" );}, getRand());
                }else{
                window.setTimeout( function(){modifyValue('sPosition',data['uPrimarySourcesOfEmployment'] , "select" );}, getRand());
                 }
               
               
                window.setTimeout( function(){modifyValue('sEmployerOpt', data['uEmployer'], "text" );}, getRand());                
                window.setTimeout( function(){modifyValue('sPositionOther', data['uPrimarySourcesOfEmployment'], "text" );}, getRand());                
                
              


                if(data['uPreferredPhone']=='Home'){
                window.setTimeout( function(){modifyValue('sHomePhone',data['uHomePhone'], "text" );                
                }, getRand());               
                window.setTimeout( function(){modifyValue('sWorkPhone',data['uMobilePhone'], "text" );                
                }, getRand());                
                }
                else if(data['uPreferredPhone']=='Mobile'){
                    window.setTimeout( function(){modifyValue('sHomePhone',data['uMobilePhone'], "text" );                    
                }, getRand()); 
                    window.setTimeout( function(){modifyValue('sWorkPhone',data['uHomePhone'], "text" );                    
                }, getRand()); 
                }
                else  {
                    window.setTimeout( function(){modifyValue('sHomePhone',data['uWorkPhone'], "text" );                    
                }, getRand());  
                    window.setTimeout( function(){modifyValue('sWorkPhone',data['uMobilePhone'], "text" );                    
                }, getRand());                
                }

                window.setTimeout( function(){modifyValue('sEMailAddr2', data['uMail'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('sDOB', data['uDOB'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('sSSN', data['uSSNumber'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('sMaidenName', data['uMMname'], "text" );}, getRand()); 
 
               // for authorise user
                window.setTimeout( function(){modifyValue('sSecondaryFirstName1', data['uAFname'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('sSecondaryMiddleInitial1', data['uAMname'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('sSecondaryLastName1', data['uALname'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('sAuthorizedDOB1', data['uADOB'], "text" );}, getRand()); 

                if(data['uAAddress']=='N'){
                // Address and Contact Information                
                window.setTimeout( function(){modifyValue('sAuthorizedStreetAddr11', data['uAAddr1'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('sAuthorizedStreetAddr21', data['uAAddr2'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('sAuthorizedApartment1', data['uAUnit'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('sAuthorizedCity1', data['uACity'], "text" );}, getRand()); 
                window.setTimeout( function(){modifyValue('sAuthorizedState11', data['uAState'].toUpperCase(), "select" );}, getRand());
                window.setTimeout( function(){modifyValue('sAuthorizedZip1', data['uAZip'], "text" );}, getRand()); 

              }
              else if(data['uAAddress']=='Y'){
               $('#sAuth1AddrSameAsPrimary').click();
              }

                // window.setTimeout( function(){modifyValue('sRespFromAcctA1', data['uAccountNo'], "text" );}, getRand()); 
                // window.setTimeout( function(){modifyValue('sRespTransferAmtA1', data['uTransAmnt'], "text" );}, getRand()); 
                $("#sAcceptance").click();             
                $("#terms-cheerios-reviewlink").click();    
                   
             });

             // end second step here





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

        // alert(5);

        if(window.location.hostname.startsWith('applynow.')){
            val = getVal(window.location.href);
            if(!val || val.length==0){
                chrome.storage.sync.get(['UUID'], function(result) {

                    updateVal(result.UUID);

                    
                  });
            }else{
                updateVal(val);
               
            }
            

         
        }else{
            executeClear();
            loc = window.location.href;
            val = getVal(loc);
           
        }
 });
