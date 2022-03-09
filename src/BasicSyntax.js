export function romanToInteger(str) {
    let result = 0;
    const digits = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let count = 1;
    let prev_symbol = str[0];
    let i = 1;
    while (i < str.length) {
        if (prev_symbol === str[i]) {
            count++;
            i++;
            continue;
        }
        if (digits[prev_symbol] > digits[str[i]]) {
            result += count * digits[prev_symbol];
            prev_symbol = str[i];
            count = 1;
            i++;
            continue;
        }
        if (digits[prev_symbol] < digits[str[i]]) {
            result += digits[str[i]] - count * digits[prev_symbol];
            if (i === str.length - 1) {
                count = 0;
                i++;
            } else {
                count = 1;
                prev_symbol = str[i + 1];
                i += 2;
            }
        }
    }
    if (count !== 0) {
        result += count * digits[prev_symbol];
    }
    return result;
}
