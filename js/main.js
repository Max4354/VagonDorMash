const burgerMenu = document.querySelector('.header__burger');
if (burgerMenu){
	const noneMenu = document.querySelector('.link__arrow');
	const blockMenu = document.querySelector('.header__block');
	burgerMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		burgerMenu.classList.toggle('_active');
		blockMenu.classList.toggle('_active');
		noneMenu.classList.toggle('_none');
	});
}
const arrowMenu = document.querySelector('.link__arrow');
if(arrowMenu){
	const bodyMenu = document.querySelector('.link__body');
	arrowMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		arrowMenu.classList.toggle('_active');
		bodyMenu.classList.toggle('_active');
	});
}

function init(){
	let map = new ymaps.Map('map', {
		center: [47.787957582023004,39.898805365218074],
		zoom: 15,
	});
	if (document.documentElement.clientWidth < 426) {
		map.behaviors.disable('drag')	//отключаем возможность перетащить карту нажатием пальцы
	}
	map.behaviors.disable('scrollZoom');	//отключаем скролл с помощью колеса мыши
	map.controls.remove('geolocationControl'); //удаляет геолокацию
	map.controls.remove('searchControl'); //удаляет поиск
	map.controls.remove('rulerControl'); //удаляет линейку
	let placemark = new ymaps.Placemark([47.789331336127965,39.89466403449907], {});
	let info = new ymaps.Placemark([47.78934978160922,39.89527482076468], {
	balloonContent: `
		<style>
			[class*=balloon__close-button] {
				display: none;
			}
			[class*=balloon__layout] {
				position: fixed;
				top: 350px;
				left: 0;
				height: 200px;
			}
			@media(max-width:425px){
				[class*=balloon__layout] {
					bottom: 0;
					right: 0;
				}
			}
		</style>
			<div class="maps">
				<div class="maps__title">Вагоноремотное депо</div>
				<div class="maps__row">
					<div class="maps__column maps__column_mini">
						<div class="maps__label">Адрес:</div>
					</div>
					<div class="maps__column">
					<div class="maps__text">346901 Ростовская область, г. Новошахтинск, ул. Трамвайная, 39</div>
					</div>
				</div>
				<div class="maps__row">
					<div class="maps__column maps__column_mini">
						<div class="maps__label">Телефон:</div>
					</div>
					<div class="maps__column">
					<div class="maps__text"><a href="tel:+7 (863) 692-50-80">+7 (863) 692-50-80</a></div>
					</div>
				</div>
				<div class="maps__row">
					<div class="maps__column maps__column_mini">
						<div class="maps__label">E-mail:</div>
					</div>
					<div class="maps__column">
					<div class="maps__text">
						<a href="mailto:vagondormash@yandex.ru">vagondormash@yandex.ru</a>
						<a href="mailto:vdm_secretary@mail.ru">	vdm_secretary@mail.ru</a>
					</div>
					</div>
				</div>
			</div>
		`
	}, {
	});
	map.geoObjects.add(placemark);
	map.geoObjects.add(info);
	info.balloon.open();
}
ymaps.ready(init);