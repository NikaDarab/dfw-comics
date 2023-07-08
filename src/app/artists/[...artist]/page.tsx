import React from "react";
import { nanoid } from "nanoid";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import Typewriter from "@/Typewriter/Typewriter";

interface Props {
  params: {
    artist: string;
  };
}

interface Dates {
  date: string;
  time: string;
  location: string;
  ticketLink: string;
}
interface Artist {
  id: number;
  name: string;
  bio: string;
  headShot: string;
  dates: Dates[];
  socialMedia: {
    instagram: string;
    facebook: string;
    twitter: string;
    tiktok: string;
    youtube: string;
  };
  email: string;
}

const artists: Artist[] = [
  {
    id: 1,
    name: "John Smith",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    headShot: "/../public/assets/images/dude.jpg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/johnsmith",
      facebook: "https://facebook.com/johnsmith",
      twitter: "https://twitter.com/johnsmith",
      tiktok: "https://tiktok.com/@johnsmith",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "johnsmith@example.com",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    bio: "Sarah Johnson is a rising star in the comedy scene with her hilarious observations on everyday life.",
    headShot: "/../public/assets/images/lady.jpeg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/sarah-johnson-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/sarahjohnson",
      facebook: "https://facebook.com/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      tiktok: "https://tiktok.com/@sarahjohnson",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "sarahjohnson@example.com",
  },
  {
    id: 3,
    name: "Michael Davis",
    bio: "Michael Davis is a veteran comedian known for his quick wit and hilarious improvisational skills.",
    headShot: "/../public/assets/images/dude2.jpeg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/michael-davis-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/michaeldavis",
      facebook: "https://facebook.com/michaeldavis",
      twitter: "https://twitter.com/michaeldavis",
      tiktok: "https://tiktok.com/@michaeldavis",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "michaeldavis@example.com",
  },
  {
    id: 4,
    name: "Jessica Roberts",
    bio: "Jessica Roberts is a comedian known for her sharp observations on relationships and pop culture.",
    headShot: "/../public/assets/images/lady2.jpeg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/jessica-roberts-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/jessicaroberts",
      facebook: "https://facebook.com/jessicaroberts",
      twitter: "https://twitter.com/jessicaroberts",
      tiktok: "https://tiktok.com/@jessicaroberts",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "jessicaroberts@example.com",
  },
  {
    id: 5,
    name: "Ali Wong",
    bio: "Ali Wong is a comedian known for her sharp observations on relationships and pop culture.",
    headShot: "/../public/assets/images/lady3.jpeg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/jessica-roberts-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/jessicaroberts",
      facebook: "https://facebook.com/jessicaroberts",
      twitter: "https://twitter.com/jessicaroberts",
      tiktok: "https://tiktok.com/@jessicaroberts",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "jessicaroberts@example.com",
  },
  {
    id: 6,
    name: "Alice Porter",
    bio: "Alice Porter is a comedian known for her sharp observations on relationships and pop culture.",
    headShot: "/../public/assets/images/lady4.jpeg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/jessica-roberts-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/jessicaroberts",
      facebook: "https://facebook.com/jessicaroberts",
      twitter: "https://twitter.com/jessicaroberts",
      tiktok: "https://tiktok.com/@jessicaroberts",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "jessicaroberts@example.com",
  },
  {
    id: 7,
    name: "Ahmed Ali",
    bio: "Ahmed Ali is a comedian known for her sharp observations on relationships and pop culture.",
    headShot: "/../public/assets/images/dude4.jpeg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/jessica-roberts-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/jessicaroberts",
      facebook: "https://facebook.com/jessicaroberts",
      twitter: "https://twitter.com/jessicaroberts",
      tiktok: "https://tiktok.com/@jessicaroberts",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "jessicaroberts@example.com",
  },
  {
    id: 8,
    name: "Sam Asghari",
    bio: "Sam Asghari is a comedian known for her sharp observations on relationships and pop culture.",
    headShot: "/../public/assets/images/dude3.jpeg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/jessica-roberts-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/jessicaroberts",
      facebook: "https://facebook.com/jessicaroberts",
      twitter: "https://twitter.com/jessicaroberts",
      tiktok: "https://tiktok.com/@jessicaroberts",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "jessicaroberts@example.com",
  },
];

const ArtistPage: React.FC<Props> = ({ params }) => {
  const artist: Artist | undefined = artists.find(
    (artist) => artist.name.split(" ").join("") == params.artist
  );
  return (
    <>
      <div className="flex justify-center text-4xl my-9">
        <Typewriter text={artist?.name ?? ""} />
      </div>
      <div className="bio-container mb-[10%]">
        <div className="flex flex-col items-center justify-around relative w-full overflow-hidden h-[400px] img-container">
          <div className="flex flex-col justify-evenly socials-container md:h-[400px] lg:h-[400px]">
            <a
              target="_blank"
              href={artist?.socialMedia.facebook}
              className="fb-button social-media-button"
            >
              <FaFacebook className="text-5xl" />
            </a>
            <a
              target="_blank"
              href={artist?.socialMedia.instagram}
              className="ig-button social-media-button"
            >
              <FaInstagram className="text-5xl" />
            </a>
            <a
              target="_blank"
              href={artist?.socialMedia?.twitter}
              className="twitter-button social-media-button"
            >
              <FaTwitter className="text-5xl" />
            </a>
            <a
              target="_blank"
              href={artist?.socialMedia?.tiktok}
              className="tik-tok-button social-media-button"
            >
              <FaTiktok className="text-5xl" />
            </a>
            <a
              target="_blank"
              href={artist?.socialMedia?.youtube}
              className="youtube-button social-media-button"
            >
              <FaYoutube className="text-5xl" />
            </a>
          </div>
          <Image
            src={artist?.headShot ?? "/../src/app/dude.jpg"}
            alt={`${artist?.name} Headshot`}
            height="500"
            width="500"
            className="max-w-full h-auto block object-cover object-bottom"
          />
        </div>
        <div className="flex items-center bio">
          <div className="text-3xl  flex justify-center leading-10">
            {artist?.bio}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-[10%] show-container">
        <div className="col-span-3 flex justify-between items-center p-4">
          <p className="text-4xl font-bold">Location</p>
          <div className="flex gap-[5px]">
            <p className="text-3xl font-bold">Date & Time</p>
          </div>
          <p className="text-4xl font-bold text-center">Tickets</p>
        </div>
        {artist?.dates.map((d) => (
          <div key={nanoid()} className="col-span-3">
            <div className="flex justify-between items-center p-4">
              <p className="text-3xl">{d.location}</p>
              <div className="flex">
                <p className="text-2xl">
                  {d.date},{d.time}
                </p>
              </div>
              <div>
                <a
                  href={d.ticketLink}
                  target="_blank"
                  className="ticket-button inline-block bg-green-600 text-white no-underline rounded text-center cursor-pointer text-base font-bold uppercase"
                >
                  Ticket
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArtistPage;
