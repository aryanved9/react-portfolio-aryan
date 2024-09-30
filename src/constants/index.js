import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";


export const HERO_CONTENT = `I am a skilled MERN Stack Developer with a strong focus on building efficient, scalable, and user-centric web applications. My expertise spans front-end technologies, particularly React JS, and backend development using Node.js, Express, and MongoDB. I am also proficient in utilizing backend-as-a-service tools like Appwrite to streamline development processes. My goal is to leverage my technical skills and problem-solving abilities to deliver innovative solutions that enhance business growth and provide exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile MERN Stack Developer with a passion for building efficient, user-friendly web applications. While I am a fresher, I have developed a strong foundation in technologies such as React, Node.js, Express, and MongoDB. I am also familiar with modern front-end tools like Tailwind CSS, JavaScript, and Redux Toolkit. My journey into web development was driven by a deep curiosity about how things work, and I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
    {
        year: "April 2022 – May 2022",
        role: "Web Development Intern",
        company: " The Sparks Foundation",
        description: `Successfully implemented a Payment Gateway Integration project, enabling secure online transactions through Razorpay’s test mode.Integrated Razorpay’s API for seamless payment processing, showcasing proficiency in API integration and secure transaction handling.Developed a system to notify users via email upon successful completion of payments, enhancing user experience and transaction confirmation.Implemented responsive design principles to ensure optimal viewing experience across various devices and screen sizes .`,
        technologies: ["Html" , "CSS", "JavaScript"],
    },
];

export const PROJECTS = [
    {
        title: " Appwrite-Integrated Blog Site : React",
        image: project1,
        url: `https://react-blogapp-aryanved.vercel.app/`,
        description:
            ` Developed a responsive blogging website using React.js and Tailwind CSS, enabling users to create, edit, and upload blog posts with images.
              Integrated User authentication and session management with Appwrite backend services, allowing account creation, login, and logout functionality.
              Implemented rich text editing with TinyMCE (React component) and state management with Redux Toolkit.
              Utilized React Router for seamless navigation and react-redux for managing application state efficiently.`,
        technologies: ["HTML", "Tailwind CSS", "Javascript", "React", "Redux Toolkit", "Appwrite"],
    },
    {
        title: " Todo application",
        image: project2,
        url:`https://rtk-todoapp-aryan.netlify.app/`,
        description:
            `Developed a responsive To-Do List application using HTML, Tailwind CSS, JavaScript, and React.js, ensuring a seamless user experience across devices.
             Implemented a dynamic input section for users to add their tasks, leveraging React.js for efficient state management and interactivity.
             Utilized Redux Toolkit to manage the global state, enabling smooth addition and deletion of todos from the list.
             Incorporated features for marking tasks as completed and deleting them, enhancing the app’s functionality and user engagement.`,
        technologies: ["HTML", "Tailwind CSS", "Javasript", "React", "Redux Toolkit" , "Vite"],
    },
   /*  {
        title: "Portfolio Website",
        // image TODO
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Bootstrap"],
    }, */
    
];

export const CONTACT = {
    address: " RGA tech-park Sarjapura, Bengaluru-35 ",
    phoneNo: "+91 7378729257",
    email: "aryanved7378@gmail.com",
};