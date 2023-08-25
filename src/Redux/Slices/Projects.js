import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current_project: 1,
    show_project: false,
    hover_project: 1,
  all: [
    {
        id: 1,
        title: "Google Books",
        links: {
            github: "https://github.com/JoseJ55/google-books", 
            live: "https://google-books-826.herokuapp.com/"
        },
        description: "A program that allows the user to search books and either view them at the google estore or save them for later. A user is able to view a whole veriaty of books they can read, with the option of view and buying any book the user wants the user can keep track of the books they want to own. The program utilizes the Google Books API to gather information of the books searched like the title, author(s), and a breif description. The user is also able to save books to the mongoose database for later which there they can also remove from the database when they don't want it anymore. This application uses react and react hooks to make the webpage and make multiple page for every book searched. It also uses node.js and express to gather the data from the google books api and gives data to the frontend when asked with express. Lastly, the books are saved using mongoose to later view them.",
        tools: ["React.js", "React-hooks", "Express.js", "Node.js", "HTML", "CSS", "Axios", "Mongoose"],
        pcImage: '/images/googleBooks/Google-books-whole.jpg',
        mobileImage: '/images/googleBooks/Google-books-mobile.jpg',
        images: ["/images/googleBooks/googleBooks.png", "/images/googleBooks/googleBooksSearch.png"],
    },
    {
        id: 2,
        title: "Fiteness 101",
        links: {
            github: "https://github.com/JoseJ55/fitness-gym",
            live: "https://fitness101-28.herokuapp.com/"
        },
        description: "A small website using express.js and handlebars engine. The website is mainly used for practice with design and adding suttle animations. Using express to help route and handle the different pages of the website it it fast and easy for user to use. Handlebars was also used it also helps speed up the rendering of the website and maintain the quality of animations and design changes with different screen sizes. The website is also responsive and from 4k to small phone screens it will work with any screen size. Some animations still need to be ploish at certain screen sizes but that is planned for later. A redesign is also in plans for shop page and the trainers page. There are also plans to redesign sections of the website.",
        tools: ["Express.js", "Node.js", "HTML", "CSS", "Javascript"],
        pcImage: '/images/fitnessGym/fitness101-whole.jpg',
        mobileImage: '/images/fitnessGym/fitness101-mobile.jpg',
        images: ["/images/fitnessGym/fitness101Main.png", "/images/fitnessGym/fitness101main2.png", "/images/fitnessGym/fitness101main3.png", "/images/fitnessGym/fitness101main4.png", "/images/fitnessGym/fitness101main5.png"],
    },
    {
        id: 3,
        title: "Car Showcase",
        links: {
            github: "https://github.com/JoseJ55/car-showcase",
            live: 'https://car-showcase-7cba7.web.app/'
        },
        description: "The weather dashboard is an app built using HTML, CSS, and fetch api. A user can search a major city and will recieve weather data on the city they searched for and a simple forcasst for the next five days. The data will be placed in their appropriate location so the user can easily read and look at. The data that will be showen is the tempature, humidity, and wind speed on the top for the current day. The user will also be able to view the tempature, and humidity for the next five days for the city searched. There is also a small search history for the previous 8 cities serached where the user can click on them and show their data for the current day. This application utilizes react and react hooks to create a nice looking webpage. It also uses axios and localstorage to get data from open weather maps api and store that data in the localstorage for later.",
        tools: ["React.js", "React-routes", "React-Hooks", "HTML", "CSS", "Javascript", "Axios", "Localstorage"],
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
        description: "An online bar where you can find any kind of drink from the popular to the most unique. With our simple layout anyone can look up different drinks and get all the details for that drink. A user can search for a specific name of a drink or they can look for ingredients that are in drinks. Whatever the user searchs they will get a drink and find something they would like to try out. Once searched the user will be given information on the drink like ingredients and amounts, and how to make the drink so if someone wants to make it at home they are able to. The webpage uses a lot of api calls to get the data, but all of them are from the same database which allow for consist information and ease of use.",
        tools: ["HTML", "CSS", "Javascript", "React.js", "React Hooks", "cocktaildb API"],
        pcImage: '/images/onlineBar/Online-bar-whole.jpg',
        mobileImage: null,
        images: ["/images/onlineBar/onlineBarMain.png", "/images/onlineBar/onlineBar.png", "/images/onlineBar/onlineBarIngSearch.png", "/images/onlineBar/onlineBarDrinkSearch.png"],
    },
    {
        id: 5,
        title: "Solar Showcase",
        links: {
            github: "https://github.com/JoseJ55/solar-showcase",
            live: 'https://solarsystem-9ca07.web.app/',
        },
        description: "This project is based on the project totorial by JavaScript Mastery on their youtube video 'Build and Deploy a Fully Responsive Modern UI/UX Website in React JS'. As practice I tried to build the project alone and then review the video to see the differences. Between what I did and the person did. Most of the difference were minor, but the totrial help show me another way to align content better and a more structured way of getting images and files when there is a lot of them.",
        tools: ["HTML", "CSS", "Javascript", "React.js", "React Hooks"],
        pcImage: '/images/solarShowcase/Solar-system-whole.jpg',
        mobileImage: '/images/solarShowcase/Solar-system-whole-mobile.jpg',
        images: ["/images/solarShowcase/solar1.png"],
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