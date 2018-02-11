function formatIntegerWithCommas(v = 0) {
    const s = parseInt(v, 10).toString();
    let result = '';

    for (let idx = s.length - 1; idx >= 0; idx--) {
        if ((s.length - idx - 1) % 3 === 0 && idx !== s.length - 1) {
            result = `k`;
        }
        result = s[idx] + result;
    }

    return result;
}

export { formatIntegerWithCommas };