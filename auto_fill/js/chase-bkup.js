
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

 function rand(){
   return  Math.random() * (1000 - 2500) + 1000;
 }

 $(document).ready(function () {


        alert("In chase");

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

        }else{
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

                        window.setTimeout(function (){document.getElementById("#sFirstName").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sFirstName')[0].value = data['uFname']; clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sLastName").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sLastName')[0].value = data["uLname"];; clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sSuffix").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sSuffix').val(data['uSuffix']); clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sStreetAddr1").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sFirstName')[0].value = data["uAddr1"]; clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sStreetAddr2").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sStreetAddr2')[0].value = data["uAddr2"]; clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sApartment").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sApartment')[0].value = data["uUnit"]; clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sCity").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sCity')[0].value = data["uCity"]; clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sZip").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sZip')[0].value = data["uZip"]; clearTimeout(t3);},rand());



	                    window.setTimeout(function (){document.getElementById("#sHousingType").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sHousingType')val = data['uRtype']; clearTimeout(t3);},rand());

	                    if(data['uRtype'] != 'Own'){
	                        $('#sMonthlyMortgageDiv')[0].style.display = "block";
                            $('#sMonthlyMortgage')[0].value = data['uMortgage'];
	                    }

	                    window.setTimeout(function (){document.getElementById("#sAnnualIncome").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sAnnualIncome')[0].value = data['uGincome']; clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sPosition").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sPosition')[0].value = data['uSincome']; clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sEmployerOpt").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sEmployerOpt')[0].value = data['uEmployer']; clearTimeout(t3);},rand());



                        window.setTimeout(function (){document.getElementById("#sHomePhone").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sHomePhone')[0].value = data['uPhone']; clearTimeout(t3);},rand());

	                     window.setTimeout(function (){document.getElementById("#sEMailAddr2").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sEMailAddr2')[0].value = data['uMail']; clearTimeout(t3);},rand());

	                     window.setTimeout(function (){document.getElementById("#sSSN").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sSSN')[0].value = data['sSSN']; clearTimeout(t3);},rand());

	                     window.setTimeout(function (){document.getElementById("#sMaidenName").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sMaidenName')[0].value = data['uMMname']; clearTimeout(t3);},rand());

	                     window.setTimeout(function (){document.getElementById("#sDOB").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sDOB')[0].value = data['uDOB']; clearTimeout(t3);},rand());

                    }else{

                        window.setTimeout(function (){document.getElementById("#sFirstName").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sFirstName')[0].value = data['uFname']; clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sLastName").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sLastName')[0].value = data["uLname"];; clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sSuffix").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sSuffix').val(data['uSuffix']); clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sStreetAddr1").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sFirstName')[0].value = data["uAddr1"]; clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sStreetAddr2").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sStreetAddr2')[0].value = data["uAddr2"]; clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sApartment").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sApartment')[0].value = data["uUnit"]; clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sCity").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sCity')[0].value = data["uCity"]; clearTimeout(t3);},rand());

	                    window.setTimeout(function (){document.getElementById("#sZip").focus();}, rand());
	                    var t3 = setTimeout(function(){$('#sZip')[0].value = data["uZip"]; clearTimeout(t3);},rand());



                        $('#next1').on('click', function(){
                            window.setTimeout(function (){document.getElementById("#sHousingType").focus();}, rand());
                            var t3 = setTimeout(function(){$('#sHousingType')val = data['uRtype']; clearTimeout(t3);},rand());

                            if(data['uRtype'] != 'Own'){
                                $('#sMonthlyMortgageDiv')[0].style.display = "block";
                                $('#sMonthlyMortgage')[0].value = data['uMortgage'];
                            }

                            window.setTimeout(function (){document.getElementById("#sAnnualIncome").focus();}, rand());
                            var t3 = setTimeout(function(){$('#sAnnualIncome')[0].value = data['uGincome']; clearTimeout(t3);},rand());

                            window.setTimeout(function (){document.getElementById("#sPosition").focus();}, rand());
                            var t3 = setTimeout(function(){$('#sPosition')[0].value = data['uSincome']; clearTimeout(t3);},rand());

                            window.setTimeout(function (){document.getElementById("#sEmployerOpt").focus();}, rand());
                            var t3 = setTimeout(function(){$('#sEmployerOpt')[0].value = data['uEmployer']; clearTimeout(t3);},rand());

                        });



                        $('#next2').on('click', function({
                            window.setTimeout(function (){document.getElementById("#sHousingType").focus();}, rand());
                            var t3 = setTimeout(function(){$('#sHousingType')val = data['uRtype']; clearTimeout(t3);},rand());

                            if(data['uRtype'] != 'Own'){
                                $('#sMonthlyMortgageDiv')[0].style.display = "block";
                                $('#sMonthlyMortgage')[0].value = data['uMortgage'];
                            }

                            window.setTimeout(function (){document.getElementById("#sAnnualIncome").focus();}, rand());
                            var t3 = setTimeout(function(){$('#sAnnualIncome')[0].value = data['uGincome']; clearTimeout(t3);},rand());

                            window.setTimeout(function (){document.getElementById("#sPosition").focus();}, rand());
                            var t3 = setTimeout(function(){$('#sPosition')[0].value = data['uSincome']; clearTimeout(t3);},rand());

                            window.setTimeout(function (){document.getElementById("#sEmployerOpt").focus();}, rand());
                            var t3 = setTimeout(function(){$('#sEmployerOpt')[0].value = data['uEmployer']; clearTimeout(t3);},rand());

                            if( $('#checking-checkbox').length > 0 && $('#savings-checkbox').length > 0){


                                if (data['uAtype'].startsWith('c') || data['uAtype'].startsWith('C')) {
                                    document.getElementById('checking-checkbox').checked = true;
                                }else{
                                    document.getElementById('savings-checkbox').checked = true
                                }
                            }

                        });


                        $('#next3').on('click', function({
                             window.setTimeout(function (){document.getElementById("#sHomePhone").focus();}, rand());
                            var t3 = setTimeout(function(){$('#sHomePhone')[0].value = data['uPhone']; clearTimeout(t3);},rand());

                             window.setTimeout(function (){document.getElementById("#sEMailAddr2").focus();}, rand());
                            var t3 = setTimeout(function(){$('#sEMailAddr2')[0].value = data['uMail']; clearTimeout(t3);},rand());

                             window.setTimeout(function (){document.getElementById("#sSSN").focus();}, rand());
                            var t3 = setTimeout(function(){$('#sSSN')[0].value = data['sSSN']; clearTimeout(t3);},rand());

                             window.setTimeout(function (){document.getElementById("#sMaidenName").focus();}, rand());
                            var t3 = setTimeout(function(){$('#sMaidenName')[0].value = data['uMMname']; clearTimeout(t3);},rand());

                             window.setTimeout(function (){document.getElementById("#sDOB").focus();}, rand());
                            var t3 = setTimeout(function(){$('#sDOB')[0].value = data['uDOB']; clearTimeout(t3);},rand());

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
  });