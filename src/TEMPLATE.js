
// MUI: Icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


// Data object that contains all of the data for the template.
const data = {
    profile: {
        name: "Benjamin Tran",
        address: "Los Angeles Metropolitan Area, California",
        avatar: "/portrait.jpg.png",
        contacts: [
            { icon: PhoneIcon, label: "Phone", value: "(909) 367-9168" },
            { icon: EmailIcon, label: "Email", value: "btran083@outlook.com" }
        ],
        skills: [
            { category: "Programming Languages:", skills: "Java, Python, C++, C#, SQL, MATLAB" },
            { category: "Scripting & Web Languages:", skills: "HTML5, CSS3, JavaScript, TypeScript, Node.js, ADB (Android)" },
            { category: "Tools:", skills: "Android Studio, Git, AWS, React, Material-UI, Node.js" }
        ],
        socialMedia: [
            { icon: LinkedInIcon, url: "https://www.linkedin.com/in/btran083/" },
            { icon: GitHubIcon, url: "https://github.com/btranTFT" },
        ],
        education: [
            {
                degree: "M.S. in Computer Science",
                date: "Expected Graduation, May 2026",
                school: "California State Polytechnic University - Pomona, Pomona, California",
                gpa: "Concentrations: Cybersecurity and Network Infrastructure\nRelated Coursework: Data Structures & Algorithms, Objects & Design, Computer Organization & Programming, Object-Oriented Programming, Statistics & Applications, Computer Architecture, Operating Systems, and Software Engineering"
            },
            {
                degree: "B.S. in Biological Science",
                date: "Graduated May 2022",
                school: "California State Polytechnic University - Pomona, Pomona, California",
                gpa: ""
            },
        ],
        experience: [
            {
                title: "Amazon — FC Associate / IT Assistant",
                date: "Chino, California | Sep 2020 – Jan 2022",
                description: [
                    "Created Python scripts to construct a pipeline that retrieved performance data from the AWS cross-regional team.",
                    "Collaborated with IT teams to troubleshoot and resolve networking issues.",
                    "Utilized various AWS resources such as Glue Crawlers, S3, Lambda, Redshift, and Quicksight to develop a dashboard displaying real time metrics.",
                    "Utilized Microsoft Excel for data analysis and reporting, contributing to process optimization."
                ]
            }
        ],
        projects: [
            {
                title: "Study Room Tracker Web Service",
                url: "https://github.com/SatelliteGear/RoomTracker-PROTOTYPE-frontbackend-test",
                description: "A modern web application for managing and booking study rooms at Cal Poly Pomona University Library, featuring real-time availability, floor-based navigation, and a robust booking system.",
                image: "/roomtracker.jpg"
            },
            {
                title: "SMILES Molecule Generation",
                url: "https://github.com/AbogAscended/Drug-Discovery",
                description: "A project focused on computational drug discovery, leveraging data science and machine learning to identify potential drug candidates and analyze molecular interactions.",
                image: "/drugdiscovery.jpg"
            }
        ],
        certifications: [
            { name: "Google Cybersecurity Professional Certificate", file: "/Google CyberSec.pdf" },
            { name: "Practical Data Science on the AWS Cloud", file: "/AWS Data Science.pdf" },
            { name: "AWS Cloud Technical Essentials", file: "/AWS Cloud Technical Essentials.pdf" }
        ],
    },

    posts: {
        name: "Benjamin Tran",
        avatar: "/portrait.jpg.png",
        background_image: "https://source.unsplash.com/random?wallpapers",
        post_data: [],
    }
};

// Exporting the data object so that the App.js file can import it.
export default data;