console.log(self);
self.onmessage = e => {
    console.log("recived msg")
    const {urlsOrUrl, accessToken} = e.data;
    const fetchData = async (url) => {
        console.count("fetched");
        try{
            const res = await fetch(url, {
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
        let res;
        if(Array.isArray(urlsOrUrl)){
            const responses = [];
            for(let url of urlsOrUrl){
                res = await fetchData(url);
                if(res) responses.push(res);
            }
            self.postMessage(responses);
        }
        else if(urlsOrUrl.constructor === String){
            res = await fetchData(urlsOrUrl)
            postMessage(res);
        }
    }
    if(urlsOrUrl && accessToken) init();
} 