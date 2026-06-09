import Chandanesh from "../assets/team/Chandanesh.jpg";
import Nagalakshmaiah from "../assets/team/Nagalakshmaiah.jpeg";
import Pallavi from "../assets/team/Pallavi.jpeg";
import DurgaPritamS from "../assets/team/DurgaPritam.jpeg";
import Venkat from "../assets/team/Venkat.jpeg";
import Subhash from "../assets/team/Subhash1.jpeg";
import Gopaljoshi from "../assets/team/gopaljoshi.jpeg";
import Rupa from "../assets/team/Rupa.jpeg";


export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

export const coreTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. L. Venkata Subramaniam",
    role: "CEO",
    image: Venkat,
  },
  {
    id: 2,
    name: "Dr. Gopal Joshi",
    role: "PROGRAM DIRECTOR",
    image: Gopaljoshi,
  },
  {
    id: 3,
    name: "Dr. Subhash Kalidindi",
    role: "SENIOR SCIENTIST",
    image: Subhash,
  },
 
 
  
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Nagalakshmaiah Kalva",
    role: "",
    image: Nagalakshmaiah,
  },
  {
    id: 2,
    name: "Pallavi Kayala",
    role: "",
    image: Pallavi,
  },
  {
    id: 3,
    name: "Durga Pritam Suggisetti",
    role: "",
    image: DurgaPritamS,
  },
  {
    id: 4,
    name: "Chandanesh Konakalla",
    role: "",
    image: Chandanesh,
  },
  {
    id: 5,
    name: "Banavathi Rupa Bai",
    role: "",
    image: Rupa,
  },


 
  
];