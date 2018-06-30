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

        val = getVal(window.location.href);

        alert("In Barclays");

        $('input').each(function(){

            $element = $(this);

            ide = $element.attr('id');
            label = $("label[for='" + ide + "']");

            alert(ide + " : " + label.text());

        });

  });
