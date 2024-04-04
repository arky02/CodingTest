const solution = (s) => {
    const reg = /^[0-9]*$/

    return reg.test(s) && (s.length === 6 || s.length === 4)
}