import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";



const config = defineConfig({
    
    projectId: "zwvbrdtn",

    dataset: "production",

    title: "my portfolio website",

    apiVersion: "2023-09-27",

    basePath: "/admin",

    plugins: [deskTool()],

    schema: {types: schemas},


})

export default config;