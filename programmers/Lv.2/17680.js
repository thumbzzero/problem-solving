const hitTime = 1;
const missTime = 5;
let cache = {}, size, time = 0;

function updateCache() {
    const keys = Object.keys(cache);
    if (keys.length >= size) {
        const min = Math.min(...Object.values(cache));
        for (const key of keys) {
            if (cache[key] === min) {
                delete cache[key];
                break;
            }
        }
    } 
}

function solution(cacheSize, cities) {
    let answer = 0;
    size = cacheSize;
    
    if (cacheSize === 0) {
        return cities.length * missTime;
    }
    
    cities.forEach((city) => {
        city = city.toLowerCase();
        if (cache[city] === undefined) {
            answer += missTime;
            updateCache();
        } else {
            answer += hitTime;
        }
        cache[city] = ++time;
    });
    
    return answer;
}