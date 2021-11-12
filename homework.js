console.table(countries);

function getAvaragePopulation() {
    //в каждой стране есть поле population, вернуть из функции среднее арифм.
    var sumPopulation = 0;
    for(country of countries) {
        sumPopulation += country.population;
    }
    var getPopulation = sumPopulation/countries.length;
    return getPopulation;
}

var setCountryName = [];
function getNames() {
    //вернуть список (массив) имен стран (поле name)
    for(var country of countries) {
        var countryName = country.name;
        setCountryName.push(countryName);
    }
}

function findCountry() {
    //ввод через prompt название страны, вернуть true если такая страна нашлась по имени, false если не нашлась. можно использовать для этого getNames выше + indexOf
    var checkNames = prompt('Введите страну');
    if(setCountryName.indexOf(checkNames) >= 0) {
        return true;
    } else {
        return false;
    }
}

function getCountryByCode() {
    //пользователь вводит через prompt трехбуквенный код. если введенная строка не 3 символа длиной - выдать сообщение о неправильном вводе.
    //по введенной строке (трехбуквенный код) найти страну (должно совпадать с alpha3Code, которое есть у каждой страны).
    //и вернуть из функции либо объект с найденной страной, либо false
    var setCode = prompt('Введите код');
    var setCodeSplit = setCode.split('');
    if(setCodeSplit.length == 3) {
        for(var country of countries) {
            if(setCode == country.alpha3Code) {
                return country;
            }
        }
    } else {
        alert('Неверный ввод');
        return false;
    }
}