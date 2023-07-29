export default interface Project {
    name: string,
    desc: string,
    stack: Stack[],
    link: string,
}

export enum Stack {
    REACT,
    REACT_NATIVE,
    EXPO,
    TS,
    TAILWIND,
    NODE,
    BITCOIN,
    TAURI,
}