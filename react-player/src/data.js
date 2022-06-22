import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Santiago",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/1abf44fbb1364ca8435a8bbf4c5750a80947128f-1024x1024.jpg",
            artist: "Psalm Trees, Moods",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=28969",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true
        },
        {
            name: "Embers",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
            artist: "Molly McPhaul, Enluv",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=30135",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Leaf Contour",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
            artist: "Sleepy Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=30130",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Overgrowth",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
            artist: "Kendall Miles",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=30107",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Riverside",
            cover: "https://chillhop.com/wp-content/uploads/2022/02/3f38419a1c54c6c8bdb2a2d5785a1b518f0e5ab6-1024x1024.jpg",
            artist: "SwuM, G Mills",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=30140",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Conflicted",
            cover: "https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
            artist: "Hanz",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=24642",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false
        }
    ];
}

export default chillHop;