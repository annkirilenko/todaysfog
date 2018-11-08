function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function makeCounter() {
  var currentCount = 0;

  return function() { 
    return currentCount++;
  };
}

function textReplacer(counter) {
	'use strict';
	var text = '';

	switch (counter) {
		case 0:
			text = 'Пожалуйста, не кликай по мне.';
			break;
		case 1: 
			text = 'Ну не надо.';
			break;
		case 2:
			text = 'Ну пожалуйста!';
			break;
		case 3:
			text = 'Нет, ты тупой что ли?';
			break;
		case 4:
			text = 'Ещё раз кликнешь - я заору!';
			break;
		case 5:
			text = 'Аааа!';
			break;
		case 6:
			text = 'АААааа!';
			break;
		case 7:
			text = 'ААААААААААААА!';
			break;
		default:
			text = 'Иди лесом, я больше не реагирую.';
			break;

	}

	return text;

}

function sitemapClick() {
	var counter = makeCounter();
	window.addEventListener("click",function(event){  
		if(event.target.id == "sitemap") {
            var ctn = counter();
            if(ctn > 8) {
                return;
            }
			event.target.innerHTML = textReplacer(ctn);
            if(ctn > 7) {
                event.target.classList.add('sitemap--disable');
            }
		}
	});
}

function initGallery() {
	baguetteBox.run('.gallery');
}

ready(sitemapClick);
ready(initGallery);
