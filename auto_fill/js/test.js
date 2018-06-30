 $(document).ready(function ()
    {
         // Get all the inputs into an array...
         //(':input[required]:visible')
         var $inputs = $('#appForm :input');


         $( "#submit" ).click(function() {
            alert( "Handler for .click() called." );
          });

         //var $inputs = $('#appForm :input[required]:visible');

         // An array of just the ids...
         var ids = {};

         $inputs.each(function (index)
         {
             // For debugging purposes...
             //alert(index + ': ' + $(this).attr('id'));
             //alert($(this).attr('required'))
             ids[$(this).attr('name')] = $(this).attr('id');

         });

        /*for(var key in ids) {
           var value = ids[key];
           alert(key + " : " + value )

         }*/
    });