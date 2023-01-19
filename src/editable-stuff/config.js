// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Gong",
  middleName: "",
  lastName: "Wang",
  message: " 你好我的朋友们！ ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Herney123",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/gongwang12345",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/gongwang12345/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/gongwang123/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/gw.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "关于我",
  imageLink: require("../editable-stuff/gw.jpg"),
  imageSize: 375,
  message:
    "我叫贡旺，我本是京城的一名普通的打工人，看遍了这个城市的繁华和热闹，也体验了这个社会的冷漠与无情。直到那一天，我的生活被彻底打破。。。。。。",
  resume: "/#leadership",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "最近的项目",
  gitHubUsername: "Herney123", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "后续",
  message:
    "今天是肯德基疯狂星期四，先V我50，我跟你讲后续发生的故事。",
  images: [
    { 
      img: "https://pictures-1257239071.cos.ap-nanjing.myqcloud.com/gw/kfc1.jpg",
      label: "",
      paragraph: "kfc 1"
    },
    { 
      img: "https://pictures-1257239071.cos.ap-nanjing.myqcloud.com/gw/kfc2.jpg",
      label: "",
      paragraph: "kfc 2"
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "技能",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "SQL", value: 75 },
    { name: "JavaScript", value: 70 },
    { name: "HTML/CSS", value: 70 },
    { name: "Dart", value: 70 },
    { name: "React", value: 45 },
    { name: "C/C++", value: 35 },
  ],
  softSkills: [
    { name: "目标性", value: 80 },
    { name: "合作能力", value: 90 },
    { name: "积极性", value: 75 },
    { name: "适应性", value: 85 },
    { name: "解决问题能力", value: 75 },
    { name: "同理心", value: 90 },
    { name: "组织能力", value: 70 },
    { name: "创造性", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "和我联系",
  message:
    "这是我的联系方式，欢迎联系我",
  email: "gongwang12345@gmail.com",
  images: [
    {
      img: "https://pictures-1257239071.cos.ap-nanjing.myqcloud.com/gw/zfb.jpg",
      label: "",
      paragraph: ""
    },
    {
      img: "https://pictures-1257239071.cos.ap-nanjing.myqcloud.com/gw/wx.jpg",
      label: "",
      paragraph: ""
    },
  ],
  imageSize: {
    width:"300",
    height:"500"
  }
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
