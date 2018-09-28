function example (obj, num) {
    if (typeof num !== 'number') throw Error('oops');
    return obj.age === num;
}