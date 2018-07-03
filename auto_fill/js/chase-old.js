
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
 }

 function rand(min){
   return  Math.random() * (1000 - 2500) + min;
 }

 $(document).ready(function () {


        alert("In chase 1");

        ele = "";
        if($('#ApplyNow').length > 0 ){
            ele = "#ApplyNow";
        }else{
            ele = "a#top_apply_now";
        }
        if( $(ele).length > 0 ){
                href = $(ele).attr('href');
                loc = window.location.href;
                val = getVal(loc);

                if( loc.indexOf("?") > 0  ){
                        href = href + "&clno=" + val;
                }else{
                      href = href + "?clno=" + val;
                }
                //alert(href);
                $(ele).attr("href", href);

        } else{
             val = getVal(window.location.href);
             allAtOnce  = true;
             if(  $("#next1").length > 0 ){
                allAtOnce = false;
             }
             $.ajax({
                url: 'http://localhost:8000/getJsonFile?jsonId=' + val,
                type: 'GET',
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success: function (data) {

                    if(allAtOnce){

                         window.setTimeout(function (){$("#sFirstName").trigger('focus');}, 0);
	                    window.setTimeout(function(){$('#sFirstName')[0].value = data['uFname'];}, 2000);

	                    window.setTimeout(function (){$("#sLastName").trigger('focus');}, 2100);
	                    window.setTimeout(function(){$('#sLastName')[0].value = data["uLname"]; }, 2500);

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



	                    window.setTimeout(function (){$("#sHousingType").trigger('focus');}, 20);
                            window.setTimeout(function(){$('#sHousingType').val(data['uRtype']);}, 200 );

                            if(data['uRtype'] != 'Own'){
                                $('#sMonthlyMortgageDiv')[0].style.display = "block";
                                $('#sMonthlyMortgage')[0].value = data['uMortgage'];
                            }

                            window.setTimeout(function (){$("#sAnnualIncome").trigger('focus');}, 2500);
                            window.setTimeout(function(){$('#sAnnualIncome')[0].value = data['uGincome'];},4500);

                            window.setTimeout(function (){$("#sPosition").trigger('focus');}, 4600);
                            window.setTimeout(function(){$('#sPosition')[0].value = data['uSincome']; }, 5000);

                            window.setTimeout(function (){$("#sEmployerOpt").trigger('focus');}, 5500);
                            window.setTimeout(function(){$('#sEmployerOpt')[0].value = data['uEmployer'];},6000);



                           window.setTimeout(function (){$("#sHomePhone").trigger('focus');}, 35);
                            window.setTimeout(function(){$('#sHomePhone')[0].value = data['uPhone']; },1000);

                             window.setTimeout(function (){$("#sEMailAddr2").trigger('focus');}, 2750);
                            window.setTimeout(function(){$('#sEMailAddr2')[0].value = data['uMail'];}, 3800);

                             window.setTimeout(function (){("#sSSN").trigger('focus');}, 4200);
                            window.setTimeout(function(){$('#sSSN')[0].value = data['uSSNumber'];}, 5500);

                             window.setTimeout(function (){$("#sMaidenName").trigger('focus');}, 6750);
                            window.setTimeout(function(){$('#sMaidenName')[0].value = data['uMMname'];}, 7600 );

                             window.setTimeout(function (){$("#sDOB").trigger(';focus');}, 8000);
                            window.setTimeout(function(){$('#sDOB')[0].value = data['uDOB'];}, 9000);

                    }else{

                        window.setTimeout(function (){$("#sFirstName").trigger('focus');}, 0);
	                    window.setTimeout(function(){$('#sFirstName')[0].value = data['uFname'];}, 2000);

	                    window.setTimeout(function (){$("#sLastName").trigger('focus');}, 2100);
	                    window.setTimeout(function(){$('#sLastName')[0].value = data["uLname"]; }, 2500);

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



                        $('#next1').on('click', function(){


                            if( $('#checking-checkbox').length > 0 && $('#savings-checkbox').length > 0){


                                if (data['uChecking'].startsWith('c') || data['uChecking'].startsWith('C')) {
                                    document.getElementById('checking-checkbox').checked = true;
                                }
                                if (data['uSavings'].startsWith('s') || data['uSavings'].startsWith('S')) {
                                    document.getElementById('savings-checkbox').checked = true
                                }
                            }
                            window.setTimeout(function (){$("#sHousingType").trigger('focus');}, 20);
                            window.setTimeout(function(){$('#sHousingType').val(data['uRtype']);}, 200 );

                            if(data['uRtype'] != 'Own'){
                                $('#sMonthlyMortgageDiv')[0].style.display = "block";
                                $('#sMonthlyMortgage')[0].value = data['uMortgage'];
                            }

                            window.setTimeout(function (){$("#sAnnualIncome").trigger('focus');}, 2500);
                            window.setTimeout(function(){$('#sAnnualIncome')[0].value = data['uGincome'];},4500);

                            window.setTimeout(function (){$("#sPosition").trigger('focus');}, 4600);
                            window.setTimeout(function(){$('#sPosition')[0].value = data['uSincome']; }, 5000);

                            window.setTimeout(function (){$("#sEmployerOpt").trigger('focus');}, 5500);
                            window.setTimeout(function(){$('#sEmployerOpt')[0].value = data['uEmployer'];},6000);
                        });



                        $('#next2').on('click', function(){


                             window.setTimeout(function (){$("#sHomePhone").trigger('focus');}, 35);
                            window.setTimeout(function(){$('#sHomePhone')[0].value = data['uPhone']; },1000);

                             window.setTimeout(function (){$("#sEMailAddr2").trigger('focus');}, 2750);
                            window.setTimeout(function(){$('#sEMailAddr2')[0].value = data['uMail'];}, 3800);

                             window.setTimeout(function (){("#sSSN").trigger('focus');}, 4200);
                            window.setTimeout(function(){$('#sSSN')[0].value = data['uSSNumber'];}, 5500);

                             window.setTimeout(function (){$("#sMaidenName").trigger('focus');}, 6750);
                            window.setTimeout(function(){$('#sMaidenName')[0].value = data['uMMname'];}, 7600 );

                             window.setTimeout(function (){$("#sDOB").trigger(';focus');}, 8000);
                            window.setTimeout(function(){$('#sDOB')[0].value = data['uDOB'];}, 9000);

                            //alert("kyabe");

                        });
                    }
                },
                error: function (response) {
                    var r = jQuery.parseJSON(response.responseText);
                    alert("Message: " + r.Message);
                    alert("StackTrace: " + r.StackTrace);
                    alert("ExceptionType: " + r.ExceptionType);
                }

             });
        }
  });