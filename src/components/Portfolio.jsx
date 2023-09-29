import ImageSlider from "./ImageSlider";
import './CSS/portfolio.css'
import Sheading from "./Sheading";
import Heading from "./Heading";
const Portfolio = () => {
  const slides = [
    {
      url: "https://cdn-magazine.nutrabay.com/wp-content/uploads/2023/02/strong-bodybuilder-doing-heavy-weight-exercise-back-machine-1.jpg",
      heading: "GymX-Gym Website",
      content: "The gym website, built with HTML, CSS, and JavaScript, offers a dynamic user experience. It features sleek design, intuitive navigation, and interactive elements. Users can explore fitness programs, schedule sessions, and access informative content, making it a comprehensive platform for health enthusiasts.", title: "beach",
      live: "https://manishkoranga1.github.io/Gym-Website/",
      code: "https://github.com/manishkoranga1/Gym-Website",
    },
    {
      url: "https://img.freepik.com/premium-vector/trendy-minimalistic-food-delivery-service-online-food-order-application-banner-design-template_420121-273.jpg",
      heading: "MyMeal.in-Food Delivery Website",
      content: "This food delivery website, crafted with HTML, CSS, and JavaScript, provides a seamless culinary experience. Customers can browse diverse menus, place orders, and enjoy swift, hassle-free delivery, making it the ultimate destination for satisfying cravings.", title: "beach",
      live: "https://manishkoranga1.github.io/Food-Delivery-Site/",
      code: "https://github.com/manishkoranga1/Food-Delivery-Site",
    },
    {
      url: "https://play-lh.googleusercontent.com/tyh3wlFw8NIZ97zfwPoos3YHiD4jF1c9BYEv29Du0Z99OhAQrME40P4gfOhPskSGgQ=w240-h480-rw",
      heading: "NoteKeeper- Note Keeping Website",
      content: "A sleek React-powered website offering seamless note creation and deletion. Streamline your thoughts effortlessly with an intuitive interface. Craft, organize, and delete notes with ease. Elevate your productivity with this user-friendly, fast-paced note-taking platform.", title: "beach",
      live: "https://github.com/manishkoranga1/NoteKeeper",
      code: "https://manishkoranga1.github.io/NoteKeeper/",
    },
    {
      url: "https://static.vecteezy.com/system/resources/thumbnails/013/247/522/small/doodle-checklist-set-to-do-task-list-vector.jpg",
      heading: "To-Do List",
      content: "A dynamic website built with Node.js, MongoDB, and EJS templates. Effortlessly manage tasks with features like creation, editing, and deletion. Streamline your productivity with this robust, database-backed platform for efficient task management.", title: "beach",
      live: "",
      code: "https://github.com/manishkoranga1/To-do-List",
    },
    {
      url: "https://w3layouts.com/wp-content/uploads/2017/06/cool_weather_widget_Free27-06-2017_524662891.jpg",
      heading: "WeatherX-Weather Website",
      content: "A dynamic weather website crafted with HTML, CSS, and JavaScript, powered by OpenWeather API. Get real-time weather updates with precision and ease. Experience beautifully designed visuals and intuitive navigation, ensuring you're always prepared for the elements. Stay informed, stay weather-ready with WeatherX.", title: "beach",
      live: "",
      code: "https://github.com/manishkoranga1/Weather_app",
    },
    {
      url: "https://auditiondetails.com/wp-content/uploads/2019/02/Kaun-Banega-Crorepati-2019.jpg",
      heading: "Who wants to be a Millionaire? Game Site",
      content: "A React-based quiz game, inspired by 'Who Wants to Be a Millionaire?'. Test your knowledge across various categories, with escalating difficulty levels. Engage in an immersive, interactive experience with lifelines and thrilling questions. Challenge yourself and climb to the top.", title: "beach",
      live: "https://manishkoranga1.github.io/Millionaire_game_react/",
      code: "https://github.com/manishkoranga1/Millionaire_game_react",
    },
    {
      url: "https://www.science.org/do/10.1126/science.aac4663/abs/sn-rockpaper.jpg",
      heading: "Rock Paper Scissors",
      content: "A classic Rock-Paper-Scissors game coded in Python. Engage in a timeless battle of wits against the computer. Choose your move wisely, as you aim to outsmart and conquer your virtual opponent. It offers a simple yet addictive gaming experience for Python enthusiasts and casual players alike..", title: "beach",
      live: "",
      code: "https://github.com/manishkoranga1/RockPaperScissors_Python",
    },
    {
      url: "https://user-images.githubusercontent.com/79866006/152241700-6beb6cd4-62e4-4830-84c3-7b67997bae49.jpeg",
      heading: "Hangman(Guess Words)",
      content: "A Python-based rendition of the timeless word-guessing game, Hangman. Test your vocabulary and deduction skills as you try to unveil the hidden word. With every incorrect guess, the gallows await! PyHangman offers a fun and challenging linguistic puzzle experience for Python enthusiasts and wordplay aficionados.", title: "beach",
      live: "",
      code: "https://github.com/manishkoranga1/Hangman_py",
    },
    {
      url: "https://img.freepik.com/premium-vector/gaming-zone-video-game-neon-style_518759-160.jpg",
      heading: "Gaming Zone",
      content: "A compact web arcade featuring three addictive games created with HTML, CSS, and JavaScript. Dive into endless fun with classics like Simon Game, and Dice Challenge. Enjoy seamless gameplay, intuitive controls, and vibrant visuals. It offers a quick dose of entertainment for casual gamers of all ages.", title: "beach",
      live: "https://manishkoranga1.github.io/Gaming-Zone/",
      code: "https://github.com/manishkoranga1/Gaming-Zone",
    },

  ];
  const containerStyles = {
    width: "600px",
    height: "450px",
    margin: "auto auto",
  };
  return (
    <div className="Portfolio" id="Portfolio">
      <Sheading
        name="View My Work"
      />
      <Heading
        name1="My"
        name2="Portfolio"
      />

      <div className="Xyz">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Portfolio;