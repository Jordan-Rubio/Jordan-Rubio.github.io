$('button').click(function() {
	var target = "#" + $(this).data("target");//defines target based on data-target
	//handles displaying sections based on button clicks
    $(".section").not(target).hide();
    $(target).show();
    //handles active class to button
    $(this).addClass('active');
    $('button').not(this).removeClass('active');//removes active class from button that already has it
});