## Сборка и запуск

Чтобы собрать проект, нужно набрать в командной строке в корне 'npm install'. 


Для запуска тестового сервера нужно набрать 'npm run dev', для оптимизированной сборки - 'npm run build'.

## Ход выполнения и комментарии

Проект собран на gulp, в качестве линтера Stylelint со стандартным конфигом, немного модифицированным для собственного
удобства. Подключен Sass, нейминг классов по БЭМ (ну или я хочу верить, что он следует БЭМ), файлы стилей сгруппированы в три 
папки: базу, компоненты и страницы.


Других зависимостей нет (я не фанат библиотек в целом, да и сделать самой полезнее). Для классической 7-1 структуры, вебпака
и фреймворков проект маловат. Кроме того, фишка Реакта и Вью - интерактивные интерфейсы, а здесь никакой интерактивности 
и основная сложность в верстке.


По брейкпоинтам смотрела все айфоны + самсунг, ipad и ipad pro по горизонтали и вертикали (это из требований), на десктопах 
- 1280, 1440 и 1920, и мельком между ними, что ничего не разъезжается. И еще собственный экран, который Хром рендерит в
прекрасном разрешении 1280*616, так что десктопы с небольшими высотами тоже охвачены. От 1440 начиная, увеличиваю шрифты,
  а то они теряются на большом экране; также ширины карточек, колонок и т.д.


Ниже замечания и объяснения поэкранно.

### Leaders

Начиная с 1024, отдаю больше колонок, чем в макетах - ширина экрана позволяет.
На больших экранах стоит ограничение по высоте, колонки прибиты к низу. На остальных слайдах центрирую по высоте для десктопов,
но левитирующие колонки немного нелепо смотрятся. Не придумала, что адекватного сделать с iPad Pro в вертикальной ориентации,
они очень высокие. А если ограничить - экран будет пустоват. Оставила с ограничением высоты, это выглядит менее гротескно.


Можно для одного человека поставить одновременно эмодзи лайка и эмодзи слайда, будут рядышком. Бывает же такой edge case,
когда проголосовал за человека, а он внезапно занял первое место.

### Vote

Вывожу 8 пользователей на мобилке и на экранах начиная с 768; между ними - 6. Больше 8 выводить не вижу смысла, так как в 
данных не приходит больше 12 пользователей, а надо еще что-то вывести на другой странице. Оффсеты в data-params подстраиваются 
в зависимости от того, 6 или 8 карточек выводится. На десктопах раскладка как в вертикальном варианте макета, только две 
карточки посередине сдвинуты к краям, создают симпатичную ромбовидную композицию. Использовала эту раскладку, т.к. на ней
больше элементов, и не надо сильно их увеличивать, чтобы не терялись на большом экране.


Для подсвеченной карточки отключены события мыши, она некликабельна и без ховера. Я думала, отключать ли при уже выбранной 
карточке остальные, решила нет. Нормально (наверно?) давать юзеру переголосовать, если он уже кого-то выбрал; кроме того, 
выбранный разраб может оказаться на другой странице, что мы можем отследить по общему массиву входных данных, но в UI это 
уже никак не отобразится. А вот давать второй раз кликнуть по уже выбранному разрабу - это misleading для юзера.

### Chart

На экранах начиная с 768 начинаю добавлять дополнительные столбики справа и слева. Справа ограничилась тремя (мне кажется,
никому особо не интересны пустые будущие спринты), слева - пока все предыдущие не влезут. На 1440 уже влезают все. Также
подкручиваю ширину столбика, чтобы не выглядели слишком разреженными. Легенды снизу и сверху - с абсолютным позиционированием.


Высота столбика рассчитывается следующим образом: берется максимальное значение из отображаемого куска массива и принимается за 
70% от высоты родителя. Остальные от него. 70% взяла из спецификаций, эта цифра там только для вертикальной раскладки, 
но и на декстопах дает хорошую картинку.

### Diagram

Диаграмма сделана на svg, ванильным скриптом без зависимостей. Потому что есть время и интересно было разобраться, как 
рисовать svg из js. Рассматривала D3, но сходу не разобралась, решила сделать сама (ну, вместе со stackoverflow). 


Диаграмма состоит из четырех дуг (svg arc), с координатами от верха (0 градусов), и все это повернуто против часовой 
стрелки на половинку первой дуги. Код, генерирующий path, я нашла в статье в интернете и немножко подстроила. 
Дуги выбраны потому, 
что только на них получилось нормально положить фильтры. Сначала сделала на кружочках, где fill: transparent, а визуалку 
составляет толстенный stroke. Но на них фильтры отображались криво, и никогда не получилось бы скруглить углы. На дугах 
у меня тоже не получилось, но я видела соответствующий функционал у d3. Вероятно, чтобы сделать этот слайд относительно 
безболезненно, надо будет все-таки ее выучить и воспользоваться.

### Activity

Сетка сверстана на флексах, каждый ряд - флекс-контейнер. Пробовала грид, но флексы оказалось проще подогнать, чтобы 
плотненько стояли. Никакого хорошего чистого решения, как их поставить ровно, не нашлось, пришлось подгонять margins 
попиксельно, в том числе отрицательные. На вертикальных раскладках (это повернутый iphone из макетов, iPad и iPad Pro) - 
вертикальная сетка, где часы расположены змейкой с разбивкой по часу, как в спецификациях. На горизонтальных до 1366 - 
горизонтальная сетка, группировка по 2 часа, на экранах больше 1366 - по 1 часу. 
Юниты одного дня на горизонтали идут пунктиром, как в спецификациях.


Кубики взяты картинками из репозитория задания, в одинарном и двойном размере (чтобы не мылили; то же верно для любых 
других не-svg изображений на проекте). Ширина задается в зависимости от ширины экрана (кубики резиновые), высота автоматическая.
