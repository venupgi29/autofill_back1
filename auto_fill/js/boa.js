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

    //return val;
    return "7a88e79b-d4b4-4c5d-97d4-ae4b4eb13488";
 }


 $(document).ready(function () {
         alert("In BoA");
        val = getVal(window.location.href);

         if( $('a#applyNow_engagement').length > 0 ){

                href = $('a#applyNow_engagement').attr('href');
                loc = window.location.href;
                val = getVal(loc);
                if( loc.indexOf("?") > 0  ){
                      href = href + "&clno=" + val;
                }else{
                      href = href + "?clno=" + val;
                }
                alert(href);
                $("a#applyNow_engagement").attr("href", href);
         }else{

            val = getVal(window.location.href);
         //alert(val);
         $.ajax({
            url: 'http://localhost:8000/getJsonFile?jsonId=' + val,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {


                    $('#zz_name_tb_icai_fnm_v_1').trigger('focus');
                    $('#zz_name_tb_icai_fnm_v_1')[0].value = data['uFname'];

                      $('#zz_name_tb_icai_lnm_v_1').trigger('focus');
                    $('#zz_name_tb_icai_lnm_v_1')[0].value = data['uLname'];

                      $('#zz_resi_tb_icai_add1_v_1').trigger('focus');
                    $('#zz_resi_tb_icai_add1_v_1')[0].value=data['uAddr1'];

                      $('#zz_resi_tb_icai_add2_v_1').trigger('focus');
                    $('#zz_resi_tb_icai_add2_v_1')[0].value = data['uUnit'];

                      $('#zz_resi_tb_icai_city_v_1').trigger('focus');
                    $('#zz_resi_tb_icai_city_v_1')[0].value = data['uCity'];

                      $('#zz_resi_dd_icai_state_v_1').trigger('focus');
                    $('#zz_resi_dd_icai_state_v_1').val(data['uState']); //FL

                      $('#zz_resi_tb_icai_zip_v_1').trigger('focus');
                    $('#zz_resi_tb_icai_zip_v_1')[0].value = data['uZip'];

                      $('#zz_phone_tb_icai_ppn_v_1').trigger('focus');
                    $('#zz_phone_tb_icai_ppn_v_1')[0].value = data['uPhone'];

                      $('#zz_phn_lb_ppnotp_v_1').trigger('focus');
                    $('zz_phn_lb_ppnotp_v_1').val("CellularPhone");  // HomePhone or CellularPhone

                      $('#zz_email_tb_icai_v_1').trigger('focus');
                    $('#zz_email_tb_icai_v_1')[0].value = data["uMail"];


                    if (data['#uCitizen'].startsWith('y') || data['uCitizen'].startsWith('Y')) {
                     $('#zz_bi_uscitizen_yes_v_1-real').trigger('focus');
                        document.getElementById('zz_bi_uscitizen_yes_v_1-real').checked = true;
                    }else{
                     $('#zz_bi_uscitizen_no_v_1-real').trigger('focus');
                        document.getElementById('zz_bi_uscitizen_no_v_1-real').checked = true
                    }


                    if (data['uDual'].startsWith('y') || data['uDual'].startsWith('Y')) {
                       $('#zz_bi_dual_citizenship_yes_v_1').trigger('focus');
                        document.getElementById('zz_bi_dual_citizenship_yes_v_1-real').checked = true;
                    }else{
                       $('#zz_bi_dual_citizenship_no_v_1-real').trigger('focus');
                        document.getElementById('zz_bi_dual_citizenship_no_v_1-real').checked = true
                    }


                      $('#zz_ci_citizenship_lb_country_of_residence_v_1').trigger('focus');
                     $('#zz_ci_citizenship_lb_country_of_residence_v_1').val('1000249');

                       $('#zz_ssndob_tb_icai_dateOfBirth_v_1').trigger('focus');
                     $('#zz_ssndob_tb_icai_dateOfBirth_v_1')[0].value = data['uDOB'];

                       $('#zz_emp_empStatus_v_1').trigger('focus');
                     $('#zz_emp_empStatus_v_1').val("Employed");

                       $('#zz_name_tb_icai_tan_v_1').trigger('focus');
                     $('#zz_name_tb_icai_tan_v_1')[0].value = data['uGincome'];

                       $('#zz_name_tb_icai_psoi_v_1').trigger('focus');
                     $('#zz_name_tb_icai_psoi_v_1').val("EmploymentIncome");

                       $('#zz_name_tb_icai_mhp_v_1').trigger('focus');
                     $('#zz_name_tb_icai_mhp_v_1')[0].value = data['uMortgage'];

                    $("input.required").each(function(){

                        alert($(this).attr('name'));

                    });


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
