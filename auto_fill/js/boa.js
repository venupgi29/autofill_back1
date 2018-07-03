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
               
              var host=window.location.href;
               var hostname=host.split("/");   
              if(hostname[3] == "applynow"){
              window.setTimeout( function(){modifyValue('xQwRg3', data['uMileagePlus'], "text" );}, getRand());
             window.setTimeout( function(){modifyValue('zz_name_tb_icai_fnm_v_1', data['uFname'], "text" );}, getRand());
         
             window.setTimeout( function(){modifyValue('zz_name_tb_icai_mnm_v_1', data['uMname'], "text" );}, getRand());
         
             window.setTimeout( function(){modifyValue('zz_name_tb_icai_lnm_v_1', data['uLname'], "text" );}, getRand());
             window.setTimeout( function(){modifyValue('zz_resi_tb_icai_add1_v_1', data['uAddr1'], "text" );}, getRand());
         
             window.setTimeout( function(){modifyValue('zz_resi_tb_icai_add2_v_1', data['uAddr2'], "text" );}, getRand());
             window.setTimeout( function(){modifyValue('zz_resi_dd_icai_state_v_1',data['uState'].toUpperCase(), "select" );}, getRand());
         
             window.setTimeout( function(){modifyValue('zz_resi_tb_icai_city_v_1', data['uCity'], "text" );}, getRand());
         
             window.setTimeout( function(){modifyValue('zz_resi_tb_icai_zip_v_1', data['uZip'], "text" );}, getRand());
         
             window.setTimeout( function(){modifyValue('zz_phone_tb_icai_ppn_v_1', data['uMobilePhone'], "text" );}, getRand());
         
             window.setTimeout( function(){modifyValue('zz_email_tb_icai_v_1', data['uMail'], "text" );}, getRand());
                      
             //window.setTimeout( function(){modifyValue('zz_resi_dd_icai_state_v_1', data['uIdState'], "text" );}, getRand());

             
             window.setTimeout( function(){modifyValue('zz_name_tb_icai_tan_v_1', data['uGincome'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('zz_name_dd_icai_sfx_v_1',data['uSuffix'], "select" );}, getRand());
             
             if(data['uMailAddr']=='Y'){
               
              window.setTimeout( function(){   
                $("#zz_ma_consent_v_1-real").click();
                modifyValue('zz_altresi_tb_icai_add1_v_1', data['uMAddr1'], "text" );
                modifyValue('zz_altresi_tb_icai_add2_v_1', data['uMAddr2'], "text" );
                modifyValue('zz_altresi_tb_icai_city_v_1',  data['uMCity'], "text" );
                modifyValue('zz_altresi_dd_icai_state_v_1',(data['uMState'].toUpperCase()), "select" );
                modifyValue('zz_altresi_tb_icai_zip_v_1', data['uMZip'], "text" );
            }, getRand());
             
               
            }

          
      
             if(data['uPreferredPhone']=='Home'){
              window.setTimeout( function(){modifyValue('zz_phn_lb_ppnotp_v_1','HomePhone', "select" );}, getRand());
             
              }else{
              
                window.setTimeout( function(){modifyValue('zz_phn_lb_ppnotp_v_1','CellularPhone', "select" );}, getRand());
             
              }
              window.setTimeout( function(){
              if(data['uResidentType']=='Citizen'){
                $("#zz_bi_uscitizen_yes_v_1-real").click();
             }else  {
              $("#zz_bi_uscitizen_no_v_1-real").click();
				var xhr = new XMLHttpRequest();
				  xhr.open('GET', chrome.runtime.getURL('js/countries.json'));
				  xhr.onload = function() {
					  if (xhr.status === 200) {
						 
						  var jsonTxt= xhr.responseText;
						  var json=JSON.parse(jsonTxt);
						  json.forEach(element => {
							  if(element.code==data['uIdCountry'].toUpperCase()){
								
								window.setTimeout( function(){modifyValue('zz_ci_citizenship_lb_country_of_citizenship_v_1', element.boacode, "select" );}, getRand());
								//window.setTimeout( function(){modifyValue('zz_ci_citizenship_lb_country_of_residence_v_1', element.boacode, "select" );}, getRand()); 
								//modifyValue('selectCountryOfCitizenship', "string:"+element.firsttech, "select" );
							  }
						  });
					  }
					  else {
						 // alert('Request failed.  Returned status of ' + xhr.status);
					  }
				  };
					xhr.send();
					if(data['uResidentType']=='Resident'){
				  window.setTimeout( function(){modifyValue('zz_ci_citizenship_radiogroup_citizenship_status_v_1','PermanentResidentAlien', "select" );}, getRand());
				 
				  }else{
				  
					window.setTimeout( function(){modifyValue('zz_ci_citizenship_radiogroup_citizenship_status_v_1','NonResidentAlien', "select" );}, getRand());
				 
				  }
               

             }
            }, getRand());

            //zz_ci_citizenship_lb_country_of_citizenship_v_1
              
              window.setTimeout( function(){modifyValue('zz_ssndob_tb_icai_ssn_v_1', data['uSSNumber'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('zz_ssndob_tb_icai_dateOfBirth_v_1', data['uDOB'], "text" );}, getRand());
              window.setTimeout( function(){modifyValue('zz_name_tb_icai_mhp_v_1', data['uMonthlyBusinessPay'], "text" );}, getRand());
             
              
               if(data['uDCitizenship']=='Y'){
				$("#zz_bi_dual_citizenship_yes_v_1-real").click();
				 var xhr = new XMLHttpRequest();
				  xhr.open('GET', chrome.runtime.getURL('js/countries.json'));
				  xhr.onload = function() {
					  if (xhr.status === 200) {
						 
						  var jsonTxt= xhr.responseText;
						  var json=JSON.parse(jsonTxt);
						  json.forEach(element => {
							  if(element.code==data['uDCountry'].toUpperCase()){
								window.setTimeout( function(){modifyValue('vl_citz_dual_citzcntry_v_1', element.boacode, "select" );}, getRand()); 
								//modifyValue('selectCountryOfCitizenship', "string:"+element.firsttech, "select" );
							  }
						  });
					  }
					  else {
						 // alert('Request failed.  Returned status of ' + xhr.status);
					  }
				  };
				  xhr.send();
              }else{
				$("#zz_bi_dual_citizenship_no_v_1-real").click();
              }





              
              window.setTimeout( function(){modifyValue('vl_citz_dual_citzcntry_v_1', data['uCitizenCountry'], "text" );}, getRand());
              var xhr = new XMLHttpRequest();
              xhr.open('GET', chrome.runtime.getURL('js/countries.json'));
              xhr.onload = function() {
                  if (xhr.status === 200) {
                     
                      var jsonTxt= xhr.responseText;
                      var json=JSON.parse(jsonTxt);
                      json.forEach(element => {
                          if(element.code==data['uCountryOfResidence'].toUpperCase()){
                            window.setTimeout( function(){modifyValue('zz_ci_citizenship_lb_country_of_residence_v_1', element.boacode, "select" );}, getRand()); 
                            //modifyValue('selectCountryOfCitizenship', "string:"+element.firsttech, "select" );
                          }
                      });
                  }
                  else {
                     // alert('Request failed.  Returned status of ' + xhr.status);
                  }
              };
              xhr.send();
             
             
              
              
              
              
              
              window.setTimeout( function(){
                $("#zz_icai_resp_consent_v_1-real").click()
              }, getRand());
   
              window.setTimeout( function(){modifyValue('zz_emp_empStatus_v_1',data['uPrimarySourcesOfEmployment'] , "select" );}, getRand());
              if(data['uPrimarySourcesOfEmployment']=='SelfEmployed'){
                window.setTimeout( function(){modifyValue('zz_name_tb_icai_psoi_v_1','RetirementIncome' , "select" );}, getRand());

               // window.setTimeout( function(){modifyValue('zz_emp_empStatus_v_1','SelfEmployed' , "select" );}, getRand());


                }else if(data['uPrimarySourcesOfEmployment']=='Employed'){
               //   window.setTimeout( function(){modifyValue('zz_emp_empStatus_v_1','Employed' , "select" );}, getRand());
                window.setTimeout( function(){modifyValue('zz_name_tb_icai_psoi_v_1','EmploymentIncome' , "select" );}, getRand());
                }else if(data['uPrimarySourcesOfEmployment']=='Other'){
                  window.setTimeout( function(){modifyValue('zz_name_tb_icai_psoi_v_1','RetirementIncome' , "select" );}, getRand());
                }else{
                  window.setTimeout( function(){modifyValue('zz_name_tb_icai_psoi_v_1','Unemployment' , "select" );}, getRand());
                }
             

             }else{
               
               window.setTimeout( function(){modifyValue('prospectFirstName', data['uFname'], "text" );}, getRand());
               window.setTimeout( function(){modifyValue('prospectLastName', data['uLname'], "text" );}, getRand());
               window.setTimeout( function(){modifyValue('prospectSSNInput', data['uSSNumber'].substr(5), "text" );}, getRand());
               window.setTimeout( function(){modifyValue('prospectBirthdate', data['uDOB'], "text" );}, getRand());
              
               $('#continue').click(function() {
                  
                  window.setTimeout( function(){modifyValue('prospectAddress1', data['uMAddr1'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('prospectAddress2', data['uMAddr2'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('prospectCity', data['uCity'], "text" );}, getRand());
                window.setTimeout( function(){modifyValue('prospectZip', data['uMZip'], "text" );}, getRand());
                
                window.setTimeout( function(){modifyValue('prospectStateSelect', data['uState'].toUpperCase(), "select" );}, getRand());
                

               })


               //$("#prospectAddress1-real").val(data['uMAddr1']);

             //window.setTimeout( function(){modifyValue('prospectAddress1', data['uMAddr1'], "text" );}, getRand());
             //window.setTimeout( function(){modifyValue('prospectAddress2', data['uMAddr2'], "text" );}, getRand());
             //window.setTimeout( function(){modifyValue('prospectCity', data['uCity'], "text" );}, getRand());
             //window.setTimeout( function(){modifyValue('prospectZip', data['uMZip'], "text" );}, getRand());
             
             //window.setTimeout( function(){modifyValue('prospectStateSelect', data['uIdState'], "select" );}, getRand());
            // window.setTimeout( function(){modifyValue('prospectStateSelect', data['uIdState'], "select" );}, getRand());
              
            
            }
            
            
            }
            });
            }
          })
        }
  function executeClear(){
       
          localStorage.setItem('start','true');
          chrome.runtime.sendMessage({
          message: "clearCache"},
          function (response) { 

            if(window.location.hostname.startsWith('secure.bankofamerica.com')){

              val = getVal(window.location.href);
              if(!val || val.length==0){
                  chrome.storage.sync.get(['UUID'], function(result) {
                     // updateVal(result.UUID);

                    });
              }else{
                 // updateVal(val);
                
              }
            }

            }
         );
          
   }      
$(document).ready(function () {

  if(window.location.hostname.startsWith('secure.bankofamerica.com')){

   //if(window.location.href.indexOf("welcome.go")>0){
   // executeClear();
 // }else{
   
    val = getVal(window.location.href);
    if(!val || val.length==0){
        chrome.storage.sync.get(['UUID'], function(result) {
            updateVal(result.UUID);

          });
    }else{
        updateVal(val);
      
    }
  //}

   
  }else{
      executeClear();
      loc = window.location.href;
      val = getVal(loc);
     
  }
});