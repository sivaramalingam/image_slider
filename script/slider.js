//Jquery Functionality

//Jquery Count based functionality
$(document).ready(function(){
	var ulLength = $('.img-ul li').length;
	var liWidth = $('.img-ul li').width() + 20;
	var ulWidth = ulLength * liWidth;
//alert(liWidth);
	$('.img-ul').width(ulWidth);
	var slideCount = 0;
	$('#next').click(function(){
		if(slideCount < (ulLength-4)){
			slideCount++;
			var moveLeft = (slideCount * liWidth);
			$('.img-ul').stop().animate({left: '-'+moveLeft+'px'},500);
		}else
			alert('last image');
	});
	$('#previous').click(function(){
		if(slideCount > 0){
			slideCount--;
			var moveLeft = (slideCount * liWidth);
			$('.img-ul').stop().animate({left: '-'+moveLeft+'px'},500);
		}else
			alert('First image');
	});
});


/* Jquery width based functionality
$(document).ready(function(){
	var ulLength = $('.img-ul li').length;
	var ulWidth = ulLength * 220;
	$('.img-ul').width(ulWidth);
	$('#next').click(function(){
		var left = $('.img-ul li').offset().left - 245;
		var moveLeft = left - (220);
		if(-moveLeft < ulWidth){
			$('.img-ul').stop().animate({left: moveLeft+'px'},500);
		}else{
			 alert('Reached Last');
		}
	});
	$('#previous').click(function(){
		var left = $('.img-ul li').offset().left - 245;
		if(left < 0 ){
			var moveLeft = left + (220);
			$('.img-ul').stop().animate({left: moveLeft+'px'},500);
		}else
			alert('Reached First');			
	});
});
*/


///Javascript Functionality
/*
imageSlider = function(){
	this.ulElement = document.getElementById('img-ul');
	this.nextId = document.getElementById('next');
	this.prevoiusId = document.getElementById('previous');
	ulLength :{
		this.liCount = this.ulElement.getElementsByTagName('li').length;
		this.imgLength = '220';
		this.ulLength = this.liCount * this.imgLength;
		this.ulElement.style.width = this.ulLength+'px';
	}
	addEventListener:{		
		this.nextId.addEventListener('click', nextSlide, false);
		this.prevoiusId.addEventListener('click', preSlide, false);
	}	
}

nextSlide = function(){
	this.ulElement = document.getElementById('img-ul');
	this.ulOffsetleft = (this.ulElement.offsetLeft == 0) ? this.ulElement.offsetLeft : (this.ulElement.offsetLeft - 245);
	this.ulOffsetWidth = this.ulElement.offsetWidth;
	this.ulLeft = this.ulOffsetWidth - (4 * 220);
	if('-'+this.ulLeft < this.ulOffsetleft ){	
		this.lastOffsetWidth = (+this.ulOffsetleft - ( 4 * 220));
		this.ulElement.style.left = +(this.lastOffsetWidth)+ 'px';
	}else{		
		alert('reach end');
	}
}

preSlide = function(){
	
	this.ulElement = document.getElementById('img-ul');
	this.ulOffsetleft = this.ulElement.offsetLeft;
	if(this.ulOffsetleft < 0 ){	
		this.preOffsetWidth = (this.ulOffsetleft + ( 4 * 220)) - 245;
		this.ulElement.style.left = this.preOffsetWidth + 'px' ;		
	}else{
		alert('Reached First');
	}
}
*/