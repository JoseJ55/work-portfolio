import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current_project: 1,
    show_project: false,
    hover_project: 1,
  all: [
    {
        id: 1,
        title: "FOMO Social",
        links: {
            github: null,
            live: "https://play.google.com/store/apps/details?id=com.fomo.FOMOAPP&pcampaignid=web_share"
        },
        description: "At FOMO Social, a dynamic startup dedicated to fostering social connections, I played a pivotal role in the development and optimization of our event-promoting app. Our mission was to leverage cutting-edge technology and social media tools to create a vibrant platform that encourages users to engage more socially. Working alongside a talented team of developers, we utilized a variety of tools and technologies, including React Native and Expo for front-end development, and Python and PostgreSQL for backend development. Our tech stack also included Heroku, Docker, Jest, and Digital Ocean, ensuring a robust and scalable infrastructure. Through these collaborative efforts, we successfully built an app that not only meets but exceeds our users' expectations for social interaction.",
        tools: ["React", "React Native", "Expo", "Python", "Javascript", "Docker", "Heroku", "Redux"],
        coverImage: '/images/fitnessGym/fitness101-all-devices.png',
        pcImage: '/images/fitnessGym/fitness101-whole.jpg',
        mobileImage: '/images/fitnessGym/fitness101-mobile.jpg',
        images: ["/images/Fomo/fomoMain.jpg"],
        design: 'My contributions extended beyond the technical aspects, focusing on enhancing the mobile app\'s UI and UX. I was instrumental in redesigning the app to ensure it was both aesthetically pleasing and user-friendly. I conducted thorough testing and optimization of various screens, focusing on render speed and data usage efficiency. A notable achievement was the complete overhaul of the frontend endpoints and the rebuild of Redux functions, significantly improving the app\'s performance and user experience. Additionally, I played a key role in developing backend endpoints to facilitate seamless client interactions.',
        website: 'I played a key role in backend development, integrating Stripe API for secure transactions and implementing security measures to safeguard user data. My contributions ensured a secure and trustworthy platform, while also aiding in the development of new features to keep our app innovative. I managed testing environments with Expo, identifying and resolving issues proactively. Utilizing Docker for client-side testing improved app performance and user experience, ensuring our app was both functional and optimized.'
    },
    {
        id: 2,
        title: "Fiteness 101",
        links: {
            github: "https://github.com/JoseJ55/fitness-website",
            live: "https://fitness101-bbd78.web.app/"
        },
        description: "Powered by Express.js and the Handlebars engine, this sleek website is a testament to refined design and subtle animations. Express.js seamlessly handles page routing, ensuring smooth user navigation, while Handlebars accelerates website rendering, maintaining design integrity across diverse screen sizes. Fully responsive, it adapts effortlessly from expansive 4K displays to the compact screens of mobile devices. \n Although some animations may undergo fine-tuning for optimal performance on certain screen dimensions, rest assured, these enhancements are already on the horizon. Exciting plans are underway for a revitalized shopping experience and revamped trainer pages, alongside meticulous redesigns of select sections throughout the site.",
        tools: ["Express.js", "Node.js", "HTML", "CSS", "Javascript"],
        coverImage: '/images/fitnessGym/fitness101-all-devices.png',
        pcImage: '/images/fitnessGym/fitness101-whole.jpg',
        mobileImage: '/images/fitnessGym/fitness101-mobile.jpg',
        images: ["/images/fitnessGym/fitness-101-main.png"],
        design: 'Designed and tested using Figma, this website boasts a streamlined UI with straightforward routes. Its minimalist design prioritizes user experience without sacrificing style, ensuring seamless navigation and interaction.',
        website: 'Employing Heroku and Firebase for hosting and data management, this website delivers seamless performance and offers distinctive interactions. Leveraging the Handlebars engine for server-side rendering ensures the site remains current and facilitates effortless updates.'
    },
    {
        id: 3,
        title: "Thirsty",
        links: {
            github: "https://github.com/JoseJ55/online-bar",
            live: "https://online-bar-dc789.web.app/"
        },
        description: "Welcome to Thirsty, your go-to online destination for our bar's offerings. Our minimalistic website provides easy access to all resources, including our menu and information on our online ordering app for convenient and quick orders.",
        tools: ["HTML", "CSS", "Javascript", "React.js", "React Hooks", "cocktaildb API"],
        coverImage: '/images/onlineBar/online-bar-all-devices.png',
        pcImage: '/images/onlineBar/Online-bar-whole.jpg',
        mobileImage: null,
        images: ["/images/onlineBar/thirsty-main.png"],
        design: 'Crafted with Figma, our website features clean and straightforward pages. We\'ve meticulously designed web routes and backend access paths for seamless transitions and quick navigation.',
        website: 'We\'ve harnessed the power of React to construct and manage various components, creating a sleek and minimalistic website. Hosting is handled seamlessly through Firebase, ensuring reliability and efficiency. Additionally, we\'ve integrated the CocktailDB API to provide users with comprehensive information about the drinks they\'re exploring.'
    },
    {
        id: 4,
        title: "Car Showcase",
        links: {
            github: "https://github.com/JoseJ55/car-showcase",
            live: 'https://car-showcase-7cba7.web.app/'
        },
        description: "Experience the ultimate car showcase website, combining React, JavaScript, and Three.js for an immersive journey into the world of automobiles. With Three.js, explore stunning 3D models of diverse car types from every angle. Our intuitive React-based UI guarantees seamless navigation and customization, empowering you to personalize each car to your liking. Whether you're a fan of sleek sports cars or rugged off-roaders, our platform provides a captivating and interactive way to admire and customize these vehicles.",
        tools: ["React.js", "React-routes", "React-Hooks", "HTML", "CSS", "Javascript", "Three.js"],
        coverImage: '/images/carShowcase/car-showcase-all-devices.png',
        pcImage: '/images/carShowcase/car-showcase-1.png',
        mobileImage: null,
        images: ["/images/carShowcase/car-showcase-1.png"],
        design: 'Crafted with Three.js, our design offers versatile tools to manipulate the 3D space seamlessly through a user-friendly interface.',
        website: 'We rely on Firebase Hosting for efficient website management. Our site is powered by the Three.js engine, ensuring optimized code for swift interactions and seamless updates to the 3D environment.'
    },
    {
        id: 5,
        title: "Solar Showcase",
        links: {
            github: "https://github.com/JoseJ55/solar-showcase",
            live: 'https://solarsystem-9ca07.web.app/',
        },
        description: "Embark on an unparalleled cosmic adventure through our mesmerizing React-powered website, enhanced with JavaScript and Three.js. Explore the depths of our solar system's mysteries with immersive 3D models, seamlessly integrated into our traditional web layout for effortless navigation. Engage with stunning animations that elevate your journey, making learning about the cosmos both informative and visually captivating.",
        tools: ["HTML", "CSS", "Javascript", "React.js", "React Hooks", "Three.js"],
        coverImage: '/images/solarShowcase/solar-system-all-devices.png',
        pcImage: '/images/solarShowcase/Solar-system-whole.jpg',
        mobileImage: '/images/solarShowcase/Solar-system-whole-mobile.jpg',
        images: ["/images/solarShowcase/solar1.png"],
        design: 'Crafted with Three.js at its core, our design philosophy revolves around integrating simple models within a dynamic 3D environment, offering diverse spaces to showcase captivating visuals.',
        website: 'Utilizing React.js, we seamlessly construct components and strategically position diverse UI elements with precision. Our site is powered by Firebase Hosting, ensuring swift and dependable management for an optimal user experience.'
    },
    {
        id: 6,
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