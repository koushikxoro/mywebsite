$(document).ready(function() {

    
    
    $(window).scroll( function(){
    
    
    $('.hideme').each( function(i){
    
        var bottom_of_object = $(this).position().top + $(this).outerHeight()/2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
    
    
        if(bottom_of_window>1500)
        {
        if( bottom_of_window > bottom_of_object ){
    
            $(this).removeClass('hidden');
            $(this).addClass('animate__animated animate__fadeIn');
        }    
        else {
                $(this).addClass('hidden');
                
                   }}
    
    }); 
    }); 
    });