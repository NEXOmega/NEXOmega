// index.js
import {generate_langage, generate_badge} from './src/generator.js';
import Mustache from 'mustache';
import fs from "fs";
const MUSTACHE_MAIN_DIR = './html/main.mustache';

/**
  * DATA is the object that contains all
  * the data to be provided to Mustache
  * Notice the "name" and "date" property.
*/
let DATA = {
  user_info: {
      name: "Valentin",
      age: new Date().getFullYear() - 2002,
      username: "NEXOmega"
  },
  languages: [
    generate_langage("Java", "java", "blue", "white"),
    generate_langage("JavaScript", "javascript", "blue", "white"),
    generate_langage("MongoDB", "mongodb", "blue", "white"),
    generate_langage("Redis", "redi", "blue", "white"),
    generate_langage("NodeJs", "Node.js", "blue", "white"),
    generate_langage("Git", "git", "blue", "white"),
    generate_langage("Linux", "linux", "blue", "white"),
    generate_langage("NixOs", "nixos", "blue", "white"),
    generate_langage("Godot", "godot-engine", "blue", "white")
  ],
  contacts: [
    {
      "image": generate_badge("Github", "github", "black", "white"),
      "link": "http://github.com/NEXOmega"
    }, {
      "image": generate_badge("Youtube", "youtube", "FF0000", "white"),
      "link": "https://www.youtube.com/channel/UC0Ko8lLkMC7j63IE6RLnAjA"
    }
  ]
};

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}
generateReadMe();