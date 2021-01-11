import {useState, useEffect} from 'react';
import { useWorker } from "@koale/useworker";

const afterHash = window.location.hash.substring(1); //get hash value from page url
const hashes = afterHash.split("&").map(hash => hash.split("="))//split hash string into property, value pairs
export const accessToken = hashes[0][1]


// export function useFetch(urlsOrUrl, dependencies = []){
    
//     const [worker] = useState(new Worker('./fetchWorker.js'))
//     const [response, setResponse] = useState(Array.isArray(urlsOrUrl) ? [] : null);
//     useEffect(() => {
//         worker.postMessage({urlsOrUrl, accessToken});
//         worker.onmessage = e => {
//             setResponse(e.data);
//         }
//         console.log(worker)
//     }, dependencies)
//     return response;
// }


const fetchData = async (url, token) => {
            console.count("fetched");
            //requestAnimationFrame(() => {});
            try{
                const res = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                });
                const json = await res.json(); 
                return json
            }
            catch(error){
                console.warn(error);
            }
        };

export function useFetch(urlsOrUrl, dependencies = []){
    const [response, setResponse] = useState(Array.isArray(urlsOrUrl) ? [] : null);
    const [fetchWorker] = useWorker(fetchData)
    useEffect(() => {
        async function init(){
            if(Array.isArray(urlsOrUrl)){
                const responses = [];
                for(let url of urlsOrUrl){
                    const res = await fetchWorker(url, accessToken);
                    if(res) responses.push(res);
                }
                setResponse(responses);
            }
            else if(urlsOrUrl.constructor === String){
                const res = await fetchWorker(urlsOrUrl, accessToken)
                if(res) setResponse(res);
            }
        }
        if(urlsOrUrl && accessToken) init();
        return () => setResponse(null);
    }, dependencies);

  return response;
}
