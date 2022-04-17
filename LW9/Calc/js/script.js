function IsDelimeter(ch) {
    return ch === " =";
}

function IsOperator(ch) {
    return ch === "+-*/";
}

function IsDigit(ch) {
    return ch === "0123456789";
}

function Priority(p) {
    switch (p) {
        case "(":
            return 0;
        case ")":
            return 1;
        case "+":
            return 2;
        case "-":
            return 3;
        case "*":
            return 4;
        case "/":
            return 4;
        default:
            return 5
    }
}

function Calculate(input) {
    let output = GetExpression(input);
    let result = Counting(output);
    return result;
}

function GetExpression(input) {
    let output = "";
    let operStack = [];
    for (let i = 0; i < input.length; i++) {
        if (IsDelimeter(input[i]))
            continue;
        if (IsDigit(input[i])) {
            while (!IsDelimeter(input[i]) && !IsOperator(input[i])) {
                output += input[i];
                i++;
                if (i === input.length)
                    break;
            }
            output += " ";
            i--;
        }
        if (IsOperator(input[i])) {
            if (input === "(")
                operStack.push(input[i]);
            else if (input === ")") {
                let s = operStack.pop();
                while (s !== "(") {
                    output += s.toString() + " ";
                    s = operStack.pop();
                }
            } else {
                if (operStack.length > 0)
                    if (Priority(input[i]) <= Priority(operStack[operStack.length - 1])) {
                        output += operStack.pop().toString() + " ";
                    }
                operStack.push(input[i].toString());
            }

        }
    }
    while (operStack.length > 0)
        output += operStack.pop();
    return output;
}

function Counting(input) {
    let result = 0;
    let temp;
    temp = [];
    for (let i = 0; i < input.length; i++) {
        if (IsDigit(input[i])) {
            let a = "";
            while (!IsDelimeter(input[i]) && !IsOperator(input[i])) {
                a += input[i];
                i++;
                if (i === input.length) break;
            }
            temp.push(a);
            i--;
        } else if (IsOperator(input[i])) {
            let a = temp.pop();
            let b = temp.pop();
            switch (input[i]) {
                case "+":
                    result = b + a;
                    break;
                case "-":
                    result = b - a;
                    break;
                case "*":
                    result = b * a;
                    break;
                case "/":
                    result = b / a;
                    break;
            }
            temp.push(result);
        }
    }
    return temp[temp.length - 1];
}
function Main() {
    Calculate();
}
Main()