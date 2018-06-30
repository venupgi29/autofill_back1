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
 
   return rand;
 }


 function modifyValue(field, value, kind) {
    if(!value){
        return;
    }
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
var createEvent = function(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
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
function mimicKeyUpDown(str,eleId){
    var ref=document.getElementById(eleId);
    ref.dispatchEvent(createEvent('focus'));
    ref.dispatchEvent(createEvent('keydown'));
    ref.value=str;
   // for (var v of str) {
   
        
     // }
      ref.dispatchEvent(createEvent('keyUp'));
    //  ref.dispatchEvent(createEvent('change'));
     // ref.dispatchEvent(createEvent('blur'));
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
        if($("#personalInfo_name_firstName").length>0){
     window.setTimeout( function(){modifyValue('personalInfo_name_firstName', data['uFname'], "text" );}, getRand());
     window.setTimeout( function(){modifyValue('personalInfo_name_middleInitial',data['uMname'], "text" );}, getRand());
     window.setTimeout( function(){modifyValue('personalInfo_name_lastName',data['uLname'], "text" );}, getRand());
      
        window.setTimeout( function(){modifyValue('personalInfo_name_suffix',data['uSuffix'].toUpperCase(), "select" );}, getRand());
     

     window.setTimeout( function(){modifyValue('personalInfo_address_street1',data['uAddr1'], "select" );}, getRand());
     window.setTimeout( function(){modifyValue('personalInfo_address_street2',data['uAddr2'], "select" );}, getRand());
     
     window.setTimeout( function(){modifyValue('personalInfo_address_zip', data['uZip'], "text" );}, getRand());
     window.setTimeout( function(){modifyValue('personalInfo_address_city',data['uCity'], "text" );}, getRand());
     window.setTimeout( function(){modifyValue('personalInfo_address_state',data['uState'].toUpperCase(), "select" );}, getRand());
     
     
     window.setTimeout( function(){
        if(data['uDOB'] && data['uDOB'].length==10){  

        mimicKeyUpDown(data['uDOB'],'personalInfo_birthdate_dateOfBirth')
			    $("#personalInfo_birthdate_dateOfBirth").trigger('click');
		}
     }, getRand());      
     window.setTimeout( function(){modifyValue('personalInfo_emailAddress_emailAddress',data['uMail'], "text" );}, getRand());
    
     if(data['uPreferredPhone']=='Home'&& data['uPreferredPhone'].length==10){
        window.setTimeout( function(){
            mimicKeyUpDown(data['uHomePhone'],'personalInfo_phone_phoneNumber')
			    $("#personalInfo_phone_phoneNumber").trigger('click');
           
        
    }, getRand());
       
			    document.getElementById("personalInfo_phone_phoneNumber").click(); 
    }else if(data['uPreferredPhone']=='Mobile'&& data['uPreferredPhone'].length==10){
        window.setTimeout( function(){
            mimicKeyUpDown(data['uMobilePhone'],'personalInfo_phone_phoneNumber')
			    $("#personalInfo_phone_phoneNumber").trigger('click');
            
        
        
    }, getRand());
        
    }else {
        window.setTimeout( function(){
            mimicKeyUpDown(data['uWorkPhone'],'personalInfo_phone_phoneNumber')
			    $("#personalInfo_phone_phoneNumber").trigger('click');
             
       
    }, getRand());
     
    }
   
      window.setTimeout( function(){
        if(data['uSSNumber'] && data['uSSNumber'].length==9){  
            var str='';
            str=str+data['uSSNumber'].substr(0,3);
            str=str+'-'+data['uSSNumber'].substr(3,2);
            str=str+'-'+data['uSSNumber'].substr(5,4);
           
            //$("#personalInfo_socialSecurityNumber_socialSecurityNumber").focus();
           // $("#personalInfo_socialSecurityNumber_socialSecurityNumber").val(str);
          //  document.getElementById('personalInfo_socialSecurityNumber_socialSecurityNumber').dispatchEvent(createEvent('change'));
            mimicKeyUpDown(str,'personalInfo_socialSecurityNumber_socialSecurityNumber')
             //modifyValue('personalInfo_socialSecurityNumber_socialSecurityNumber',str, "text" );
			    $("#personalInfo_socialSecurityNumber_socialSecurityNumber").trigger('click');
        }
    
    
    }, getRand());
    
    if(data['uResidentType']=='Citizen'){
    window.setTimeout( function(){modifyValue('personalInfo_citizenshipType_citizenship',"US_CITIZEN", "select" );}, getRand());
    }else if(data['uResidentType']=='Resident'){
        window.setTimeout( function(){modifyValue('personalInfo_citizenshipType_citizenship',"RESIDENT_ALIEN", "select" );}, getRand());
        


        
    }else {
        window.setTimeout( function(){modifyValue('personalInfo_citizenshipType_citizenship',"NON_RESIDENT_ALIEN", "select" );}, getRand());
    }
    window.setTimeout( function(){modifyValue('personalInfo_securityWord_securityWord',data['uMMname'], "text" );}, getRand());
    window.setTimeout( function(){modifyValue('personalInfo_countryOfCitizenship_countryOfCitizenship',data['uCountryOfResidence'].toUpperCase(), "select" );}, getRand());
   
}else{
        if($("#housingStatus_housingStatus").length>0){

            
            if(data['uRtype']=='Rent'){     
                window.setTimeout( function(){ modifyValue('housingStatus_housingStatus','RENT', "select" );}, getRand());
            }else if(data['uRtype']=='Own'){     
                window.setTimeout( function(){ modifyValue('housingStatus_housingStatus','OWN', "select" );}, getRand());
            }else if(data['uRtype']=='Parents'){     
                window.setTimeout( function(){ modifyValue('housingStatus_housingStatus','LIVE_WITH_PARENTS', "select" );}, getRand());
            }else if(data['uRtype']=='Relatives'){     
                window.setTimeout( function(){ modifyValue('housingStatus_housingStatus','LIVE_WITH_OTHER_RELATIVES', "select" );}, getRand());
            }else if(data['uRtype']=='dormitory'){     
                window.setTimeout( function(){ modifyValue('housingStatus_housingStatus','DORM', "select" );}, getRand());
            }else{
                window.setTimeout( function(){ modifyValue('housingStatus_housingStatus','OTHER', "select" );}, getRand());
            }


            window.setTimeout( function(){modifyValue('personalInfo_securityWord_securityWord',data['uRtype'].toUpperCase(), "select" );}, getRand());
            window.setTimeout( function(){modifyValue('monthlyMortgageOrRent_monthlyMortgageOrRent',data['uMortgage'], "select" );}, getRand());
            
            if(data['uSincome']=='Employed' || data['uEmployed']=='Y'){
                window.setTimeout( function(){modifyValue('employmentStatus_employmentStatus','EMPLOYED', "select" );}, getRand());
                window.setTimeout( function(){modifyValue('employmentInfo_occupation',data['uEmploymentTitle'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('employmentInfo_employerName',data['uEmployer'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('employmentInfo_employerCurrentYears',data['uEmployerYears'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('employmentInfo_employerCurrentMonths',data['uEmployerMonths'], "text" );}, getRand());
                window.setTimeout( function(){mimicKeyUpDown(data['uEmployerPhone'],'employmentInfo_phoneNumber')  ;}, getRand());
                window.setTimeout( function(){modifyValue('employmentInfo_employmentIncome_income',data['uGincome'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('employmentInfo_source','SALARY', "select" );}, getRand());
                


                

            }else   if(data['uSincome']=='SelfEmployed' || data['uSelfEmployed']=='Y'){
                window.setTimeout( function(){modifyValue('employmentStatus_employmentStatus','SELF_EMPLOYED', "select" );}, getRand());
                window.setTimeout( function(){modifyValue('employmentInfo_occupation',data['uEmploymentTitle'], "text" );}, getRand());  
                              
                // window.setTimeout( function(){modifyValue('employmentInfo_employerName',data['uEmployer'], "text" );}, getRand());
                // window.setTimeout( function(){modifyValue('employmentInfo_employerCurrentYears',(+data['uEmployerYears'])/12, "text" );}, getRand());
                // window.setTimeout( function(){modifyValue('employmentInfo_employerCurrentMonths',(+data['uEmployerMonths'])%12, "text" );}, getRand());
                // window.setTimeout( function(){modifyValue('employmentInfo_employmentIncome_income',(+data['uGincome']*12), "text" );}, getRand());

                window.setTimeout( function(){modifyValue('employmentInfo_employerName',data['uBusinessName'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('employmentInfo_employerCurrentYears',(+data['uBusinessInSameField'])/12, "text" );}, getRand());
                window.setTimeout( function(){modifyValue('employmentInfo_employerCurrentMonths',(+data['uBusinessInSameField'])%12, "text" );}, getRand());                
                window.setTimeout( function(){modifyValue('employmentInfo_employmentIncome_income',(+data['uMonthlyBusinessPay']*12), "text" );}, getRand());

                //window.setTimeout( function(){modifyValue('employmentInfo_phoneNumber',data['uBusinessPhone'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('employmentInfo_employmentIncome_income',(+data['uMonthlyBusinessPay']*12), "text" );}, getRand());
                window.setTimeout( function(){modifyValue('employmentInfo_source','SALARY', "select" );}, getRand());
                window.setTimeout( function(){mimicKeyUpDown(data['uBusinessPhone'],'employmentInfo_phoneNumber')  ;}, getRand());

                // added today
                if(data['uAdditionalIncome']=='false'){
                    $("#additionalIncome_false").click();
                }
                else if(data['uAdditionalIncome']=='true'){                                       
                    $("#additionalIncome_true").click();
                    window.setTimeout( function(){ 
                      modifyValue('otherIncome[0]_amount',data['uAdditionalIncome1'], "text" );
                      modifyValue('otherIncome[1]_amount',data['uAdditionalIncome2'], "text" );                          
                      modifyValue('otherIncome[2]_amount',data['uAdditionalIncome3'], "text" );
                      modifyValue('otherIncome[0]_source', data['uIncomeSource'].toUpperCase(), "select" );
                      modifyValue('otherIncome[1]_source', data['uIncomeSource'].toUpperCase(), "select" );
                      modifyValue('otherIncome[2]_source', data['uIncomeSource'].toUpperCase(), "select" );
                }, getRand());
                }


              if(data['uAccessibleIncome']=='false'){                  
                  $("#accessibleIncome_accessibleIncm_false").click();                    
               }
               else  if(data['uAccessibleIncome']=='true'){                  
                  $("#accessibleIncome_accessibleIncm_true").click();                 
               } 



               if(data['uFinancialAffiliation']=='false'){
                    $("#hasFinancialAffiliation_false").click(); 
               }
               else  if(data['uFinancialAffiliation']=='true'){                  
                    $("#hasFinancialAffiliation_true").click(); 
                  window.setTimeout( function(){modifyValue('financialAffiliation_institutionName',data['uFinancialAffiliationName'], "text" );}, getRand());
               } 


               // window.setTimeout( function(){ 
               //  $('#hasAdditionalCard').prop('checked', true);
               //  if($('#hasAdditionalCard').is(":checked"))   
               //    $(".__showhide-entered ").show();
               //    window.setTimeout( function(){ 
               //    modifyValue('additionalCardholder_name_firstName',data['uNameOnCard'], "text" );
               //     modifyValue('additionalCardholder_name_middleInitial',data['uNameOnCard'], "text" );
               //     modifyValue('additionalCardholder_name_lastName',data['uNameOnCard'], "text" );
               //     modifyValue('additionalCardholder_dateOfBirth',data['uDOB'], "text" );
               //    }, getRand());
                 
               //  else($('#hasAdditionalCard').is(":!checked"))
               //      $(".__showhide-entered ").hide();
               //  });

               //  window.setTimeout( function(){ 
               //  $('#hasTransferBalances').prop('checked', true);
               //  if($('#hasTransferBalances').is(":checked")) 
               //    window.setTimeout( function(){ 
               //    modifyValue('balanceTransfer_transfers[0]_creditorName',data[''], "text" );
               //    modifyValue('balanceTransfer_transfers[0]_accountNumber',data[''], "text" );
               //    modifyValue('balanceTransfer_transfers[0]_amount',data[''], "text" );
               //    modifyValue('balanceTransfer_transfers[1]_creditorName',data[''], "text" );
               //    modifyValue('balanceTransfer_transfers[1]_accountNumber',data[''], "text" );
               //    modifyValue('balanceTransfer_transfers[1]_amount',data[''], "text" );
               //    modifyValue('balanceTransfer_transfers[2]_creditorName',data[''], "text" );
               //    modifyValue('balanceTransfer_transfers[2]_accountNumber',data[''], "text" );
               //    modifyValue('balanceTransfer_transfers[2]_amount',data[''], "text" );
               //    }, getRand());
                 
               //  else($('#hasTransferBalances').is(":!checked"))

               //  });

               // end today added

            }else   if(data['uSincome']=='Student'){
                window.setTimeout( function(){modifyValue('employmentStatus_employmentStatus','STUDENT', "select" );}, getRand());
            }else   if(data['uSincome']=='Retired'){
                window.setTimeout( function(){modifyValue('employmentStatus_employmentStatus','RETIRED', "select" );}, getRand());
            }else   if(data['uSincome']=='Unemployed'){
                window.setTimeout( function(){modifyValue('employmentStatus_employmentStatus','UNEMPLOYED_WITHOUT_INCOME', "select" );}, getRand());
            }else{
                window.setTimeout( function(){modifyValue('employmentStatus_employmentStatus','UNEMPLOYED_WITH_INCOME', "select" );}, getRand());
            }
            var indx=0;
            if(data['uOther']=='Y'){
                $("#additionalIncome_true").attr('checked',true);
                if(data['uRetirement'] && data['uRetirement'].length >0){
                    
                    window.setTimeout( function(){modifyValue('otherIncome['+indx+']_source','RETIREMENT', "select" );}, getRand());
                    indx++;
                   // window.setTimeout( function(){modifyValue('otherIncome['+indx+']_source','RETIREMENT', "select" );}, getRand());
                  
                }
                if(data['uAlimony'] && data['uAlimony'].length >0){
                    
                    window.setTimeout( function(){modifyValue('otherIncome['+indx+']_source','ALIMONY', "select" );}, getRand());
                    indx++;
                }
                if(data['uChildSupport'] && data['uChildSupport'].length >0 && indx<3){
                    
                    window.setTimeout( function(){modifyValue('otherIncome['+indx+']_source','CHILD_SUPPORT', "select" );}, getRand());
                    indx++;
                }
                if(data['uRentalIncome'] && data['uRentalIncome'].length >0 && indx<3){
                    
                    window.setTimeout( function(){modifyValue('otherIncome['+indx+']_source','RENTAL_INCOME', "select" );}, getRand());
                    indx++;
                }
                if(data['uSocialSecurity'] && data['uSocialSecurity'].length >0 && indx<3){
                    
                    window.setTimeout( function(){modifyValue('otherIncome['+indx+']_source','SOCIAL_SECURITY', "select" );}, getRand());
                    indx++;
                }
                if(data['uWorkerCompensation'] && data['uWorkerCompensation'].length >0 && indx<3){
                    
                    window.setTimeout( function(){modifyValue('otherIncome['+indx+']_source','WORKER_COMPENSATION_BENEFITS', "select" );}, getRand());
                    indx++;
                }
            }

            


        }
}


        }});
    }
});
}
 $(document).ready(function () {

        
        if(window.location.hostname.startsWith('apply.')){
            val = getVal(window.location.href);

            val = getVal(window.location.href);
            if(!val || val.length==0){
                chrome.storage.sync.get(['UUID'], function(result) {
                    updateVal(result.UUID);
                  });
            }else{
                updateVal(val);
               
            }
       
           

         
        }else{
          
            loc = window.location.href;
            val = getVal(loc);
            
        }
 });
