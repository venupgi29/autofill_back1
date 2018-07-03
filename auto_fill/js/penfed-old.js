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
   ////alert(rand);
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
        ////alert("Cant find: " + field);
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
    //alert(val);
    chrome.storage.sync.get(['SERVER_URL'], function(result) {
        if(result.SERVER_URL){
           
            $.ajax({
               url: result.SERVER_URL+'/getJsonFile?jsonId=' + val,
               type: 'GET',
               dataType: 'json',
               contentType: 'application/json; charset=utf-8',
               success: function (data) {
            
            // //alert(4) start if condition;
            if(window.location.href.endsWith('.aspx')){  
              //alert(3432);
              window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtFirstName', data['uFname'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtMiddleInitial',data['uMname'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtLastName',data['uLname'], "text" );}, getRand());      
              window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtBirthDate', data['uDOB'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtEmail',data['uMail'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtPhone',data['uPhone'], "text" );}, getRand());  
              window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtSSN',data['uSSNumber'], "text" );}, getRand());


              
              if(data['uPreferredPhone']=='Home'){
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_hdnPhone',data['uHomePhone'], "text" );
                
            }, getRand());
               
            }else if(data['uPreferredPhone']=='Mobile'){
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_hdnPhone',data['uMobilePhone'], "text" );
                
            }, getRand());
                
                
            }else  {
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_hdnPhone',data['uWorkPhone'], "text" );
                 
            }, getRand());
             
            }



              window.setTimeout( function(){ 
              if (!data['uCoborrower'] || data['uCoborrower']=='N'|| data['uCoborrower'].length==0) {
                $("#ctl00_MainContentPlaceHolder_coborrower_no").click();
              }
              else{
                $("#ctl00_MainContentPlaceHolder_coborrower_yes").click();
              }
              },2000);

              window.setTimeout( function(){ 
              if (!data['uCoborrowerSpouce'] || data['uCoborrowerSpouce']=='N' || data['uCoborrowerSpouce'].length==0) {
                $("#ctl00_MainContentPlaceHolder_spouse_no").click();
              }
              else{
                $("#ctl00_MainContentPlaceHolder_spouse_yes").click();
              }
              },2000);

              if(data['uCoborrowerSpouce']=='N'){ return }
              if(this.value=='spouse_yes'){

                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtCoBorrowerFirstName', data['uCoBorrowerFName'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtCoBorrowerMiddleInitial',data['uCoBorrowerMName'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtCoBorrowerLastName',data['uCoBorrowerLName'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtCoBorrowerBirthDate', data['uCoBorrowerDOB'], "text" );}, getRand());    
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtCoBorrowerNameOnCC',data['uCoBorrowerName'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtCoBorrowerEmail',data['uCoBorrowerEmail'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtCoBorrowerPhone',data['uCoBorrowerPhone'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtCoBorrowerSSN',data['uCoBorrowerSSN'], "text" );}, getRand());

                }                
                // start for Residence Information
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtMailingAddress1', data['uMAddr1'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtMailingAddress2',data['uMAddr2'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtMailingZip',data['uMZip'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtMailingCity', data['uMCity'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_ddlMailingState',+data['uMState'], "select" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_ddlMailingCountry',+data['uMCountry'], "select" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_ddlHousingStatus','1', "select" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtAddressYears','2', "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtAddressMonths','3', "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtHousingCost',data['uMortgage'], "text" );}, getRand());

               if( data['ctl00_MainContentPlaceHolder_ddlHousingStatus']=='1', "select")
               {
                 window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtHousingCost',data['uMortgage'], "text" );}, getRand());
                 }
                 else  if( data['ctl00_MainContentPlaceHolder_ddlHousingStatus']=='3', "select")
                 {
                 window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtHousingCost',data['uMortgage'], "text" );}, getRand());
                }
                // income information
                if( data['ctl00_MainContentPlaceHolder_ddlEmploymentStatus']=='EMPLOYED', "select"){
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtOccupation',data['uOccupation'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtEmployer',data['uEmployer'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtEmployerAddress',data['uEmployerAddr'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtEmployerZIP',data['uEmployerZip'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtEmployerCity',data['uEmployerCity'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_ddlEmployerState',+data['uEmployerState'], "select" );}, getRand());
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_ddlEmployerCountry',+data['uEmployerCountry'], "select" );}, getRand());
                }
                else  if( data['ctl00_MainContentPlaceHolder_ddlEmploymentStatus']=='SELF-EMPLOYED', "select"){
                  
                } 
                else  if( data['ctl00_MainContentPlaceHolder_ddlEmploymentStatus']=='STUDENT', "select"){
                  
                } 
                else  if( data['ctl00_MainContentPlaceHolder_ddlEmploymentStatus']=='RETIRED', "select"){
                  
                } 
                else  if( data['ctl00_MainContentPlaceHolder_ddlEmploymentStatus']=='NOT EMPLOYED', "select"){
                  
                }   
                //alert(34436546);
                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtGraduationYear',data['uGradYear'], "text" );}, getRand());
                if( data['ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank']=='None of these apply to me'){
                 window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank','NA', "select" );}, getRand());
                }
                else  if( data['ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank']=='Air Force Cadet'){
                 window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank','X798', "select" );}, getRand());
                }  
                else  if( data['ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank']=='Air Force ROTC'){
                 window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank','X799', "select" );}, getRand());
                }
                else  if( data['ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank']=='Army Cadet'){
                 window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank','X698', "select" );}, getRand());
                }
                else  if( data['ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank']=='Army ROTC'){
                 window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank','X699', "select" );}, getRand());
                }
                else  if( data['ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank']=='Coast Guard Cadet'){
                 window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank','X498', "select" );}, getRand());
                }
                else  if( data['ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank']=='Marines Cadet'){
                 window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank','X398', "select" );}, getRand());
                }
                else  if( data['ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank']=='Navy Midshipman'){
                 window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank','X598', "select" );}, getRand());
                }
                else  if( data['ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank']=='Navy ROTC'){
                 window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_ddlMilitaryStudentGrank','X599', "select" );}, getRand());
                }

                window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtGMI',data['uGroMonIncom'], "text" );}, getRand());

                window.setTimeout( function(){ 
                if (data['uAddIncom']=='N') {
                  $("#ctl00_MainContentPlaceHolder_rdBtnPrimaryAddIncomeNo").click();
                }
                else{
                  $("#ctl00_MainContentPlaceHolder_rdBtnPrimaryAddIncomeYes").click();
                    window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtOMI',data['uAdditionalIncome'], "text" );}, getRand());
                    window.setTimeout( function(){modifyValue('ctl00_MainContentPlaceHolder_txtOMISource',data['uIncomeSource'], "text" );}, getRand());
                }
                },2000);

                //alert(21322222);


           
            }
            // main if condition end here

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

         //alert(5);

        if(window.location.hostname.startsWith('netmember.')){
            val = getVal(window.location.href);
            if(!val || val.length==0){
                chrome.storage.sync.get(['UUID'], function(result) {
                    //alert(15);
                    updateVal(result.UUID);

                    
                  });
                  //alert(16);
            }else{
                updateVal(val);
               
            }
            

         
        }else{
            executeClear();      
            loc = window.location.href;
            val = getVal(loc);
           
        }
 });