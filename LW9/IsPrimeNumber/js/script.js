function IsPrimeNumber(input) {
    let flag = true;
    switch (typeof (input)) {
        case "number": {
            for (let i = 2; i < input; i++) {
                if (input % i === 0) {
                    flag = false;
                    break;
                }
            }
            if (flag)
                console.log(`${input} Is prime number`);
            else
                console.log(`${input} Is not prime number`);
            break;
        }
        case "object": {
            for (let i = 0; i < input.length; i++) {
                let flag = true;
                for (let j = 2; j < i; j++) {
                    if (input[i] % j === 0) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    console.log(`${input[i]} Is prime number`);
                } else {
                    console.log(`${input[i]} Is not prime number`);
                }
            }
            break;
        }
        default:
            alert("not number of massive");
    }
}