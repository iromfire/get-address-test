ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
        center: [55.753994, 37.622093],
        zoom: 9,
        // Добавим панель маршрутизации.
        controls: ['routePanelControl']
    });

    var control = myMap.controls.get('routePanelControl');

    // Зададим состояние панели для построения машрутов.
    control.routePanel.state.set({
        // Выключим возможность задавать пункт отправления в поле ввода.
        fromEnabled: true,
        // Адрес или координаты пункта отправления.
        from: 'Санкт-Петербург',
        // Включим возможность задавать пункт назначения в поле ввода.
        toEnabled: true,
        // Адрес или координаты пункта назначения.
        to: 'Москва'
    });

    // Зададим опции панели для построения машрутов.
    control.routePanel.options.set({
        // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
        allowSwitch: false,
        // Включим определение адреса по координатам клика.
        // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
        reverseGeocoding: true,
        // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
        types: {
            auto: true,
            masstransit: true,
            pedestrian: true,
            bicycle: true,
            taxi: true
        }
    });

    // Создаем кнопку, с помощью которой пользователи смогут получить начальную и конечную точки маршрута.
    var getPointsButton = new ymaps.control.Button({
        data: {
            content: "Получить значения",
            title: "Получить пункты маршрута"
        },
        options: {
            selectOnClick: false,
            maxWidth: 190
        }
    });
    // Объявляем обработчик для кнопки.
    getPointsButton.events.add('click', function() {
        $("#input1").val(control.routePanel.state.get('from'));
        $("#input2").val(control.routePanel.state.get('to'));

    });
    myMap.controls.add(getPointsButton);
});