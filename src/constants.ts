import Project, { Stack } from "./components/projects/Project"

export const TRANSITION: string = "transition-all ease-in-out duration-500 dark:text-white"
export const GLOBAL_LAYOUT: string = "w-full h-screen from-white to-zinc-100 dark:from-zinc-800 dark:to-black dark:text-white"
export const GITHUB: string  = "https://github.com/xorizon"
export const MOTIVATION_1: string = "The act of programming is a combination of crital thinking and design, both of which I enjoy. \
 However, the result of a program is a tool that can be distributed for zero cost, and this is what I find most engaging about programming. \
 When I code, I know that I can have an impact on others that is extensible, fair, and borderless. There are not too many professions in the world \
 that have the same effect. When I graduated college, I thought machine learning would be where I could make a strong, benevolent, and wide-reaching impact. \
"

 export const MOTIVATION_2: string = " Although I still feel that artifial intelligence will drive forward some advancement in fields like medicine, \
 my opinion is programs that build on Bitcoin are more engaging, equitable, and resilient. After studying the Bitcoin protocol, hearing the narratives of those that have used Bitcoin as a means to avoid currency debasement, \
 and reading on the history of money from thinkers such as Nick Szabo and Saifedean Ammous, my assessment is Bitcoin will  have the greatest \
 effect on humanity in my generation [combined with the Lightning Network, Fedimint, Nostr, and more protocols yet to come]. This assessment explains the overhaul in my toolset as a programmer over the last year, \
 the motivation behind my projects for the foreseeable future, and the direction I would like to take my career. \
 "

 export const HOME: string = "My name is Rob and I'm a Full Stack Software Engineer. I began my career as a Machine Learning Engineer, but I have transitioned my tech stack \
 to build applications for Bitcoin, the Lightning Network, Fedimint, Nostr, or an exciting company."

 export const ABOUT_2: string = "I graduated from the University of California, Berkeley with a B.A. in Applied Mathematics and a B.A. in Data Science. \
 During my coursework, I took classes related to neural networks, and the thougnt of self-driving cars, tumor detection, etc. motivated me to find a job as a Machine Learning Engineer. However, my first role was not what I would have expected \
, and, after reading deeply into Bitcoin, I realized it was the perfect culmination of everything I was interested in: from game theory and math to programming and entrepreneurship. \
Over the last year, I intentially rebranded myself as an engineer to have a meaningful impact on companies that are building on Bitcoin."

 export const ABOUT_1: string = "Outside of work, my main focus is getting outside and working out. I used to resist weight training, but it is now a mainstay in my routine \
 and I can't imagine life without it. My favorite summer hobby is wake surfing, and, although I am laid back 95% of the time, I am competitive when it comes to video games and rec sports leagues. \
 The only time I watch TV is for the NFL, the UFC, and the San Diego Padres."

 export const PROJECTS: Project[] = [
    { name: "HD Wallet API [July]", desc: "An API to perform non-sensitive wallet computations like computing an address from an XPUB. Used to send Bitcoin to my ColdCard.", stack: [Stack.NODE, Stack.BITCOIN, Stack.TS], link: 'HDWalletAPI'},
    { name: "News Driven by Bitcoin [Janruary]", desc: "A news feed with lightning invoices embedded by QR after a number of searches.", stack: [Stack.NODE, Stack.BITCOIN], link:'lightning_news'},
    { name: "Digikey [July]", desc: "A simple password manager app for iOS and Android. Data is encrypted by the native OS keystore. Dark mode and Spanish language options.", stack: [Stack.REACT_NATIVE, Stack.TAILWIND, Stack.EXPO, Stack.TS], link:'Digikey'},
    { name: "LA Fitness Redesign [June]", desc: "A rework of the frontend for my gym's app.", stack: [Stack.REACT_NATIVE, Stack.TAILWIND, Stack.EXPO, Stack.TS], link:'LAFitness'},
    { name: "Jott [April & May]", desc: "A notes app designed for programmers. Use natural language to generate code for later.", stack: [Stack.REACT, Stack.TAILWIND], link:'Jott'},
    { name: "Jott Mobile [April & May]", desc: "The complimentary mobile app to the project above.", stack: [Stack.REACT_NATIVE, Stack.TAILWIND], link:'JottMobile'},
    { name: "Start Page [February]", desc: "The start page I use complete with links to documentation, index prices, and the weather.", stack: [Stack.NODE, Stack.REACT, Stack.TAILWIND], link:'dashboard'},
    { name: "Volatility Information [February]", desc: "Volatility model predictions and statistics for the US stock indeces. Web scrapped and displayed via a Node backend.", stack: [Stack.NODE, Stack.TAILWIND, Stack.TAILWIND], link:'volatility_trading_console'},
 ]