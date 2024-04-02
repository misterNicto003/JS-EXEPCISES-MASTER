# Упражнение 07 - Конвертация температуры

Напишите две функции, которые конвертируют температуру из Фаренгейта в Цельсий и наоборот:
```
convertToCelsius(32) // Фаренгейт в Цельсий, должно вернуть 0

convertToFahrenheit(0) // Цельсий в Фаренгейт, должно вернуть 32
```

Поскольку мы люди, мы хотим, чтобы итоговая температура была округлена до одной десятичной: например, `convertToCelsius(100)` должно возвращать `37.8`, а не `37.77777777777778`.

В этом упражнении вас просят создать более одной функции, поэтому раздел `module.exports` в спецификационном файле выглядит немного иначе на этот раз. Не беспокойтесь, мы просто упаковываем обе функции в один объект для экспорта.

## Подсказки
- Вы можете найти соответствующие формулы на [Wikipedia](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature).

- Попробуйте найти самостоятельно в Интернете, как округлить число до одной десятичной в JavaScript. Если у вас возникнут трудности, посмотрите [здесь](https://stackoverflow.com/q/7342957/5433628).