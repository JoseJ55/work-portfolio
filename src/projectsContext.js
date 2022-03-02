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
            title: "Team Profile Generator",
            small: "two",
            links: {
                github: "https://github.com/JoseJ55/Team-Profile-Generator"
            },
            description: "A node app that ask questions and uses the answers to build a simple webpage with the informaton provided. This application is for users who want a simple webpage that show all employees in a group and there information like role, id, and email. Once the user starts the application they will be prompted on terminal questions about there team members. They will start out with the team manager and then add other team memebers one by one. The user is able to enter information for an enginner role and an intern role where they are prompted different question for their need. After all the questions have been answered an html file will be built based on the answers allowing the user to move the file or copy it to another directory. This application utilizes inquirer to get information and node to build the html file for the user.",
            tools: ["Express.js", "Node.js", "HTML", "CSS", "inquirer"],
            exampleImage: "sunset.jpg",
            images: ["/images/teamProfileGenerator/teamProfileGenerator1.png", "/images/teamProfileGenerator/teamProfileGenerator2.png", "/images/teamProfileGenerator/teamProfileGenerator3.png"],
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
                github: "https://github.com/JoseJ55/online-bar"
            },
            description: "An online bar where you can find any kind of drink from the popular to the most unique. With our simple layout anyone can look up different drinks and get all the details for that drink. A user can search for a specific name of a drink or they can look for ingredients that are in drinks. Whatever the user searchs they will get a drink and find something they would like to try out. Once searched the user will be given information on the drink like ingredients and amounts, and how to make the drink so if someone wants to make it at home they are able to. The webpage uses a lot of api calls to get the data, but all of them are from the same database which allow for consist information and ease of use.",
            tools: ["HTML", "CSS", "Javascript", "React.js", "React Hooks", "cocktaildb API"],
            exampleImage: "onlineBarMain.png",
            images: ["/images/onlineBar/onlinebarMain.png", "/images/onlineBar/onlineBar.png", "/images/onlineBar/onlineBarIngSearch.png", "/images/onlineBar/onlineBarDrinkSearch.png"],
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
        }
    ])

    return (
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectsContext.Provider>
    )
}