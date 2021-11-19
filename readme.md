# Range-Slider-плагин
реализован в рамках стажировки в MetaLamp

[Демо-страница]: (https://makarenkovdo.github.io/range-slider/dist/)


### Библиотеки:

* Webpack: 5.54.0
* SASS: 1.41.0
* Jquery: 3.6.0
* Typescript: 4.4.41
* фреймворк для тестирования 
    - jest: 27.3.1
    - jsdom: 18.0.0,
    - dom-testing-library 8.10.1

### Установка
Инициализация проекта: npm i
Сборка проекта: npx webpack
Запуск сервера: npx webpack serve
Запуск тестов: npx jest
Покрытие тестами: npx jest --coverage

### Инициализация плагина
1) Создать пустой родительный div-элемент с необходимой шириной/длиной + пустой вложенный div-элемент с классом slider.
```
<div style="width: 500px">
        <div id="first" class="slider"></div>
</div>
```
2) Создать экземпляр класса c двумя аргументами:
- id слайдера
- объект с начальными параметрами (пустой объект для стандартных значений)
```
const mySlider = new SliderPresenter('first',{})
```

### Инициализация с пользовательсиким параметрами:

| Параметр                            | По умолчанию | Тип     | Описание                                                                                     |
|:------------------------------------|:------------:|:-------:|:---------------------------------------------------------------------------------------------|
| ```minValue```               | 0            | number  | Устанавливает минимальное значение слайдера.                                                 |
| ```maxValue```               | 100         | number  | Устанавливает максимальное значение слайдера.                                                |
| ```runnerInstantPosition```             | [0,100]          | number[]  | Устанавливает значение ,бегунков.                                                       |
| ```step```             | 1            | number  | Устанавливает значение шага ( > 0 )     |
| ```isRange```         | false        | boolean | Добавляет второй бегунок с вычислением диапазона между ними.                                                          |
| ```hasTip```             | false         | boolean | Добавляет числовое значение над бегунками.                                                  |
| ```hasBar```        | false        | boolean | Окрашивает выбранный диапазон                                                                     
| ```hasScale```           | false        | boolean | Показывает/скрывает шкалу значений.                                                          
| ```orientation```     | 'horizontal'        | 'horizontal' or 'vertical' | Устанавливает положение слайдера.                                              
