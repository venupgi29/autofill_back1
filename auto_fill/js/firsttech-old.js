 /*function getVal(loc){
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
 } */

/*

firstName
middleName
lastName
dateOfBirth
ssntaxId
email_1
phoneNumber
primaryPhoneType_4CELL_PHONE
primaryPhoneType_4HOME_PHONE
primaryPhoneType_4WORK_PHONE
addressLine1_1
suburb_city_1
state_province_1
postcode_zipcode_1




*/



function modifyValue(field, value) {

  var createEvent = function(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
  }
  //alert(field + " : " + value);
  document.getElementById(field).dispatchEvent(createEvent('focus'));
  //alert("Dispatched Focus");
  document.getElementById(field).value = value;
  document.getElementById(field).dispatchEvent(createEvent('change'));
  document.getElementById(field).dispatchEvent(createEvent('input'));
  document.getElementById(field).dispatchEvent(createEvent('blur'));
}


 

 $(document).ready(function () {

             //$('#firstName').attr('autocomplate', 'on');
             //window.setTimeout(function (){$("#firstName").trigger('focus');}, 10);

             //window.setTimeout(function(){$('#firstName')[0].value = "Pandu";}, 1000);
             //window.setTimeout(function (){$("#firstName").trigger('input');}, 2000);
             //window.setTimeout(function (){$("#firstName").trigger('blur');}, 2500);

              window.setTimeout( modifyValue('firstName', "Pandu"), 1000);
              window.setTimeout( modifyValue('lastName', "Ahmed"), 2000);
              //window.setTimeout( modifyValue('sSuffix', "Jr."), 3000);
              window.setTimeout( modifyValue('dateOfBirth', "07/09/1970"), 4000);
              window.setTimeout( modifyValue('ssntaxId', "630749146"), 5000);
              window.setTimeout( modifyValue('email_1', "rafi@gmail.com"), 6000);
              window.setTimeout( modifyValue('phoneNumber', "9739914149"), 7000);
              window.setTimeout( modifyValue('primaryPhoneType_4CELL_PHONE', "Checked"), 8000);

              //CELL_PHONE, HOME_PHONE, WORK_PHONE



              //$("#firstName").blur();

              //$field = $('#firstName')[0];

              //modifyValue('firstName', "Pandu");
              //modifyValue('lastName', "Ahmed");
              //modifyValue('sSuffix', "Jr.");
              //modifyValue('dateOfBirth', "09/07/1970");
              //modifyValue('ssntaxId', "630749146");
              //modifyValue('email_1', "rafi@rafi.com");
              //modifyValue('phoneNumber', "Jr.");
              //modifyValue('primaryPhoneType_4CELL_PHONE', "9739914141");






             /* window.setTimeout(function (){$("#lastName").trigger('focus');}, 3000);
	          window.setTimeout(function(){$('#lastName')[0].value = "Ahmed"; }, 4500);

	                     window.setTimeout(function (){$("#sSuffix").trigger('focus');}, 5000);
	                    window.setTimeout(function(){$('#sSuffix').val("Jr."); }, 6500);

	                     window.setTimeout(function (){$("#dateOfBirth").trigger(';focus');}, 7000);
                         window.setTimeout(function(){$('#dateOfBirth')[0].value = "09/07/1970";}, 8500);

                         window.setTimeout(function (){("#ssntaxId").trigger('focus');}, 9000);
                         window.setTimeout(function(){$('#ssntaxId')[0].value = "630749146";}, 10500);

                         window.setTimeout(function (){$("#email_1").trigger('focus');}, 11500);
                         window.setTimeout(function(){$('#email_1')[0].value = "rafi@rafi.com";}, 12500);

                         window.setTimeout(function (){$("#phoneNumber").trigger('focus');}, 13500);
                         window.setTimeout(function(){$('#phoneNumber')[0].value = "9739914141"; },15500);

                           window.setTimeout(function (){$("input#primaryPhoneType_4CELL_PHONE").trigger('focus');}, 16700);
                         window.setTimeout(function(){$('input#primaryPhoneType_4CELL_PHONE').prop("checked", true); },18000);*/




	                   /* window.setTimeout(function (){$("#sStreetAddr1").trigger('focus');}, 3500);
	                    window.setTimeout(function(){$('#sStreetAddr1')[0].value = ;}, 4000);

	                    window.setTimeout(function (){$("#sStreetAddr2").trigger('focus');}, 4500);
	                    window.setTimeout(function(){$('#sStreetAddr2')[0].value = data["uAddr2"];},5000);

	                    window.setTimeout(function (){$("#sApartment").trigger('focus');}, 5500);
	                    window.setTimeout(function(){$('#sApartment')[0].value = data["uUnit"]; }, 6000);

	                    window.setTimeout(function (){$("#sCity").trigger('focus');}, 6500);
	                    window.setTimeout(function(){$('#sCity')[0].value = data["uCity"]; },7000);

	                    window.setTimeout(function (){$("#sState1").trigger('focus');}, 7500);
	                    window.setTimeout(function(){$('#sState1')[0].value = data["uState"]; },8000);

	                    window.setTimeout(function (){$("#sZip").trigger('focus');}, 8500);
	                    window.setTimeout(function(){$('#sZip')[0].value = data["uZip"]; },9000); */



          /*$('.input').each(function() {
                        $this = $(this);
                        $label = $('label[for="'+ $this.attr('id') +'"]');
                        if ($label.length > 0 ) {
                             alert($label.text())
                        }else{
                            alert("No Label")
                        }
          });*/

  });


                    /*

   $.ajax({
                url: 'http://localhost:8000/getJsonFile?jsonId=' + val,
                type: 'GET',
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success: function (data) {

                    val = getVal(window.location.href);








                    alert("In Odyssey");
                        window.setTimeout(function (){$("#firstName").trigger('focus');}, 0);
                        window.setTimeout(function(){$('#firstName')[0].value = data['uFname'];}, 2000);

	                    window.setTimeout(function (){$("#lastName").trigger('focus');}, 2100);
	                    window.setTimeout(function(){$('#lastName')[0].value = data["uLname"]; }, 2500);

	                     window.setTimeout(function (){$("#dateOfBirth").trigger(';focus');}, 8000);
                         window.setTimeout(function(){$('#dateOfBirth')[0].value = data['uDOB'];}, 9000);

                         window.setTimeout(function (){("#ssntaxId").trigger('focus');}, 4200);
                         window.setTimeout(function(){$('#ssntaxId')[0].value = data['uSSNumber'];}, 5500);

                         window.setTimeout(function (){$("#email_1").trigger('focus');}, 2750);
                         window.setTimeout(function(){$('#email_1')[0].value = data['uMail'];}, 3800);

                         window.setTimeout(function (){$("#phoneNumber").trigger('focus');}, 35);
                         window.setTimeout(function(){$('#phoneNumber')[0].value = data['uPhone']; },1000);


	                    window.setTimeout(function (){$("#sSuffix").trigger('focus');}, 2600);
	                    window.setTimeout(function(){$('#sSuffix').val(data['uSuffix']); }, 3000);

	                    window.setTimeout(function (){$("#sStreetAddr1").trigger('focus');}, 3500);
	                    window.setTimeout(function(){$('#sStreetAddr1')[0].value = data["uAddr1"];}, 4000);

	                    window.setTimeout(function (){$("#sStreetAddr2").trigger('focus');}, 4500);
	                    window.setTimeout(function(){$('#sStreetAddr2')[0].value = data["uAddr2"];},5000);

	                    window.setTimeout(function (){$("#sApartment").trigger('focus');}, 5500);
	                    window.setTimeout(function(){$('#sApartment')[0].value = data["uUnit"]; }, 6000);

	                    window.setTimeout(function (){$("#sCity").trigger('focus');}, 6500);
	                    window.setTimeout(function(){$('#sCity')[0].value = data["uCity"]; },7000);

	                    window.setTimeout(function (){$("#sState1").trigger('focus');}, 7500);
	                    window.setTimeout(function(){$('#sState1')[0].value = data["uState"]; },8000);

	                    window.setTimeout(function (){$("#sZip").trigger('focus');}, 8500);
	                    window.setTimeout(function(){$('#sZip')[0].value = data["uZip"]; },9000);

  }); */
