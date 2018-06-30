
 $(document).ready(function () {


        if($('#ApplyNow') != "undefined" && $('#ApplyNow') != null && $('#ApplyNow') != ''){

                href = $('#ApplyNow').attr('href');
                loc = window.location.href;
                index = loc.indexOf("?");
                val = loc.substr(index+1).split('=')[0];
                alert(val);
                href = href + "?" + "clid=" + val;
                $("#ApplyNow").attr("href", href);
                alert("Accept Terms?");
        }else{
         $.ajax({
            url: 'http://localhost:8000/getJsonFile?jsonId=0b974848-168e-4a7c-86c6-c773c30d4576',
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {

                    if ( $('#sFirstName').css('display') !== 'none')  {
                        $('#sFirstName')[0].value = data['uFname'];
                        $('#sLastName')[0].value = data["uLname"];
                        $('#sSuffix').val(data['uSuffix']);
                        $('#sStreetAddr1')[0].value = data["uAddr1"];
                        $('#sStreetAddr2')[0].value = data["uAddr2"];
                        $('#sApartment')[0].value = data["uUnit"];
                        $('#sCity')[0].value = data["uCity"];
                        $('#sState1')[0].value = data["uState"];
                        $('#sZip')[0].value = data["uZip"];



                    if( $('#sHousingType').is(':visible')  || $('#sHousingType').css('display') !== 'none') {
                        $('#sHousingType').val(data['uRtype']);
                        //alert(data['uRtype']);
                        if(data['uRtype'] != 'Own'){
                            $('#sMonthlyMortgageDiv')[0].style.display = "block";
                            $('#sMonthlyMortgage')[0].value = data['uMortgage'];
                         }
                        $('#sAnnualIncome')[0].value = data['uGincome'];
                        $('#sPosition')[0].value = data['uSincome'];
                        $('#sEmployerOpt')[0].value = data['uEmployer'];
                        if (data['uAtype'].startsWith('c') || data['uAtype'].startsWith('C')) {
                            document.getElementById('checking-checkbox').checked = true;
                        }else{
                            document.getElementById('savings-checkbox').checked = true
                    }

                    if( $('#sHomePhone').is(':visible')  || $('#sHomePhone').css('display') !== 'none') {
                           $('#sHomePhone')[0].value = data['uPhone'];
                           $('#sEMailAddr2')[0].value = data['uMail'];
                           $('#sSSN')[0].value = data['uSSNumber'];
                           $('#sMaidenName')[0].value = data['uMMname'];
                           $('#sDOB')[0].value = data['uDOB'];
                           $('#next3').on('click', submitScreen);
                    }

            },
            error: function (response) {
                var r = jQuery.parseJSON(response.responseText);
                alert("Message: " + r.Message);
                alert("StackTrace: " + r.StackTrace);
                alert("ExceptionType: " + r.ExceptionType);
            }
        });


        /*$.getJSON("http://localhost:8000/getJsonFile?jsonId=0b974848-168e-4a7c-86c6-c773c30d4576", function(response){
                //var res = JSON(result);
                alert(response.responseText);
        });*/
  });