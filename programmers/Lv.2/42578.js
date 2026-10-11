function solution(clothes) {
    const types = {};
    clothes.forEach(([name, type]) => {
        types[type] = (types[type] || 0) + 1;
    });
    
    return Object.values(types)
        .reduce((answer, type) => answer * (type + 1), 1) - 1;
}
