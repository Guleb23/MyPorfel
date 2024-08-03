import glavCrypto from '../assets/Images/ProjectImage/CryptoAppImages/glavCrypto.png'
import first from '../assets/Images/ProjectImage/CryptoAppImages/s.png'
import four from '../assets/Images/ProjectImage/CryptoAppImages/fi.png'
import second from '../assets/Images/ProjectImage/CryptoAppImages/t.png'
import three from '../assets/Images/ProjectImage/CryptoAppImages/fo.png'
import glav from '../assets/Images/ProjectImage/CryptoAppImages/f.png'

import main from '../assets/Images/ProjectImage/SpotifyAppImages/main.png';
import spotifyOne from '../assets/Images/ProjectImage/SpotifyAppImages/spotifyOne.png';
import spotifyTwo from '../assets/Images/ProjectImage/SpotifyAppImages/spotifyTwo.png';

import mainEnglish from '../assets/Images/ProjectImage/EnglishAppImages/mainEnglish.png';
import fourEnglish from '../assets/Images/ProjectImage/EnglishAppImages/fourEnglish.png';
import oneEnglish from '../assets/Images/ProjectImage/EnglishAppImages/oneEnglish.png';
import twoEnglish from '../assets/Images/ProjectImage/EnglishAppImages/twoEnglish.png';
import threeEnglish from '../assets/Images/ProjectImage/EnglishAppImages/threeEnglish.png';



import GlavB from '../assets/Images/ProjectImage/Brain/GlavB.png'
import B1 from '../assets/Images/ProjectImage/Brain/B1.png'
import B2 from '../assets/Images/ProjectImage/Brain/B2.png'
import B3 from '../assets/Images/ProjectImage/Brain/B3.png'
import B4 from '../assets/Images/ProjectImage/Brain/B4.png'
import B5 from '../assets/Images/ProjectImage/Brain/B5.png'
import B6 from '../assets/Images/ProjectImage/Brain/B6.png'



import asp from '../assets/Icons/asp.svg';
import javas from '../assets/Icons/javas.svg';
import postgree from '../assets/Icons/postgrees.svg';
import react from '../assets/Icons/react.svg';
import sharp from '../assets/Icons/sharp.svg';
import tailwind from '../assets/Icons/tailwind.svg';

export const aboutMeFirst = `My name is Gleb, and I am a fullstack developer with experience in React and ASP.NET Core. I create user interfaces using React, write server-side code in C# using ASP.NET Core and optimize application performance.`;
export const aboutMeSecond = `I pay special attention to ensuring interaction between the client and server parts of the application. My skills include working with databases (SQL or NoSQL) and experience using the Git version control system. I also understand the basics of testing and have experience writing tests.`;
export const expireance = [
    {
        years: "2023 - now",
        role: "Full Stack Developer",
        company: "Kwork",
        description: `I have been developing front-end and server-side web applications with a custom SPA architecture`,
        technologies: ["Javascript", "React.js", "Next.js", "Postgress", "ASP.NET CORE"],
    }
]





export const worksInProtfel = [
    {
        name: "BrainWave",
        image: GlavB,
        images: [GlavB,
            B1,
            B2,
            B3,
            B4,
            B5,
            B6],
        description: "A fully responsive landing page with a futuristic design using. ReactJs, FramerMotion, Tailwind",
        technologies: ["React", "Tailwind", "FramerMotion"],
        icons: [
            {
                name: javas,
                color: "yellow"
            },
            {
                name: react,
                color: "white"
            },
            {
                name: tailwind,
                color: "white"
            }
        ],
        githubLink: [
            {
                client: "https://github.com/Guleb23/ClientForEnglishApp",
                server: "https://github.com/Guleb23/ApiForENGLISH"
            }
        ]

    },

    {
        name: "App for learning english",
        image: mainEnglish,
        images: [mainEnglish,
            fourEnglish,
            oneEnglish,
            twoEnglish,
            threeEnglish],
        description: "An application with a chat function that I created using webSockes, namely SignalR. There is also a mini-game in which you need to guess the words. All data is taken from asp.net the core api that I wrote myself",
        technologies: ["ASP.NET CORE", "React", "SignalR", "WebSockets"],
        icons: [
            {
                name: asp,
                color: "red"
            },
            {
                name: javas,
                color: "yellow"
            },
            {
                name: postgree,
                color: "blue"
            },
            {
                name: sharp,
                color: "white"
            },
            {
                name: react,
                color: "white"
            }
        ],
        githubLink: [
            {
                client: "https://github.com/Guleb23/ClientForEnglishApp",
                server: "https://github.com/Guleb23/ApiForENGLISH"
            }
        ]

    },
    {
        name: "MusicPlayer",
        image: spotifyTwo,
        images: [main, spotifyOne, spotifyTwo],
        description: "Music listening apps with Spotify integration. The Axios library was used to access the api. The entire application is written in react",
        technologies: ["ASP.NET CORE", "React", "Axios", "OpenAi"],
        icons: [
            {
                name: javas,
                color: "yellow"
            },
            {
                name: react,
                color: "white"
            }
        ],
        githubLink: [
            {
                client: "https://github.com/Guleb23/ClientForSpotify",
                server: "https://github.com/Guleb23/serverForSpotify"
            }
        ]

    },
    {
        name: "NFT application",
        image: glavCrypto,
        images: [first, second, three, four],
        description: "Applications for the sale of NFT. The frontend is written in React, Taiwind. There are registration and authorization functions using Axios and ReactContext. As a server asp.net core api",
        technologies: ["ASP.NET CORE", "React"],
        icons: [
            {
                name: asp,
                color: "red"
            },
            {
                name: javas,
                color: "yellow"
            },
            {
                name: postgree,
                color: "blue"
            },
            {
                name: sharp,
                color: "white"
            },
            {
                name: react,
                color: "white"
            }
        ],
        githubLink: [
            {
                client: "https://github.com/Guleb23/cryptoApp",
                server: "https://github.com/Guleb23/ApiForCrypto"
            }
        ]

    },
]

export const links = [
    {
        title: "About me",
        to: "/"
    },
    {
        title: "Project",
        to: "/projects"
    }
]