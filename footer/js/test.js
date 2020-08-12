$(function () {
	var footer = $('.footer')

	function resetClass() {
		$('.wrapper').removeClass('wrapper-push');
		$('.push').removeClass('push-push');
		$('body').removeClass('body-flex');
		$('body').removeClass('body-grid');
		$('.wrapper').removeClass('wrapper-flex');
		footer.removeClass('relative')
		footer.removeClass('absolute')
	}

	$('#btn-add').click(function () {
		var box = $('#main'),
			str = '';
		str = '<table class="table"><caption>Optionaltablecaption.</caption><thead><tr><th>#</th><th>FirstName</th><th>LastName</th><th>Username</th></tr></thead><tbody><tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th scope="row">3</th><td>Larry</td><td>theBird</td><td>@twitter</td></tr></tbody></table>'
		box.append(str);
	})
	$('#btn-delete').click(function () {
		var box = $('.table');
		if (box.length) {
			box[0].remove()
		}
	})
	$('#btn-absolute').click(function () {
		resetClass();
		footer.addClass('absolute');
	})
	$('#btn-relative').click(function () {
		resetClass()
		footer.addClass('relative');
	})
	$('#btn-push').click(function () {
		resetClass();
		$('.wrapper').addClass('wrapper-push');
		$('.placeholder-div').addClass('placeholder-push');
	})
	$('#btn-flex').click(function () {
		resetClass();
		$('body').addClass('body-flex');
		$('.wrapper').addClass('wrapper-flex');
	})
	$('#btn-grid').click(function () {
		resetClass();
		$('body').addClass('body-grid');
	})
})