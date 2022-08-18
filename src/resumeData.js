import bot from "./videos/bot.mp4";
import jobify from "./videos/jobify.mp4";
import tictactoe from "./videos/tictactoe-preview.mp4";

let resumeData = {
  imagebaseurl: "https://SevgiSr.github.io/",
  name: "Sevgi Sarikaya",
  role: "Developer",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/sevgi-sar%C4%B1kaya-937227226/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "http://github.com/SevgiSr",
      className: "fa fa-github",
    },
    {
      name: "skype",
      url: "https://join.skype.com/invite/OAseJNShCIBK",
      className: "fa fa-skype",
    },
  ],
  aboutme:
    "I am computer programming student but I'm mainly self-thought developer, I have passion with doing new original projects.",
  address: "Turkey(Not for long)",
  website: "https://SevgiSr.github.io",
  education: [
    {
      UniversityName: "Georgian College Berrie, Ontario",
      specialization: "Computer Programming",
      MonthOfPassing: "Still Studying",
      YearOfPassing: "2022",
    },
  ],
  work: [
    /* {
      CompanyName: "Some Company",
      specialization: "Some specialization",
      MonthOfLeaving: "Jan",
      YearOfLeaving: "2018",
      Achievements: "Some Achievements",
    },
    {
      CompanyName: "Some Company",
      specialization: "Some specialization",
      MonthOfLeaving: "Jan",
      YearOfLeaving: "2018",
      Achievements: "Some Achievements",
    }, */
  ],
  skillsDescription: "Your skills here",
  skills: [
    {
      skillname: "Machine Learning",
    },
    {
      skillname: "Web Development",
    },
    {
      skillname: "Blockchain",
    },
  ],
  portfolio: [
    {
      name: "Face Swap Bot",
      description: "ML Discord Bot",
      url:
        "https://ipfs.io/ipfs/QmXhougnUjWCLW8FM8YfYq2CsqpkuEghP8ZNVFQMbNpRoM/home.html",
      src: bot,
    },
    {
      name: "Website",
      description: "Job Tracker",
      url: "https://sevgi-jobify-app.herokuapp.com/landing",
      src: jobify,
    },
    {
      name: "Tic-Tac-Toe AI",
      description: "AI that plays Tic-Tac-Toe against humans",
      url: "https://github.com/SevgiSr/tictactoe",
      src: tictactoe,
    },
  ],
  certificates: [
    {
      name: "Harvard",
      imgurl: "../../images/CS50x.png",
      srcurl:
        "https://certificates.cs50.io/7827bf9a-ee2b-459b-8a31-6fa13dd722b0.pdf?size=letter",
      description: "Computer Science",
    },
    {
      name: "Harvard",
      imgurl: "../../images/CS50AI.png",
      srcurl:
        "https://certificates.cs50.io/601ef854-7ba7-4866-9c43-296fe328d339.pdf?size=letter",

      description: "Artificial Intelligence",
    },
    {
      name: "Bootcamp",
      imgurl: "../../images/Udemy-1.png",
      srcurl:
        "https://www.udemy.com/certificate/UC-3600a8ac-343a-42a7-9d09-f070893e8c08/",

      description: "Web Development",
    },
    {
      name: "Bootcamp",
      imgurl: "../../images/Udemy-2.png",
      srcurl:
        "https://www.udemy.com/certificate/UC-4332102b-9ec2-4eda-a98e-bfad25a44eb9/",

      description: "MERN Stack",
    },
    {
      name: "FreeCodeCamp",
      imgurl: "../../images/freecodecamp-1.png",
      srcurl:
        "https://www.freecodecamp.org/certification/fcc8a70c5e1-a48b-446d-9168-3ee486eacfa3/javascript-algorithms-and-data-structures",

      description: "Algorithms",
    },
    {
      name: "FreeCodeCamp",
      imgurl: "../../images/freecodecamp-2.png",
      srcurl:
        "https://www.freecodecamp.org/certification/fcc8a70c5e1-a48b-446d-9168-3ee486eacfa3/responsive-web-design",

      description: "Responsive Web Design",
    },
  ],
  testimonials: [
    {
      description: "I know I'll make it",
      name: "Someone",
    },
    {
      description: "Just work smart",
      name: "Someone",
    },
  ],
};

export default resumeData;
