import { teamPhotoUrls } from "../content/mediaHub";

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
    image: teamPhotoUrls.venkat,
  },
  {
    id: 2,
    name: "Dr. Gopal Joshi",
    role: "PROGRAM DIRECTOR",
    image: teamPhotoUrls.gopaljoshi,
  },
  {
    id: 3,
    name: "Dr. Subhash Kalidindi",
    role: "SENIOR SCIENTIST",
    image: teamPhotoUrls.subhash,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Nagalakshmaiah Kalva",
    role: "",
    image: teamPhotoUrls.nagalakshmaiah,
  },
  {
    id: 2,
    name: "Pallavi Kayala",
    role: "",
    image: teamPhotoUrls.pallavi,
  },
  {
    id: 3,
    name: "Durga Pritam Suggisetti",
    role: "",
    image: teamPhotoUrls.durgaPritam,
  },
  {
    id: 4,
    name: "Chandanesh Konakalla",
    role: "",
    image: teamPhotoUrls.chandanesh,
  },
  {
    id: 5,
    name: "Banavathi Rupa Bai",
    role: "",
    image: teamPhotoUrls.rupa,
  },
  {
    id: 6,
    name: "Sai Bharath",
    role: "",
    image: teamPhotoUrls.saiBharath,
  },
  {
    id: 7,
    name: "Mahesh Kondeti",
    role: "",
    image: teamPhotoUrls.maheshKondeti,
  },
  {
    id: 8,
    name: "Isha Choudhary",
    role: "",
    image: teamPhotoUrls.ishaChoudhary,
  },
];
