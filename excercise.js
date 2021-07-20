function range(start, end) {
    let result = [];
    do {
        result.push(start);
        start++;
    } while(start <= end);
    return result;
};

