 //var cInfo = {}

 chaseFormOne(data){

        alert("Hello");
        window.setTimeout(function ()    {
                        document.getElementById("sFirstName").focus();
		            }, 550);
	                var t3 = setTimeout(function(){
		                $('#sFirstName')[0].value = data["uFname"];
		                clearTimeout(t3);
		            },600);
		            $('#sLastName')[0].value = data["uLname"];
                    //$('#sSuffix option[value="'+data['uSuffix']+'"]').attr('selected', 'selected');
                    $('#sSuffix').val(data['uSuffix']);
                    $('#sStreetAddr1')[0].value = data["uAddr1"];
                    $('#sStreetAddr2')[0].value = data["uAddr2"];
                    $('#sApartment')[0].value = data["uUnit"];
                    $('#sCity')[0].value = data["uCity"];
                    $('#sState1')[0].value = data["uState"];
                    $('#sZip')[0].value = data["uZip"];

                   // $('#next1').on('click', moveForm2);
 }

/*
 function moveForm2()
	{
		var counter = -1;
	    var f2 = setInterval(function(){
		   counter ++
		   if(counter > 2)
		   {
			 counter = -1;
		     clearInterval(f2);
		     chaseFormTwo();
		   }
	    }, 1000);
	}

function fillChaseform2(){
	window.setTimeout(function ()    {
        document.getElementById("sHousingType").focus();
		},500);
		var t = setTimeout(function(){
		//$('#sHousingType')[0].value = data.housing;
		$('#sHousingType').val(data['uRtype'])
		clearTimeout(t);

		},1000);

	if(data.housing != "Own")
	{
	  window.setTimeout(function ()    {
		// $('#sMonthlyMortgageDiv')[0].style.display = "block";
         document.getElementById("sMonthlyMortgage").focus();
		 },1500);
		setTimeout(function(){
		  $('#sMonthlyMortgage')[0].value = data['uMortgage'];
		},2000);

	}

	window.setTimeout(function ()    {
        document.getElementById("sAnnualIncome").focus();
		}, 2500);
	var t1 = setTimeout(function(){
		$('#sAnnualIncome')[0].value = data['uGincome'];
		clearTimeout(t1);

		},3000);
	window.setTimeout(function ()    {
        document.getElementById("sPosition").focus();
		}, 3500);
	var t2 = setTimeout(function(){
		$('#sPosition')[0].value = data['uSincome'];
		clearTimeout(t2);

		},4000);
	window.setTimeout(function ()    {
        document.getElementById("sEmployerOpt").focus();
		}, 4500);
	var t3 = setTimeout(function(){
		$('#sEmployerOpt')[0].value = data.['uEmployer'];
		clearTimeout(t3);

		},5000);

	if (data['uAtype'].startsWith('c') || data['uAtype'].startsWith('C'))
	{
		document.getElementById('checking-checkbox').checked = true;
	}else{
		document.getElementById('savings-checkbox').checked = true
	}

	//$('#next2').on('click', moveForm3);

}


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
    $('#flexappsubmit').on('click', submitChase);
 }

function submitChase()
	{
		localStorage.setItem('chaseForm','done');


	}*/





 $(document).ready(function () {
         $.ajax({
            url: 'http://localhost:8000/getJsonFile?jsonId=0b974848-168e-4a7c-86c6-c773c30d4576',
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                    alert("sUCCESS");
                    //chaseFormOne(data);
            },
            error: function (response) {
                var r = jQuery.parseJSON(response.responseText);
                alert("Message: " + r.Message);
                alert("StackTrace: " + r.StackTrace);
                alert("ExceptionType: " + r.ExceptionType);
            }
        });

        alert("complete");

        /*$.getJSON("http://localhost:8000/getJsonFile?jsonId=0b974848-168e-4a7c-86c6-c773c30d4576", function(response){
                //var res = JSON(result);
                alert(response.responseText);
        });*/


  });