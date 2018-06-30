

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
       url:  result.SERVER_URL+'/getJsonFile?jsonId=' + val,
       type: 'GET',
       dataType: 'json',
       contentType: 'application/json; charset=utf-8',
       success: function (data) {
         
        if(window.location.href.indexOf('www.sofi.com/b/registration')>=0){
        window.setTimeout( function(){ modifyValue('basicInfo_firstName', data['uFname'] , "text" );}, 1000);
        window.setTimeout( function(){ modifyValue('basicInfo_lastName', data['uLname'] , "text" );}, 1000);

       window.setTimeout( function(){modifyValue('state', data['uState'].toUpperCase(), "select" );}, getRand());
        window.setTimeout( function(){ modifyValue('email', data['uMail'] , "text" );}, 1000);

        window.setTimeout( function(){ modifyValue('consents', true , "checkbox" );}, 1000);
        }else if(window.location.href.indexOf('personal-loan')>=0){
            
                window.setTimeout( function(){ modifyValue('input-10', data['uAddr1'] , "text" );}, 1000);
             
    
            
                window.setTimeout( function(){ modifyValue('input-13', data['uAddr2'] , "text" );}, 1000);
            
             
                window.setTimeout( function(){ modifyValue('input-16', data['uCity'] , "text" );}, 1000);
            
             
                window.setTimeout( function(){ modifyValue('dropdown-19', data['uState'].toUpperCase(), "select" );}, getRand());
            
                window.setTimeout( function(){ modifyValue('input-21', data['uZip'] , "text" );}, 1000);
             
            
                window.setTimeout( function(){ modifyValue('input-24', data['uMobilePhone'] , "text" );}, 1000);
             
            window.setTimeout( function(){ modifyValue('checkbox-27', true , "checkbox" );}, 1000);
            if(data['uUSCitizen']=='Y'){
              
                window.setTimeout( function(){ modifyValue('dropdown-40', "CITIZEN" , "select" );}, 1000);
                
            }
            else{
                if(data['uResidentAliean']=='Y'){
                    window.setTimeout( function(){ modifyValue('dropdown-40', "RESIDENT" , "select" );}, 1000);
                }
                else{
                    window.setTimeout( function(){ modifyValue('dropdown-40', "NONPERMANENT_RESIDENT_ALIEN" , "select" );}, 1000);
                }
                
                
            }
            if(data['uEmployerStatus'] =='UnEmployed' || data['uEmployerStatus'] =='Student'  ){
                
                  
                window.setTimeout( function(){ 
                    $('#radio-67').attr('checked', true); 
                    modifyValue('autocomplete-input-69', data['uEmployer'] , "radio" );}, 1000);
                
                
            }else{
              
                $('#radio-66').attr('checked', true); 
                if(data['uEmployerStatus']=='SelfEmployed'){
                    window.setTimeout( function(){ modifyValue('checkbox-71', true , "checkbox" );}, 1000);
                    var event=new Event('click');
                    document.getElementById("checkbox-71").dispatchEvent(event);
    
                 }else{
                    
                    window.setTimeout( function(){ modifyValue('autocomplete-input-69', data['uEmployer'] , "text" );}, 1000);
                }
            }


            if(data['uRtype']=='Own'){
                $('#radio-31').attr('checked', true);   
            }else if(data['uRtype']=='Rent'){
                $('#radio-30').attr('checked', true);   
            }else{
                $('#radio-32').attr('checked', true); 
    
            }
            if($("#totalIncome").length>0){
                window.setTimeout( function(){ modifyValue('totalIncome', data['uGincome'] , "text" );}, 1000);
            }if($("#experience").length>0){
                window.setTimeout( function(){ modifyValue('experience', data['uTotalExp'] , "select" );}, 1000);
            }
            if($("#requestedAmount").length>0){
                //window.setTimeout( function(){ modifyValue('requestedAmount', data[''] , "text" );}, 1000);
            }
    
            var y=data['uDOB'].split("/");
            const monthNames = ["","January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
     
                window.setTimeout( function(){ modifyValue('dropdown-33', monthNames[Number.parseInt(y[0])].toUpperCase() , "select" );}, 1000);
                window.setTimeout( function(){ modifyValue('dropdown-35', Number.parseInt(y[1]) , "select" );}, 1000);
                window.setTimeout( function(){ modifyValue('input-37', y[2] , "select" );}, 1000);
                if(data['uEmployerStatus']=='SelfEmployed'){
                    window.setTimeout( function(){ modifyValue('checkbox-71', true , "checkbox" );}, 1000);
                    var event=new Event('click');
                    document.getElementById("checkbox-71").dispatchEvent(event);
    
            }else{
                window.setTimeout( function(){ modifyValue('employerInfo_name', data['uEmployer'] , "text" );}, 1000);
            }
        
        
        
        
        }else{
            if($("#addr_addr1").length>0){
                window.setTimeout( function(){ modifyValue('addr_addr1', data['uAddr1'] , "text" );}, 1000);
            }
    
            if($("#addr_addr2").length>0){
                window.setTimeout( function(){ modifyValue('addr_addr2', data['uAddr2'] , "text" );}, 1000);
            }
            if($("#addr_city").length>0){
                window.setTimeout( function(){ modifyValue('addr_city', data['uCity'] , "text" );}, 1000);
            }
            if($("#addr_state").length>0){
                window.setTimeout( function(){ modifyValue('addr_state', data['uState'].toUpperCase(), "select" );}, getRand());
            }
            if($("#addr_zip").length>0){
                window.setTimeout( function(){ modifyValue('addr_zip', data['uZip'] , "text" );}, 1000);
            }
            if($("#primaryPhone").length>0){
                window.setTimeout( function(){ modifyValue('primaryPhone', data['uMobilePhone'] , "text" );}, 1000);
            }
            window.setTimeout( function(){ modifyValue('subscribedToTcpa', true , "checkbox" );}, 1000);
            if(data['uUSCitizen']=='Y'){
                $('#citizenshipRadioButton_01').attr('checked', true);   
            }else{
                $('#citizenshipRadioButton_03').attr('checked', true);   
            }
            if(data['uRtype']=='Own'){
                $('#housing_OWN').attr('checked', true);   
            }else if(data['uRtype']=='Rent'){
                $('#housing_RENT').attr('checked', true);   
            }else{
                $('#housing_PARENT').attr('checked', true); 
    
            }
            if($("#totalIncome").length>0){
                window.setTimeout( function(){ modifyValue('totalIncome', data['uGincome'] , "text" );}, 1000);
            }if($("#experience").length>0){
                window.setTimeout( function(){ modifyValue('experience', data['uEmployerYears7'] , "select" );}, 1000);
            }
            if($("#requestedAmount").length>0){
                //window.setTimeout( function(){ modifyValue('requestedAmount', data[''] , "text" );}, 1000);
            }
    
            var y=data['uDOB'].split("/");
            const monthNames = ["","January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
     
			window.setTimeout( function(){ modifyValue('dobMonth', monthNames[Number.parseInt(y[0])] , "select" );}, 1000);
			window.setTimeout( function(){ modifyValue('dobDay', Number.parseInt(y[1]) , "select" );}, 1000);
			window.setTimeout( function(){ modifyValue('dobYear', y[2] , "select" );}, 1000);
			if(data['uEmployerStatus']=='SelfEmployed'){
				window.setTimeout( function(){ modifyValue('selfEmployed', true , "checkbox" );}, 1000);
				var event=new Event('click');
				document.getElementById("selfEmployed").dispatchEvent(event);
			}
			else{
			window.setTimeout( function(){ modifyValue('employerInfo_name', data['uEmployer'] , "text" );}, 1000);
			}
			
        }		
			window.setTimeout( function(){ modifyValue('autocomplete-input-111', data['uEmployer'] , "text" );}, 1000);
			window.setTimeout( function(){ modifyValue('input-73', data['uGincome'] , "text" );}, 1000);
			
			var z=Number.parseInt(data['uTotalExp']/12);
			var x=['','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN'];
      if(z>10){
			 window.setTimeout( function(){ modifyValue('experience', 'MORETHANTEN', "select" );}, 1000);
      }else if(z>=1){
         window.setTimeout( function(){ modifyValue('experience', x[z], "select" );}, 1000);
      }else{
          window.setTimeout( function(){ modifyValue('experience', 'LESSTHANONE', "select" );}, 1000);
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