/* после загрузки страницы */
function PageOnload() {
	/* запрет на открытие картинок */
	document.oncontextmenu = disablecontext;

	/* после загрузки */
	window.onload = function () {
		/* смена изображений при наведении */
		ChangeImageLifeAndScience();

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
function ChangeImageLifeAndScience() {
	const lifeAndScienceBlocks = document.getElementsByClassName("lifeAndScience");
	

	[...lifeAndScienceBlocks].forEach(block => {
		const textLeft = block.getElementsByClassName("lifeAndScience-left")[0];
		const textRight = block.getElementsByClassName("lifeAndScience-right")[0];
		const slides = block.getElementsByClassName("lifeAndScience--background-part");
		const buttonLeft = textLeft.getElementsByClassName("lifeAndScience-button")[0];
		const buttonRight = textRight.getElementsByClassName("lifeAndScience-button")[0];
		const iconLeft = textLeft.getElementsByTagName("img")[0];
		const iconRight = textRight.getElementsByTagName("img")[0];
		
		block.addEventListener("mousemove", function (event) {
			if (window.innerWidth <= 900) { return }

			if (event.target.className != "lifeAndScience-textHead") {	
				if (event.clientX < window.innerWidth / 2) {
					slides[0].style.transition="0s";
					slides[0].style.right="0%";
					slides[0].style.zIndex="1";
					slides[1].style.zIndex="2";
					slides[1].style.transition="all linear 1s, z-index 0s";
					slides[1].style.right="100%";

					/* скрытие-показ кнопок */
					buttonLeft.style.cssText = "opacity: 1; height: 34px; margin: 0 0 5% 0; visibility: visible;";
					buttonRight.style.cssText = "opacity: 0; height: 0; margin: 0; visibility: hidden;";
	
					/* анимация текста */
					textLeft.style.cssText = "color: white; transform: translateY(-20%);";
					textRight.style.cssText = "color: DarkGray; transform: translateY(10%);";
					iconLeft.style.opacity="1"
					iconRight.style.opacity="0.6"
				}
				else {

					slides[1].style.transition="0s";
					slides[1].style.zIndex="1";
					slides[1].style.right="0%";

					slides[0].style.zIndex="2";
					slides[0].style.transition="all linear 1s, z-index 0s";

					slides[0].style.right="-100%";
					// slides[1].style.zIndex="4";
					// slides[1].style.transition="0s";

					/* скрытие-показ кнопок */
					buttonLeft.style.cssText = "opacity: 0; height: 0; margin: 0; visibility: hidden;";
					buttonRight.style.cssText = "opacity: 1; height: 34px; margin: 0 0 5% 0; visibility: visible;";
	
					/* анимация текста */
					textLeft.style.cssText = "color: DarkGray; transform: translateY(10%);";
					textRight.style.cssText = "color: white; transform: translateY(-20%);";
					iconRight.style.opacity="1"
					iconLeft.style.opacity="0.6"
				}
			}
		});
	})
}
