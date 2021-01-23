import {useState, useEffect} from 'react';


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


//console.log(new Worker('/fetchWorker.js'));
export function useFetch(urlsOrUrl, dependencies = []){
    const [response, setResponse] = useState(Array.isArray(urlsOrUrl) ? [] : null);
    
    useEffect(() => {
        const fetchData = async (url) => {
            let res;
            try{
                res = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + accessToken
                    }
                })
                const json = await res.json(); 
                return json
            }
            catch(error){
                console.warn(error);
                if(res?.status == 503) return fetchData(url)
                if(res?.status == 429){
                    console.log('rate limited')
                    setTimeout(fetchData, res.headers.get('Retry-After')*1000, url)
                }
            }
        };
        async function init(){
            if(Array.isArray(urlsOrUrl)){
                const responses = [];
                for(let url of urlsOrUrl){
                    const res = await fetchData(url);
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

