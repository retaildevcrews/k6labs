
import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

export default function () {

    let maxSleep=5;
    let res
    let baseURL='https://ngsa-cosmos-westus3-dev.austinrdc.dev';
    
    res=http.del(baseURL+'/api/movies/zz0133093');

    check(res, {
        statusCode:(r) =>
        r.status === 204,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.put(baseURL+'/api/movies/zz0133093');

    check(res, {
        statusCode:(r) =>
        r.status === 200,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/zz0133093');

    check(res, {
        jsonObject:(r) =>
        JSON.stringify(r.json()) === JSON.stringify([{"field": "votes", "value": 1546282}, {"field": "totalScore", "value": 13452653}, {"field": "id", "value": "zz0133093"}, {"field": "movieId", "value": "zz0133093"}, {"field": "title", "value": "The Matrix"}, {"field": "type", "value": "Movie-Dupe"}, {"field": "year", "value": 1999}, {"field": "partitionKey", "value": "3"}, {"field": "runtime", "value": 136}, {"field": "rating", "value": 8.7}, {"field": "textSearch", "value": "the matrix"}, {"field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Action"}, {"index": 1, "value": "Sci-Fi"}]}}}, {"field": "roles", "validation": {"jsonArray": {"count": 7, "byIndex": [{"index": 0, "field": "actorId", "value": "nm0000206"}, {"index": 0, "field": "birthYear", "value": 1964}, {"index": 0, "field": "category", "value": "Actor"}, {"index": 0, "field": "name", "value": "Keanu Reeves"}, {"index": 0, "field": "order", "value": 1}, {"index": 0, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 0, "field": "characters", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Neo"}]}}}, {"index": 1, "field": "actorId", "value": "nm0000401"}, {"index": 1, "field": "birthYear", "value": 1961}, {"index": 1, "field": "category", "value": "Actor"}, {"index": 1, "field": "name", "value": "Laurence Fishburne"}, {"index": 1, "field": "order", "value": 2}, {"index": 1, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 1, "field": "characters", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Morpheus"}]}}}, {"index": 2, "field": "actorId", "value": "nm0005251"}, {"index": 2, "field": "birthYear", "value": 1967}, {"index": 2, "field": "category", "value": "Actress"}, {"index": 2, "field": "name", "value": "Carrie-Anne Moss"}, {"index": 2, "field": "order", "value": 3}, {"index": 2, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 2, "field": "characters", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Trinity"}]}}}, {"index": 3, "field": "actorId", "value": "nm0915989"}, {"index": 3, "field": "birthYear", "value": 1960}, {"index": 3, "field": "category", "value": "Actor"}, {"index": 3, "field": "name", "value": "Hugo Weaving"}, {"index": 3, "field": "order", "value": 4}, {"index": 3, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 3, "field": "characters", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Agent Smith"}]}}}, {"index": 4, "field": "actorId", "value": "nm0905154"}, {"index": 4, "field": "birthYear", "value": 1965}, {"index": 4, "field": "category", "value": "Director"}, {"index": 4, "field": "name", "value": "Lana Wachowski"}, {"index": 4, "field": "order", "value": 5}, {"index": 4, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 5, "field": "actorId", "value": "nm0905152"}, {"index": 5, "field": "birthYear", "value": 1967}, {"index": 5, "field": "category", "value": "Director"}, {"index": 5, "field": "name", "value": "Lilly Wachowski"}, {"index": 5, "field": "order", "value": 6}, {"index": 5, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 6, "field": "actorId", "value": "nm0005428"}, {"index": 6, "field": "birthYear", "value": 1952}, {"index": 6, "field": "category", "value": "Producer"}, {"index": 6, "field": "name", "value": "Joel Silver"}, {"index": 6, "field": "order", "value": 7}, {"index": 6, "validation": {"notContains": ["\"deathYear\":"]}}]}}}]),
        });
        
    sleep(Math.random() * maxSleep)
    res=http.put(baseURL+'/api/movies/zz0133093');

    check(res, {
        statusCode:(r) =>
        r.status === 200,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/zz0133093');

    check(res, {
        jsonObject:(r) =>
        JSON.stringify(r.json()) === JSON.stringify([{"field": "votes", "value": 1546282}, {"field": "totalScore", "value": 13452653}, {"field": "id", "value": "zz0133093"}, {"field": "movieId", "value": "zz0133093"}, {"field": "title", "value": "The Matrix"}, {"field": "type", "value": "Movie-Dupe"}, {"field": "year", "value": 1999}, {"field": "partitionKey", "value": "3"}, {"field": "runtime", "value": 136}, {"field": "rating", "value": 8.7}, {"field": "textSearch", "value": "the matrix"}, {"field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Action"}, {"index": 1, "value": "Sci-Fi"}]}}}, {"field": "roles", "validation": {"jsonArray": {"count": 7, "byIndex": [{"index": 0, "field": "actorId", "value": "nm0000206"}, {"index": 0, "field": "birthYear", "value": 1964}, {"index": 0, "field": "category", "value": "Actor"}, {"index": 0, "field": "name", "value": "Keanu Reeves"}, {"index": 0, "field": "order", "value": 1}, {"index": 0, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 0, "field": "characters", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Neo"}]}}}, {"index": 1, "field": "actorId", "value": "nm0000401"}, {"index": 1, "field": "birthYear", "value": 1961}, {"index": 1, "field": "category", "value": "Actor"}, {"index": 1, "field": "name", "value": "Laurence Fishburne"}, {"index": 1, "field": "order", "value": 2}, {"index": 1, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 1, "field": "characters", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Morpheus"}]}}}, {"index": 2, "field": "actorId", "value": "nm0005251"}, {"index": 2, "field": "birthYear", "value": 1967}, {"index": 2, "field": "category", "value": "Actress"}, {"index": 2, "field": "name", "value": "Carrie-Anne Moss"}, {"index": 2, "field": "order", "value": 3}, {"index": 2, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 2, "field": "characters", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Trinity"}]}}}, {"index": 3, "field": "actorId", "value": "nm0915989"}, {"index": 3, "field": "birthYear", "value": 1960}, {"index": 3, "field": "category", "value": "Actor"}, {"index": 3, "field": "name", "value": "Hugo Weaving"}, {"index": 3, "field": "order", "value": 4}, {"index": 3, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 3, "field": "characters", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Agent Smith"}]}}}, {"index": 4, "field": "actorId", "value": "nm0905154"}, {"index": 4, "field": "birthYear", "value": 1965}, {"index": 4, "field": "category", "value": "Director"}, {"index": 4, "field": "name", "value": "Lana Wachowski"}, {"index": 4, "field": "order", "value": 5}, {"index": 4, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 5, "field": "actorId", "value": "nm0905152"}, {"index": 5, "field": "birthYear", "value": 1967}, {"index": 5, "field": "category", "value": "Director"}, {"index": 5, "field": "name", "value": "Lilly Wachowski"}, {"index": 5, "field": "order", "value": 6}, {"index": 5, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 6, "field": "actorId", "value": "nm0005428"}, {"index": 6, "field": "birthYear", "value": 1952}, {"index": 6, "field": "category", "value": "Producer"}, {"index": 6, "field": "name", "value": "Joel Silver"}, {"index": 6, "field": "order", "value": 7}, {"index": 6, "validation": {"notContains": ["\"deathYear\":"]}}]}}}]),
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000284');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1272878');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Animation');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 49,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0001490');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0472033');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=5.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0179959');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0119535');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=1992');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 18,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0002159');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0405296');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Sport');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1573253');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt6684714');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=5.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm2539953');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt4743226');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2017');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm3837786');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1243974');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Comedy');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm2981082');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1800241');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=5.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0348151');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0118617');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=1993');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 32,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0275698');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0168786');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=History');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0001593');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt3774466');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=4.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000164');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1322269');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2016');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1413364');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0364970');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Crime');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0579649');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0850253');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=6.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1754159');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt5228304');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=1994');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 30,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0742386');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt7545524');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Sci-Fi');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm3328356');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0319061');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=4.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0620576');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0188453');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2015');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000200');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt2531344');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Documentary');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 21,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0627878');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0473188');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=4.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm3223094');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0103874');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=1995');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 28,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0527322');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0118798');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Romance');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0004051');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1692486');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=6.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1137025');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1405365');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2014');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1052162');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0402910');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Drama');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm2655177');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt4575576');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=4.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm2157666');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0376541');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=1996');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 37,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000366');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt4680182');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Mystery');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0352030');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1598778');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=5.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000221');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0409847');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2013');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0916050');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt6343314');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Family');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 39,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0719208');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0367631');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=5.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0910607');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt2402101');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=1997');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 37,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0751080');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0412631');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Music');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0004988');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0453467');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=5.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0272401');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0804463');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2012');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0001535');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0120655');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Fantasy');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 87,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1469853');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0309530');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=5.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0652491');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0393597');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=1998');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 37,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0004716');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0126886');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Horror');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0130574');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt2171867');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=4.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1198322');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt6513656');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2011');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0630090');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt4382872');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=History');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 37,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0954679');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0119099');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=6.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000700');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt6806448');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=1999');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 39,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0371660');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt2671706');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Adventure');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0004341');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0099575');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=4.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0922035');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0106926');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2010');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0005531');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0770752');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Horror');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 56,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1249995');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1221208');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=4.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0001570');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0116367');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2000');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 47,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0006969');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1321870');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Fantasy');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0634393');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0821640');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=6.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0782561');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0452625');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2009');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm2706992');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0335126');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Music');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 25,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0598294');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0421206');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=4.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1505460');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0171356');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2001');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 48,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1757754');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0180734');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Family');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1374680');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0347048');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=5.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0324556');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0242519');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2008');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1270009');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt2312718');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Mystery');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0434133');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0340163');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=5.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0077365');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0107148');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2002');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 53,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0910237');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0102070');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Drama');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1813221');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt5580036');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=5.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1251834');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0199626');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2007');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000525');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1144804');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Romance');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm2058604');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0110148');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=5.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1045837');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0804497');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2003');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 60,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0355659');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt2140037');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Documentary');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0085312');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt2911666');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=4.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1535523');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0206314');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2006');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm2676421');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0974015');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Sci-Fi');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 91,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0573691');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1650554');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=6.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000249');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1764234');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2004');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 56,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0107232');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0211465');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Crime');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0597388');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt3513054');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=4.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0235389');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0250494');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2005');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0723450');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1758692');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Sport');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 38,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0007989');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0147004');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=4.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000562');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0379357');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2005');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 56,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1567113');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt4682804');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Comedy');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0001029');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1915581');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=6.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0021835');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0328107');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2004');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0001708');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0466893');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Thriller');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0179173');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt3522806');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=4.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0359387');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1409024');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2006');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 51,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0806189');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0120751');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Animation');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1375358');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0212346');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=5.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0001129');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt2381249');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2003');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0001538');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt2241351');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=War');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 26,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0241049');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1748122');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=5.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1450928');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0385887');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2007');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 49,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0160342');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1935179');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Action');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0510912');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0780534');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=5.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0465269');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt3531824');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2002');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0473585');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0110684');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Action');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm2289053');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0125439');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=5.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0596298');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0496806');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2008');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 51,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000126');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1563738');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=War');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0612487');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0119843');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=4.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0068338');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0120782');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2001');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0001223');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0119859');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Adventure');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0516056');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0105112');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=6.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0005375');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0347779');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2009');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 44,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0709634');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0102685');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Thriller');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0001435');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0100405');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=4.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0225146');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1837636');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2000');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0205063');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0378647');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Animation');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 49,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0040015');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0382932');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=4.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0463539');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0102768');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2010');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 46,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0899553');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt6547170');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Sport');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0130587');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1436562');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=6.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0425756');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt3164256');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=1999');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0787265');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0160797');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Comedy');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1257214');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1599348');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=4.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0205127');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0114369');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2011');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 49,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm4170324');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1748197');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=History');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000429');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0815236');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=5.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0100889');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1045658');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=1998');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0280333');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0209180');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Crime');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm4608989');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0867591');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=5.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0688789');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt2231138');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2012');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 52,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1802251');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0186566');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Sci-Fi');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0348389');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1517489');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=5.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0001232');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0121765');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=1997');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0005321');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0286162');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Documentary');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 21,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0849231');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0491175');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=5.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1144042');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0986263');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2013');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 61,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000117');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0386064');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Romance');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1291566');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt6802308');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=4.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0636426');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0112346');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=1996');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000231');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0200465');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Drama');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0005562');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0145681');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=6.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0165101');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0926380');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2014');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 43,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0079273');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0296572');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Mystery');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0771490');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0109493');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=4.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0754344');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0848281');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=1995');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0382072');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0401383');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Family');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 39,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0041161');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt2333784');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=4.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0695177');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0109783');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2015');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 51,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0761093');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0106977');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Music');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0712444');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt3864056');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=6.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1107127');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt2034800');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=1994');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0507669');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt2398231');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Fantasy');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 87,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0723704');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1951264');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=4.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0001800');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1124035');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2016');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 53,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0001015');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt2361509');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Horror');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0520749');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0317740');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=5.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000709');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0410297');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=1993');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0671038');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0464041');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=History');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 37,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm2113179');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0405094');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=5.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0455242');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0102388');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2017');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 48,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0403652');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0234215');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Adventure');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm4364444');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0338188');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=5.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1395024');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0120769');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=1992');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm3550361');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0119874');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Horror');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 56,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0483300');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0117364');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=5.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000688');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0107889');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2018');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 50,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0430817');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1792543');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Fantasy');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm2182034');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0369702');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=4.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1524317');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0133952');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=1991');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0415494');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0114534');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Music');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 25,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm2546897');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt1111422');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=6.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1250791');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0293662');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=2019');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 33,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm4391997');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt3533916');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Family');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0931736');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0209475');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=4.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0471461');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0138946');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=1990');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0007102');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0318761');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Mystery');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0394046');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0808510');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=4.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0627245');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0388482');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=1990');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 18,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000318');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0332452');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Drama');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1527905');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0100822');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=6.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0393799');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0313737');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2019');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0006904');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0105695');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Romance');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm2482506');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0259711');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=4.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0000495');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt6266538');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=1991');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 26,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm1531585');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0456020');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Documentary');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0628304');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0407304');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&rating=5.5');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/actors/nm0629950');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies/tt0271259');
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&year=2018');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?genre=Sci-Fi');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 91,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?rating=5.0');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?year=1992');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 18,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.get(baseURL+'/api/movies?pageSize=10&genre=Crime');

    check(res, {
        jsonArray:(r) =>
        r.json().length === 10,
        });
        
    sleep(Math.random() * maxSleep)
    res=http.del(baseURL+'/api/movies/zz0133093');

    check(res, {
        statusCode:(r) =>
        r.status === 204,
        });
        
    sleep(Math.random() * maxSleep)
}
