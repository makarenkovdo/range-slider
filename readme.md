# Range-Slider-плагин
реализован в рамках стажировки в MetaLamp

[Демо-страница]: (https://makarenkovdo.github.io/range-slider/dist/)


# Библиотеки:

* Webpack: 5.54.0
* SASS: 1.41.0
* Jquery: 3.6.0
* Typescript: 4.4.41
* фреймворк для тестирования 
    - jest: 27.3.1
    - jsdom: 18.0.0,
    - dom-testing-library 8.10.1

#Установка
Инициализация проекта: npm i
Сборка проекта: npx webpack
Запуск сервера: npx webpack serve
Запуск тестов: npx jest
Покрытие тестами: npx jest --coverage

#Инициализация плагина
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

Инициализация с пользовательсиким параметрами:

```

```


