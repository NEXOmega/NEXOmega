import { generate_langage, generate_badge, generate_drink } from "./src/generator.js";
import async from "async";
import Mustache from "mustache";
import fs from "fs";
const MUSTACHE_MAIN_DIR = "./html/main.mustache";

let DATA = {
  user_info: {
    name: "Valentin",
    age: new Date().getFullYear() - 2002,
    username: "NEXOmega",
  },  
  knowledge: [
    {
      name: "Habitué avec",
      list: [
        generate_langage("Java", "java", "blue", "white"),
        generate_langage("Python", "python", "blue", "white"),
        generate_langage("MongoDB", "mongodb", "blue", "white"),
        generate_langage("Git", "git", "blue", "white"),
    ]},
    {
      name: "J'apprends aussi",
      list: [
        generate_langage("Redis", "redis", "blue", "white"),
        generate_langage("NodeJs", "Node.js", "blue", "white"),
        generate_langage("JavaScript", "javascript", "blue", "white"),
        generate_langage("Godot", "godot-engine", "blue", "white"),
    ]},
    {
      name: "J'ai l'habitude de pratiquer sur",
      list: [
        generate_langage("Docker", "docker", "blue", "white"),
        generate_langage("Linux", "linux", "blue", "white"),
        generate_langage("NixOs", "nixos", "blue", "white"),
        generate_langage("Raspberrry", "Raspberry-Pi", "blue", "white"),
    ]},
    {
      name: "En utilisant",
      list: [
        generate_langage("Trello", "Trello", "blue", "white"),
        generate_langage("VSCode", "visual-studio-code", "blue", "white"),
        generate_langage("IntelliJ Idea", "intellij-idea", "blue", "white"),
    ]},
  ],
  contacts: [
    {
      image: generate_badge("Github", "github", "black", "white"),
      link: "http://github.com/NEXOmega",
    },
    {
      image: generate_badge("Youtube", "youtube", "FF0000", "white"),
      link: "https://www.youtube.com/channel/UC0Ko8lLkMC7j63IE6RLnAjA",
    },
  ],
};

generate_drink().then((result) =>{
  DATA.drink = "result.data.drinks[0].strDrink";
})

function generateReadMe() {

  async.waterfall([
    function generate(callback) {
      generate_drink().then((result) =>{
        DATA.drink = {
          name: result.data.drinks[0].strDrink,
          altName: result.data.drinks[0].strDrinkAlternate,
          category: result.data.drinks[0].strCategory,
          alcoholic: result.data.drinks[0].strAlcoholic,
          image: result.data.drinks[0].strDrinkThumb,
          instructions: result.data.drinks[0].strInstructions,

        }
        callback(null, result);
      })
    },
    function generate_html(data, callback) {
      fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
        if (err) throw err;
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync("README.md", output);
      })
      callback(null, 'done')
    }
  ])
}
generateReadMe();