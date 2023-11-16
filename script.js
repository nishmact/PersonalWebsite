$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            Name:{
                required:true 
            },
            Email:{
                required:true
            }
        }
       
    })
})