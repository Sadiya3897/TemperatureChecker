function sort(arr) {
    var tmp;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return arr;

}

function get_max(arr) {
    return arr[arr.length - 1];
}
function get_min(arr) {
    return arr[0];
}
function get_mode(numbers) {
    var modes = [], count = [], i, number, maxIndex = 0;

    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    return modes;

}

function get_mean(numbers) {
    var total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total / numbers.length;

}

function TemperatureChecker() {

    var temperature = [50, 60, 15, 37, 38, 47, 55, 85, 104, 15, 76, 63];
    temperature.push(99);
    var SortTemperature = sort(temperature);
    for (var i = 0; i < SortTemperature.length; i++) {
        console.log(SortTemperature[i]);
    }
    console.log("Maximum Value is :" + get_max(SortTemperature));
    console.log("Minimum Value is :" +get_min(SortTemperature));
    console.log("Mean is :" + get_mean(SortTemperature));
    console.log("Mode is :" +get_mode(SortTemperature));

}
console.log(TemperatureChecker());