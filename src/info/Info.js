import self from "../img/self.png"
import socialFast from "../img/socialFast.png"
import travel from "../img/travelSafe.png"
import liveWord from "../img/liveWord.png"
import game from "../img/game.png"
import tracker from "../img/tracker.png"
import hospitEase from "../img/hospitEase.png"
import IdVerification from "../img/IdVerification.png"
import jainCatering from "../img/jainCatering.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Deepika",
    lastName: "Jain",
    initials: "dj", 
    position: "A Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Pre Final Year Student Of IGDTUW"
        },
        {
            emoji: "📧",
            text: "jaindeepika8383@gmail.com"
        },   
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/deepika_jain_8383/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/deepika8383/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://drive.google.com/file/d/1Z9bJM6q71wIvSZUN_zWrefMLZ7IJFP-h/view?usp=sharing", // Replace with the actual URL to your resume (e.g., a PDF hosted online)
            icon: "fa fa-file",
            label: 'Resume'
        },
        {
            link: "https://www.linkedin.com/in/deepika-jain-521b58259/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/deepika8383",
            icon: "fa fa-twitter",
            label: 'twitter'
        },

    ],
    bio: "👋 Hi, I'm Deepika Jain! \n I'm a final year student at IGDTUW with a passion for blending business and technology. \nFascinated by AI, I explore how it transforms industries and solves real-world problems.🚀 With curiosity and an eye for innovation, I'm ready to turn ideas into impactful solutions.Let's connect and build the future!",
    skills:
        {
            proficientWith: ['javascript','java', 'react', 'git', 'github', 'nodejs', 'express','AWS', 'MongoDb', 'Google Sheet'],
            exposedTo: ['figma', 'python','tailwind','R', 'VS Code', 'Postgress', 'numpy', 'panda','Power BI', 'excel']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'listeing music',
            emoji: '🎧'
        }

    ],
    portfolio: [ 
        {
            title: "Travel Safe: Empowering Women's Journey with Visual Protection",
            live: "https://www.youtube.com/watch?si=_H_rV2QehC5sVg8a&v=Ti_aAJSb9oQ&feature=youtu.be", 
            source: "https://github.com/i-am-SnehaChauhan/travel-safe",
            image: travel
        },
        {
            title: "Social Fast: Unleash Your Social Speed",
            live: "https://www.youtube.com/watch?v=UbQaOaUp0mg",
            source: "https://github.com/Chhavi007/SocialFast",
            image: socialFast
        },
        {
            title: "Live Words: Weave language into every word",
            live: "https://chhavi007.github.io/LiveWords/",
            source: "https://github.com/paytonjewell",
            image: liveWord
        },
        {
            title: "Bingo, Sudoku, Tick-Tac-Toe",
            live: "https://game-by-deepika.vercel.app/",
            source: "https://github.com/Deepika8383/game",
            image: game
        },
        {
            title: "Tracker",
            live: "https://tracker-sigma-three.vercel.app/",
            source: "https://github.com/Deepika8383/tracker",
            image: tracker
        },
        {
            title: "HospitEase",
            live: "https://katalyst-hack-frontend.vercel.app/",
            source: "https://github.com/Deepika8383/katalystHack_frontend",
            image: hospitEase
        },
        {
            title: "Digital Id Verification",
            // live: "https://katalyst-hack-frontend.vercel.app/",
            source: "https://github.com/Deepika8383/Zynga_hackthon",
            image: IdVerification
        },
        {
            title: "Digital Id Verification",
            live: "https://jain-catering-git-main-deepika-jains-projects.vercel.app/",
            source: "https://github.com/Deepika8383/Catering-website",
            image: jainCatering
        },
    ]
}