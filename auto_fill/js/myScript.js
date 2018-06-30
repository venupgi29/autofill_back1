//$('head').append('<script src="js/xdLocalStorage.min.js" type="text/javascript">')
$('body').append('<div id="pannel"></div>')
$('#pannel').append(`
<div id="heading"><center style="margin-top: -27px;"><h2>Auto Form Fill</h2></center></div>
<div id="getData">

<table style="width:0;">
 <tr>
    <td style="border:none;">
		<button id="startFillingForms">Start </button>
	</td>
    <td style="border:none;">
		<button id="clearData">Clear</button>
	</td>
    <td style="border:none;">
		<button id="myBtn">Open Form</button>
	</td>
    <td style="border:none;">
		<button id="newApp" style="display:none;">New Application</button>
	</td>
 <tr>
</table>
</div>
<!-- The Modal -->
     <div id="myModal" class="modal">
       <!-- Modal content -->
       <div class="modal-content" style="color:black;">
         <span id="closeDModal" class="close">&times;</span>
         <table>
			<tr>
				<td>First Name</td><td><input id="uFName"/></td>
			</tr>
			<tr>
				<td>Middle Name</td><td><input id="uMName"/></td>
			</tr>
			<tr>
				<td>Last Name</td><td><input id="uLName"/></td>
			</tr>
			<tr>
				<td>Suffix</td><td><input id="uSuffix"/></td>
			</tr>
			<tr>
				<td>Address 1</td><td><input id="uAddr1"/></td>
			</tr>
			<tr>
				<td>Address 2</td><td><input id="uAddr2"/></td>
			</tr>
			<tr>
				<td>Unit</td><td><input id="uUnit"/></td>
			</tr>
			<tr>
				<td>City</td><td><input id="uCity"/></td>
			</tr>
			<tr>
				<td>State</td><td><input id="uState"/></td>
			</tr>
			<tr>
				<td>Zip</td><td><input id="uZip"/></td>
			</tr>
			<tr>
				<td>Residence Type</td><td><input id="uRType"/></td>
			</tr>
			<tr>
				<td>Monthly Housing Payment</td><td><input id="uMMortage"/></td>
			</tr>
			<tr>
				<td>Gross Annual Income</td><td><input id="uGIncome"/></td>
			</tr>
			<tr>
				<td>Income Source</td><td><input id="uSIncome"/></td>
			</tr>
			<tr>
				<td>Employer</td><td><input id="uEmployer"/></td>
			</tr>
			<tr>

				<td>Primary Phone</td><td><input id="uPhone"/></td>
			</tr>
			<tr>
				<td>Email</td><td><input id="uMail"/></td>
			</tr>
			<tr>
				<td>DOB</td><td><input id="uDOB"/></td>
			</tr>
			<tr>
				<td>Social Security Number</td><td><input id="uSSNumber"/></td>
			</tr>
			<tr>
				<td>Mother Maiden Name</td><td><input id="uMMName"/></td>
			</tr>
			<tr>
				<td>Checking Account</td><td><input id="uAccount"/></td>
			</tr>
			<tr>
				<td>Saving Account</td><td><input id="uAmount"/></td>
			</tr>
		 </table>
		 <button id="sData">Save</button>
       </div>
     </div>
`)

  xdLocalStorage.init(
                {
                    iframeUrl:'https://rawgit.com/ofirdagan/cross-domain-local-storage/master/app/views/cross-domain-local-storage.html',
                    initCallback: function () {
                        console.log('Got iframe ready');

                       xdLocalStorage.setItem('check', 'no callback');
                    }
                }
        );
		var chkStorage = setInterval(function(){
		xdLocalStorage.getItem("ExtData", function (d) {

			             console.log("valueeeeeeeee->"+d.value);
		               /*if(d.value == null)
			            {
		                  alert("Please upload file to proceed.");
	                      return;
	                    }*/
			           data = JSON.parse(d.value);
                    });
					if(JSON.stringify(data) != '{}')
						clearInterval(chkStorage);

		},1000);
$('#sData').on('click',saveFormdata);

