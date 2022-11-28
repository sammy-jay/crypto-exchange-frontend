jQuery( document ).ready(function() {    
    jQuery( '.upload-btn-wrapper input[type="file"]' ).on( 'change', function() {
		var fileName = jQuery(this).val().split("\\").pop();
		if ( fileName != '' ) {
			var success_img = '<i class="fa fa-check"></i>';
		} else {
			fileName = 'Choose file';
			success_img = '';
		}
		jQuery( '.upload-file' ).html(fileName + ' ' + success_img);
	} );
    jQuery( ".compensation-date, .affiliatedate, .signature-date" ).datepicker();
	if( jQuery( '.getblueforexkycfile' ).val() == '' ) {
		jQuery( '.blueforexkycfile' ).attr( 'required', 'required' );
	}
});