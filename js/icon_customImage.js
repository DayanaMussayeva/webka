ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [43.204315, 76.893677],
            zoom: 30
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: red; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Тут значок-картинка для метки',
            balloonContent: 'Это СДУ',
            balloonContentFooter: "Official site: <a href='www.sdu.edu.kz'>sdu.edu.kz</a>",
    hintContent: "SDU!!!"
        }, {
           
            iconLayout: 'default#image',
            iconImageHref: 'fruit.png',
            iconImageSize: [30, 42],
        }),

        myPlacemarkWithContent = new ymaps.Placemark([43.204315, 76.893677
], {
          hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        
    },
         {
          iconLayout: 'default#imageWithContent',
           
            iconImageHref: 'fruit.png',
            iconImageSize: [48, 48],
         iconContentLayout: MyIconContentLayout
    });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});





 
    