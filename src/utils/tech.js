import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";

export const technologies = [
    {
     icon: <span style={{color:"#61DAFB", fontSize:"25px"}}><FaReact /></span>,
     name: 'React'
 },
  {
     icon: <span style={{color:"#F0DB4F", fontSize:"25px"}}><SiJavascript /></span>,
     name: 'JavaScript'
 },
 {
      icon: <span style={{color:"#3C873A", fontSize:"25px"}}><FaNodeJs /></span>,
      name: 'Node.js'
 },
  {
     icon: <span style={{color:"#38bdf8", fontSize:"25px"}}><SiTailwindcss /></span>,
     name: 'Tailwind CSS'
  },
  {
     icon:<span style={{color:"#47A248", fontSize:"25px"}}><SiMongodb /></span>,
    name:'MongoDB'
  },
 ];