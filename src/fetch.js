import {useState, useEffect} from 'react';

const afterHash = window.location.hash.substring(1); //get hash value from page url
const hashes = afterHash.split("&").map(hash => hash.split("="))//split hash string into property, value pairs
export const accessToken = hashes[0][1]

export function useFetch(urlsOrUrl, dependencies = []){
    const [response, setResponse] = useState(Array.isArray(urlsOrUrl) ? [] : null);
    

    useEffect(() => {
        const fetchData = async (url) => {
            let res;
            try{
                res = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + accessToken
                    }
                });
                const json = await res.json(); 
                return json
            }
            catch(error){
                console.warn(error);
            }
        };
        async function init(){
            if(Array.isArray(urlsOrUrl)){
                const responses = [];
                for(let url of urlsOrUrl){
                   // console.time("start")
                    let res = await fetchData(url);
                    //console.timeEnd("start")
                    if(res) responses.push(res);
                }
                setResponse(responses);
            }
            else if(urlsOrUrl.constructor === String){
                const res = await fetchData(urlsOrUrl)
                if(res) setResponse(res);
            }
        }
        if(urlsOrUrl && accessToken) init();
        return () => setResponse(null);
    }, dependencies);

  return response;
}