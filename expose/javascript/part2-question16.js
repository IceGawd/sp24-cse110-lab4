for (let property in object) {
    if ((object[property] % 2 == 1) || (property.charAt(0) == 'r')) {
        console.log(object[property]);
    }
}