SELECT R.FOOD_TYPE, R.REST_ID, R.REST_NAME, R.FAVORITES
FROM (
    SELECT FOOD_TYPE, REST_ID, REST_NAME, MAX(FAVORITES) AS FAVORITES
    FROM REST_INFO
    GROUP BY FOOD_TYPE
) AS A, REST_INFO R
WHERE A.FOOD_TYPE = R.FOOD_TYPE AND A.FAVORITES = R.FAVORITES
ORDER BY FOOD_TYPE DESC;