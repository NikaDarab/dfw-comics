import React from "react";
import { nanoid } from "nanoid";
import { artists, Artist } from "../../artists";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import Typewriter from "@/app/Typewriter";
interface Props {
  params: {
    artist: string;
  };
}

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
            <a target="_blank" href={artist?.socialMedia.facebook}>
              <FaFacebook className="text-5xl" />
            </a>
            <a target="_blank" href={artist?.socialMedia.instagram}>
              <FaInstagram className="text-5xl" />
            </a>
            <a target="_blank" href={artist?.socialMedia.twitter}>
              <FaTwitter className="text-5xl" />
            </a>
            <a target="_blank" href={artist?.socialMedia.tiktok}>
              <FaTiktok className="text-5xl" />
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
