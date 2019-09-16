const add = (a, b) => {
    let i = a.length - 1;
    let j = b.length - 1;
    let carray = 0;
    let ret = '';
    while (i >= 0 || j >= 0) {
        let x = 0;
        let y = 0;
        let sum;
        if (i >= 0) {
            x = a[i] - '0';
            i--
        }

        if (j >= 0) {
            y = b[j] - '0';
            j--
        }
        sum = x + y + carray;

        if (sum >= 10) {
            carray = 1;
            sum -= 10;
        } else {
            carray = 0;
        }

        ret = sum + ret;
    }
    if (carray) {
        ret = carray + ret;
    }

    console.log(ret)
    return ret;
}

export default add 