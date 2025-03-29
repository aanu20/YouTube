
import HomePage from './componenets/Homepage/HomePage';
import TopBar from './componenets/TopNavBar/TopBar'
import SelectedVideoGrid from './componenets/DisplayVideoPage/SelectedVideoGrid';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SearchResults from './componenets/SearchVideoList/SearchResults';
import React from "react";
import HistoryPage from './componenets/History/HistoryPage';

function App() {
  const videos = [
    { title: "React Full Course for free ⚛️ (2024)", channel: "Bro Code", views: "1.5M views 1 year ago", id: 1, video: "https://www.youtube.com/embed/CgkZ7MvWUAA" },
    { title: "JavaScript tutorial course in 5 Hours with projects", channel: "Error makes Clever", views: "1M views 1 year ago", id: 2, video: "https://www.youtube.com/embed/poo0BXryffI" },
    { title: "Placement and Internship Strategy :)", channel: "Apna College", views: "200k views 5 days ago", id: 3, video: "https://www.youtube.com/embed/7hnYbygBNao" },
    { title: "Java 8 Full Course in 9 hours ⚛️ (2024)", channel: "freeCodecamp", views: "2.5M views 5 years ago", id: 4, video: "https://www.youtube.com/embed/grEKMHGYyns" },
    { title: "How To Code So Good They Can't Ignore You", channel: "bigboxSWE", views: "50k views 2 days ago", id: 5, video: "https://www.youtube.com/embed/_Idg_9IFxwY" },
    { title: "How I Code Profitable Apps SOLO", channel: "Edmund Yong", views: "570k views 3 weeks ago", id: 6, video: "https://www.youtube.com/embed/CNsvts6pVzo" }
  ];

  const Shorts = [
    { ShortsURL: "https://youtube.com/embed/Po4FCqAwIKU", id: 1, title: "How Brain Rot Destroys student's life", views: "2.3M views" },
    { ShortsURL: "https://youtube.com/embed/Jayb9gf62kU", id: 2, title: "Who are YOU", views: "21M views" },
    { ShortsURL: "https://youtube.com/embed/vZ_PdnlZ36E", id: 3, title: "The Crown vs Real", views: "11M views" },
    { ShortsURL: "https://youtube.com/embed/w6pP8QO8Nk0", id: 4, title: "Garlic bread / Sarımsaklı Ekmek", views: "15M views" }
  ];

  const searchvideolist = [
    { language: "java",
      videos: [
        {id:10,video: "https://www.youtube.com/embed/grEKMHGYyns",channel: "Programming with Mosh",views: "11M 5 Months ago",title: "Java Full Course for Beginners",},
        { id:11,video: "https://www.youtube.com/embed/MzufWzltr3g",channel: "Curious Freaks",views: "215k 2 Years ago",title: "Master Java in 30 Days🔥How to become JAVA DEVELOPER in 30DAYS - The Fast Track to Learning Java🛑😳", },
      ],
    },
    {language: "python",
      videos: [
        { id:12,video: "https://www.youtube.com/embed/ix9cRaBkVe0",channel: "Bro code",views: "1M 5 Months ago",title: "Python Full Course for Beginners",},
        { id:13,video: "https://www.youtube.com/embed/x7X9w_GIm1s",channel: "Programming with Mosh",views: "2.7M 2 Years ago",title: "Python in 100 seconds",},
        {   id:14,video: "https://www.youtube.com/embed/UrsmFxEIp5k",channel: "Code with Harry",views: "5.4M 7 Months ago",title: "Python Tutorial For Beginners in Hindi | Complete Python Course 🔥",},
        { id:15,video: "https://www.youtube.com/embed/mRMmlo_Uqcs",channel: "NetworkChunk",views: "2.3M 5 Years ago",title: "you need to learn Python RIGHT NOW!! // EP 1",},
      ],
    },
  ];
  

  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage videos={videos} Shorts={Shorts} />} />
        <Route path="/selected-video/:videoid" element={<SelectedVideoGrid videos={videos} Shorts={Shorts} searchvideolist={searchvideolist} />} />
        <Route path="/search" element={<SearchResults  searchvideolist={searchvideolist}/>}/>
        <Route path="/history" element={<HistoryPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
