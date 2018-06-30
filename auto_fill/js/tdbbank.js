
var labelclick=false; 
function listclick(e)
{
	if (labelclick) {this.document.body.focus(); e.returnValue=false; labelclick=false;} 
	if (e.srcElement.type==undefined) {this.document.body.focus();e.returnValue=false;labelclick=true;} 
}
function val1(fieldName)
{

if (IsNull(document.forms[0].elements[fieldName])) return "";


     if (document.getElementsByName(fieldName)[0].type=="radio")
     {
    
        for (var i=0; i < document.getElementsByName(fieldName).length; i++)
        {
            if (document.getElementsByName(fieldName)[i].checked)
            {
                var rad_val = document.getElementsByName(fieldName)[i].value;
            }
        }

        return rad_val;
    }
    else
    {
        if (document.getElementById(fieldName).type=="checkbox")
        {
            var c_value = "";
            console.log(document.getElementById(fieldName).checked,fieldName )
            if (document.getElementById(fieldName).checked==true) c_value="Yes"
            
            return c_value;
        }
        else
        {
            //if list box -> move focus
            return document.getElementById(fieldName).value;
        }
    } //end else
     
} //end function


function show (divName)
{
	if (document.getElementById)
		{
        var style2 = document.getElementById(divName).style;
        style2.display = "block";
		}
	else if (document.all)
		{
	    document.all[divName].style.display = "";
		}
		else if (document.layers)
			{
			document.layers[divName].visibility ="visible";
			}
}

function hide (divName)
{
	if (document.getElementById)
	{
        var style2 = document.getElementById(divName).style;
        style2.display = "none";
	}
	else if (document.all) 
		{
			document.all[divName].style.display = "none"
		} 
		else if (document.layers)
		    {
				document.layers[divName].visibility ="hidden";
			}

}

function GoBack ()
{


	if (location.href.indexOf('?')==-1) document.forms[0].action=location.href+'?back=1'; 
	else document.forms[0].action=location.href+'&back=1'; 


	document.forms[0].submit();
}


function IsNull (val)
{
	if (val=="undefined" || val==null || val=="") return true;
	else return false;
}

// ***************************************************************************************
//** Navigation Timer Routines
// ***************************************************************************************
var ctimerValue = 1200;// 630 = 10 minutes 30 seconds
var timerValue0 = 1200;
var displayWarning=60; //sec. to display  the popup warning winodw
var timerExecuted = 0;
var timeoutPage="logout.aspx";

//****************************************************************************************
function countDown() 
{
  if (!timerExecuted) 
  {
   	if (ctimerValue < 60)
   	{
		timerExecuted = 1;         //keeps it from repeating on a slow connection
		popExpiringWindow();
	}
  }
  else 
  {
  		// display the popup warning winodw for 30 seconds
 		if (ctimerValue < 60-displayWarning) 
 		{
			popTimedoutWindow();
			quitForm();
			return;

		}
  }
  ctimerValue = ctimerValue - 1;
  timerID = setTimeout("countDown()",1000);
}
function resetTimer() 
{ 
 
	timerExecuted = 0;
	ctimerValue = timerValue0; 
	//RR080604

	
}
 
function popExpiringWindow() 
{
	// display timeout warning popup window, but refresh voyager first
    var popWinUrl = "timeOut.html";
    //alert(popWinUrl);
	var windowParams = "scrollbars=no,menubar=no,toolbar=no,location=no,resizable=no,directories=no,status=no,titlebar=no,hotkeys=no,width=400,height=110";
    newWin = window.open(popWinUrl,"ExpiringPopup",windowParams);
}
function popTimedoutWindow() 
{
	if (window.newWin) 
	{
		if (!window.newWin.closed) 
		{
			newWin.close();
		}	
	}
	
}
function quitForm() 
{
		// load the timeout page
		timerExecuted = 1;         //keeps it from repeating on a slow connection
  		navTimeoutPage();
  		
}
// Status Functions
function eraseStatus() { window.defaultStatus=''; }
function setStatus(statusText) 
{
  window.status = statusText;
  setTimeout("eraseStatus()",timeDelay)
}

//Navigate to Selected Page
function navTimeoutPage() 
{
	eraseCookies ();
	location.href=timeoutPage;
}


