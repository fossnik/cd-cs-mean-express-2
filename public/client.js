$(function(){
	$.get( '/cities', function(someCities) {
		var list = [];
		someCities.forEach(function(city){
			list.push(city);
		})
		$('.cities').html(list);
		console.log(list);
	});
});
