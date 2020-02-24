function checker(arr) {
    arr.sort();
    if (arr[0] + arr[arr.length - 1] > 1000) {
        return true;
    }
    else {
        return false;
    }
}