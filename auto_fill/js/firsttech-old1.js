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
            //alert(4);
            window.setTimeout( function(){modifyValue('firstName', data['uFname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('middleName',data['uMname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('lastName',data['uLname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('dateOfBirth',data['uDOB'], "text" );}, getRand());
            if( data['uSuffix']=='Jr'){
             window.setTimeout( function(){modifyValue('suffix','string:Jr.', "select" );}, getRand());
            }else  if( data['uSuffix']=='Sr'){
             window.setTimeout( function(){modifyValue('suffix','string:Sr.', "select" );}, getRand());
            }
        
            if(data['uPreferredPhone']=='Home'){
                window.setTimeout( function(){modifyValue('phoneNumber',data['uHomePhone'], "text" );
                $("#primaryPhoneType_4HOME_PHONE").click();
            }, getRand());
               
            }else if(data['uPreferredPhone']=='Mobile'){
                window.setTimeout( function(){modifyValue('phoneNumber',data['uMobilePhone'], "text" );
                $("#primaryPhoneType_4CELL_PHONE").click();
            }, getRand());
                
                
            }else  {
                window.setTimeout( function(){modifyValue('phoneNumber',data['uWorkPhone'], "text" );
                $("#primaryPhoneType_4WORK_PHONE").click();
            }, getRand());
             
            }
            
           
            window.setTimeout( function(){modifyValue('ssntaxId',data['uSSNumber'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('email_1',data['uMail'], "text" );}, getRand());
            
           

           
             

            
            var inb=1;
             window.setTimeout(function(){
            $(".continue-button-74193 > button").click(function(){
                 //alert(23434);
                
                 window.setTimeout( function(){
                     
                    if($("#dataTypeahead_3").length>0){
                     
                        $("#dataTypeahead_3").focus();

                        var event=new Event("keydown");
                        document.getElementById("dataTypeahead_3").dispatchEvent(event);
                        $("#dataTypeahead_3").val('B');
                        var event=new Event("keyup");
                        document.getElementById("dataTypeahead_3").dispatchEvent(event);

                        var event=new Event("keydown");
                        document.getElementById("dataTypeahead_3").dispatchEvent(event);
                        $("#dataTypeahead_3").val('Be');
                        var event=new Event("keyup");
                        document.getElementById("dataTypeahead_3").dispatchEvent(event);

                        var event=new Event("keydown");
                        document.getElementById("dataTypeahead_3").dispatchEvent(event);
                        $("#dataTypeahead_3").val('Bel');
                        var event=new Event("keyup");
                        document.getElementById("dataTypeahead_3").dispatchEvent(event);

                        var event=new Event("keydown");
                        document.getElementById("dataTypeahead_3").dispatchEvent(event);
                        $("#dataTypeahead_3").val('Belm');
                        var event=new Event("keyup");
                        document.getElementById("dataTypeahead_3").dispatchEvent(event);

                        var event=new Event("blur");
                        document.getElementById("dataTypeahead_3").dispatchEvent(event);
                        var event=new Event("change");
                        document.getElementById("dataTypeahead_3").dispatchEvent(event);

               
                  window.setTimeout( function(){ modifyValue('addressLine1_1', data['uAddr1'], "text" );}, getRand());
                  window.setTimeout( function(){ modifyValue('addressLine2_1', data['uAddr2'], "text" );}, getRand());
                  window.setTimeout( function(){modifyValue('suburb_city_1', data['uCity'], "text" );}, getRand());
                  window.setTimeout( function(){modifyValue('state_province_1', 'string:'+(data['uState'].toUpperCase()), "select" );}, getRand());

                  
                  window.setTimeout( function(){modifyValue('postcode_zipcode_1', data['uZip'], "text" );}, getRand());
                  window.setTimeout( function(){modifyValue('segInput_4', data['uEmployer'], "text" );}, getRand());
                  window.setTimeout( function(){modifyValue('totalAnnualIncome', data['uGincome'], "text" );}, getRand());
                 
                  window.setTimeout( function(){ modifyValue('idNonBranch', data['uAddr1'], "text" );}, getRand());
                 
                    if(data['uMailAddr']!='Y'){
                        $("#isThisYourMailingAddress_1MAILING").click();
                     
                    }else{
                        $("#isThisYourMailingAddress_1OTHER").click();
                        
                    
                        window.setTimeout(function(){

                            var event=new Event("keydown");
                            document.getElementById("mailingAddress_4").dispatchEvent(event);
                            $("#mailingAddress_4").val('B');
                            var event=new Event("keyup");
                            document.getElementById("mailingAddress_4").dispatchEvent(event);
    
                            var event=new Event("keydown");
                            document.getElementById("mailingAddress_4").dispatchEvent(event);
                            $("#mailingAddress_4").val('Be');
                            var event=new Event("keyup");
                            document.getElementById("mailingAddress_4").dispatchEvent(event);
    
                            var event=new Event("keydown");
                            document.getElementById("mailingAddress_4").dispatchEvent(event);
                            $("#mailingAddress_4").val('Bel');
                            var event=new Event("keyup");
                            document.getElementById("mailingAddress_4").dispatchEvent(event);
    
                            var event=new Event("keydown");
                            document.getElementById("mailingAddress_4").dispatchEvent(event);
                            $("#dataTypeahead_3").val('Belm');
                            var event=new Event("keyup");
                            document.getElementById("mailingAddress_4").dispatchEvent(event);
    
                            var event=new Event("blur");
                            document.getElementById("mailingAddress_4").dispatchEvent(event);
                            var event=new Event("change");
                            document.getElementById("mailingAddress_4").dispatchEvent(event);
    
                   
                      window.setTimeout( function(){ modifyValue('mail_addressLine1_1', data['uMAddr1'], "text" );}, getRand());
                      window.setTimeout( function(){modifyValue('mail_addressLine2_1', data['uMAddr2'], "text" );}, getRand());
                      window.setTimeout( function(){modifyValue('mail_suburb_city_1',  data['uMCity'], "text" );}, getRand());
    
                      window.setTimeout( function(){modifyValue('mail_state_province_1', "string:"+(data['uMState'].toUpperCase()), "select" );}, getRand());
                      window.setTimeout( function(){modifyValue('mail_postcode_zipcode_1', data['uMZip'], "text" );}, getRand());



                        },25);


                    }
                   
                   

                     
                        if(data['uRtype']!='Rent'){
                            $("#doYouOwnOrRentOWN").click();
                            window.setTimeout( function(){ modifyValue('totalMonthlyHousingExpenses_1', data['uMortgage'], "text" );}, getRand());
                          //  updateRadioButton('');
                        }else{
                            $("#doYouOwnOrRentRENT").click();
                            window.setTimeout( function(){ modifyValue('totalMonthlyHousingExpenses_1', data['uMortgage'], "text" );}, getRand());
                        }
                       
                       
                        if(data['uEmployerStatus']=='FT'){
                             window.setTimeout( function(){ 
                                $("#employmentStatus_4FULL_TIME").click(); 
                                }, getRand());
                         }else  if(data['uEmployerStatus']=='PT'){
                            window.setTimeout( function(){ 
                                $("#employmentStatus_4PART_TIME").click(); 
                                }, getRand());
                        }else  if(data['uOther']=='Y'  && data['uRetirement']  && data['uRetirement'].length>0 ){
                            window.setTimeout( function(){ 
                                $("#employmentStatus_4RETIRED").click(); 
                                }, getRand());
                        }else  if(data['uSelfEmployed']=='Y'){
                            window.setTimeout( function(){ 
                                $("#employmentStatus_4SELF_EMPLOYED").click(); 
                                 }, getRand());
                        }else{
                            window.setTimeout( function(){ 
                                $("#employmentStatus_4UNEMPLOYED").click(); 
                                }, getRand());
                        }
                        window.setTimeout( function(){ modifyValue('occupation_7', data['uOccupation'], "text" );}, getRand());


















                  // identity part Membership Qualification
                   if(data['uMemberQualification']=='1'){
                        window.setTimeout( function(){modifyValue('segInput_7',data['uCompName'], "text" );
                        $("#howDoYouQualifyForMembership1").click();
                    }, getRand());
                       
                    }
                    else if(data['uMemberQualification']=='10'){
                        window.setTimeout( function(){modifyValue('segInput_7',data['uCompName'], "text" );
                        $("#howDoYouQualifyForMembership10").click();
                    }, getRand());

                    }  
                    else if(data['uMemberQualification']=='6'){
                        window.setTimeout( function(){modifyValue('pleaseSelectSponsorCompany',+data['uCompNamelist'], "select" );
                        $("#howDoYouQualifyForMembership6").click();
                    }, getRand());

                    }

                    else if(data['uMemberQualification']=='8'){
                        window.setTimeout( function(){modifyValue('dataDropdown_4',+data['uMemberClubAssociation'], "select" );
                        $("#howDoYouQualifyForMembership8").click();
                    }, getRand());

                    }                    
                    
                    else (data['uMemberQualification']=='9'){
                        // window.setTimeout( function(){modifyValue('segInput_7',data['uCompName'], "text" );
                        window.setTimeout( function(){ 
                        $("#howDoYouQualifyForMembership9").click();
                       }, getRand());
                    // }, getRand());  
                     window.setTimeout( function(){modifyValue("selectAnAssociationToJoin_1Financial_Fitness_Association").click(); }, getRand());   
                     window.setTimeout( function(){modifyValue("iConsentToBecomeAMember_1").click(); }, getRand());                 
                    }

                    // credit form stage   Additional Services
                    window.setTimeout( function(){ $("#onlineBankingEnrollment").click(); }, getRand());

                    // credit form stage Applicant
                    if(data['joint']=='true'){
                        window.setTimeout( function(){ $("#jointfalse").click(); }, getRand());
                    }
                    else(data['joint']=='false'){
                       window.setTimeout( function(){  $("#jointtrue").click(); }, getRand());
                    }  


                    // in disclosures part all checkbox
                    window.setTimeout( function(){ $("#iHaveReadTheESignDisclosure").click(); }, getRand());
                    window.setTimeout( function(){ $("#iHaveReadAndAgreeToConfirm").click(); }, getRand());
                    window.setTimeout( function(){ $("#iHaveReviewedThePrivacy").click(); }, getRand());
                    window.setTimeout( function(){ $("#iHaveReviewedTheTruth").click(); }, getRand());
                    window.setTimeout( function(){ $("#iHaveReviewedMastercard").click(); }, getRand());
                    window.setTimeout( function(){ $("#iHaveReadAndAgreeToThe").click(); }, getRand());

                    // all radio button
                    window.setTimeout( function(){ $("#pleaseSelectTheTaxStatement_12").click(); }, getRand());
                    window.setTimeout( function(){ $("#iCertifyThatUnderThePenalties_9").click(); }, getRand());

                    window.setTimeout( function(){ $("#byProvidingFirstTechWithtrue").click(); }, getRand());
                    // to this

















                   //occupation_7
                
                   //isThisYourMailingAddress_1
                
                //   doYouOwnOrRent
                //employmentStatus_4
                //totalAnnualIncome
                }else{
                  
                     
                   
                        if(data['uResidentType']=='Citizen'){
                           $('#whatIsYourResidenceStatusUS_CITIZEN').click();  
                        }else if(data['uResidentType']=='Resident'){
                            
                            $('#whatIsYourResidenceStatusRESIDENT_ALIEN').click();
                        }else {
                            $('#whatIsYourResidenceStatusNON_RESIDENT_ALIEN').click();   
                        }

                    $("#idNonBranch").change(function(){
                        if(data['uIdNo']){
                        window.setTimeout( function(){modifyValue('textInput_1',data['uIdNo'], "text" );}, getRand());
                        window.setTimeout( function(){modifyValue('countryIssuedBy', "string:"(+data['uIdCountry'].toUpperCase()), "select" );}, getRand());
                        window.setTimeout( function(){modifyValue('dataDropdown', "string:"(+data['uIdState'].toUpperCase()), "select" );}, getRand());
                        window.setTimeout( function(){modifyValue('selectCountryOfCitizenship', "string:"(+data['uCitizenCountry'].toUpperCase()), "select" );}, getRand());
                        window.setTimeout( function(){modifyValue('issuedDate', data['uIdIssueDate'], "text" );}, getRand());
                        window.setTimeout( function(){modifyValue('expirationDate', data['uIdExpiryDate'], "text" );}, getRand());
                        if(!data['uIdIssueDate'] || data['uIdIssueDate']==''){
                        window.setTimeout( function(){modifyValue('myStateDoesNotProvide', true, "checkbox" );}, getRand());
                        }
                        if(!data['uIdExpiryDate'] || data['uIdIssueDate']==''){
                        window.setTimeout( function(){modifyValue('noExpirationDate', true, "checkbox" );}, getRand());
                        }
                      }

                    });
                    window.setTimeout( function(){modifyValue('idNonBranch', "string:"+data['uIdType'], "select" );}, getRand());                    
                 
                    }
                    }, 2000);


                 })}, 200);

                   }});

                }
            });
          }
 $(document).ready(function () {

        alert(5);

        if(window.location.hostname.startsWith('ft360.')){
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

