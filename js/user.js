$('.btne').click(function() {
	$vaar = $(this).html();
	$('#jumbohead').fadeOut(200, function() {
		$('#jumbohead').html($vaar);
		$('#jumbohead').fadeIn(200);
	});
});

$('#squash').click(function() {
	$('.bio').each(function() {
		$(this).hide();
	});
	$('#bios').removeClass('hidden');
	
});