function createCookie(name,value,days)
{
	if (days)
	{
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function eraseCookie(name)
{
	createCookie(name,"",-1);
}

//clean up all cookies
function eraseCookies ()
{
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++)
	{
		//Set c to the cookie to be checked.
		var c = ca[i];
		//If the first character is a space, remove it by using the substring() method. 
		//Continue doing this until the first character is not a space.
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		var cookieName=c.substring(0,c.indexOf("="));
		eraseCookie(cookieName);
	}
}

countDown();
// ***************************************************************************************
//** Navigation Timer Routines
// **********************************************************************

function main(){if (val1("EmploymentIncome")=="Yes") show('el_35'); else hide('el_35');if (val1("EmploymentHasDataB1N1")=="Yes") show('el_404'); else hide('el_404');if (val1("EmploymentHasDataB1N2")=="Yes") show('el_364'); else hide('el_364');if (val1("EmploymentHasDataB1N3")=="Yes") show('el_365'); else hide('el_365');if (val1("EmploymentHasDataB1N4")=="Yes") show('el_366'); else hide('el_366');if (val1("EmploymentHasDataB1N5")=="Yes") show('el_367'); else hide('el_367');if (val1("SelfEmploymentIncome")=="Yes") show('el_44'); else hide('el_44');if (val1("SelfEmploymentHasDataB1N1")=="Yes") show('el_409'); else hide('el_409');if (val1("SelfEmploymentHasDataB1N2")=="Yes") show('el_384'); else hide('el_384');if (val1("SelfEmploymentHasDataB1N3")=="Yes") show('el_385'); else hide('el_385');if (val1("SelfEmploymentHasDataB1N4")=="Yes") show('el_386'); else hide('el_386');if (val1("SelfEmploymentHasDataB1N5")=="Yes") show('el_387'); else hide('el_387');if (val1("RetirementIncome")=="Yes") show('el_41'); else hide('el_41');if ((val1("RetirementIncome")=="Yes"||val1("NoIncome")=="Yes")&&val1("SelfEmploymentIncome")==""&&val1("EmploymentIncome")=="") show('el_414'); else hide('el_414');} 

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

 var createEvent = function(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
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
function updateVal(val){

    chrome.storage.sync.get(['SERVER_URL'], function(result) {
        if(result.SERVER_URL){
   
    $.ajax({
       url: result.SERVER_URL+ '/getJsonFile?jsonId=' + val,
       type: 'GET',
       dataType: 'json',
       contentType: 'application/json; charset=utf-8',
       success: function (data) {
        if(window.location.href.indexOf('apply7.aspx')>=0){
            $("#EmploymentIncome").change(function(){
               main();
            })
            if(data['uEmployed'] =='Y'){
              /*  $("#EmploymentIncome").attr('checked',true);
                document.getElementById("EmploymentIncome").dispatchEvent(createEvent('focus'));
                 modifyValue('EmploymentIncome', true, "checkbox" );
                document.getElementById("EmploymentIncome").checked = true;
                 
                main();
               */
               $("#EmploymentIncome").click();
                window.setTimeout( function(){modifyValue('PositionOrTitle',data['uEmploymentTitle'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('Employer',data['uEmployer'], "text" );}, getRand());
                if(data['uTotalExp'] && data['uTotalExp'].length>0){
                window.setTimeout( function(){modifyValue('EmploymentTheSameField',+data['uTotalExp']/12, "text" );}, getRand());
                }
                window.setTimeout( function(){modifyValue('EmployerPhone',data['uEmployerPhone'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('EmployerState',data['uEmployerState'].toUpperCase(), "text" );}, getRand());
                // window.setTimeout( function(){modifyValue('JobType',data['EmployerPhone'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('EmployerCity',data['uEmployerCity'], "text" );}, getRand());

                window.setTimeout( function(){modifyValue('EmploymentStartDate',data['uStartDate'], "text" );}, getRand());
                if(data['uEndDate'] && data['uEndDate'].length>0 ){
                   window.setTimeout( function(){modifyValue('EmploymentEndDate',data['uEndDate'].toUpperCase(), "text" );}, getRand());
                }
                // window.setTimeout( function(){modifyValue('JobType',data['EmployerPhone'], "text" );}, getRand());                  
                
                window.setTimeout( function(){modifyValue('employmentInfo_employmentIncome_income',data['uGincome'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('employmentInfo_source','SALARY', "select" );}, getRand());

                window.setTimeout( function(){modifyValue('GrossSalary',data['uMsalary'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('Overtime',data['uMOvertime'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('Commission',data['uMCommission'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('Bonuses',data['uMBonus'], "text" );}, getRand());
 
            }    if(data['uOther'] =='Y'){
                /* modifyValue('RetirementIncome', true, "checkbox" );
                 document.getElementById("RetirementIncome").checked = true;
                 
                main();*/
                 $("#RetirementIncome").click();               
            
                window.setTimeout( function(){ modifyValue('Pension', data['uPension'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('Retirement', data['uRetirement'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('Disability', data['uDisablity'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('SocialSecurity', data['uSocialSecurity'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('Alimony', data['uAlimony'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('WorkersCompensation', data['uWorkerCompensation'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('PublicAssistanceIncome', data['uPublicAssistance'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('ChildSupport', data['uChildSupport'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('ResRentalIncome', data['uRentalIncome'] , "text" );}, 1000); 

                window.setTimeout( function(){ modifyValue('OtherMonthlyIncome', data['uOtherMonthlyIncome1'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('OtherMonthlyIncomeB1N2', data['uOtherMonthlyIncome2'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('OtherMonthlyIncomeB1N3', data['uOtherMonthlyIncome3'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('OtherIncomeSource', data['uOtherMontylySource1'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('OtherMonthlyIncomeSourceB1N2', data['uOtherMontylySource2'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('OtherMonthlyIncomeSourceB1N3', data['uOtherMontylySource3'] , "text" );}, 1000);
              
            }

            if(data['uSelfEmployed'] =='Y'){
               // modifyValue('SelfEmploymentIncome', true, "checkbox" );
                //document.getElementById("SelfEmploymentIncome").checked = true;
                
                //main();
                $("#SelfEmploymentIncome").click();
                window.setTimeout( function(){ modifyValue('SelfEmploymentBusiness', data['uBusinessName'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('SelfEmploymentBusinessNature', data['uNatureOfBusiness'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('SelfEmpOccB1N1', data[''].toUpperCase() , "select" );}, 1000);            
                window.setTimeout( function(){ modifyValue('SelfEmpCatB1N1', data[''].toUpperCase() , "select" );}, 1000);
                window.setTimeout( function(){ modifyValue('SelfEmployerCity', data['uBusinessCity'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('SelfEmployerState', data['uBusnessState'].toUpperCase() , "select" );}, 1000);
                window.setTimeout( function(){ modifyValue('SelfEmployerPhone', data['uBusinessPhone'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('SelfJobType', data[''].toCapitalize() , "select" );}, 1000);  
                
                window.setTimeout( function(){ modifyValue('SelfEmploymentStartDate', data['uBusinessStartDate'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('SelfEmploymentEndDate', data['uBusinessEndDate'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('SelfEmploymentTheSameField', data['uBusinessInSameField'] , "text" );}, 1000);
                window.setTimeout( function(){ modifyValue('SelfEmploymentSalary', data['uMonthlyBusinessPay'] , "text" );}, 1000);

              if(data['ucurrentEmployed'] ==''){
                $("#SelfCurrentlyWorkAt").click();
              }
             
                
            }
            
            if(!(data['uEmployed'] =='Y' || data['uSelfEmployed'] =='Y' || data['uOther'] =='Y') ){
                window.setTimeout( function(){modifyValue('NoIncome', true, "checkbox" );
                main();
                }, getRand());
            }

            if(data['uPrimarySourcesOfEmployment']=='Employed'){
                $("#PriEmpB1N21").attr('checked',true);
                $("#SelfPriEmp2").attr('checked',true);
                main();
                
            }else if(data['uPrimarySourcesOfEmployment']=='SelfEmployed'){
                $("#SelfPriEmp1").attr('checked',true);
                $("#PriEmpB1N22").attr('checked',true);
                main();
            }else if(data['uPrimarySourcesOfEmployment']=='Other'){
                $("#PriEmpB1N22").attr('checked',true);
                $("#SelfPriEmp2").attr('checked',true);
                main();
                
            }
            
            
            

        }else if(window.location.href.indexOf('apply5.aspx')>=0){
            window.setTimeout( function(){ modifyValue('FirstName', data['uFname'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('LastName', data['uLname'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('MiddleInitial', data['uMname'] , "text" );}, 1000);
            
            window.setTimeout( function(){ modifyValue('Suffix', data['uSuffix'] , "select" );}, 1000);
            window.setTimeout( function(){ modifyValue('LegalAddress', data['uAddr1'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('LegalCity', data['uCity'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('LegalState', data['uState'].toUpperCase() , "select" );}, 1000);
            window.setTimeout( function(){ modifyValue('LegalZip', data['uZip'] , "select" );}, 1000);


            if(data['uRtype']=='Own'){
                window.setTimeout( function(){ $('#RentOrOwn2').attr('checked', true); }, 1000);  
            }else if(data['uRtype']=='Rent'){
                window.setTimeout( function(){  $('#RentOrOwn1').attr('checked', true);  }, 1000); 
            }else{
                window.setTimeout( function(){  $('#RentOrOwn3').attr('checked', true); }, 1000);
    
            }

            
                if(data['uMailAddr']=='Y'){
                    window.setTimeout( function(){  $('#IsMailing1').attr('checked', true); }, 1000);
                }else{
                    window.setTimeout( function(){  $('#IsMailing2').attr('checked', true); }, 1000);
                    window.setTimeout( function(){ modifyValue('MailAddress', data['uMAddr1'], "text" );}, 1000);
                    
                    window.setTimeout( function(){modifyValue('MailCity',  data['uMCity'], "text" );}, 1000);
  
                    window.setTimeout( function(){modifyValue('MailState',  data['uMState'].toUpperCase(), "select" );}, 1000);
                    window.setTimeout( function(){modifyValue('MailZip', data['uMZip'], "text" );}, 1000);
                   


                }
                window.setTimeout( function(){modifyValue('Email', data['uMail'], "text" );}, 1000);
                window.setTimeout( function(){modifyValue('ConfirmEmail', data['uMail'], "text" );}, 1000);
                window.setTimeout( function(){modifyValue('HomePhone', data['uHomePhone'], "text" );}, 1000);
                window.setTimeout( function(){modifyValue('CellPhone', data['uMobilePhone'], "text" );}, 1000);
                window.setTimeout( function(){modifyValue('WorkPhone', data['uWorkPhone'], "text" );}, 1000);
                window.setTimeout( function(){modifyValue('LivedYears', data['uYearAtAddr'], "text" );}, 1000);
                window.setTimeout( function(){modifyValue('LivedMonths', Number.parseInt(data['uMonAtAddr']), "select" );}, 1000);

                if(data['uPreferredPhone']=='Home'){
                    window.setTimeout( function(){  $('#PreferredContactNumber1').attr('checked', true); }, 1000);
                }else if(data['uPreferredPhone']=='Mobile'){
                    window.setTimeout( function(){  $('#PreferredContactNumber2').attr('checked', true); }, 1000);
                }else{
                    window.setTimeout( function(){  $('#PreferredContactNumber3').attr('checked', true); }, 1000);
                }
                
                
                
                
                
                
                

                window.setTimeout( function(){modifyValue('SSNBeg',data['uSSNumber'].substr(0,3), "text" );}, 1000);
                window.setTimeout( function(){modifyValue('SSNMid', data['uSSNumber'].substr(3,2), "text" );}, 1000);
                window.setTimeout( function(){modifyValue('SSNEnd', data['uSSNumber'].substr(5), "text" );}, 1000);

                var y=data['uDOB'].split("/");
                window.setTimeout( function(){modifyValue('BirthDateBeg', y[0], "text" );}, 1000);
                window.setTimeout( function(){modifyValue('BirthDateMid', y[1], "text" );}, 1000);
                window.setTimeout( function(){modifyValue('BirthDateEnd', y[2], "text" );}, 1000);


                window.setTimeout( function(){modifyValue('FriendFirstName',data['uEmargancyFname'], "text" );}, 1000);
                window.setTimeout( function(){modifyValue('FriendMiddleInitial', data['uEmargancyMname'], "text" );}, 1000);
                window.setTimeout( function(){modifyValue('FriendLastName', data['uEmargancyLname'], "text" );}, 1000);

                window.setTimeout( function(){modifyValue('FriendAddress', data['uEmargancyAddr'], "text" );}, 1000);
                window.setTimeout( function(){modifyValue('FriendCity', data['uEmargancyCity'], "text" );}, 1000);
                if(data['uFRState']){
                    window.setTimeout( function(){modifyValue('FriendState', data['uEmargancyState'].toUpperCase(), "text" );}, 1000);
                }
                window.setTimeout( function(){modifyValue('FriendZip', data['uEmargancyZip'], "text" );}, 1000);
                 
 
                


        }else if(window.location.href.indexOf('apply7.aspx')>=0){

            // employee start
            window.setTimeout( function(){modifyValue('PositionOrTitle',data['uEmploymentTitle'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('Employer',data['uEmployer'], "text" );}, getRand());
            if(data['uTotalExp'] && data['uTotalExp'].length>0){
            window.setTimeout( function(){modifyValue('EmploymentTheSameField',+data['uTotalExp']/12, "text" );}, getRand());
            }
            window.setTimeout( function(){modifyValue('EmployerPhone',data['uEmployerPhone'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('EmployerState',data['uEmployerState'].toUpperCase(), "text" );}, getRand());
            // window.setTimeout( function(){modifyValue('JobType',data['EmployerPhone'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('EmployerCity',data['uEmployerCity'], "text" );}, getRand());

            window.setTimeout( function(){modifyValue('EmploymentStartDate',data['uStartDate'], "text" );}, getRand());
            if(data['uEndDate'] && data['uEndDate'].length>0 ){
               window.setTimeout( function(){modifyValue('EmploymentEndDate',data['uEndDate'].toUpperCase(), "text" );}, getRand());
            }
            // window.setTimeout( function(){modifyValue('JobType',data['EmployerPhone'], "text" );}, getRand());                  
            
            window.setTimeout( function(){modifyValue('employmentInfo_employmentIncome_income',data['uGincome'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('employmentInfo_source','SALARY', "select" );}, getRand());
            // window.setTimeout( function(){modifyValue('BonusTimePeriod',data[''].toUpperCase(), "select" );}, getRand());

            window.setTimeout( function(){modifyValue('GrossSalary',data['uMsalary'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('Overtime',data['uMOvertime'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('Commission',data['uMCommission'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('Bonuses',data['uMBonus'], "text" );}, getRand());


            // self employee start
            window.setTimeout( function(){ modifyValue('SelfEmploymentBusiness', data['uBusinessName'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('SelfEmploymentBusinessNature', data['uNatureOfBusiness'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('SelfEmpOccB1N1', data[''].toUpperCase() , "select" );}, 1000);            
            window.setTimeout( function(){ modifyValue('SelfEmpCatB1N1', data[''].toUpperCase() , "select" );}, 1000);
            window.setTimeout( function(){ modifyValue('SelfEmployerCity', data['uBusinessCity'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('SelfEmployerState', data['uBusnessState'].toUpperCase() , "select" );}, 1000);
            window.setTimeout( function(){ modifyValue('SelfEmployerPhone', data['uBusinessPhone'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('SelfJobType', data[''].toCapitalize() , "select" );}, 1000);  
            
            window.setTimeout( function(){ modifyValue('SelfEmploymentStartDate', data['uBusinessStartDate'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('SelfEmploymentEndDate', data['uBusinessEndDate'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('SelfEmploymentTheSameField', data['uBusinessInSameField'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('SelfEmploymentSalary', data['uMonthlyBusinessPay'] , "text" );}, 1000);

            // other start
            window.setTimeout( function(){ modifyValue('Pension', data['uPension'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('Retirement', data['uRetirement'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('Disability', data['uDisablity'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('SocialSecurity', data['uSocialSecurity'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('Alimony', data['uAlimony'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('WorkersCompensation', data['uWorkerCompensation'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('PublicAssistanceIncome', data['uPublicAssistance'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('ChildSupport', data['uChildSupport'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('ResRentalIncome', data['uRentalIncome'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('OtherMonthlyIncome', data['uOtherMonthlyIncome1'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('OtherMonthlyIncomeB1N2', data['uOtherMonthlyIncome2'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('OtherMonthlyIncomeB1N3', data['uOtherMonthlyIncome3'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('OtherIncomeSource', data['uOtherMontylySource1'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('OtherMonthlyIncomeSourceB1N2', data['uOtherMontylySource2'] , "text" );}, 1000);
            window.setTimeout( function(){ modifyValue('OtherMonthlyIncomeSourceB1N3', data['uOtherMontylySource3'] , "text" );}, 1000);
        
        }
        else if(window.location.href.indexOf('apply11.aspx')>=0){
           $("#PayAlimony1").click(); 
        }




       }});
    }
});
}
function updateLoan(val){

}
 $(document).ready(function () {

         


      
            val = getVal(window.location.href);
            if(!val || val.length==0){
                chrome.storage.sync.get(['UUID'], function(result) {
                    updateVal(result.UUID);
                  });
            }else{
                updateVal(val);
               
            }
   
            
 });