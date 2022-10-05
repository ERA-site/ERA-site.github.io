/* после загрузки страницы */
function PageOnload() {
	/* запрет на открытие картинок */
	document.oncontextmenu = disablecontext;

	/* после загрузки */
	window.onload = function () {
		/* смена изображений при наведении */
		ChangeImageLife();

		/* Запуск скрипта для блока c 3D турами*/
		setActiveTour();
	}

	/* прокрутка странцы в начало после загрузки */
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};

	/* блокировка прокрутки страницы */
	setTimeout(() => document.body.classList.remove("stopScroll"), 2000);
}

/* запрет на открытие картинок */
function disablecontext(e) {
	var clickedEl = (e == null) ? event.srcElement.tagName : e.target.tagName;

	if (clickedEl == "IMG") {
		return false;
	}
}

/* смена изображений при наведении */
function ChangeImageLife() {
	const lifeBlocks = document.getElementsByClassName("life");
	

	[...lifeBlocks].forEach(block => {
		const textBlocks= block.getElementsByClassName("life--block");
		const slides = block.getElementsByClassName("life--background-part");
		const buttonLeft = textBlocks[0].querySelector("era-btn");
		const buttonRight = textBlocks[1].querySelector("era-btn");
		
		block.addEventListener("mousemove", function (event) {
			if (window.innerWidth <= 900) { return }

			if (event.target.className != "life--textHead") {	
				if (event.clientX < window.innerWidth / 2) {
					slides[0].style.opacity="0";
					slides[1].style.opacity="1";

					/* скрытие-показ кнопок */
					buttonLeft.style.cssText = "opacity: 1; height: 60px; margin: 0 0 5% 0;";
					buttonRight.style.cssText = "opacity: 0; height: 0; margin: 0; ";
	
					/* анимация текста */
					textBlocks[0].style.cssText = "color: white; transform: translateY(-20%);";
					textBlocks[1].style.cssText = "color: DarkGray; transform: translateY(0%);";
				}
				else {
					slides[1].style.opacity="0";
					slides[0].style.opacity="1";

					/* скрытие-показ кнопок */
					buttonLeft.style.cssText = "opacity: 0; height: 0; margin: 0; ";
					buttonRight.style.cssText = "opacity: 1; height: 34px; margin: 0 0 5% 0;"
	
					/* анимация текста */
					textBlocks[0].style.cssText = "color: DarkGray; transform: translateY(0%);";
					textBlocks[1].style.cssText = "color: white; transform: translateY(-20%);";
				}
			}
		});
	})
}