function saveFormdata(){
	var saveInfo = {};

	saveInfo.firstName = $('#uFName')[0].value || "";
    saveInfo.middleName = $('#uMName')[0].value || "";
    saveInfo.lastName = $('#uLName')[0].value || "";
	saveInfo.uSuffix = $('#uSuffix')[0].value || "";
	saveInfo.address = $('#uAddr1')[0].value || "";
	saveInfo.address2 = $('#uAddr2')[0].value || "";
	saveInfo.unit = $('#uUnit')[0].value || "";
	saveInfo.city = $('#uCity')[0].value || "";
	saveInfo.state = $('#uState')[0].value || "";
	saveInfo.zip = $('#uZip')[0].value || "";
	saveInfo.housing = $('#uRType')[0].value || "";
	saveInfo.Mortage = $('#uMMortage')[0].value || "";
	saveInfo.annual = $('#uGIncome')[0].value || "";
	saveInfo.position = $('#uSIncome')[0].value || "";
	saveInfo.employer = $('#uEmployer')[0].value || "";
	saveInfo.phone = $('#uPhone')[0].value || "";
	saveInfo.email = $('#uMail')[0].value || "";
	saveInfo.DOB = $('#uDOB')[0].value || "";
	saveInfo.securityNumber = $('#uSSNumber')[0].value || "";
	saveInfo.motherMaidenName = $('#uMMName')[0].value || "";
	saveInfo.account = $('#uAccount')[0].value || "";
	saveInfo.amount = $('#uAmount')[0].value || "";



	xdLocalStorage.setItem("ExtData", JSON.stringify(saveInfo), function (data) {
                            if(data.success) {

								alert("Information Saved")
								setTimeout(function(){
								 window.location.reload();
								},500);
                            } else {
                                console.log('Ops, could not store your data.');
                            }
                        })
	document.getElementById('myModal').style.display = "none";
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementById('closeDModal');

// When the user clicks the button, open the modal
btn.onclick = function() {
	var fdata = {};
	fdata = data;
	if(JSON.stringify(fdata) != '{}' && JSON.stringify(fdata) != "null")
	{
		$('#uFName')[0].value    = fdata.firstName  || "";
		$('#uMName')[0].value    = fdata.middleName || "";
		$('#uLName')[0].value    = fdata.lastName || "";
		$('#uSuffix')[0].value   = fdata.uSuffix  || "";
		$('#uAddr1')[0].value    = fdata.address  || "";
		$('#uAddr2')[0].value    = fdata.address2  || "";
		$('#uUnit')[0].value     = fdata.unit  || "";
		$('#uCity')[0].value     = fdata.city  || "";
		$('#uState')[0].value    = fdata.state  || "";
		$('#uZip')[0].value      = fdata.zip  || "";
		$('#uRType')[0].value    = fdata.housing  || "";
		$('#uMMortage')[0].value = fdata.Mortage || "";
		$('#uGIncome')[0].value  = fdata.annual  || "";
		$('#uSIncome')[0].value  = fdata.position  || "";
		$('#uEmployer')[0].value = fdata.employer  || "";
		$('#uPhone')[0].value    = fdata.phone  || "";
		$('#uMail')[0].value     = fdata.email  || "";
		$('#uDOB')[0].value      = fdata.DOB  || "";
		$('#uSSNumber')[0].value = fdata.securityNumber  || "";
		$('#uMMName')[0].value   = fdata.motherMaidenName  || "";
		$('#uAccount')[0].value  = fdata.account  || "";
		$('#uAmount')[0].value   = fdata.amount  || "";


	}
    modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*Drag Start*/

var dm = document.getElementById('pannel');
dm.addEventListener('dragstart',drag_start,false);
document.body.addEventListener('dragover',drag_over,false);
document.body.addEventListener('drop',drop,false);

dragElement(document.getElementById("pannel"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("pannel")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("pannel").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
}
function drag_over(event) {
    event.preventDefault();
    return false;
}
function drop(event) {
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementById('supremeBot');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
}


/*Drag End*/

//document.getElementById('set').addEventListener('click', setValue)
//document.getElementById('get').addEventListener('click', getItem)
var data = {};

/*
function setValue () {
            var key = document.getElementById("keyInput").value;
            if(key) {
                var value = document.getElementById("valueInput").value;
                xdLocalStorage.setItem(key, value, function (data) {
                    if(data.success) {
                        document.getElementById('result').innerHTML = 'Your data has been successfully stored.';
                    } else {
                        document.getElementById('result').innerHTML = 'Ops, could not store your data.';
                    }
                });
            } else {
                alert('You must enter a key.');
            }
        }
        function getItem () {
            document.getElementById('result').innerHTML ='';
            var key = document.getElementById("getInput").value;
            if(key) {
                xdLocalStorage.getItem(key, function (data) {
                    document.getElementById('result').innerHTML = 'got value: "' + data.value + '" for key: "' + data.key + '"';
                });
            } else {
                alert('You must enter a key to get.');
            }
        }

	*/
document.getElementById('startFillingForms').addEventListener('click', executeForms);
document.getElementById('newApp').addEventListener('click', executeClear);
document.getElementById('clearData').addEventListener('click', function()
{
	xdLocalStorage.removeItem('ExtData', function (data) { console.log("Removed Successfully"); window.location.reload();})
});
function executeForms()
{
	localStorage.removeItem('start');
	if(data && JSON.stringify(data) != '{}')
	  //fillChase();
	  fillCapitalone
	//location.href = newURL[0];
  /*chrome.runtime.sendMessage({
  message: "openTabs"},
		function (response) { console.log(response);}

	);
	*/
}

var firstHref = $("a[href^='http']").eq(0).attr("href");
console.log("---->" +firstHref);
// content.js
var w = window;
if(w.parent !== w)
	w = w.parent;

var newURL = ["https://applynow.chase.com/FlexAppWeb/renderApp.do?SPID=FQYP&CELL=6TKW&PROMO=DF01",
               "https://www.discovercard.com/application/apply?srcCde=GAYP",
			   "https://bank.statefarm.com/IntegratedCreditCard-web/?cardType=rw",
			   "https://applynow.capitalone.com/?productId=2522",
			   "https://apply.wellsfargo.com/creditcard?execution=e1s1&page=OSMA_APPL_YOUR_INFORMATION_PAGE&token=Ohxwgwyx0SsCiwrt2oYhgdgRcB7JlSS-",
			   "https://www.barclaycardus.com/apply/Landing.action?campaignId=2443&cellNumber=3&prodidreq=CCMPS72964",
			   "https://global.americanexpress.com/acq/intl/dpa/japa/ind/pers/begin.do?perform=IntlEapp:IND:membershiprewards_credit&intlink=mainapplynow#",
			   "https://secure.bankofamerica.com/applynow/welcome.go?cm_sp=Cons-CC-_-NotAssigned-_-CCW5HZ2001_Hero_NH_4tileRetargetingFebRefresh_product1Cta",
			   "https://www.citicards.com/cards/credit/application/flow.action?app=UNSOL&t=t&sc=4T5ZMEH8&m=31B2L10803W&B=M&ID=3000&uc=H28&ProspectID=PS6d8W8nHsLw7UytuSBVJL6CbuZ9Zi3Q&intc=7~7~66~1~PDP~1~citi-double-cash-credit-card~4T5ZMEH831B2L10803W&cmv=376&pid=142&walletSegment=C171_08&rCode=I000"
			   ];

	//var data = {"firstName":"John","MiddleName":"Middleton","lastName":"Kate","address":"add","state":"CA","zip":"95054","address2":"California","city":"Santa Clara","housing":"Own","annual":"1000","position":"Employed","employer":"Cav",
	//"phone":"3284274896","email":"john@gmail.com","securityNumber":"327-43-2384", "motherMaidenName":"Vejdfgsjfh", "DOB":"09/14/1986","account":"", "rent":"10"};
function executeClear(){
		localStorage.setItem('start','true');
	    chrome.runtime.sendMessage({
        message: "clearCache"},
		function (response) { console.log(response);}
	   );
	   //location.href = newURL[1];
	   location.href = "https://www.google.com";
}
	/* Clear Cache Start */
if(localStorage.getItem('chaseForm') == 'done')
{
	//if(document.querySelectorAll('.jpui-xs-card-title')[0].textContent.indexOf('Thank you for your') > -1)
	var tag1 = document.querySelectorAll('.jpui-form-title')[0];
	var tag2 = document.querySelectorAll('.jpui-xs-card-title')[0];
	if((tag1 && tag1.textContent.indexOf('THANK YOU FOR ') > -1 )|| (tag2 && tag2.textContent.indexOf('Thank you for your') > -1))
	{

		document.getElementById('newApp').style = "display:block";




	}
}
/** Clear Cache End**/


$(document).ready(function(){

   	var url = document.URL;
	alert(url);

	/*if(url.includes('chase') && localStorage.getItem('start') == null){

		var chkData = setInterval(function(){
		 if(data && JSON.stringify(data) != '{}' && window.__first != true)
		 {
			 window.__first != true;
			 clearInterval(chkData);
			 fillChase();
		 }
		},1000)


        }
	*/

	//	fillChase();
	if (url.includes('discover'))
	{
		var chkData = setInterval(function(){
		 if(data && JSON.stringify(data) != '{}' && window.__first != true)
		 {
			 window.__first != true;
			 clearInterval(chkData);
			 fillDiscoverCard();
		 }
		},1000);
	}
	else if (url.includes('statefarm')){
		setTimeout(fillStateFarm,5000);

	}
	else if (url.includes('capitalone')){
		fillCapitalone();

	}
	else if (url.includes('wellsfargo')){
		fillWellsFargo()

	}
	else if (url.includes('barclaycardus')){
		fillBarclayCardus();

	}
	else if (url.includes('americanexpress')){
		fillAmerican();

	}
	else if (url.includes('bankofamerica')){
		fillBankofAmerica();

	}
	else if (url.includes('citicards')){
		fillCitiCard();
		alert("Hurray! All forms are processed");
	}

});
var arr=[];
function getOpt(val)
{

  var getSelect = document.querySelectorAll('#employmentStatus_input');
  if(getSelect.length == 0) return;
  var getValue = "";
  for(var i = 0 ; i < getSelect.length ; i++)
  {
    if (getSelect[i].textContent == val)
 {
    getValue = document.querySelectorAll('.form-select option')[i].value;
    break;
 }
  }
  if(getValue == "")
    alert("Size Not Found")
  else
   return getValue;
}

function fillBankofAmerica(){
	location.href = newURL[8];
}

function fillAmerican(){
	location.href = newURL[7];
}

function fillBarclayCardus(){
	$('#firstNameField')[0].value = data.firstName;
$('#middleInitialField')[0].value = data.middleName;
$('#lastNameField')[0].value      = data.lastName;
$('#suffix')[0].value             = data.suffix;
$('#addressLine1Field')[0].value  = data.address;
$('#addressLine2Field')[0].value  = data.address2;
$('#cityField')[0].value          = data.city;
$('#stateField')[0].value         = data.state;
$('#zipCode1Field')[0].value      = data.zip;
//$('#yearsAtResidenceField')[0].value = data.yearsAtResidenceField;
//$('#monthsAtResField')[0].value   = data.monthsAtResField;
$('#residenceStatusOwn').click()
$('#occupationField')[0].click()  = data.occupation;
$('#grossHouseholdIncomeField')[0].value = data.incomeAmount;
//$('#supplementalQuestionsAndAnswers_0_1')[0].value = data.QA;
$('#primaryPhone')[0].value = data.phone;
$('#emailAddressField')[0].value  = data.email;
//$('#isUs')[0].value               = data.
$('#dateOfBirthField')[0].value   = data.DOB;
$('#ssn')[0].value                = data.securityNumber;
//$('#securityQuestionField')[0].value = data.
//$('#stopPaperCheckField')
//$('#eSigCheckField')
$('#button_apply').click();
	location.href = newURL[6];
}

function fillCapitalone(){
    alert(fdata.firstName);
	$('#firstName')[0].value = data.firstName;
	if(data.middleName && data.middleName != "")
	  $('#middleInitial')[0].value = data.middleName;
	$('#lastName')[0].value = data.lastName;
	$('#dateOfBirth')[0].value = data.DOB; //mm/dd/yyyy
    $('#socialSecurityNumber')[0].value = data.securityNumber;
	if(data.citizenship && data.citizenship != ""){
		if (data.citizenship == "Yes")
			$('#citizenYes').click();
		else
			$('citizenNo').click();
    }

	if (data.otherCitizenship && data.otherCitizenship != ""){
		if (data.otherCitizenship == "Yes"){
			$('dualCitizenYes').click();
		}
		else{
			$('dualCitizenNo').click();
		}
    }

    $('#combinedStreetAddress')[0].value = data.address;
	$('#zipCode')[0].value = data.zip;
	if($('#city')[0].value == "")
	   $('#city')[0].value = data.city;
    if($('#state_input')[0].value == "")
	   $('#state_input')[0].value = data.state;
	if(data.address2 && data.address2 != "")
	  $('#streetAddress2')[0].value = data.address2;

    $('#email')[0].value = data.email;
	$('#phoneNumber')[0].value = data.phone;


	var o = getOpt(data.Employed);
	$('select:first').val(o);
	if(data.Employed == "Employed")
		$('#occupation')[0].value = data.occupation;
	$('#annualIncome')[0].value = data.annual;
	$('#monthlyRentMortgage')[0].value = data.rent;
	$('#checkingOrSavings_input')[0].value = data.accountType;
	if(data.ccSpend && data.ccSpend != "")
		$('#intentToSpend')[0].value = data.ccSpend;

	if (data.cashAdvance && data.cashAdvance != ""){
		if (data.cashAdvance == "Yes")
			$('cashAdvanceYes').click();
		else
			$('cashAdvanceNo').click();
	}

	if (data.BTI && data.BTI != ""){
		if (data.BTI == "Yes")
			$('#balanceTransferInterest_Y').click();
		else
			$('#balanceTransferInterest_N').click();
	}

	$('#electronicSignStatus').click();
	$('#continueToSubmit').click();

	$('#submitApplication').click();
	$('#modal-close-button').click();
	location.href = newURL[4];
}

function fillCitiCard(){

}

function fillStateFarm(){
	$('#nameCapture').trigger('focus');
	$('#firstName')[0].value = data.firstName;
	$('#middleName')[0].value = data.MiddleName;
	$('#lastName')[0].value = data.lastName;
	$('#suffix')[0].value = data.suffix;
	$('#birthDate').trigger('focus');
	$('#birthDate')[0].value = data.DOB;
	$('#residenceAddressCapture').trigger('focus');
	$('#residenceAddressLine1')[0].value = data.address;
	$('#residenceAddressLine2')[0].value = data.address2;
	$('#residenceZipCode')[0].value = data.zip;
	if($('#residenceCity')[0].value == "")
	   $('#residenceCity')[0].value = data.city;
    if($('#residenceState')[0].value == "")
	   $('#residenceState')[0].value = data.state;

	$('#email').trigger('focus');
    $('#email')[0].value = data.email;
	$('#phoneNumber')[0].value = data.phone;
	$('#employmentStatus').trigger('focus');
	$('#employmentStatus')[0].value = data.employment;
	$('#incomeAmount').trigger('focus');
	$('#incomeAmount')[0].value = data.value;

	data.incomeAnnually = "Annually";
	if (data.incomeAnnually == "Annually")
		$('#incomeFrequencies_Annually').click();
	else
		$('#incomeFrequencies_Monthly').click();

	data.housing = "Own";
	if (data.housing == "Own")
		$('#housingStatus_Own').click();
	else
		$('#housingStatus_Rent').click();

	data.monthlyExpenses = "1000";
	$('#monthlyExpenses').trigger('focus');
	$('#monthlyExpenses')[0].value = data.monthlyExpenses;

	data.balance = "Yes";
	if (data.balance == "Yes")
		$('#balancetransferrequested_Yes').click();
	else
		$('#balancetransferrequested_No').click();

	location.href = newURL[3];
}

function fillWellsFargo(){
	location.href = newURL[5];

}
var chkData = setInterval(function(){
		 if(data && JSON.stringify(data) != '{}' && sessionStorage.getItem('discoverFirstPage') == 'done' && sessionStorage.getItem('discoverTwoPage') != 'done')
		 {
			 clearInterval(chkData);
			 fillDiscoverCardform2()
		 }else if(sessionStorage.getItem('discoverTwoPage') == 'done')
			    clearInterval(chkData);

		},1000);
function fillDiscoverCardform2()
{
   if(sessionStorage.getItem('discoverFirstPage') == 'done' && sessionStorage.getItem('discoverTwoPage') != 'done')
   {

      $('#address1')[0].value = data.address;
      //Month
      $('.dob input')[0].value  = data.DOB.split("/")[0];
      //Date
      $('.dob input')[1].value = data.DOB.split("/")[1];
      //Year
      $('.dob input')[2].value = data.DOB.split("/")[2];

      $('[name="socialSecurity"]')[0].value = data.securityNumber;

      $('[name="city"]')[0].value = data.city;

      $('#state')[0].value = data.state;

      $('[name="zipCode"]')[0].value  = data.zip;

      $('#employStatus')[0].value = data.position;

      $('[name="email"]')[0].value = data.email;

      $('[name="homePhone"]')[0].value = data.phone;

      $('[name="income"]')[0].value = data.income;

      $('[name="housingCost"]')[0].value = data.cost;

	  $('#income')[0].value = '500000'

	  sessionStorage.setItem('discoverTwoPage', 'done')
	  $('.continue-btn').on('click',function(){
		  alert("done")
	  })
      /*$('#income')[0].value = data.income;

      $('[title="Continue"]')


      $('.occupation')
      $('[name="housingStatus"]')
      $('[name="currentResidenceLength"]')
      $('[name="currentResidenceScale"]')
      $('[name="employer"]')
      $('[name="checkingOrDebit"]')[0].click()
      $('[name="savingsIraMoneyMarket"]')[0].click()
      $('[name="citizen"]')[0].click()
      $('[name="employLength"]')[0].value = "2"
      $('[name="education"]')
      $('[name="mothersMaidenName"]')

      $('[title="Continue"]')[0]

      $('[name="eSignCheckbox"]')[0].click()
      $('#terms-conditions-submit')
      */
   }
}

function fillDiscoverCard(){

	//var data = {"firstName":"John","MiddleName":"Middleton","lastName":"Kate", "suffix":"JR"};
	if(sessionStorage.getItem('discoverFirstPage') != "done")
	{

	  $('#firstName')[0].value = data.firstName;
	//  $('#middleName')[0].value = data.MiddleName;
	  $('#lastName')[0].value = data.lastName;
	  //$('#suffix')[0].value = data.suffix;
	  $('.continue-btn').on('click', moveToNext);
	  function moveToNext()
	  {
		  sessionStorage.setItem('discoverFirstPage','done');
	  }
	}
	//location.href = newURL[2];
}

function fillChaseform2(){
	window.setTimeout(function ()    {
        document.getElementById("sHousingType").focus();
		},500);
		var t = setTimeout(function(){
		//$('#sHousingType')[0].value = data.housing;
		$('#sHousingType option[value="'+data.housing+'"]').attr('selected', 'selected')
		clearTimeout(t);

		},1000);

	if(data.housing != "Own")
	{
	  window.setTimeout(function ()    {
		 $('#sMonthlyMortgageDiv')[0].style.display = "block";
         document.getElementById("sMonthlyMortgage").focus();
		 },1500);
		setTimeout(function(){
		  $('#sMonthlyMortgage')[0].value = data.Mortage;
		},2000);

	}

	window.setTimeout(function ()    {
        document.getElementById("sAnnualIncome").focus();
		}, 2500);
	var t1 = setTimeout(function(){
		$('#sAnnualIncome')[0].value = data.annual;
		clearTimeout(t1);

		},3000);
	window.setTimeout(function ()    {
        document.getElementById("sPosition").focus();
		}, 3500);
	var t2 = setTimeout(function(){
		$('#sPosition')[0].value = data.position;
		clearTimeout(t2);

		},4000);
	window.setTimeout(function ()    {
        document.getElementById("sEmployerOpt").focus();
		}, 4500);
	var t3 = setTimeout(function(){
		$('#sEmployerOpt')[0].value = data.employer;
		clearTimeout(t3);

		},5000);

	if (data.account == "yes" || data.account == "Yes" || data.account == "YES")
	{
		document.getElementById('checking-checkbox').checked = true;
	}

	if (data.amount == "yes" || data.amount == "Yes" || data.amount == "YES")
	{
		document.getElementById('savings-checkbox').checked = true
	}

	$('#next2').on('click', moveForm3);
	function moveForm3()
	{
	   var c = 0;
	   var f3 = setInterval(function(){
		 c++;
		 if(c > 2)
		 {
			clearInterval(f3);
		    fillChaseform3();
		 }
	   },2000);
	}


}

function fillChaseform3(){
	window.setTimeout(function ()    {
        document.getElementById("sHomePhone").focus();
		},500);
	var t = setInterval(function(){
		$('#sHomePhone')[0].value = data.phone;
		clearInterval(t);

		},1000);
	window.setTimeout(function ()    {
        document.getElementById("sEMailAddr2").focus();
		}, 1500);
	var t1 = setInterval(function(){
		$('#sEMailAddr2')[0].value = data.email;
		clearInterval(t1);

		},2000);
	window.setTimeout(function ()    {
        document.getElementById("sSSN").focus();
		}, 2500);
	var t2 = setInterval(function(){
		$('#sSSN')[0].value = data.securityNumber;
		clearInterval(t2);

		},3000);
	window.setTimeout(function ()    {
        document.getElementById("sMaidenName").focus();
		}, 3500);
	var t3 = setInterval(function(){
		$('#sMaidenName')[0].value = data.motherMaidenName;
		clearInterval(t3);

		},4000);
	window.setTimeout(function ()    {
        document.getElementById("sDOB").focus();
		}, 4500);
	var t4 = setInterval(function(){
		$('#sDOB')[0].value = data.DOB;
		clearInterval(t4);

		},5000);
	$('#next3').on('click', moveForm4);
	function moveForm4()
	{
		var c = 0;
	    var f4 = setInterval(function(){
			c++;
			if(c > 2)
			{
				clearInterval(f4);
				fillChaseform4();

			}
		}, 2000);
	}
}

function fillChaseform4(){
	/*
	window.setTimeout(function ()    {
        document.getElementById("sRespFromAcctA1").focus();
		}, 500);
	var t = setInterval(function(){
		$('#sRespFromAcctA1')[0].value = data.account;
		clearInterval(t);

		},1000);
	$('#sAcceptance')[0].click();
	*/
    $('#flexappsubmit').on('click', submitChase);
	function submitChase()
	{
		localStorage.setItem('chaseForm','done')

	  /*
	   try{
		   clearInterval(chkSubmit);
		  var chkSubmit = setInterval(function()
		  {
		  	var tyMsg = $('.jpui-form-title').textContent;
			if(tyMsg.indexOf('THANK YOU FOR YOUR SUBMISSION'));
			{
				clearInterval(chkSubmit)
				alert("form1 submitted");
				location.href = newURL[1];
			}
		  },1000)
	  }catch(err){}*/
	}


}

if(localStorage.getItem('chaseForm') == 'done')
{
	/*if(document.querySelectorAll('.jpui-xs-card-title')[0].textContent.indexOf('Thank you for your') > -1)
		location.href = newURL[1];	*/
}
//Focus on elements
/*
window.onload = function(){
	window.setTimeout(function ()    {
        document.getElementById("sFirstName").focus();
		}, 500);
		window.setTimeout(function ()    {
        document.getElementById("sLastName").focus();
		}, 1001);
		window.setTimeout(function ()    {
        document.getElementById("sStreetAddr1").focus();
		}, 2001);
		window.setTimeout(function ()    {
        document.getElementById("sCity").focus();
		}, 3001);
		window.setTimeout(function ()    {
        document.getElementById("sState1").focus();
		}, 4001);
		window.setTimeout(function ()    {
        document.getElementById("sZip").focus();
		}, 5001);
	};
	*/
 function fillChase(){

    window.setTimeout(function ()    {
        document.getElementById("sFirstName").focus();
		}, 0);

	var t = setTimeout(function(){
		$('#sFirstName')[0].value = data.firstName;
		clearTimeout(t);

		},2000);

    if(data.middleName != "" && data.middleName != null)
	{
		window.setTimeout(function ()    {
			document.getElementById("sMiddleInitial").focus();
		}, 2100);

	    setTimeout(function(){
			$('#sMiddleInitial')[0].value = data.middleName;

		},2400);
	}
	window.setTimeout(function ()    {
        document.getElementById("sLastName").focus();
		}, 2500);

	var t1 = setTimeout(function(){
		$('#sLastName')[0].value = data.lastName;
		clearTimeout(t1);

		},3000);
	if(data.uSuffix != "" && data.uSuffix != null)
	{
		window.setTimeout(function ()    {
			$('#sSuffix option[value="'+data.uSuffix+'"]').attr('selected', 'selected');
		}, 3100);

	}
	window.setTimeout(function ()    {
        document.getElementById("sStreetAddr1").focus();
		}, 3500);
	var t2 = setTimeout(function(){
		$('#sStreetAddr1')[0].value = data.address;
		clearTimeout(t2);

		},4000);

	if(data.address2 != "" && data.address2 != null)
	{
		window.setTimeout(function ()    {
			document.getElementById("sStreetAddr2").focus();
		}, 4100);

		setTimeout(function(){

			$('#sStreetAddr2')[0].value = data.address2;

		},4400);
	}

	if(data.unit != "" && data.unit != null)
	{
		window.setTimeout(function ()    {
			document.getElementById("sApartment").focus();
		}, 4500);
		setTimeout(function(){
			$('#sApartment')[0].value = data.unit;
		},5000);
	}

	window.setTimeout(function ()    {
        document.getElementById("sCity").focus();
		}, 5500);
	var t3 = setTimeout(function(){
		$('#sCity')[0].value = data.city;
		clearTimeout(t3);

		},6000);

	window.setTimeout(function ()    {
        document.getElementById("sState1").focus();
		}, 6500);
	var t4 = setTimeout(function(){
		$('#sState1')[0].value = data.state;
		clearTimeout(t4);

		},7000);
	window.setTimeout(function ()    {
        document.getElementById("sZip").focus();
		}, 7500);
	var t5 = setTimeout(function(){
		$('#sZip')[0].value = data.zip;
		clearTimeout(t5);

		},8000);
	/*
	if((document.getElementById('CAT') != null) && data.cardType != "")
	{
		setTimeout(function(){

			$('#CAT option:contains("'+data.cardType+'")').attr('selected', 'selected');

		},8100);
	}
	else if((document.getElementById('sUnitedMemNumber') != null) && data.milageplus !="" )
	{
		setTimeout(function(){

			document.getElementById('sUnitedMemNumber').value = data.milageplus;

		},8100)
	}
	else if((document.getElementById('sRitzCarltonNumber') != null) && data.ritznumber != "")
	{
		setTimeout(function(){

			document.getElementById('sRitzCarltonNumber').value = data.ritznumber ;

		},8100)
	}*/

	$('#next1').on('click', moveForm2);

	function moveForm2()
	{
		var counter = -1;
	    var f2 = setInterval(function(){
		   counter ++
		   if(counter > 2)
		   {
			 counter = -1;
		     clearInterval(f2);
		     fillChaseform2();
		   }
	    }, 2000);
	}
/*	$('#next1').click();

	var counter = -1;
	var f2 = setInterval(function(){
		counter ++
		if(counter > 2)
		{
		  fillChaseform2();
		  counter = -1;
		  clearInterval(f2);
		}

	}, 2000);
	*/

}
