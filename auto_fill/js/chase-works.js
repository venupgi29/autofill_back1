
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

 $(document).ready(function () {


        //if( $('#ApplyNow') !== undefined && $('#ApplyNow') != null && $('#ApplyNow') != '' ){
          if( $('#ApplyNow').length > 0 ){

                href = $('#ApplyNow').attr('href');
                loc = window.location.href;
                val = getVal(loc);

                //index = loc.indexOf("?");
                //val = loc.substr(index+1).split('=')[1];

                if( loc.indexOf("?") > 0  ){
                        href = href + "&clno=" + val;
                }else{
                      href = href + "?clno=" + val;
                }
                //alert(href);
                $("#ApplyNow").attr("href", href);

        }else{
         val = getVal(window.location.href);
         //alert(val);
         $.ajax({
            url: 'http://localhost:8000/getJsonFile?jsonId=' + val,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {


                        $('#sHomePhone')[0].value = data['uPhone'];
                        $('#sEMailAddr2')[0].value = data['uMail'];
                        $('#sSSN')[0].value = data['uSSNumber'];
                        $('#sMaidenName')[0].value = data['uMMname'];
                        $('#sDOB')[0].value = data['uDOB'];


                        $('#sFirstName')[0].value = data['uFname'];
                        $('#sLastName')[0].value = data["uLname"];
                        $('#sSuffix').val(data['uSuffix']);
                        $('#sStreetAddr1')[0].value = data["uAddr1"];
                        $('#sStreetAddr2')[0].value = data["uAddr2"];
                        $('#sApartment')[0].value = data["uUnit"];
                        $('#sCity')[0].value = data["uCity"];
                        $('#sState1')[0].value = data["uState"];
                        $('#sZip')[0].value = data["uZip"];




                        $('#sHousingType').val(data['uRtype']);
                        //alert(data['uRtype']);
                        if(data['uRtype'] != 'Own'){
                            $('#sMonthlyMortgageDiv')[0].style.display = "block";
                            $('#sMonthlyMortgage')[0].value = data['uMortgage'];
                         }
                        $('#sAnnualIncome')[0].value = data['uGincome'];
                        $('#sPosition')[0].value = data['uSincome'];
                        $('#sEmployerOpt')[0].value = data['uEmployer'];


                        if( $('#checking-checkbox').length > 0 && $('#savings-checkbox').length){


                            if (data['uAtype'].startsWith('c') || data['uAtype'].startsWith('C')) {
                                document.getElementById('checking-checkbox').checked = true;
                            }else{
                                document.getElementById('savings-checkbox').checked = true
                            }
                        }




                           //$('#next3').on('click', submitScreen);


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