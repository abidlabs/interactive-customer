/* --- Question Functions ---
   -------------------------------------------------- */

var sample;
function next_q()
{
	if ( $('#end').hasClass('hide') == true )
	{
		
		sample = data.shift();
		
		if (sample != 'done')
		{
			objection_arr = sample['objections'] 
			$('#question-text').html(objection_arr[Math.floor(Math.random() * objection_arr.length)]);
			timer_restart();
			display_tip();
		} else
		{
			$('#question').addClass('hide');
			$('#timer').addClass('hide');
			$('.pg').addClass('hide');
			
			$('#end').removeClass('hide');
			$('.tip').addClass('hide');
		}
	}
}



/* --- Timer Functions ---
   -------------------------------------------------- */

function timer_tick()
{
	$('#timer').removeClass('warning');
	$('#timer').removeClass('fail');
	
	timer = timer - 1;
	$('#timer').html(timer + ' s');
	
	
	
	if (timer < 10)
	{
		$('#timer').addClass('warning');
	}
	if (timer < 5)
	{
		$('#timer').removeClass('warning');
		$('#timer').addClass('fail');
	}
	if (timer <= 0)
	{
		$('#timer').addClass('hide');
		$('.tip').removeClass('hide');
	}
	
	 setTimeout('timer_tick();', 1000);
}

function see_answer(){
	$('#timer').addClass('hide');
	$('.tip').removeClass('hide');	
}

function timer_restart()
{
	$('#timer').removeClass('warning');
	$('#timer').removeClass('fail');
	$('.pg').addClass('hide');
	$('#timer').removeClass('hide');
	$('.tip').addClass('hide');
	
	timer = TIMER_LENGTH;
	
	$('#timer').html(TIMER_LENGTH + ' s');
}



/* --- Tip Functions ---
   -------------------------------------------------- */

function display_tip()
{
	$('#tip').html(sample['answer']);
}
