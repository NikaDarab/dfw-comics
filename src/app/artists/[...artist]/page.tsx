import { artists } from "../../artists";
import Image from "next/image";

interface Props {
  params: {
    artist: string;
  };
}

const ArtistPage: React.FC<Props> = ({ params }) => {
  const artist = artists.find(
    (artist) => artist.name.split(" ").join("") == params.artist
  );
  return (
    <>
      <div className="flex justify-center text-3xl my-9">{artist?.name}</div>
      <div className="bio-container border">
        <div className="img-container relative w-full overflow-hidden">
          <Image
            src={artist?.headShot ?? "/../src/app/dude.jpg"}
            alt={`${artist?.name} Headshot`}
            height="500"
            width="500"
            className="border max-w-full h-auto block object-cover object-bottom"
          />
        </div>
        <div>
          <div className="border bio">{artist?.bio}</div>
        </div>
      </div>
      <div className="ticket-container flex my-9 border">
        <div>{artist?.dates.location}</div>
        <div>{artist?.dates.date}</div>
        <div>{artist?.dates.time}</div>
        <a
          href={artist?.dates.ticketLink}
          target="_blank"
          className="ticket-button"
        >
          Ticket
        </a>
      </div>
    </>
  );
};

export default ArtistPage;
