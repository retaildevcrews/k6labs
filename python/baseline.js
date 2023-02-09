import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

export default function () {

    let maxSleep=5;
    let res
    let baseURL='https://ngsa-cosmos-westus3-dev.austinrdc.dev';
    
    res=http.get(baseURL+'/version');
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/index.html');
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/swagger.json');
    check(res, {
        jsonObject:(r) =>
        JSON.stringify(r.json()) === JSON.stringify([{"field": "openapi"}, {"field": "info"}, {"field": "paths"}, {"field": "components"}]),
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/healthz');
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/featured/movie');
    check(res, {
        jsonObject:(r) =>
        JSON.stringify(r.json()) === JSON.stringify([{"field": "id"}, {"field": "movieId"}, {"field": "title"}, {"field": "year"}, {"field": "partitionKey"}, {"field": "runtime"}, {"field": "rating"}, {"field": "totalScore"}, {"field": "textSearch"}, {"field": "votes"}, {"field": "genres"}, {"field": "roles"}]),
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/healthz/ietf');
    check(res, {
        contentType:(r) =>
        JSON.stringify(r.json()) === JSON.stringify([{"field": "status", "validation": {"notContains": ["fail"]}}, {"field": "serviceId"}, {"field": "description"}, {"field": "instance"}, {"field": "version"}, {"field": "checks", "validation": {"jsonObject": [{"field": "getGenres:responseTime", "validation": {"jsonObject": [{"field": "observedUnit", "value": "ms"}, {"field": "time"}, {"field": "status"}, {"field": "componentType", "value": "datastore"}, {"field": "componentId", "value": "getGenres"}, {"field": "observedValue"}, {"field": "targetValue", "value": 200}]}}, {"field": "getActorById:responseTime", "validation": {"jsonObject": [{"field": "observedUnit", "value": "ms"}, {"field": "time"}, {"field": "status"}, {"field": "componentType", "value": "datastore"}, {"field": "componentId", "value": "getActorById"}, {"field": "observedValue"}, {"field": "targetValue", "value": 100}]}}, {"field": "getMovieById:responseTime", "validation": {"jsonObject": [{"field": "observedUnit", "value": "ms"}, {"field": "time"}, {"field": "status"}, {"field": "componentType", "value": "datastore"}, {"field": "componentId", "value": "getMovieById"}, {"field": "observedValue"}, {"field": "targetValue", "value": 100}]}}, {"field": "searchMovies:responseTime", "validation": {"jsonObject": [{"field": "observedUnit", "value": "ms"}, {"field": "time"}, {"field": "status"}, {"field": "componentType", "value": "datastore"}, {"field": "componentId", "value": "searchMovies"}, {"field": "observedValue"}, {"field": "targetValue", "value": 200}]}}, {"field": "searchActors:responseTime", "validation": {"jsonObject": [{"field": "observedUnit", "value": "ms"}, {"field": "time"}, {"field": "status"}, {"field": "componentType", "value": "datastore"}, {"field": "componentId", "value": "searchActors"}, {"field": "observedValue"}, {"field": "targetValue", "value": 200}]}}]}}]),
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors');
    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies');
    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/genres');
    check(res, {
        jsonArray:(r) =>
        r.json().length === 21,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?pageNumber=2');
    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?pageNumber=2');
    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors/nm0000031');
    check(res, {
        jsonObject:(r) =>
        JSON.stringify(r.json()) === JSON.stringify([{"field": "id", "value": "nm0000031"}, {"field": "actorId", "value": "nm0000031"}, {"field": "name", "value": "Katharine Hepburn"}, {"field": "birthYear", "value": 1907}, {"field": "partitionKey", "value": "1"}, {"field": "textSearch", "value": "katharine hepburn"}, {"field": "type", "value": "Actor"}, {"field": "profession", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "actress"}, {"index": 1, "value": "soundtrack"}, {"index": 2, "value": "writer"}]}}}, {"field": "deathYear", "value": 2003}, {"field": "movies", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "field": "movieId", "value": "tt0110391"}, {"index": 0, "field": "runtime", "value": 108}, {"index": 0, "field": "title", "value": "Love Affair"}, {"index": 0, "field": "year", "value": 1994}, {"index": 0, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Comedy"}, {"index": 1, "value": "Drama"}, {"index": 2, "value": "Romance"}]}}}]}}}]),
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors/nm0000173');
    check(res, {
        notContains:(r) =>
        JSON.stringify(r.json()) === JSON.stringify([{"field": "id", "value": "nm0000173"}, {"field": "actorId", "value": "nm0000173"}, {"field": "name", "value": "Nicole Kidman"}, {"field": "birthYear", "value": 1967}, {"field": "partitionKey", "value": "3"}, {"field": "textSearch", "value": "nicole kidman"}, {"field": "type", "value": "Actor"}, {"field": "profession", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "actress"}, {"index": 1, "value": "producer"}, {"index": 2, "value": "soundtrack"}]}}}, {"field": "movies", "validation": {"jsonArray": {"count": 49, "byIndex": [{"index": 0, "field": "movieId", "value": "tt0099371"}, {"index": 0, "field": "runtime", "value": 107}, {"index": 0, "field": "title", "value": "Days of Thunder"}, {"index": 0, "field": "year", "value": 1990}, {"index": 0, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Action"}, {"index": 1, "value": "Drama"}, {"index": 2, "value": "Sport"}]}}}, {"index": 1, "field": "movieId", "value": "tt0101453"}, {"index": 1, "field": "runtime", "value": 106}, {"index": 1, "field": "title", "value": "Billy Bathgate"}, {"index": 1, "field": "year", "value": 1991}, {"index": 1, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Crime"}, {"index": 1, "value": "Drama"}, {"index": 2, "value": "Thriller"}]}}}, {"index": 2, "field": "movieId", "value": "tt0101898"}, {"index": 2, "field": "runtime", "value": 99}, {"index": 2, "field": "title", "value": "Flirting"}, {"index": 2, "field": "year", "value": 1991}, {"index": 2, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Drama"}, {"index": 1, "value": "Romance"}]}}}, {"index": 3, "field": "movieId", "value": "tt0104231"}, {"index": 3, "field": "runtime", "value": 140}, {"index": 3, "field": "title", "value": "Far and Away"}, {"index": 3, "field": "year", "value": 1992}, {"index": 3, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Adventure"}, {"index": 1, "value": "Drama"}, {"index": 2, "value": "Romance"}]}}}, {"index": 4, "field": "movieId", "value": "tt0107497"}, {"index": 4, "field": "runtime", "value": 107}, {"index": 4, "field": "title", "value": "Malice"}, {"index": 4, "field": "year", "value": 1993}, {"index": 4, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Crime"}, {"index": 1, "value": "Mystery"}, {"index": 2, "value": "Thriller"}]}}}, {"index": 5, "field": "movieId", "value": "tt0107630"}, {"index": 5, "field": "runtime", "value": 117}, {"index": 5, "field": "title", "value": "My Life"}, {"index": 5, "field": "year", "value": 1993}, {"index": 5, "field": "genres", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Drama"}]}}}, {"index": 6, "field": "movieId", "value": "tt0112462"}, {"index": 6, "field": "runtime", "value": 121}, {"index": 6, "field": "title", "value": "Batman Forever"}, {"index": 6, "field": "year", "value": 1995}, {"index": 6, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Action"}, {"index": 1, "value": "Adventure"}, {"index": 2, "value": "Fantasy"}]}}}, {"index": 7, "field": "movieId", "value": "tt0114681"}, {"index": 7, "field": "runtime", "value": 106}, {"index": 7, "field": "title", "value": "To Die For"}, {"index": 7, "field": "year", "value": 1995}, {"index": 7, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Comedy"}, {"index": 1, "value": "Crime"}, {"index": 2, "value": "Drama"}]}}}, {"index": 8, "field": "movieId", "value": "tt0117364"}, {"index": 8, "field": "runtime", "value": 144}, {"index": 8, "field": "title", "value": "The Portrait of a Lady"}, {"index": 8, "field": "year", "value": 1996}, {"index": 8, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Drama"}, {"index": 1, "value": "Romance"}]}}}, {"index": 9, "field": "movieId", "value": "tt0119874"}, {"index": 9, "field": "runtime", "value": 124}, {"index": 9, "field": "title", "value": "The Peacemaker"}, {"index": 9, "field": "year", "value": 1997}, {"index": 9, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Action"}, {"index": 1, "value": "Thriller"}]}}}, {"index": 10, "field": "movieId", "value": "tt0120663"}, {"index": 10, "field": "runtime", "value": 159}, {"index": 10, "field": "title", "value": "Eyes Wide Shut"}, {"index": 10, "field": "year", "value": 1999}, {"index": 10, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Drama"}, {"index": 1, "value": "Mystery"}, {"index": 2, "value": "Thriller"}]}}}, {"index": 11, "field": "movieId", "value": "tt0120791"}, {"index": 11, "field": "runtime", "value": 104}, {"index": 11, "field": "title", "value": "Practical Magic"}, {"index": 11, "field": "year", "value": 1998}, {"index": 11, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Comedy"}, {"index": 1, "value": "Drama"}, {"index": 2, "value": "Fantasy"}]}}}, {"index": 12, "field": "movieId", "value": "tt0159365"}, {"index": 12, "field": "runtime", "value": 154}, {"index": 12, "field": "title", "value": "Cold Mountain"}, {"index": 12, "field": "year", "value": 2003}, {"index": 12, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Adventure"}, {"index": 1, "value": "Drama"}, {"index": 2, "value": "History"}]}}}, {"index": 13, "field": "movieId", "value": "tt0188453"}, {"index": 13, "field": "runtime", "value": 93}, {"index": 13, "field": "title", "value": "Birthday Girl"}, {"index": 13, "field": "year", "value": 2001}, {"index": 13, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Comedy"}, {"index": 1, "value": "Crime"}, {"index": 2, "value": "Thriller"}]}}}, {"index": 14, "field": "movieId", "value": "tt0199626"}, {"index": 14, "field": "runtime", "value": 119}, {"index": 14, "field": "title", "value": "In the Cut"}, {"index": 14, "field": "year", "value": 2003}, {"index": 14, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Mystery"}, {"index": 1, "value": "Thriller"}]}}}, {"index": 15, "field": "movieId", "value": "tt0203009"}, {"index": 15, "field": "runtime", "value": 127}, {"index": 15, "field": "title", "value": "Moulin Rouge!"}, {"index": 15, "field": "year", "value": 2001}, {"index": 15, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Drama"}, {"index": 1, "value": "Musical"}, {"index": 2, "value": "Romance"}]}}}, {"index": 16, "field": "movieId", "value": "tt0230600"}, {"index": 16, "field": "runtime", "value": 101}, {"index": 16, "field": "title", "value": "The Others"}, {"index": 16, "field": "year", "value": 2001}, {"index": 16, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Horror"}, {"index": 1, "value": "Mystery"}, {"index": 2, "value": "Thriller"}]}}}, {"index": 17, "field": "movieId", "value": "tt0274558"}, {"index": 17, "field": "runtime", "value": 110}, {"index": 17, "field": "title", "value": "The Hours"}, {"index": 17, "field": "year", "value": 2002}, {"index": 17, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Drama"}, {"index": 1, "value": "Romance"}]}}}, {"index": 18, "field": "movieId", "value": "tt0276919"}, {"index": 18, "field": "runtime", "value": 178}, {"index": 18, "field": "title", "value": "Dogville"}, {"index": 18, "field": "year", "value": 2003}, {"index": 18, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Crime"}, {"index": 1, "value": "Drama"}]}}}, {"index": 19, "field": "movieId", "value": "tt0308383"}, {"index": 19, "field": "runtime", "value": 106}, {"index": 19, "field": "title", "value": "The Human Stain"}, {"index": 19, "field": "year", "value": 2003}, {"index": 19, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Drama"}, {"index": 1, "value": "Romance"}, {"index": 2, "value": "Thriller"}]}}}, {"index": 20, "field": "movieId", "value": "tt0327162"}, {"index": 20, "field": "runtime", "value": 93}, {"index": 20, "field": "title", "value": "The Stepford Wives"}, {"index": 20, "field": "year", "value": 2004}, {"index": 20, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Comedy"}, {"index": 1, "value": "Horror"}, {"index": 2, "value": "Sci-Fi"}]}}}, {"index": 21, "field": "movieId", "value": "tt0337876"}, {"index": 21, "field": "runtime", "value": 100}, {"index": 21, "field": "title", "value": "Birth"}, {"index": 21, "field": "year", "value": 2004}, {"index": 21, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Drama"}, {"index": 1, "value": "Fantasy"}, {"index": 2, "value": "Mystery"}]}}}, {"index": 22, "field": "movieId", "value": "tt0373926"}, {"index": 22, "field": "runtime", "value": 128}, {"index": 22, "field": "title", "value": "The Interpreter"}, {"index": 22, "field": "year", "value": 2005}, {"index": 22, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Crime"}, {"index": 1, "value": "Mystery"}, {"index": 2, "value": "Thriller"}]}}}, {"index": 23, "field": "movieId", "value": "tt0374536"}, {"index": 23, "field": "runtime", "value": 102}, {"index": 23, "field": "title", "value": "Bewitched"}, {"index": 23, "field": "year", "value": 2005}, {"index": 23, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Comedy"}, {"index": 1, "value": "Fantasy"}, {"index": 2, "value": "Romance"}]}}}, {"index": 24, "field": "movieId", "value": "tt0385752"}, {"index": 24, "field": "runtime", "value": 113}, {"index": 24, "field": "title", "value": "The Golden Compass"}, {"index": 24, "field": "year", "value": 2007}, {"index": 24, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Adventure"}, {"index": 1, "value": "Family"}, {"index": 2, "value": "Fantasy"}]}}}, {"index": 25, "field": "movieId", "value": "tt0422295"}, {"index": 25, "field": "runtime", "value": 122}, {"index": 25, "field": "title", "value": "Fur: An Imaginary Portrait of Diane Arbus"}, {"index": 25, "field": "year", "value": 2006}, {"index": 25, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Biography"}, {"index": 1, "value": "Drama"}, {"index": 2, "value": "Romance"}]}}}, {"index": 26, "field": "movieId", "value": "tt0427392"}, {"index": 26, "field": "runtime", "value": 99}, {"index": 26, "field": "title", "value": "The Invasion"}, {"index": 26, "field": "year", "value": 2007}, {"index": 26, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Sci-Fi"}, {"index": 1, "value": "Thriller"}]}}}, {"index": 27, "field": "movieId", "value": "tt0455824"}, {"index": 27, "field": "runtime", "value": 165}, {"index": 27, "field": "title", "value": "Australia"}, {"index": 27, "field": "year", "value": 2008}, {"index": 27, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Adventure"}, {"index": 1, "value": "Comedy"}, {"index": 2, "value": "Drama"}]}}}, {"index": 28, "field": "movieId", "value": "tt0757361"}, {"index": 28, "field": "runtime", "value": 93}, {"index": 28, "field": "title", "value": "Margot at the Wedding"}, {"index": 28, "field": "year", "value": 2007}, {"index": 28, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Comedy"}, {"index": 1, "value": "Drama"}]}}}, {"index": 29, "field": "movieId", "value": "tt0935075"}, {"index": 29, "field": "runtime", "value": 91}, {"index": 29, "field": "title", "value": "Rabbit Hole"}, {"index": 29, "field": "year", "value": 2010}, {"index": 29, "field": "genres", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Drama"}]}}}, {"index": 30, "field": "movieId", "value": "tt1496422"}, {"index": 30, "field": "runtime", "value": 107}, {"index": 30, "field": "title", "value": "The Paperboy"}, {"index": 30, "field": "year", "value": 2012}, {"index": 30, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Crime"}, {"index": 1, "value": "Drama"}, {"index": 2, "value": "Mystery"}]}}}, {"index": 31, "field": "movieId", "value": "tt1564367"}, {"index": 31, "field": "runtime", "value": 117}, {"index": 31, "field": "title", "value": "Just Go with It"}, {"index": 31, "field": "year", "value": 2011}, {"index": 31, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Comedy"}, {"index": 1, "value": "Romance"}]}}}, {"index": 32, "field": "movieId", "value": "tt1674784"}, {"index": 32, "field": "runtime", "value": 91}, {"index": 32, "field": "title", "value": "Trespass"}, {"index": 32, "field": "year", "value": 2011}, {"index": 32, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Crime"}, {"index": 1, "value": "Drama"}, {"index": 2, "value": "Thriller"}]}}}, {"index": 33, "field": "movieId", "value": "tt1682180"}, {"index": 33, "field": "runtime", "value": 99}, {"index": 33, "field": "title", "value": "Stoker"}, {"index": 33, "field": "year", "value": 2013}, {"index": 33, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Drama"}, {"index": 1, "value": "Thriller"}]}}}, {"index": 34, "field": "movieId", "value": "tt1703957"}, {"index": 34, "field": "runtime", "value": 104}, {"index": 34, "field": "title", "value": "Genius"}, {"index": 34, "field": "year", "value": 2016}, {"index": 34, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Biography"}, {"index": 1, "value": "Drama"}]}}}, {"index": 35, "field": "movieId", "value": "tt1726592"}, {"index": 35, "field": "runtime", "value": 92}, {"index": 35, "field": "title", "value": "Before I Go to Sleep"}, {"index": 35, "field": "year", "value": 2014}, {"index": 35, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Drama"}, {"index": 1, "value": "Horror"}, {"index": 2, "value": "Mystery"}]}}}, {"index": 36, "field": "movieId", "value": "tt1741273"}, {"index": 36, "field": "runtime", "value": 111}, {"index": 36, "field": "title", "value": "Secret in Their Eyes"}, {"index": 36, "field": "year", "value": 2015}, {"index": 36, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Crime"}, {"index": 1, "value": "Drama"}, {"index": 2, "value": "Mystery"}]}}}, {"index": 37, "field": "movieId", "value": "tt1837636"}, {"index": 37, "field": "runtime", "value": 128}, {"index": 37, "field": "title", "value": "Queen of the Desert"}, {"index": 37, "field": "year", "value": 2015}, {"index": 37, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Adventure"}, {"index": 1, "value": "Biography"}, {"index": 2, "value": "Drama"}]}}}, {"index": 38, "field": "movieId", "value": "tt1987680"}, {"index": 38, "field": "runtime", "value": 126}, {"index": 38, "field": "title", "value": "The Upside"}, {"index": 38, "field": "year", "value": 2017}, {"index": 38, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Comedy"}, {"index": 1, "value": "Drama"}]}}}, {"index": 39, "field": "movieId", "value": "tt2058107"}, {"index": 39, "field": "runtime", "value": 116}, {"index": 39, "field": "title", "value": "The Railway Man"}, {"index": 39, "field": "year", "value": 2013}, {"index": 39, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Biography"}, {"index": 1, "value": "Drama"}, {"index": 2, "value": "Romance"}]}}}, {"index": 40, "field": "movieId", "value": "tt2095649"}, {"index": 40, "field": "runtime", "value": 103}, {"index": 40, "field": "title", "value": "Grace of Monaco"}, {"index": 40, "field": "year", "value": 2014}, {"index": 40, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Biography"}, {"index": 1, "value": "Drama"}, {"index": 2, "value": "Romance"}]}}}, {"index": 41, "field": "movieId", "value": "tt2097331"}, {"index": 41, "field": "runtime", "value": 105}, {"index": 41, "field": "title", "value": "The Family Fang"}, {"index": 41, "field": "year", "value": 2015}, {"index": 41, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Comedy"}, {"index": 1, "value": "Drama"}, {"index": 2, "value": "Mystery"}]}}}, {"index": 42, "field": "movieId", "value": "tt2325977"}, {"index": 42, "field": "runtime", "value": 112}, {"index": 42, "field": "title", "value": "Strangerland"}, {"index": 42, "field": "year", "value": 2015}, {"index": 42, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Drama"}, {"index": 1, "value": "Mystery"}, {"index": 2, "value": "Thriller"}]}}}, {"index": 43, "field": "movieId", "value": "tt3741834"}, {"index": 43, "field": "runtime", "value": 118}, {"index": 43, "field": "title", "value": "Lion"}, {"index": 43, "field": "year", "value": 2016}, {"index": 43, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Biography"}, {"index": 1, "value": "Drama"}]}}}, {"index": 44, "field": "movieId", "value": "tt3859310"}, {"index": 44, "field": "runtime", "value": 102}, {"index": 44, "field": "title", "value": "How to Talk to Girls at Parties"}, {"index": 44, "field": "year", "value": 2017}, {"index": 44, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Comedy"}, {"index": 1, "value": "Music"}, {"index": 2, "value": "Romance"}]}}}, {"index": 45, "field": "movieId", "value": "tt3864056"}, {"index": 45, "field": "runtime", "value": 149}, {"index": 45, "field": "title", "value": "The Goldfinch"}, {"index": 45, "field": "year", "value": 2019}, {"index": 45, "field": "genres", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Drama"}]}}}, {"index": 46, "field": "movieId", "value": "tt5592248"}, {"index": 46, "field": "runtime", "value": 93}, {"index": 46, "field": "title", "value": "The Beguiled"}, {"index": 46, "field": "year", "value": 2017}, {"index": 46, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Drama"}, {"index": 1, "value": "Thriller"}]}}}, {"index": 47, "field": "movieId", "value": "tt7008872"}, {"index": 47, "field": "runtime", "value": 115}, {"index": 47, "field": "title", "value": "Boy Erased"}, {"index": 47, "field": "year", "value": 2018}, {"index": 47, "field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Biography"}, {"index": 1, "value": "Drama"}]}}}, {"index": 48, "field": "movieId", "value": "tt7137380"}, {"index": 48, "field": "runtime", "value": 121}, {"index": 48, "field": "title", "value": "Destroyer"}, {"index": 48, "field": "year", "value": 2018}, {"index": 48, "field": "genres", "validation": {"jsonArray": {"count": 3, "byIndex": [{"index": 0, "value": "Action"}, {"index": 1, "value": "Crime"}, {"index": 2, "value": "Drama"}]}}}]}}}]),
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies/tt0133093');
    check(res, {
        jsonObject:(r) =>
        JSON.stringify(r.json()) === JSON.stringify([{"field": "id", "value": "tt0133093"}, {"field": "movieId", "value": "tt0133093"}, {"field": "title", "value": "The Matrix"}, {"field": "type", "value": "Movie"}, {"field": "year", "value": 1999}, {"field": "partitionKey", "value": "3"}, {"field": "runtime", "value": 136}, {"field": "rating", "value": 8.7}, {"field": "totalScore", "value": 13452653}, {"field": "textSearch", "value": "the matrix"}, {"field": "votes", "value": 1546282}, {"field": "genres", "validation": {"jsonArray": {"count": 2, "byIndex": [{"index": 0, "value": "Action"}, {"index": 1, "value": "Sci-Fi"}]}}}, {"field": "roles", "validation": {"jsonArray": {"count": 7, "byIndex": [{"index": 0, "field": "actorId", "value": "nm0000206"}, {"index": 0, "field": "birthYear", "value": 1964}, {"index": 0, "field": "category", "value": "Actor"}, {"index": 0, "field": "name", "value": "Keanu Reeves"}, {"index": 0, "field": "order", "value": 1}, {"index": 0, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 0, "field": "characters", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Neo"}]}}}, {"index": 1, "field": "actorId", "value": "nm0000401"}, {"index": 1, "field": "birthYear", "value": 1961}, {"index": 1, "field": "category", "value": "Actor"}, {"index": 1, "field": "name", "value": "Laurence Fishburne"}, {"index": 1, "field": "order", "value": 2}, {"index": 1, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 1, "field": "characters", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Morpheus"}]}}}, {"index": 2, "field": "actorId", "value": "nm0005251"}, {"index": 2, "field": "birthYear", "value": 1967}, {"index": 2, "field": "category", "value": "Actress"}, {"index": 2, "field": "name", "value": "Carrie-Anne Moss"}, {"index": 2, "field": "order", "value": 3}, {"index": 2, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 2, "field": "characters", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Trinity"}]}}}, {"index": 3, "field": "actorId", "value": "nm0915989"}, {"index": 3, "field": "birthYear", "value": 1960}, {"index": 3, "field": "category", "value": "Actor"}, {"index": 3, "field": "name", "value": "Hugo Weaving"}, {"index": 3, "field": "order", "value": 4}, {"index": 3, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 3, "field": "characters", "validation": {"jsonArray": {"count": 1, "byIndex": [{"index": 0, "value": "Agent Smith"}]}}}, {"index": 4, "field": "actorId", "value": "nm0905154"}, {"index": 4, "field": "birthYear", "value": 1965}, {"index": 4, "field": "category", "value": "Director"}, {"index": 4, "field": "name", "value": "Lana Wachowski"}, {"index": 4, "field": "order", "value": 5}, {"index": 4, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 5, "field": "actorId", "value": "nm0905152"}, {"index": 5, "field": "birthYear", "value": 1967}, {"index": 5, "field": "category", "value": "Director"}, {"index": 5, "field": "name", "value": "Lilly Wachowski"}, {"index": 5, "field": "order", "value": 6}, {"index": 5, "validation": {"notContains": ["\"deathYear\":"]}}, {"index": 6, "field": "actorId", "value": "nm0005428"}, {"index": 6, "field": "birthYear", "value": 1952}, {"index": 6, "field": "category", "value": "Producer"}, {"index": 6, "field": "name", "value": "Joel Silver"}, {"index": 6, "field": "order", "value": 7}, {"index": 6, "validation": {"notContains": ["\"deathYear\":"]}}]}}}]),
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?genre=Action');
    check(res, {
        jsonArray:(r) =>
        r.json().length === 100,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?year=1999');
    check(res, {
        jsonArray:(r) =>
        r.json().length === 39,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?rating=8.5');
    check(res, {
        jsonArray:(r) =>
        r.json().length === 20,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?actorId=nm0000206');
    check(res, {
        jsonArray:(r) =>
        r.json().length === 45,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?genre=action&year=2000&rating=7&q=glad&actorid=nm0000128');
    check(res, {
        jsonArray:(r) =>
        r.json().length === 1,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?q=nicole');
    check(res, {
        jsonArray:(r) =>
        r.json().length === 5,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?q=ring');
    check(res, {
        jsonArray:(r) =>
        r.json().length === 7,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?q=notfoundtest');
    check(res, {
        jsonArray:(r) =>
        r.json().length === 0,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?q=notfoundtest');
    check(res, {
        jsonArray:(r) =>
        r.json().length === 0,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?q=123456789012345678901');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?q=a');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?q=123456789012345678901');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?q=a');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?pageSize=0');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?pageSize=1001');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?pageNumber=0');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?pageNumber=-1');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?pageNumber=10001');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?pageNumber=0&pageSize=-1&q=a');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors/ab12345');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors/tt12345');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors/nm123');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors/nmabcde');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors/nm123');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors/nm00000');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?q=a');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?q=123456789012345678901');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?pageSize=0');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?pageSize=-1');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?pageSize=1001');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?pageNumber=0');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?pageNumber=-1');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?pageNumber=10001');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?year=-1');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?year=1');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?year=1873');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?year=2026');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?rating=-1');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?genre=ab');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?genre=123456789012345678901');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?actorId=nm123');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?actorId=ab12345');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?actorId=tt12345');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?actorId=NM12345');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?pageNumber=0&pageSize=-1&q=a&genre=ab&year=123&rating=-1');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies/ab12345');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies/nm12345');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies/TT12345');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies/tt123');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies/ttabcde');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies/tt00000');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?pageSize=foo');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?pageNumber=foo');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?pageNumber=foo&pageSize=foo&q=a');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?pageSize=foo');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?pageNumber=foo');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?year=foo');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?rating=foo');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?pageNumber=foo&pageSize=foo&q=a&genre=ab&year=foo&rating=foo');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?pageSize=10.1');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors?pageNumber=10.1');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?pageSize=10.1');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?pageNumber=10.1');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?year=2020.1');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies?rating=10.1');
    check(res, {
        statusCode:(r) =>
        r.status === 400,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors/nm12345');
    check(res, {
        statusCode:(r) =>
        r.status === 404,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies/tt12345');
    check(res, {
        statusCode:(r) =>
        r.status === 404,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/actors/nm0000173/foo');
    check(res, {
        statusCode:(r) =>
        r.status === 404,
        });
    sleep(Math.random() * maxSleep)

    res=http.get(baseURL+'/api/movies/tt0133093/foo');
    check(res, {
        statusCode:(r) =>
        r.status === 404,
        });
    sleep(Math.random() * maxSleep)

}
