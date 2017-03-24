//TODO
//Map out Learn tab information
//Redo diagram for the Learn tab

$(document).ready(function() {

	$('.tab').mouseenter(function() {
		$('body').css('cursor','pointer');
	});
	$('.tab').mouseleave(function() {
		$('body').css('cursor','default');
	});
	//everything that happens in the Learn tab
	$('#learn.tab').click(function() {
		$('#learn.tab').addClass('highlighted');
		$('#learn.body').css('display','block');
		$('#background').css('height','500px');
		$('.heat').css('display','none');
		$('.gamma').css('display','none');

		$('#interact.tab').removeClass('highlighted');
		$('#interact.body').css('display','none');
		$('#quiz.tab').removeClass('highlighted');
		$('#quiz.body').css('display','none');
		$('#open').css('display','none');
	});

		$('.nextbutton').mouseenter(function() {
			$(this).css("background-color","#333333");
			$('body').css('cursor','pointer');
		});
		$('.nextbutton').mouseleave(function() {
			$(this).css("background-color","#666666");
			$('body').css('cursor','default');
		});
		$('.prevbutton').mouseenter(function() {
			$(this).css("background-color","#333333");
			$('body').css('cursor','pointer');
		});
		$('.prevbutton').mouseleave(function() {
			$(this).css("background-color","#666666");
			$('body').css('cursor','default');
		});
		$('.transcript').mouseenter(function() {
			$(this).css("background-color","#333333");
			$('body').css('cursor','pointer');
		});
		$('.transcript').mouseleave(function() {
			$(this).css("background-color","#666666");
			$('body').css('cursor','default');
		});
		$('.speaker').mouseenter(function() {
			$('body').css('cursor','pointer');
		});
		$('.speaker').mouseleave(function() {
			$('body').css('cursor','default');
		});

		var tran1 = false;
		var tran2 = false;
		var tran3 = false;
		var tran4 = false;
		var tran5 = false;
		var tran6 = false;
		var tran7 = false;

		$('#nextbutton8').click(function() {
			$('#nextbutton8').css('display','none');
			$('#nextbutton9').css('display','block');
			$('#prevbutton2').css('display','block');
			$('#trans1').css('display','none');
			$('#trans2').css('display','block');
			$('#slide1').css('display','none');
			$('#slide2').css('display','block');
			$('#tran1').css('display','none');
			tran1=false;
		});
		$('#prevbutton2').click(function() {
			$('#nextbutton9').css('display','none');
			$('#nextbutton8').css('display','block');
			$('#prevbutton2').css('display','none');
			$('#trans1').css('display','block');
			$('#trans2').css('display','none');
			$('#slide2').css('display','none');
			$('#slide1').css('display','block');
			$('#tran2').css('display','none');
			tran2=false;
		});

		$('#nextbutton9').click(function() {
			$('#nextbutton9').css('display','none');
			$('#prevbutton2').css('display','none');
			$('#nextbutton10').css('display','block');
			$('#prevbutton3').css('display','block');
			$('#trans2').css('display','none');
			$('#trans3').css('display','block');
			$('#slide2').css('display','none');
			$('#slide3').css('display','block');
			$('#tran2').css('display','none');
			tran2=false;
		});
		$('#prevbutton3').click(function() {
			$('#nextbutton10').css('display','none');
			$('#prevbutton3').css('display','none');
			$('#nextbutton9').css('display','block');
			$('#prevbutton2').css('display','block');
			$('#trans2').css('display','block');
			$('#trans3').css('display','none');
			$('#slide3').css('display','none');
			$('#slide2').css('display','block');
			$('#tran3').css('display','none');
			tran3=false;
		});

		$('#nextbutton10').click(function() {
			$('#nextbutton10').css('display','none');
			$('#prevbutton3').css('display','none');
			$('#nextbutton11').css('display','block');
			$('#prevbutton4').css('display','block');
			$('#trans3').css('display','none');
			$('#trans4').css('display','block');
			$('#slide3').css('display','none');
			$('#slide4').css('display','block');
			$('#tran3').css('display','none');
			tran3=false;
		});
		$('#prevbutton4').click(function() {
			$('#nextbutton11').css('display','none');
			$('#prevbutton4').css('display','none');
			$('#nextbutton10').css('display','block');
			$('#prevbutton3').css('display','block');
			$('#trans3').css('display','block');
			$('#trans4').css('display','none');
			$('#slide4').css('display','none');
			$('#slide3').css('display','block');
			$('#tran4').css('display','none');
			tran4=false;
		});

		$('#nextbutton11').click(function() {
			$('#nextbutton11').css('display','none');
			$('#prevbutton4').css('display','none');
			$('#nextbutton12').css('display','block');
			$('#prevbutton5').css('display','block');
			$('#trans4').css('display','none');
			$('#trans5').css('display','block');
			$('#slide4').css('display','none');
			$('#slide5').css('display','block');
			$('#tran4').css('display','none');
			tran4=false;
		});
		$('#prevbutton5').click(function() {
			$('#nextbutton12').css('display','none');
			$('#prevbutton5').css('display','none');
			$('#nextbutton11').css('display','block');
			$('#prevbutton4').css('display','block');
			$('#trans4').css('display','block');
			$('#trans5').css('display','none');
			$('#slide5').css('display','none');
			$('#slide4').css('display','block');
			$('#tran5').css('display','none');
			tran5=false;
		});

		$('#nextbutton12').click(function() {
			$('#nextbutton12').css('display','none');
			$('#prevbutton5').css('display','none');
			$('#prevbutton6').css('display','block');
			$('#trans5').css('display','none');
			$('#trans6').css('display','block');
			$('#slide5').css('display','none');
			$('#slide6').css('display','block');
			$('#tran5').css('display','none');
			tran5=false;
		});
		$('#prevbutton6').click(function() {
			$('#prevbutton6').css('display','none');
			$('#nextbutton12').css('display','block');
			$('#prevbutton5').css('display','block');
			$('#trans5').css('display','block');
			$('#trans6').css('display','none');
			$('#slide6').css('display','none');
			$('#slide5').css('display','block');
			$('#tran6').css('display','none');
			tran6=false;
		});
		
		$('#trans1').click(function(){
			if(!tran1){
				$('#tran1').css('display','block');
				tran1=true;
			}
			else{
				$('#tran1').css('display','none');
				tran1=false;
			}
		});
		$('#trans2').click(function(){
			if(!tran2){
				$('#tran2').css('display','block');
				tran2=true;
			}
			else{
				$('#tran2').css('display','none');
				tran2=false;
			}
		});
		$('#trans3').click(function(){
			if(!tran3){
				$('#tran3').css('display','block');
				tran3=true;
			}
			else{
				$('#tran3').css('display','none');
				tran3=false;
			}
		});
		$('#trans4').click(function(){
			if(!tran4){
				$('#tran4').css('display','block');
				tran4=true;
			}
			else{
				$('#tran4').css('display','none');
				tran4=false;
			}
		});
		$('#trans5').click(function(){
			if(!tran5){
				$('#tran5').css('display','block');
				tran5=true;
			}
			else{
				$('#tran5').css('display','none');
				tran5=false;
			}
		});
		$('#trans6').click(function(){
			if(!tran6){
				$('#tran6').css('display','block');
				tran6=true;
			}
			else{
				$('#tran6').css('display','none');
				tran6=false;
			}
		});



	//everything that happens in the Interact tab
	$('#interact.tab').click(function() {
		$('#interact.tab').addClass('highlighted');
		$('#interact.body').css('display','block');
		if(past){$('#background').css('height','565px');}
		$('.heat').css('display','block');
			$('.heat').css('left','600px');
			$('.heat').css('top','50px');
		$('.gamma').css('display','block');
			$('.gamma').css('left','600px');
			$('.gamma').css('top','140px');

		$('#learn.tab').removeClass('highlighted');
		$('#learn.body').css('display','none');  //LOOK AT THIS
		$('#quiz.tab').removeClass('highlighted');
		$('#quiz.body').css('display','none');  //LOOK AT THIS
		$('#open').css('display','none');
	});

	$('#cont').mouseenter(function(){
		$(this).css('background-color','grey');
		$('body').css('cursor','pointer');
	});
	$('#cont').mouseleave(function(){
		$(this).css('background-color','transparent');
		$('body').css('cursor','default');
	});

	var past = false;
	$('#cont').click(function(){
		$('#intopen').css('display','none');
		$('#parttwo').css('display','block');
		$('#background').css('height','565px');
		past = true;
	});

		$('#hplus').mouseenter(function(){
			$(this).css('background-color','grey');
			$('body').css('cursor','pointer');
		});
		$('#hplus').mouseleave(function(){
			$(this).css('background-color','transparent');
			$('body').css('cursor','default');
		});

		//All comments below up to line 349 belong to a failed experimentation
		//Attempted to implement a "pressure" and "temperature" counter
		//Implementation went beyond scope of program; abandoned the concept halfway through development

		/*$('#pplus').mouseenter(function(){
			$(this).css('background-color','white');
			$('body').css('cursor','pointer');
		});
		$('#pplus').mouseleave(function(){
			$(this).css('background-color','grey');
			$('body').css('cursor','default');
		});
		$('#pminus').mouseenter(function(){
			$(this).css('background-color','white');
			$('body').css('cursor','pointer');
		});
		$('#pminus').mouseleave(function(){
			$(this).css('background-color','grey');
			$('body').css('cursor','default');
		});
		$('#tplus').mouseenter(function(){
			$(this).css('background-color','white');
			$('body').css('cursor','pointer');
		});
		$('#tplus').mouseleave(function(){
			$(this).css('background-color','grey');
			$('body').css('cursor','default');
		});
		$('#tminus').mouseenter(function(){
			$(this).css('background-color','white');
			$('body').css('cursor','pointer');
		});
		$('#tminus').mouseleave(function(){
			$(this).css('background-color','grey');
			$('body').css('cursor','default');
		});*/


		//variables
		/*var pressure = 0;
		var temperature = 0;
		$('#pplus').click(function() {
			pressure+=1;
			$("#pcounter #pres").html(pressure);
		});
		$('#pminus').click(function() {
			if(pressure>0){
				pressure-=1;
			}
			else{
				pressure=0;
			}
			$("#pcounter #pres").html(pressure);
		});
		$('#tplus').click(function() {
			temperature+=1;
			$("#tcounter #temp").html(temperature);
		});
		$('#tminus').click(function() {
			if(temperature>0){
				temperature-=1;
			}
			else{
				temperature=0;
			}
			$("#tcounter #temp").html(temperature);
		});*/

		//hydrogen
		var  numH = 0;
		//var caseleft = Math.floor(Math.random()*600);
		//var casetop = Math.floor(Math.random()*)
		var dheat=0;
		var dgamma=0;
		$('#hplus').click(function() {
			if(numH<10){
			var div = document.getElementById('hydrogen1')
			var imag = document.createElement('img');
      		imag.src = "hydrogen1.PNG";
			div.appendChild(imag);
			numH++;
				$('#hydrogen1 img:last').width('40px');
				$('#hydrogen1 img:last').height('40px');
				$('#hydrogen1 img:last').addClass('h');
				$('#hydrogen1 img:last').addClass('hy');
				$('.h').draggable({containment: '#case'});
			
			$('.h').mouseenter(function(){
				$('body').css('cursor','pointer');
			});
			$('.h').mouseleave(function(){
				$('body').css('cursor','default');
			});
			}
			
			$('.h').click(function(){
				$(this).removeClass('hy');
				$(this).addClass('hydro');
				$('.hydro').animate(
					{ left:'+1px' }, 
					{ duration: 'slow',
					  progress: function(){
					  	$('.hydro').each( function(){
					    var sOffset = $(this).offset();
					    $('.hy').each( function(){
					        var eOffset = $(this).offset();
					        var banana = this;
					        if( Math.floor(eOffset.left/10) == Math.floor( sOffset.left/10)){
					        	alert('boom!');
					            $('.hydro').css('display','none');
					            $(banana).css('display','none');
					            var divi = document.getElementById('hydrogen1');
								var igm = document.createElement('img');
					      		igm.src = "hydrogen2.PNG";
								divi.appendChild(igm);
								numH-=2;
									$('#hydrogen1 img:last').width('80px');
									$('#hydrogen1 img:last').height('50px');
									$('#hydrogen1 img:last').addClass('h2');
									$('#hydrogen1 img:last').addClass('hy2');
									$('.h2').draggable({containment: '#case'});

									$('.h2').mouseenter(function(){
										$('body').css('cursor','pointer');
									});
									$('.h2').mouseleave(function(){
										$('body').css('cursor','default');
									});
								
								if(dheat==0){
								var woh = document.getElementById('background');
								var wah = document.createElement('img');
								wah.src = "heatenergy.PNG";
								woh.appendChild(wah);
									dheat++;
									$('#background img:last').width('50px');
									$('#background img:last').height('50px');
									$('#background img:last').addClass('heat');
									$('#background img:last').css('position','relative');
									$('#background img:last').css('top','-25px');
									$('#background img:last').css('left','250px');
									
								}
								else{
									$('.heat').css('width', 50+(dheat*10));
									$('.heat').css('height', 50+(dheat*10));
									dheat++;
								}

									$('.h2').click(function(){
										$(this).removeClass('hy2');
										$(this).addClass('hydro2');
										$('.hydro2').animate(
											{ left:'+1px' }, 
											{ duration: 'slow',
											  progress: function(){
											  	$('.hydro2').each( function(){
											    var aOffset = $(this).offset();
											    $('.h').each( function(){
											        var bOffset = $(this).offset();
											        var banana = this;
											        if( Math.floor(aOffset.left/10) == Math.floor( bOffset.left/10) ){
											        	alert('boom!');
											            $('.hydro2').css('display','none');
											            $(banana).css('display','none');
											            var divid = document.getElementById('hydrogen1');
														var imagi = document.createElement('img');
											      		imagi.src = "helium3.PNG";
														divid.appendChild(imagi);
															$('#hydrogen1 img:last').width('90px');
															$('#hydrogen1 img:last').height('90px');
															$('#hydrogen1 img:last').addClass('he3');
															$('#hydrogen1 img:last').addClass('hel3');
															$('.he3').draggable({containment: '#case'});

															$('.he3').mouseenter(function(){
																$('body').css('cursor','pointer');
															});
															$('.he3').mouseleave(function(){
																$('body').css('cursor','default');
															});

															if(dgamma==0){
															var wee = document.getElementById('background');
															var woo = document.createElement('img');
															woo.src = "gamma.PNG";
															wee.appendChild(woo);
																dgamma++;
																$('#background img:last').width('50px');
																$('#background img:last').height('50px');
																$('#background img:last').addClass('gamma');
																$('#background img:last').css('position','relative');
																$('#background img:last').css('top','100px');
																$('#background img:last').css('left','225px');
																$('.heat').css('left','275px');
															}
															else{
																$('.gamma').css('width', 50+(dgamma*10));
																$('.gamma').css('height', 50+(dgamma*10));
																$('.heat').css('left',275+(dgamma*10));
																dgamma++;
															}

															$('.he3').click(function(){
																$(this).removeClass('hel3');
																$(this).addClass('helio3');
																$('.helio3').animate(
																	{ left:'+1px' }, 
																	{ duration: 'slow',
																	  progress: function(){
																	  	$('.helio3').each( function(){
																	    var cOffset = $(this).offset();
																	    $(this).css('z-index','17');
																	    $('.hel3').each( function(){
																	        var dOffset = $(this).offset();
																	        var banana = this;
																	        if( Math.floor(cOffset.left/10) == Math.floor( dOffset.left/10) && numH!=11){	
																	        	alert('boom!');
																	            $('.helio3').css('display','none');
																	            $(banana).css('display','none');
																	            var divide = document.getElementById('hydrogen1');
																				var imagin = document.createElement('img');
																	      		imagin.src = "helium4.PNG";
																				divide.appendChild(imagin);
																				numH+=2;
																					$('#hydrogen1 img:last').width('140px');
																					$('#hydrogen1 img:last').height('130px');
																					$('#hydrogen1 img:last').addClass('he4');
																				imagin = document.createElement('img');
																	      		imagin.src = "hydrogen1.PNG";
																				divide.appendChild(imagin);
																					$('#hydrogen1 img:last').width('40px');
																					$('#hydrogen1 img:last').height('40px');
																					$('#hydrogen1 img:last').addClass('h');
																					$('#hydrogen1 img:last').addClass('hy');
																				imagin = document.createElement('img');
																	      		imagin.src = "hydrogen1.PNG";
																				divide.appendChild(imagin);
																					$('#hydrogen1 img:last').width('40px');
																					$('#hydrogen1 img:last').height('40px');
																					$('#hydrogen1 img:last').addClass('h');
																					$('#hydrogen1 img:last').addClass('hy');
																				numH=11;
																				
																				$('.gamma').css('width', 50+(dgamma*10));
																				$('.gamma').css('height', 50+(dgamma*10));
																				$('.heat').css('left',275+(dgamma*10));
																				dgamma++;
																				
																				$('#hplus').css('display','none');
																				$('#hydrogen1').css('top','-995px');
																				$('#case').css('top','-550px');
																				$('#reset').css('display','block');
																				
																				//$('.h').draggable("disable");
																				//$('.h2').draggable("disable");
																				//$('.he3').draggable("disable");
																				//$('.he4').draggable("disable");
																				$('#reset').mouseenter(function(){
																					$('body').css('cursor','pointer');
																				});
																				$('#reset').mouseleave(function(){
																					$('body').css('cursor','default');
																				});
																				$('#reset').click(function(){
																					$('.h').remove();
																					$('.h2').remove();
																					$('.he3').remove();
																					$('.he4').remove();
																					$('.heat').remove();
																					dheat=0;
																					$('.gamma').remove();
																					dgamma=0;
																					$('#hydrogen1').css('top','-995px');
																					$('#hplus').css('display','inline-block');
																					$('#reset').css('display','none');
																					$('#cheat').css('z-index','500');
																					numH=0;
																				});
													        				}
																	    });
														    			});
																	  }
																	}
																);
																$(this).addClass('hel2');
																$(this).removeClass('helio2');
															});
							        				}
											    });
								    			});
											  }
											}
										);
										$(this).addClass('hy2');
										$(this).removeClass('hydro2');
									});
	        				}
					    });
		    			});
					  }
					}
				);
				$(this).addClass('hy');
				$(this).removeClass('hydro');
			});	
		});
		


	//everything that happens in the Quiz tab
	$('#quiz.tab').click(function() {
		$('#quiz.tab').addClass('highlighted');
		$('#quiz.body').css('display','block');
		$('#background').css('height','500px');
		$('.heat').css('display','none');
		$('.gamma').css('display','none');

		$('#interact.tab').removeClass('highlighted');
		$('#interact.body').css('display','none');
		$('#learn.tab').removeClass('highlighted');
		$('#learn.body').css('display','none'); 
		$('#open').css('display','none');
	});

		var incorrect = 0;
		$('.answer').mouseenter(function(){
			$(this).css('background-color','grey');
			$('body').css('cursor','pointer');
		});
		$('.answer').mouseleave(function(){
			$(this).css('background-color','#006699');
			$('body').css('cursor','default');
		});
		//question 1
		$('#A1').click(function() {
			$('.answer').css('display','none');
			$('#correct1').css('display','block');
			$('#exp1').css('display','block');
			$('#nextbutton1').css('display','block');
		});
		$('#B1').click(function() {
			$('.answer').css('display','none');
			$('#incorrect1').css('display','block');
			$('#exp1').css('display','block');
			$('#nextbutton1').css('display','block');
			incorrect++;
		});
		$('#C1').click(function() {
			$('.answer').css('display','none');
			$('#incorrect1').css('display','block');
			$('#exp1').css('display','block');
			$('#nextbutton1').css('display','block');
			incorrect++;
		});
		$('#D1').click(function() {
			$('.answer').css('display','none');
			$('#incorrect1').css('display','block');
			$('#exp1').css('display','block');
			$('#nextbutton1').css('display','block');
			incorrect++;
		});

		$('#nextbutton1').click(function() {
			$('#question1').css('display','none');
			$('#question2').css('display','block');
			$('.answer').css('display','block');
			$('.answer').css('font-size','14px');
			$('#nextbutton1').css('display','none');
		});

		//question 2
		$('#A2').click(function () {
			$('.answer').css('display','none');
			$('#incorrect2').css('display','block');
			$('#exp2').css('display','block');
			$('#nextbutton2').css('display','block');
			incorrect++;
		});
		$('#B2').click(function () {
			$('.answer').css('display','none');
			$('#correct2').css('display','block');
			$('#exp2').css('display','block');
			$('#nextbutton2').css('display','block');
		});
		$('#C2').click(function () {
			$('.answer').css('display','none');
			$('#incorrect2').css('display','block');
			$('#exp2').css('display','block');
			$('#nextbutton2').css('display','block');
			incorrect++;
		});
		$('#D2').click(function () {
			$('.answer').css('display','none');
			$('#incorrect2').css('display','block');
			$('#exp2').css('display','block');
			$('#nextbutton2').css('display','block');
			incorrect++;
		});

		$('#nextbutton2').click(function () {
			$('#question2').css('display','none');
			$('#question3').css('display','block');
			$('.answer').css('display','block');
			$('#nextbutton2').css('display','none');
		});

		//question 3
		$('#A3').click(function () {
			$('.answer').css('display','none');
			$('#incorrect3').css('display','block');
			$('#exp3').css('display','block');
			$('#nextbutton3').css('display','block');
			incorrect++;
		});
		$('#B3').click(function () {
			$('.answer').css('display','none');
			$('#incorrect3').css('display','block');
			$('#exp3').css('display','block');
			$('#nextbutton3').css('display','block');
			incorrect++;
		});
		$('#C3').click(function () {
			$('.answer').css('display','none');
			$('#incorrect3').css('display','block');
			$('#exp3').css('display','block');
			$('#nextbutton3').css('display','block');
			incorrect++;
		});
		$('#D3').click(function () {
			$('.answer').css('display','none');
			$('#correct3').css('display','block');
			$('#exp3').css('display','block');
			$('#nextbutton3').css('display','block');
		});

		$('#nextbutton3').click(function () {
			$('#question3').css('display','none');
			$('#question4').css('display','block');
			$('.answer').css('display','block');
			$('#nextbutton3').css('display','none');
		});

		//question 4
		$('#A4').click(function () {
			$('.answer').css('display','none');
			$('#incorrect4').css('display','block');
			$('#exp4').css('display','block');
			$('#nextbutton4').css('display','block');
			incorrect++;
		});
		$('#B4').click(function () {
			$('.answer').css('display','none');
			$('#incorrect4').css('display','block');
			$('#exp4').css('display','block');
			$('#nextbutton4').css('display','block');
			incorrect++;
		});
		$('#C4').click(function () {
			$('.answer').css('display','none');
			$('#correct4').css('display','block');
			$('#exp4').css('display','block');
			$('#nextbutton4').css('display','block');
		});
		$('#D4').click(function () {
			$('.answer').css('display','none');
			$('#incorrect4').css('display','block');
			$('#exp4').css('display','block');
			$('#nextbutton4').css('display','block');
			incorrect++;
		});

		$('#nextbutton4').click(function () {
			$('#question4').css('display','none');
			$('#question5').css('display','block');
			$('.answer').css('display','block');
			$('.answer').css('font-size','20px');
			$('#nextbutton4').css('display','none');
		});

		//question 5
		$('#A5').click(function () {
			$('.answer').css('display','none');
			$('#incorrect5').css('display','block');
			$('#exp5').css('display','block');
			$('#nextbutton5').css('display','block');
			incorrect++;
		});
		$('#B5').click(function () {
			$('.answer').css('display','none');
			$('#correct5').css('display','block');
			$('#exp5').css('display','block');
			$('#nextbutton5').css('display','block');
		});

		$('#nextbutton5').click(function () {
			$('#question5').css('display','none');
			$('#question6').css('display','block');
			$('.answer').css('display','block');
			$('#nextbutton5').css('display','none');
		});

		//question 6
		$('#A6').click(function () {
			$('.answer').css('display','none');
			$('#incorrect6').css('display','block');
			$('#exp6').css('display','block');
			$('#nextbutton6').css('display','block');
			incorrect++;
		});
		$('#B6').click(function () {
			$('.answer').css('display','none');
			$('#correct6').css('display','block');
			$('#exp6').css('display','block');
			$('#nextbutton6').css('display','block');
		});

		$('#nextbutton6').click(function () {
			$('#question6').css('display','none');
			$('#question7').css('display','block');
			$('.answer').css('display','block');
			$('.answer').css('font-size','14px');
			$('#nextbutton6').css('display','none');
		});

		//question 7
		$('#A7').click(function () {
			$('.answer').css('display','none');
			$('#incorrect7').css('display','block');
			$('#exp7').css('display','block');
			$('#nextbutton7').css('display','block');
			incorrect++;
		});
		$('#B7').click(function () {
			$('.answer').css('display','none');
			$('#incorrect7').css('display','block');
			$('#exp7').css('display','block');
			$('#nextbutton7').css('display','block');
			incorrect++;
		});
		$('#C7').click(function () {
			$('.answer').css('display','none');
			$('#incorrect7').css('display','block');
			$('#exp7').css('display','block');
			$('#nextbutton7').css('display','block');
			incorrect++;
		});
		$('#D7').click(function () {
			$('.answer').css('display','none');
			$('#correct7').css('display','block');
			$('#exp7').css('display','block');
			$('#nextbutton7').css('display','block');
		});

		$('#nextbutton7').click(function () {
			$('#question7').css('display','none');
			$('#finish').css('display','block');
			$('#nextbutton7').css('display','none');
			$("#finish #value").html(7-incorrect);
		});
});