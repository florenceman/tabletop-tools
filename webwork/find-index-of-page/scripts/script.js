$(document).ready(function(){
	$('#get_result').click(function(){
		$('#result p').html(calculate_result($('#in_1').val(),$('#in_2').val()));
	});
});
