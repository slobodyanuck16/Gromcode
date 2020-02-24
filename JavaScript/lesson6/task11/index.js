function checker(arr) {
    arr.sort();
    if (arr[0] + arr.length - 1 > 1000) {
        return true;
    }
    else {
        return false;
    }
}