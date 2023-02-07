

export interface IProject {
    id:number,
    name: string,
    siteLink: string,
    gitHubLink: string,
    info: string
}

export const projectList: IProject [] = [
    {
        id:0,
        name: "Full-Stack-Flow",
        siteLink:"https://full-stack-flow.netlify.app/",
        gitHubLink:"https://github.com/maghfoor-a/full-stack-flow-fe",
        info:"A site for posting and discussing educational resources"
    },
    {
        id:1,
        name: "Surfergram",
        siteLink:"https://surfergram.netlify.app",
        gitHubLink:"https://github.com/syndercres/surfergram-front",
        info:"A site to assess weather conditions at beaches and other watersports spots"
    },
    {
        id:2,
        name: "breed battle",
        siteLink:"https://breed-battle.netlify.app",
        gitHubLink:"https://github.com/syndercres/dog-breeds-front-end",
        info:"breed battle project"
    },
    {
        id:3,
        name: "Paste Bin",
        siteLink:"https://the-best-paste-bin.netlify.app",
        gitHubLink:"https://github.com/jodadoj/fullstack-pastebin-app",
        info:"An old school paste bin with a commenting system"
    },
    {
        id:4,
        name: "TV Shows",
        siteLink:"https://benevolent-praline-0fd986.netlify.app",
        gitHubLink:"https://github.com/syndercres/group-project-week-six",
        info:"A front end to the OMDB tv shows API"
    }
]