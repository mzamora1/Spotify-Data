import {useState, useEffect} from 'react';

export default function useAudio(url){
    const [audio] = useState(url && new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    useEffect(() => {
       if(url) playing ? audio.play() : audio.pause();
    }, [playing]);
  
    useEffect(() => {
        if(url){
            audio.addEventListener('ended', () => setPlaying(false));
            return () => {
                audio.pause();
                audio.removeEventListener('ended', () => setPlaying(false));
            };
        }
    }, [audio]);
  
    return [playing, setPlaying];
};



// export default function useAudio(url) {
//     const startTransaction = async () => {
//         const dbConnection = await new Promise((resolve, reject) => {
//           const openRequest = indexedDB.open('spotify-data', 1)
//           openRequest.onupgradeneeded = (e) => {
//             const newDB = openRequest.result;
//             const store = newDB.createObjectStore('musicStore', {
//               keyPath: "url"
//             });
//           }
//           openRequest.onsuccess = () => {
//             resolve(openRequest.result);
//           }
//           openRequest.onerror = (evt) => {
//             console.log(evt.target.errorCode);
//             reject(null)
//           }
//         });
//         dbConnection.onerror = (evt) => {
//           console.log(evt.target.errorCode);
//         }
//         const transaction = dbConnection.transaction('musicStore', 'readwrite');
//         transaction.oncomplete = () => {
//           dbConnection.close();
//         }
//         return transaction.objectStore('musicStore')
//     }
//     const matchDB = (store, item) => new Promise((resolve, reject) => {
//         const res = store.get(item);
//         res.onsuccess = async () => {
//             resolve(res.result?.blob);
//         }
//         res.onerror = (e) => {
//             console.log(e.target.errorCode)
//             reject(null)
//         } 
//     })
//     const [audioCtx, setAudioCtx] = useState(new AudioContext());
//     const [playing, setPlaying] = useState(false);  
//     const makeAudioFromBuffer = async (blob, source) => {
//         const arrayBuffer = await blob.arrayBuffer();
//         const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
//         source.buffer = audioBuffer;
//         source.connect(audioCtx.destination);
//     }
//     const makeSource = async (source) => {
//         const matchBlob = await matchDB(await startTransaction(), url);
//         if(matchBlob) {
//             console.log(`found ${url} `, matchBlob);
//             await makeAudioFromBuffer(matchBlob, source);
//         }
//         else{
//             await new Promise((resolve, reject) => {
//                 const request = new XMLHttpRequest();
//                 request.open('GET', url, true);
//                 request.responseType = 'blob';
//                 request.onload = function() {
//                     const blob = request.response;
//                     startTransaction().then(store => {
//                         const item = { url: url };
//                         item.blob = blob;
//                         store.put(item);
//                         console.log('put item in db', item)
//                     });
//                     makeAudioFromBuffer(blob, source).then(_ => resolve());
//                 }
//                 request.onerror = err => reject(err);
//                 request.send();
//             });
//         }
//         console.log(source)
//         return source;
//     }
//     useEffect(() => {
//         function play() {
//             const source = audioCtx.createBufferSource();
//             makeSource(source).then(loadedSource => {
//                 if(playing) {
//                     loadedSource.start(0);
//                 }
//                 loadedSource.addEventListener('ended', () => setPlaying(false));
//             });
//             return () => {
//                 source.stop(0);
//                 source.removeEventListener('ended', () => setPlaying(false));
//             };
//         }
//         if(url && playing) return play();
//     }, [ playing])

//     return [playing, setPlaying];
// }