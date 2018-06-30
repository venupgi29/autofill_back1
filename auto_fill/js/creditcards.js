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
      var createEvent = function(name) {
        var event = document.createEvent('Event');
        event.initEvent(name, true, true);
        return event;
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
 $(document).ready(function () {
        alert("Arjun ^^^^^^^^^^^^")
        alert(window.location.hostname);
        if(window.location.hostname === "creditcards.wf.com"){
            val = getVal(window.location.href);
             //alert(1);
            alert(val);
            $.ajax({
               url: 'http://localhost:8000/getJsonFile?jsonId=' + val,
               type: 'GET',
               dataType: 'json',
               contentType: 'application/json; charset=utf-8',
               success: function (data) {
            //alert(4);
           
            //window.setTimeout( function(){modifyValue('personalInfo_onlineBankingCustomer_onlineBankingCustomer_true', data['uFname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('personalInfo_name_firstName', data['uFname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue(' personalInfo_name_middleInitial', data['uFname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('personalInfo_name_lastName', data['uLname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('personalInfo_name_suffix', data['uSuffix'], "text" );}, getRand());
            // window.setTimeout( function(){modifyValue('personalInfo_address_street1', data['uFname'], "text" );}, getRand());

            // window.setTimeout( function(){modifyValue('personalInfo_address_street2', data['uFname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('personalInfo_address_city', data['uCity'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('personalInfo_address_state', data['uState'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('personalInfo_address_zip', data['uZip'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('personalInfo_birthdate_dateOfBirth', data['uDOB'], "text" );}, getRand());

           // window.setTimeout( function(){modifyValue('personalInfo_phone_phoneNumber', data['uFname'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('personalInfo_emailAddress_emailAddress', data['uMail'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('personalInfo_socialSecurityNumber_socialSecurityNumber', data['uSSNumber'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('personalInfo_citizenshipType_citizenship', data['uUSCitizen'], "text" );}, getRand());
            window.setTimeout( function(){modifyValue('personalInfo_securityWord_securityWord', data['uSecurityWord'], "text" );}, getRand());
           
               }});

         
        }else{
            href = $('a#applynow_1_3').attr('href');
            loc = window.location.href;
            val = getVal(loc);
            if( loc.indexOf("?") > 0  ){
                  href = href + "&clno=" + val;
            }else{
                  href = href + "?clno=" + val;
            }
            alert(href);
            $("a#applynow_1_3").attr("href", href);
        }
 });