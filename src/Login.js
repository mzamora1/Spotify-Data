import React, { useEffect } from 'react';
import anime from 'animejs';

let array = Array(40); //will be used to generate floating bubbles
array.fill(1); //must fill with values or else map will not work

function Login() {
    function redirect(){
        if(process.env.NODE_ENV == 'production'){
            window.location.href = "https://accounts.spotify.com/authorize?client_id=b48ae6f543f941a5be1084b45ed74b13&redirect_uri=https://mzamora1.github.io/Spotify-Data/&scope=user-top-read&response_type=token";
        }else{
            window.location.href = "https://accounts.spotify.com/authorize?client_id=b48ae6f543f941a5be1084b45ed74b13&redirect_uri=http://localhost:3000/Spotify-Data/&scope=user-top-read&response_type=token"
        }
    }
    useEffect(()=>{
        anime.timeline({
            duration: 800,
            easing: "easeInOutSine",
        })
        .add({
            targets: "path",
            strokeDashoffset: [anime.setDashoffset, 0],
            translateX: [-10, 10],
            fill: "#1DB954",
            delay: anime.stagger(150, {start: -1500})
        })
        .add({
            targets: "#loginBtn",
            translateX: [-10, 10],
            opacity: [0, 1]
        }, "-=400")

    }, []);

    useEffect(()=> {
        anime({
            targets: "img",
            translateY: "-100vh",
            opacity: [0.1, 1],
            width: ["2vw", "6vw"],
            delay: anime.stagger(300),
            duration: 3000,
            autoplay: true,
            easing: 'easeInQuad',
            loop: true,
            endDelay: -100,
        })
    }, [])
    return (
        <div className="login">
            <div id="svgWrapper">
                <svg id="spot" viewBox="0 0 500 200" preserveAspectRatio="xMinYMin meet" fill="none"> {/* svg was made using figma */}
                    <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.639999" y="0.799988" width="489" height="89" fill="black">
                        <rect fill="white" x="0.639999" y="0.799988" width="489" height="89"/>
                        <path d="M21.08 88.2C14.68 88.2 9.84 86.4 6.56 82.8C3.28 79.12 1.64 73.88 1.64 67.08V62.28H14.12V68.04C14.12 73.48 16.4 76.2 20.96 76.2C23.2 76.2 24.88 75.56 26 74.28C27.2 72.92 27.8 70.76 27.8 67.8C27.8 64.28 27 61.2 25.4 58.56C23.8 55.84 20.84 52.6 16.52 48.84C11.08 44.04 7.28 39.72 5.12 35.88C2.96 31.96 1.88 27.56 1.88 22.68C1.88 16.04 3.56 10.92 6.92 7.31999C10.28 3.63999 15.16 1.79999 21.56 1.79999C27.88 1.79999 32.64 3.63999 35.84 7.31999C39.12 10.92 40.76 16.12 40.76 22.92V26.4H28.28V22.08C28.28 19.2 27.72 17.12 26.6 15.84C25.48 14.48 23.84 13.8 21.68 13.8C17.28 13.8 15.08 16.48 15.08 21.84C15.08 24.88 15.88 27.72 17.48 30.36C19.16 33 22.16 36.2 26.48 39.96C32 44.76 35.8 49.12 37.88 53.04C39.96 56.96 41 61.56 41 66.84C41 73.72 39.28 79 35.84 82.68C32.48 86.36 27.56 88.2 21.08 88.2Z"/>
                        <path d="M48.5684 2.99999H68.0084C74.5684 2.99999 79.4884 4.75999 82.7684 8.27999C86.0484 11.8 87.6884 16.96 87.6884 23.76V32.04C87.6884 38.84 86.0484 44 82.7684 47.52C79.4884 51.04 74.5684 52.8 68.0084 52.8H61.7684V87H48.5684V2.99999ZM68.0084 40.8C70.1684 40.8 71.7684 40.2 72.8084 39C73.9284 37.8 74.4884 35.76 74.4884 32.88V22.92C74.4884 20.04 73.9284 18 72.8084 16.8C71.7684 15.6 70.1684 15 68.0084 15H61.7684V40.8H68.0084Z"/>
                        <path d="M113.938 88.2C107.457 88.2 102.498 86.36 99.0575 82.68C95.6175 79 93.8975 73.8 93.8975 67.08V22.92C93.8975 16.2 95.6175 11 99.0575 7.31999C102.498 3.63999 107.457 1.79999 113.938 1.79999C120.418 1.79999 125.378 3.63999 128.818 7.31999C132.258 11 133.978 16.2 133.978 22.92V67.08C133.978 73.8 132.258 79 128.818 82.68C125.378 86.36 120.418 88.2 113.938 88.2ZM113.938 76.2C118.497 76.2 120.777 73.44 120.777 67.92V22.08C120.777 16.56 118.497 13.8 113.938 13.8C109.378 13.8 107.098 16.56 107.098 22.08V67.92C107.098 73.44 109.378 76.2 113.938 76.2Z"/>
                        <path d="M152.756 15H138.956V2.99999H179.756V15H165.956V87H152.756V15Z"/>
                        <path d="M186.147 2.99999H199.347V87H186.147V2.99999Z"/>
                        <path d="M209.232 2.99999H244.152V15H222.432V38.4H239.473V50.4H222.432V87H209.232V2.99999Z"/>
                        <path d="M262.602 51.24L246.643 2.99999H260.682L269.682 33.84H269.923L278.923 2.99999H291.762L275.802 51.24V87H262.602V51.24Z"/>
                        <path d="M316.928 2.99999H337.088C343.648 2.99999 348.568 4.75999 351.848 8.27999C355.128 11.8 356.768 16.96 356.768 23.76V66.24C356.768 73.04 355.128 78.2 351.848 81.72C348.568 85.24 343.648 87 337.088 87H316.928V2.99999ZM336.848 75C339.008 75 340.648 74.36 341.768 73.08C342.968 71.8 343.568 69.72 343.568 66.84V23.16C343.568 20.28 342.968 18.2 341.768 16.92C340.648 15.64 339.008 15 336.848 15H330.128V75H336.848Z"/>
                        <path d="M375.643 2.99999H393.523L407.203 87H394.003L391.603 70.32V70.56H376.603L374.203 87H361.963L375.643 2.99999ZM390.043 59.16L384.163 17.64H383.923L378.163 59.16H390.043Z"/>
                        <path d="M418.42 15H404.62V2.99999H445.42V15H431.62V87H418.42V15Z"/>
                        <path d="M456.503 2.99999H474.383L488.063 87H474.863L472.463 70.32V70.56H457.463L455.063 87H442.823L456.503 2.99999ZM470.903 59.16L465.023 17.64H464.783L459.023 59.16H470.903Z"/>
                    </mask>
                    <path d="M21.08 88.2C14.68 88.2 9.84 86.4 6.56 82.8C3.28 79.12 1.64 73.88 1.64 67.08V62.28H14.12V68.04C14.12 73.48 16.4 76.2 20.96 76.2C23.2 76.2 24.88 75.56 26 74.28C27.2 72.92 27.8 70.76 27.8 67.8C27.8 64.28 27 61.2 25.4 58.56C23.8 55.84 20.84 52.6 16.52 48.84C11.08 44.04 7.28 39.72 5.12 35.88C2.96 31.96 1.88 27.56 1.88 22.68C1.88 16.04 3.56 10.92 6.92 7.31999C10.28 3.63999 15.16 1.79999 21.56 1.79999C27.88 1.79999 32.64 3.63999 35.84 7.31999C39.12 10.92 40.76 16.12 40.76 22.92V26.4H28.28V22.08C28.28 19.2 27.72 17.12 26.6 15.84C25.48 14.48 23.84 13.8 21.68 13.8C17.28 13.8 15.08 16.48 15.08 21.84C15.08 24.88 15.88 27.72 17.48 30.36C19.16 33 22.16 36.2 26.48 39.96C32 44.76 35.8 49.12 37.88 53.04C39.96 56.96 41 61.56 41 66.84C41 73.72 39.28 79 35.84 82.68C32.48 86.36 27.56 88.2 21.08 88.2Z" stroke="#1DB954" strokeWidth="2" mask="url(#path-1-outside-1)"/>
                    <path d="M48.5684 2.99999H68.0084C74.5684 2.99999 79.4884 4.75999 82.7684 8.27999C86.0484 11.8 87.6884 16.96 87.6884 23.76V32.04C87.6884 38.84 86.0484 44 82.7684 47.52C79.4884 51.04 74.5684 52.8 68.0084 52.8H61.7684V87H48.5684V2.99999ZM68.0084 40.8C70.1684 40.8 71.7684 40.2 72.8084 39C73.9284 37.8 74.4884 35.76 74.4884 32.88V22.92C74.4884 20.04 73.9284 18 72.8084 16.8C71.7684 15.6 70.1684 15 68.0084 15H61.7684V40.8H68.0084Z" stroke="#1DB954" strokeWidth="2" mask="url(#path-1-outside-1)"/>
                    <path d="M113.938 88.2C107.457 88.2 102.498 86.36 99.0575 82.68C95.6175 79 93.8975 73.8 93.8975 67.08V22.92C93.8975 16.2 95.6175 11 99.0575 7.31999C102.498 3.63999 107.457 1.79999 113.938 1.79999C120.418 1.79999 125.378 3.63999 128.818 7.31999C132.258 11 133.978 16.2 133.978 22.92V67.08C133.978 73.8 132.258 79 128.818 82.68C125.378 86.36 120.418 88.2 113.938 88.2ZM113.938 76.2C118.497 76.2 120.777 73.44 120.777 67.92V22.08C120.777 16.56 118.497 13.8 113.938 13.8C109.378 13.8 107.098 16.56 107.098 22.08V67.92C107.098 73.44 109.378 76.2 113.938 76.2Z" stroke="#1DB954" strokeWidth="2" mask="url(#path-1-outside-1)"/>
                    <path d="M152.756 15H138.956V2.99999H179.756V15H165.956V87H152.756V15Z" stroke="#1DB954" strokeWidth="2" mask="url(#path-1-outside-1)"/>
                    <path d="M186.147 2.99999H199.347V87H186.147V2.99999Z" stroke="#1DB954" strokeWidth="2" mask="url(#path-1-outside-1)"/>
                    <path d="M209.232 2.99999H244.152V15H222.432V38.4H239.473V50.4H222.432V87H209.232V2.99999Z" stroke="#1DB954" strokeWidth="2" mask="url(#path-1-outside-1)"/>
                    <path d="M262.602 51.24L246.643 2.99999H260.682L269.682 33.84H269.923L278.923 2.99999H291.762L275.802 51.24V87H262.602V51.24Z" stroke="#1DB954" strokeWidth="2" mask="url(#path-1-outside-1)"/>
                    <path d="M316.928 2.99999H337.088C343.648 2.99999 348.568 4.75999 351.848 8.27999C355.128 11.8 356.768 16.96 356.768 23.76V66.24C356.768 73.04 355.128 78.2 351.848 81.72C348.568 85.24 343.648 87 337.088 87H316.928V2.99999ZM336.848 75C339.008 75 340.648 74.36 341.768 73.08C342.968 71.8 343.568 69.72 343.568 66.84V23.16C343.568 20.28 342.968 18.2 341.768 16.92C340.648 15.64 339.008 15 336.848 15H330.128V75H336.848Z" stroke="#1DB954" strokeWidth="2" mask="url(#path-1-outside-1)"/>
                    <path d="M375.643 2.99999H393.523L407.203 87H394.003L391.603 70.32V70.56H376.603L374.203 87H361.963L375.643 2.99999ZM390.043 59.16L384.163 17.64H383.923L378.163 59.16H390.043Z" stroke="#1DB954" strokeWidth="2" mask="url(#path-1-outside-1)"/>
                    <path d="M418.42 15H404.62V2.99999H445.42V15H431.62V87H418.42V15Z" stroke="#1DB954" strokeWidth="2" mask="url(#path-1-outside-1)"/>
                    <path d="M456.503 2.99999H474.383L488.063 87H474.863L472.463 70.32V70.56H457.463L455.063 87H442.823L456.503 2.99999ZM470.903 59.16L465.023 17.64H464.783L459.023 59.16H470.903Z" stroke="#1DB954" strokeWidth="2" mask="url(#path-1-outside-1)"/>
                </svg>
                <button id="loginBtn" onClick={redirect}>Login</button>
            </div>
            
            {array.map((a, index) => <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" key={index} className="floatingBubble" style={{left: Math.random() * window.innerWidth, zIndex: -1}} alt="spotify logo"/>)}
        </div>
    )
}

export default Login

