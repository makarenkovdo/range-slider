# Range-Slider-плагин
реализован в рамках стажировки в MetaLamp <br />
Макаренков А.В. <br />
(makarenkov.do@gmail.com) 2021


### Содержание
1. [Демонстрация](#demo)
2. [Библиотеки](#libs)
3. [Команды](#commands)
4. [Инициализация, подписка на слайдер](#init)
5. [Архитектура](#arc)
6. [UML-диаграмма](#uml)

### Демонстрация возможностей плагина <a name="demo"></a> 
[Демо-страница](https://makarenkovdo.github.io/range-slider/dist/)

### Библиотеки <a name="libs"></a> 

* Node.js: 16.7.0
* Webpack: 5.54.0
* SASS: 1.41.0
* Jquery: 3.6.0
* Typescript: 4.4.41
* Тестирование: 
    - jest: 27.3.1
    - jsdom: 18.0.0,
    - dom-testing-library 8.10.1

### Команды <a name="commands"></a>
* Инициализация проекта: ```npm i```
* Сборка проекта: ```npx webpack```
* Запуск сервера: ```npx webpack serve```
* Запуск тестов: ```npx jest```
* Покрытие тестами: ```npx jest --coverage```

### Инициализация плагина <a name="init"></a> 
1) Создать пустой родительный div-элемент с необходимой шириной/длиной + пустой вложенный div-элемент с классом slider и произвольным уникальным id.
```
<div style="width: 500px">
        <div id="first" class="slider"></div>
</div>
```
2) Создать экземпляр класса c двумя аргументами:
- id слайдера
- объект с начальными параметрами (пустой объект для стандартных значений)
```
const mySlider = new Slider('first',{})
```

#### Инициализация с пользовательсиким параметрами:

| Параметр                            | По умолчанию | Тип     | Описание                                                                                     |
|:------------------------------------|:------------:|:-------:|:---------------------------------------------------------------------------------------------|
| ```minValue```               | 0            | number  | Устанавливает минимальное значение слайдера.                                                 |
| ```maxValue```               | 100         | number  | Устанавливает максимальное значение слайдера.                                                |
| ```runnerInstantPosition```             | [0,100]          | number[]  | Устанавливает значения бегунков.                                                       |
| ```step```             | 1            | number  | Устанавливает значение шага ( > 0 )     |
| ```isRange```         | false        | boolean | Добавляет второй бегунок с вычислением диапазона между ними.                                                          |
| ```shouldAddTip```             | false         | boolean | Добавляет числовое значение над бегунками.                                                  |
| ```shouldAddBar```        | false        | boolean | Окрашивает выбранный диапазон                                                                     
| ```shouldAddScale```           | false        | boolean | Показывает/скрывает шкалу значений.                                                          
| ```orientation```     | 'horizontal'        | 'horizontal' or 'vertical' | Устанавливает положение слайдера.     
| ```runnerSize```     | [12, 12]        | number[] | Устанавливает размер бегунков
| ```fieldThickness```     | 6       | number | Устанавливает толщину поля слайдера
| ```isTestMode```     | false       | boolean | Отменяет запуск build-метода для более "чистого" тестирования
| ```onChange```     | 6       | ()=>void) | Функция - callback, предназначение которой подписать внешнею среду на события слайдера и сигнализировать об изменениях.



#### Публичные методы

```getValues()``` Возвращает объект со значением слайдера (или значениями в случае диапазонного слайдера) 

```rebuild(params)``` Перестраивает слайдер на основе переданных параметров (перечислены выше). Ничего не возвращает.

###### Пример подписки на события слайдера с помощью параметра onChange

```
const params = {};
const newSlider = Slider('id', params)
function setCallback() {
    params.onChange = handleChange.bind(this);
    return params;
  }
function handleChange(params) {
    newSlider.rebuild(params); 
}


```

### Архитектура <a name="arc"></a>
Приложение спроектировано на базе архитектуры MVP и разделено на 3 слоя: Model, View, Presenter.

Model - слой, отвечающий за бизнес-логику приложения.
View - слой, отвечающий за отображение интерфейса и реагирование на действия пользователя.
Presenter - слой, контролирующий взаимодействие Model и View.

При создании нового экземпляра класса View добавляет необходимые html-элементы на страницу, взаимодействуя с которыми пользователь передаёт события мыши. View передаёт необходимые данные в Presenter, который, в свою очередь, информирует о событии Model.
Model принимает данные о событии и возвращает в Presenter обновленные значения слайдера. Presenter передаёт эти данные во View, который "перерисовывает" пользовательский интерфейс.

Model и View отправляют данные в Presenter с использованием простейшей реализации шаблона "Наблюдатель"(Observer).

Слой View реализован с помощью композиции подклассов Field, Runner, Bar, Tip, Scale, каждый из которых отвечает только  за свой сектор ответственности.

Слой Model состоит из двух классов - FieldModel и RunnerModel.

Слой Presenter объединяет в себе классы View и Model путём композиции, обретая, таким образом, удобный доступ к их методам.

Инициализация слайдера происходит с использованием паттерна "Строитель" (builder-pattern).

Методы классов View/Model "спрятаны" в модули с помощью паттерна "Фасад" (facade-паттерн) по принципу единственной ответственности (Single Responsibility), 

### UML <a name="uml"></a>
![](slider-uml.png)