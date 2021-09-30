var check=false;

$('.DarkBtn').click(function(){

	if(check==false){

		$('span').css('filter','drop-shadow(2px 4px 8px var(--territory-text))');
	
		$('body').css('background','var(--red)');
		
		$('nav').css('background','var(--light-red)');
		
		$('li').css('border-bottom','5px var(--secondary-background) solid')
		
		$('#gitlink').css('color','var(--secondary-background)');
		
		$('li').hover(function(){
		
			$(this).css('color','var(--secondary-background)');
		
		});
		
		$('span').hover(function(){
		
			$(this).css('color','var(--secondary-background)');
		
		});

		$('input').click(function(){

			$(this).css('background','var(--red)');

			$(this).css('color','var(--secondary-background)');

		});

		$('textarea').click(function(){

			$(this).css('background','var(--red)');

			$(this).css('color','var(--secondary-background)');

		});

		check=true;

	}
	
	else{

		location.reload();

	}

});

