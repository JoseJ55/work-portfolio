import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current_project: 1,
    show_project: false,
    hover_project: 1,
  all: [
    {
        id: 1,
        title: "Fiteness 101",
        links: {
            github: "https://github.com/JoseJ55/fitness-gym",
            live: "https://fitness101-28.herokuapp.com/"
        },
        description: "This small website employs Express.js in conjunction with the Handlebars engine. Primarily, it serves as a platform for honing design skills and implementing subtle animations. The use of Express streamlines page routing and enhances user accessibility. Handlebars plays a pivotal role by expediting website rendering and preserving animation and design quality across various screen dimensions. The website is fully responsive, accommodating screens ranging from 4K displays to compact mobile phones. While some animations may require refinement for specific screen sizes, these improvements are slated for future updates. Furthermore, plans are in motion to revamp the shop and trainers' pages, with additional considerations for redesigning specific sections of the website.",
        tools: ["Express.js", "Node.js", "HTML", "CSS", "Javascript"],
        coverImage: '/images/fitnessGym/fitness101-all-devices.png',
        pcImage: '/images/fitnessGym/fitness101-whole.jpg',
        mobileImage: '/images/fitnessGym/fitness101-mobile.jpg',
        images: ["/images/fitnessGym/fitness101Main.png", "/images/fitnessGym/fitness101main2.png", "/images/fitnessGym/fitness101main3.png", "/images/fitnessGym/fitness101main4.png", "/images/fitnessGym/fitness101main5.png"],
        design: 'Using Figma to help design and test the UI on how it will look. The basic website pages where also deign this way event he routes. The design is a simple style with not a lot of moving parts so user experience in not impeded.',
        website: 'With tools like Heroku and firebase to host and manage future data, the website is able to run smoothly and have unique interactions. Also using the Handlebars engine to render server side the website will stay up to date and can be easily updated.'
    },
    {
        id: 2,
        title: "Solar Showcase",
        links: {
            github: "https://github.com/JoseJ55/solar-showcase",
            live: 'https://solarsystem-9ca07.web.app/',
        },
        description: "Explore the cosmos like never before with our captivating React-based website, enriched with JavaScript and Three.js. Immerse yourself in a celestial journey as you delve into the mysteries of our local solar system. While our pages offer a traditional web layout for easy navigation, you'll encounter occasional 3D models that vividly bring astronomical wonders to life. Our site boasts seamless animations that gracefully enhance the user experience, ensuring that learning about our celestial neighbors is not only informative but visually captivating.",
        tools: ["HTML", "CSS", "Javascript", "React.js", "React Hooks", "Three.js"],
        coverImage: '/images/solarShowcase/solar-system-all-devices.png',
        pcImage: '/images/solarShowcase/Solar-system-whole.jpg',
        mobileImage: '/images/solarShowcase/Solar-system-whole-mobile.jpg',
        images: ["/images/solarShowcase/solar1.png"],
    },
    {
        id: 3,
        title: "Car Showcase",
        links: {
            github: "https://github.com/JoseJ55/car-showcase",
            live: 'https://car-showcase-7cba7.web.app/'
        },
        description: "A car showcase website with a dynamic fusion of React, JavaScript, and Three.js, delivering an immersive experience for automotive enthusiasts. Through the power of Three.js, we render stunning 3D models of various car types, allowing you to explore them from every angle. Our intuitive React-based UI ensures effortless navigation and customization, enabling you to tailor each car to your preferences. Whether you're an admirer of sleek sports cars or rugged off-roaders, our platform offers a captivating and interactive way to appreciate and personalize these vehicles.",
        tools: ["React.js", "React-routes", "React-Hooks", "HTML", "CSS", "Javascript", "Three.js"],
        coverImage: '/images/carShowcase/car-showcase-all-devices.png',
        pcImage: '/images/carShowcase/car-showcase-1.png',
        mobileImage: null,
        images: ["/images/carShowcase/car-showcase-1.png"],
    },
    {
        id: 4,
        title: "Online Bar",
        links: {
            github: "https://github.com/JoseJ55/online-bar",
            live: "https://online-bar-dc789.web.app/"
        },
        description: "Welcome to our online bar, where an extensive range of drinks awaits, from the classics to the most exotic concoctions. With our user-friendly layout, anyone can effortlessly explore a diverse array of beverages, complete with detailed information. Whether you're in search of a specific drink by name or want to discover drinks based on available ingredients, our platform caters to your preferences. No matter what you seek, you're bound to stumble upon a delightful new libation to savor. Upon conducting a search, users are presented with comprehensive drink profiles, featuring ingredient lists, quantities, and step-by-step preparation instructions. This empowers those interested in crafting these libations at home. Our website seamlessly interfaces with various APIs, all drawing from a unified database, ensuring consistent information and a hassle-free experience for our users.",
        tools: ["HTML", "CSS", "Javascript", "React.js", "React Hooks", "cocktaildb API"],
        coverImage: '/images/onlineBar/online-bar-all-devices.png',
        pcImage: '/images/onlineBar/Online-bar-whole.jpg',
        mobileImage: null,
        images: ["/images/onlineBar/onlineBarMain.png", "/images/onlineBar/onlineBar.png", "/images/onlineBar/onlineBarIngSearch.png", "/images/onlineBar/onlineBarDrinkSearch.png"],
    },
    {
        id: 5,
        title: "Google Books",
        links: {
            github: "https://github.com/JoseJ55/google-books", 
            live: "https://google-books-826.herokuapp.com/"
        },
        description: "This program enables users to effortlessly explore, save, and manage their book preferences. Users can search and access books from Google eStore or save them for later. With a vast library at their fingertips, users can purchase any book they like while curating a must-read list. The program uses the Google Books API to fetch book details like titles, authors, and brief descriptions. Users can also save books to MongoDB for future reference and removal. The application uses React, React Hooks, Node.js, and Express to create dynamic web pages, each dedicated to a searched book. MongoDB, via Mongoose, simplifies book storage and retrieval.",
        tools: ["React.js", "React-hooks", "Express.js", "Node.js", "HTML", "CSS", "Axios", "Mongoose"],
        coverImage: '/images/googleBooks/google-books-all-devices.png',
        pcImage: '/images/googleBooks/Google-books-whole.jpg',
        mobileImage: '/images/googleBooks/Google-books-mobile.jpg',
        images: ["/images/googleBooks/googleBooks.png", "/images/googleBooks/googleBooksSearch.png"],
    }
  ]
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    set_current_project: (state, action) => {
        state.current_project = action.payload;
    },
    set_hover_project: (state, action) => {
        state.hover_project = action.payload;
    },
    set_show_project: (state, action) => {
        state.show_project = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { set_current_project, set_hover_project, set_show_project } = projectsSlice.actions;

export default projectsSlice.reducer;