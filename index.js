// index.js
import generate_langage from './src/generate_langage.js';
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
      username: "NEXOmega"
  },
  languages: [
    generate_langage("Java", "java"),
    generate_langage("JavaScript", "javascript"),
    generate_langage("MongoDB", "mongodb"),
    generate_langage("NodeJs", "Node.js"),
    generate_langage("Git", "git"),
    generate_langage("Linux", "linux"),
    generate_langage("NixOs", "nixos"),
    generate_langage("Godot", "godot-engine")
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