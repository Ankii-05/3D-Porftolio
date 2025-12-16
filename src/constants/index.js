import Ideas from '../assets/images/ideas.svg'
import Concepts from '../assets/images/concepts.svg'
import Designs from '../assets/images/designs.svg'
import Code from '../assets/images/code.svg'
import Logo1 from '../assets/images/logos/company-logo-1.png'
import Logo2 from '../assets/images/logos/company-logo-2.png'
import Logo3 from '../assets/images/logos/company-logo-3.png'
import Logo4 from '../assets/images/logos/company-logo-4.png'
import Logo5 from '../assets/images/logos/company-logo-5.png'
import Logo6 from '../assets/images/logos/company-logo-6.png'
import Logo7 from '../assets/images/logos/company-logo-7.png'
import Logo8 from '../assets/images/logos/company-logo-8.png'
import Logo9 from '../assets/images/logos/company-logo-9.png'
import Logo10 from '../assets/images/logos/company-logo-10.png'
import Logo11 from '../assets/images/logos/company-logo-11.png'
import seo from '../assets/images/seo.png'
import chat from '../assets/images/chat.png'
import time from '../assets/images/time.png'
import react from '../assets/images/logos/react.png'
import python from '../assets/images/logos/python.svg'
import node from '../assets/images/logos/node.png'
import three from '../assets/images/logos/three.png'
import git from '../assets/images/logos/git.svg'







import exp1 from '../assets/images/exp1.png'
import exp2 from '../assets/images/exp2.png'
import exp3 from '../assets/images/exp3.png'

import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'
import logo3 from '../assets/images/logo3.png'

import client1 from '../assets/images/client1.png'
import client2 from '../assets/images/client2.png'
import client3 from '../assets/images/client3.png'
import client4 from '../assets/images/client4.png'
import client5 from '../assets/images/client5.png'
import client6 from '../assets/images/client6.png'
import insta from '../assets/images/insta.png'
import fb from '../assets/images/fb.png'
import linkedin from '../assets/images/linkedin.png'
import x from '../assets/images/x.png'

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: Ideas },
  { text: "Concepts", imgPath: Concepts },
  { text: "Designs", imgPath: Designs },
  { text: "Code", imgPath: Code },
  { text: "Ideas", imgPath: Ideas },
  { text: "Concepts", imgPath: Concepts },
  { text: "Designs", imgPath: Designs },
  { text: "Code", imgPath: Code },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 15, suffix: "+", label: "Completed Projects" },
  { value: 14, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: Logo1
  },
  {
    imgPath: Logo2
  },
  {
    imgPath: Logo3
  },
  {
    imgPath: Logo4
  },
  {
    imgPath: Logo5
  },
  {
    imgPath: Logo6
  },
  {
    imgPath: Logo7
  },
  {
    imgPath: Logo8
  },
  {
    imgPath: Logo9
  },
  {
    imgPath: Logo10
  },
  {
    imgPath: Logo11
  },
];

const abilities = [
  {
    imgPath: seo,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: chat,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: time,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: '../assets/models/react_logo-transformed.glb',
  },
  {
    name: "Python Developer",
    imgPath: python,
  },
  {
    name: "Backend Developer",
    imgPath: node,
  },
  {
    name: "Interactive Developer",
    imgPath: three,
  },
  {
    name: "Project Manager",
    imgPath: git,
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: '../assets/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: '../assets/models/python-transformed.glb',
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: '../assets/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: '../assets/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath:'../assets/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: exp1,
    logoPath: logo1,
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: exp2,
    logoPath: logo2,
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: exp3,
    logoPath: logo3,
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: logo1,
  },
  {
    name: "logo2",
    imgPath: logo2,
  },
  {
    name: "logo3",
    imgPath: logo3,
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath:client1,
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: client3,
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath:client2,
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath:client5,
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath:client4,
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: client6,
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: insta,
  },
  {
    name: "fb",
    imgPath: fb,
  },
  {
    name: "x",
    imgPath:x,
  },
  {
    name: "linkedin",
    imgPath: linkedin,
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
