import { update_progress } from "../../../Redux/Slices/Cursor";

export default function HandleScrollTo(dispatch, sectionId) {
    const section = document.getElementById(sectionId);
    
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });

        setTimeout(() => {
            dispatch(update_progress());
        },  500);
    }
};