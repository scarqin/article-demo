$(function() {
	var footer = $('.footer')
	$('#btn-absolute').click(function() {
		$('.wrapper').removeClass('wrapper-add');
		$('.push').removeClass('push-add');
		footer.removeClass('relative')
		footer.addClass('absolute');
	})
	$('#btn-relative').click(function() {
		$('.wrapper').removeClass('wrapper-add');
		$('.push').removeClass('push-add');
		footer.removeClass('absolute')
		footer.addClass('relative');
	})
	$('#btn-add').click(function() {
		var box = $('#main'),
			str = '';
		str = '<table class="table"><caption>Optionaltablecaption.</caption><thead><tr><th>#</th><th>FirstName</th><th>LastName</th><th>Username</th></tr></thead><tbody><tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th scope="row">3</th><td>Larry</td><td>theBird</td><td>@twitter</td></tr></tbody></table>'
		box.append(str);
	})
	$('#btn-push').click(function() {
		$('.wrapper').addClass('wrapper-add');
		$('.push').addClass('push-add');
	})
})