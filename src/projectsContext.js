import React, { createContext, useState } from "react";

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "Google React Books",
            small: "one",
            links: {
                github: "https://github.com/JoseJ55/google-books", 
                live: "https://google-books-826.herokuapp.com/"
            },
            description: "A program that allows the user to search books and either view them at the google estore or save them for later. A user is able to view a whole veriaty of books they can read, with the option of view and buying any book the user wants the user can keep track of the books they want to own. The program utilizes the Google Books API to gather information of the books searched like the title, author(s), and a breif description. The user is also able to save books to the mongoose database for later which there they can also remove from the database when they don't want it anymore. This application uses react and react hooks to make the webpage and make multiple page for every book searched. It also uses node.js and express to gather the data from the google books api and gives data to the frontend when asked with express. Lastly, the books are saved using mongoose to later view them.",
            tools: ["React.js", "React-hooks", "Express.js", "Node.js", "HTML", "CSS", "Axios", "Mongoose"],
            exampleImage: "googleBooksHome.png", // Current doesn't do anything.
            images: ["/images/googleBooks/googleBooks.png", "/images/googleBooks/googleBooks2.png"],
            video: "/videos/googleBooks/googleBooksSearchShowcase.mp4",
        },
        {
            id: 2,
            title: "Fiteness 101",
            small: "two",
            links: {
                github: "https://github.com/JoseJ55/fitness-gym",
                live: "https://fitness101-28.herokuapp.com/"
            },
            description: "A small website using express.js and handlebars engine. The website is mainly used for practice with design and adding suttle animations. Using express to help route and handle the different pages of the website it it fast and easy for user to use. Handlebars was also used it also helps speed up the rendering of the website and maintain the quality of animations and design changes with different screen sizes. The website is also responsive and from 4k to small phone screens it will work with any screen size. Some animations still need to be ploish at certain screen sizes but that is planned for later. A redesign is also in plans for shop page and the trainers page. There are also plans to redesign sections of the website.",
            tools: ["Express.js", "Node.js", "HTML", "CSS", "Javascript"],
            exampleImage: "sunset.jpg",
            images: ["/images/fitnessGym/fitness101Main.png", "/images/fitnessGym/fitness101Main2.png", "/images/fitnessGym/fitness101Main3.png", "/images/fitnessGym/fitness101Main4.png"],
            video: "/videos/teamProfileGenerator/teamProfileGenShowcase.mp4",
        },
        {
            id: 3,
            title: "Weather Dashboard",
            small: "three",
            links: {
                github: "https://github.com/JoseJ55/Weather-bashboard", 
                live: "https://weather-dash-015.herokuapp.com/"
            },
            description: "The weather dashboard is an app built using HTML, CSS, and fetch api. A user can search a major city and will recieve weather data on the city they searched for and a simple forcasst for the next five days. The data will be placed in their appropriate location so the user can easily read and look at. The data that will be showen is the tempature, humidity, and wind speed on the top for the current day. The user will also be able to view the tempature, and humidity for the next five days for the city searched. There is also a small search history for the previous 8 cities serached where the user can click on them and show their data for the current day. This application utilizes react and react hooks to create a nice looking webpage. It also uses axios and localstorage to get data from open weather maps api and store that data in the localstorage for later.",
            tools: ["React.js", "React-routes", "React-Hooks", "HTML", "CSS", "Javascript", "Axios", "Localstorage"],
            exampleImage: "sunset.jpg", 
            images: ["/images/weatherDashboard/weatherDashboard.png"],
            video: "/videos/weatherDashboard/weatherDashboardShowcase.mp4",
        },
        {
            id: 4,
            title: "Online Bar",
            small: "four",
            links: {
                github: "https://github.com/JoseJ55/online-bar",
                live: "https://online-bar-dc789.web.app/"
            },
            description: "An online bar where you can find any kind of drink from the popular to the most unique. With our simple layout anyone can look up different drinks and get all the details for that drink. A user can search for a specific name of a drink or they can look for ingredients that are in drinks. Whatever the user searchs they will get a drink and find something they would like to try out. Once searched the user will be given information on the drink like ingredients and amounts, and how to make the drink so if someone wants to make it at home they are able to. The webpage uses a lot of api calls to get the data, but all of them are from the same database which allow for consist information and ease of use.",
            tools: ["HTML", "CSS", "Javascript", "React.js", "React Hooks", "cocktaildb API"],
            exampleImage: "onlineBarMain.png",
            images: ["/images/onlineBar/onlineBarMain.png", "/images/onlineBar/onlineBar.png", "/images/onlineBar/onlineBarIngSearch.png", "/images/onlineBar/onlineBarDrinkSearch.png"],
        },
        {
            id: 5,
            title: "UI Project",
            small: "five",
            links: {
                github: "https://github.com/JoseJ55/ui-project"
            },
            description: "This project is based on the project totorial by JavaScript Mastery on their youtube video 'Build and Deploy a Fully Responsive Modern UI/UX Website in React JS'. As practice I tried to build the project alone and then review the video to see the differences. Between what I did and the person did. Most of the difference were minor, but the totrial help show me another way to align content better and a more structured way of getting images and files when there is a lot of them.",
            tools: ["HTML", "CSS", "Javascript", "React.js", "React Hooks"],
            exampleImage: "uiProject.png",
            images: ["/images/uiProject/uiProject.png", "/images/uiProject/uiProject2.png", "/images/uiProject/uiProject3.png", "/images/uiProject/uiProject4.png"],
        },
        {
            id: 6,
            title: "Solar System Showcase",
            small: "six",
            links: {
                github: "https://github.com/JoseJ55/solar-showcase",
                live: "https://solarsystem-9ca07.web.app/"
            },
            description: "A small website showing all the planets in the our solar system and other entites that are within our system. Using react to make component and diffrent pages with react hooks. The home page show what the website is and why it was made for, while all the other pages give information on the planet a user has click on for example earth. Each page gives a small fact and a small summary of the planet or information on the planet. The information is currently mainly form https://en.wikipedia.org/wiki/Main_Page. There is a small bit of information from https://www.nasa.gov/ and news articles from the google news api.",
            tools: ["HTML", "CSS", "Javascript", "React.js", "React", "Axios", "Google News API"],
            exampleImage: "solarShowcaseMain.png",
            images: ["/images/solarShowcase/solarShowcaseMain.png", "/images/solarShowcase/solarShowcaseNav.png", "/images/solarShowcase/solarShowcaseFact.png", "/images/solarShowcase/solarShowcaseAbout.png"]
        }
    ])

    return (
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectsContext.Provider>
    )
}