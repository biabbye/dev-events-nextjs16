export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    title: "DevConnect Summit 2026",
    image: "/images/event1.png",
    slug: "devconnect-summit-2026",
    location: "San Francisco, CA",
    date: "March 15, 2026",
    time: "9:00 AM PST",
  },
  {
    title: "Global AI Conference",
    image: "/images/event2.png",
    slug: "global-ai-conference",
    location: "London, UK",
    date: "April 22, 2026",
    time: "10:00 AM GMT",
  },
  {
    title: "NextJS Masters Meetup",
    image: "/images/event3.png",
    slug: "nextjs-masters-meetup",
    location: "Berlin, Germany",
    date: "May 10, 2026",
    time: "2:00 PM CEST",
  },
  {
    title: "Web3 Innovation Hackathon",
    image: "/images/event4.png",
    slug: "web3-innovation-hackathon",
    location: "Singapore",
    date: "June 5, 2026",
    time: "9:00 AM SGT",
  },
  {
    title: "Cloud Native DevOps Summit",
    image: "/images/event5.png",
    slug: "cloud-native-devops-summit",
    location: "Toronto, Canada",
    date: "July 18, 2026",
    time: "11:00 AM EDT",
  },
  {
    title: "React Advanced Conference",
    image: "/images/event6.png",
    slug: "react-advanced-conference",
    location: "Amsterdam, Netherlands",
    date: "August 30, 2026",
    time: "10:00 AM CEST",
  },
];
