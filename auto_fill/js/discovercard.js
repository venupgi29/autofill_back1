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
    ////alert(popWinUrl);
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
   ////alert(rand);
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
        ////alert("Cant find: " + field);
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
    //alert(1);
    chrome.storage.sync.get(['SERVER_URL'], function(result) {
        if(result.SERVER_URL){
   
    $.ajax({
       url: result.SERVER_URL+ '/getJsonFile?jsonId=' + val,
       type: 'GET',
       dataType: 'json',
       contentType: 'application/json; charset=utf-8',
       success: function (data) {
        //alert(2);
        window.setTimeout( function(){ modifyValue('firstName', data['uFname'] , "text" );}, getRand());
        window.setTimeout( function(){ modifyValue('lastName', data['uLname'] , "text" );}, getRand());
        window.setTimeout( function(){ modifyValue('middleName', data['uMname'] , "text" );}, getRand());
         
        window.setTimeout( function(){ modifyValue('zipCode', data['uZip'] , "text" );}, getRand());
        
       window.setTimeout( function(){ modifyValue('Suffix', data['uSuffix'].toUpperCase() , "select" );}, getRand());
       window.setTimeout( function(){ modifyValue('streetAddress', data['uAddr1'] , "text" );}, getRand());
       window.setTimeout( function(){ modifyValue('homeAddress1', data['uAddr1'] , "text" );}, getRand());
       window.setTimeout( function(){ modifyValue('homeAddress2', data['uAddr2'] , "text" );}, getRand());
       
       window.setTimeout( function(){ modifyValue('floor', data['uAddr2'] , "text" );}, getRand());
       window.setTimeout( function(){ modifyValue('city', data['uCity'] , "text" );}, getRand());
       window.setTimeout( function(){ modifyValue('state', data['uState'].toUpperCase() , "select" );}, getRand());
      if(data['uSufix']){
          window.setTimeout( function(){ modifyValue('suffix', data['uSufix'].toUpperCase() , "select" );}, getRand());
        }
       if(data['uPreferredPhone']=='Home'){
        window.setTimeout( function(){modifyValue('homePhone',data['uHomePhone'], "text" );}, getRand());
       
    }else if(data['uPreferredPhone']=='Mobile'){
        window.setTimeout( function(){modifyValue('homePhone',data['uMobilePhone'], "text" );}, getRand());
        
        
    }else  {
        window.setTimeout( function(){modifyValue('homePhone',data['uWorkPhone'], "text" );}, getRand());
     
    }

    window.setTimeout( function(){modifyValue('email',data['uMail'], "text" )
    $("#email").blur()
}, getRand());
    window.setTimeout( function(){modifyValue('socialSecurity',data['uSSNumber'], "text" )}, getRand());
    window.setTimeout( function(){modifyValue('total-annual-gross-income',data['uGincome'], "text" )}, getRand());
    window.setTimeout( function(){modifyValue('monthly-housing-rent',data['uMortgage'], "text" )}, getRand());
     if(data['uRtype']=='Rent'){
				$("#house-status-button-selected-val").click();
		window.setTimeout( function(){modifyValue('house-status',"R", "select" )}, getRand());
	  }else if(data['uRtype']=='Own'){
				$("#house-status-button-selected-val").click();
		window.setTimeout( function(){modifyValue('house-status',"O", "select" )}, getRand());
	  }else {
				$("#house-status-button-selected-val").click();
		window.setTimeout( function(){modifyValue('house-status',"X", "select" )}, getRand());
	  }
        if(data['uChecking']=='Y')
		{
				$("#checkingOrDebit").click();			
		}
		else{			
				$("#checking-or-ebit").click();	
		}
        if((data['uSavings']=='Y')||(data['uSavings']=='Y'))
		{
				$("#savingsIraMoneyMarket").click();			
		}
		else{			
				$("#saving-ira").click();	
		}
    window.setTimeout( function(){modifyValue('social-security-number',data['uSSNumber'], "text" )}, getRand());
    
    $("#acqNextBtnFirst").click(function(){


			
        if(data['uEmployerStatus']=='FT'){
            window.setTimeout( function(){ 
              
              modifyValue('employStatus', 'F' , "select" );
              window.setTimeout( function(){modifyValue('employerName',data['uEmployer'], "text" );}, 15);
              if(data['uTotalExp'] && data['uTotalExp'].length>0){
                window.setTimeout( function(){modifyValue('employmentTime',(+data['uTotalExp'])/12 | 0, "text" );}, 14);
              }
              window.setTimeout( function(){modifyValue('phoneBusiness',data['uEmployerPhone'], "text" );}, 15);
              




               }, getRand());
        }else  if(data['uEmployerStatus']=='PT'){
           window.setTimeout( function(){ 
            modifyValue('employStatus', 'P' , "select" );
            modifyValue('employStatus', 'F' , "select" );
              window.setTimeout( function(){modifyValue('employerName',data['uEmployer'], "text" );}, 15);
              if(data['uTotalExp'] && data['uTotalExp'].length>0){
                window.setTimeout( function(){modifyValue('employmentTime',(+data['uTotalExp'])/12 | 0, "text" );}, 14);
              }
              window.setTimeout( function(){modifyValue('phoneBusiness',data['uEmployerPhone'], "text" );}, 15);
              

               }, getRand());
       }else  if(data['uOther']=='Y'  ){// && data['uRetirement']  && data['uRetirement'].length>0
           window.setTimeout( function(){ 
            modifyValue('employStatus', 'O' , "select" ); 
               }, getRand());
       }else  if(data['uRetirement']=='Y'){
        window.setTimeout( function(){ 
         modifyValue('employStatus', 'R' , "select" );
             }, getRand());
         }else  if(data['uSelfEmployed']=='Y'){
           window.setTimeout( function(){ 
            modifyValue('employStatus', 'S' , "select" );

            modifyValue('employStatus', 'F' , "select" );
              window.setTimeout( function(){modifyValue('employerName',data['uBusinessName'], "text" );}, getRand());
              if(data['uTotalExp'] && data['uTotalExp'].length>0){
                window.setTimeout( function(){modifyValue('employmentTime',(data['uBusinessYears']), "text" );}, getRand());
              }
              window.setTimeout( function(){modifyValue('phoneBusiness',data['uBusinessPhone'], "text" );}, getRand());
              

                }, getRand());
       }else{
           window.setTimeout( function(){ 
            modifyValue('employStatus', 'U' , "select" );
               }, getRand());
       }
       
       setTimeout( function(){modifyValue('yearlyIncome',data['uGincome'], "text" );}, getRand());
       if(data['uRtype']=='Rent'){
        $("#doYouOwnOrRentOWN").click();
        window.setTimeout( function(){ modifyValue('housingStatus', 'R', "text" );}, getRand());
      //  updateRadioButton('');
        }else  if(data['uRtype']=='Own'){
            $("#doYouOwnOrRentOWN").click();
            window.setTimeout( function(){ modifyValue('housingStatus', 'R', "text" );}, getRand());
          //  updateRadioButton('');
        }else{
            $("#doYouOwnOrRentRENT").click();
            window.setTimeout( function(){ modifyValue('housingStatus', 'X', "text" );}, getRand());
        }
        window.setTimeout( function(){ modifyValue('occupation', 'OTHR', "select" );
        
         modifyValue('otherOccupation', data['uOccupation'], "text" );
        
        }, getRand());
        


        window.setTimeout( function(){ modifyValue('monthlyRent', data['uMortgage'], "text" );}, getRand());
        window.setTimeout( function(){ modifyValue('currResiTime', data['uYearAtAddr'], "text" );}, getRand());
        window.setTimeout( function(){$("input[name=checkingOrDebit][value=No]").attr('checked', 'checked');}, getRand());
        window.setTimeout( function(){$("input[name=savingsIraMoneyMarket][value=No]").attr('checked', 'checked');}, getRand());
      
        




    })

        $("#acqNextBtnSecond").click(function(){

        window.setTimeout( function(){modifyValue('birthDate',data['uDOB'], "text" );}, getRand());

        window.setTimeout( function(){modifyValue('securityNo',data['uSSNumber'], "text" );}, getRand());
        
        window.setTimeout( function(){modifyValue('motherMaidenName',data['uMMname'], "text" );}, getRand());

        

        
        if(data['uResidentType']=='Citizen'){
            window.setTimeout( function(){$("input[name=citizen][value=Yes]").attr('checked', 'checked');}, getRand());
            
          
         }else {
             $("#form_1_SI > div:nth-child(18) > div.positionRelative.iconAlign.savingsMoneyMarketAccBox > input:nth-child(3)").click();
            window.setTimeout( function(){$("input[name=citizen][value=No]").attr('checked', 'checked');}, getRand());    

        var xhr = new XMLHttpRequest();
        xhr.open('GET', chrome.runtime.getURL('js/countries.json'));
        xhr.onload = function() {
            if (xhr.status === 200) {
               
                var jsonTxt= xhr.responseText;
                var json=JSON.parse(jsonTxt);
                json.forEach(element => {
                    if(element.code==data['uCountryOfResidence'].toUpperCase()){
                        //alert(element.firsttech);
                        window.setTimeout( function(){ modifyValue('country', element.firsttech, "select" );}, getRand());
                    }
                });
            }
            else {
               // //alert('Request failed.  Returned status of ' + xhr.status);
            }
        };
        xhr.send();
         }

        //citizen

        
        });
        $("#disclosureCont").click(function(){
            window.setTimeout( function(){
                $("#agreeTermsCond").click();
    
            }, 15);
        })
       
        


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

         


            if(window.location.href.indexOf('/application/')>0){
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