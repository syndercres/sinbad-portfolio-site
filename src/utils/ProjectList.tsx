// import FSFphoto1 from "../images/FSF-photo1.png";
// import FSFphoto2 from "../images/FSF-photo2.png";
import TV from "../images/clipart55134.png";
import PasteIcon from "../images/clipart4163671.png";
import FSFIcon from "../images/education-png-6.png";
import bones from "../images/bones.png";
import surfIcon from "../images/Untitled-68 01 Artboard 1.png";
import skate from "../images/skate.png";
import photo1 from "../images/IMG_0042.jpeg";
import photo2 from "../images/IMG_0172.jpeg";
import photo3 from "../images/IMG_4319.jpeg";
import photo4 from "../images/2f8dc01d-668d-447b-8583-665025d3a3ce.jpeg";
import photo5 from "../images/E318A100-5FEA-4763-842A-81293E325B34.jpeg";
import photo6 from "../images/IMG_2774.jpeg";

export interface IProject {
  id: number;
  name: string;
  siteLink: string;
  gitHubLink: string;
  info: string;
}

export interface Iphoto {
  id: number;
  photo1: string;
  photo2: string;
  photo3: string;
}

export const funPhotos: string[] = [
  skate,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
];

export const photoList: Iphoto[] = [
  {
    id: 0,
    photo1: FSFIcon,
    photo2: "",
    photo3: "",
  },
  {
    id: 1,
    photo1: surfIcon,
    photo2: "",
    photo3: "",
  },
  {
    id: 2,
    photo1: bones,
    photo2: "",
    photo3: "",
  },
  {
    id: 3,
    photo1: PasteIcon,
    photo2: "",
    photo3: "",
  },
  {
    id: 4,
    photo1: TV,
    photo2: "",
    photo3: "",
  },
];

export const projectList: IProject[] = [
  {
    id: 0,
    name: "Full-Stack-Flow",
    siteLink: "https://full-stack-flow.netlify.app/",
    gitHubLink: "https://github.com/maghfoor-a/full-stack-flow-fe",
    info: "A site for posting and discussing educational resources. This full stack app uses a database to store resources and comments",
  },
  {
    id: 1,
    name: "Surfergram",
    siteLink: "https://surfergram.netlify.app",
    gitHubLink: "https://github.com/syndercres/surfergram-front",
    info: "A site to assess weather conditions at beaches and other watersports spots. It is a full stack project that allows users to edit, rate and comment on spots in real time.",
  },
  {
    id: 2,
    name: "breed battle",
    siteLink: "https://breed-battle.netlify.app",
    gitHubLink: "https://github.com/syndercres/dog-breeds-front-end",
    info: "This was a full-stack project using a dog photo API and a database to let users vote on dog breeds, and view a leaderboard of votes",
  },
  {
    id: 3,
    name: "Paste Bin",
    siteLink: "https://the-best-paste-bin.netlify.app",
    gitHubLink: "https://github.com/jodadoj/fullstack-pastebin-app",
    info: "An old school paste bin with a commenting system. This was my first time building a full stack app from scratch, the goal was to store pastes and user comments in a database and have the front end fetch them when needed",
  },
  {
    id: 4,
    name: "TV Shows",
    siteLink: "https://benevolent-praline-0fd986.netlify.app",
    gitHubLink: "https://github.com/syndercres/group-project-week-six",
    info: "A front end to the OMDB tv shows API. This was my first project building a front end/ using an API, the goal was to make a website where users can browse TV shows and see information about episodes and more. ",
  },
];
