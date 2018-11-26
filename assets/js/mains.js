function changeLogoAbove(){
    jQuery(document).scroll(function(){
        if (jQuery(this).scrollTop() > 500){
            jQuery('#logo').attr('src', 'http://localhost/analiticom/wp-content/uploads/2018/11/logo-analiticom-w.png');
        }
        if (jQuery(this).scrollTop() < 500){
            jQuery('#logo').attr('src', 'http://localhost/analiticom/wp-content/uploads/2018/11/Analiticom-logo-1080x675.png');
        } 	
    });
}
changeLogoAbove();


function dynamiClassOne(){
    var elementOne = jQuery(document).find('.trp-ls-language-name');

    jQuery(elementOne).each(function(index, el){
        jQuery(el).addClass('dynamiClassNav-nro-' + index);
        //console.log(elementOne);
    });
}

dynamiClassOne();



/*Form messege popup*/

function messegeFunction(){
    jQuery('button.et_pb_contact_submit.et_pb_button').click(function(){
        //jQuery('div.et-pb-contact-message').css({'display':'block'});
        //jQuery('.et_pb_contact_form_0.et_pb_contact_form_container.et_pb_module').css('cssText', 'margin-right: initial !important;')
       // jQuery('.et_contact_error').css('cssText', 'border: 2px solid red!important;');
    });
}

messegeFunction();
