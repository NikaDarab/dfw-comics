import { artists } from "../artists";
import { useRouter } from "next/router";
import Link from "next/link";

const Artists = () => {
  return (
    <div>
      {artists.map((artist) => (
        <Link
          href={`/artists/${artist.name.split(" ").join("")}/`}
          key={artist.id}
        >
          <h3>{artist.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Artists;
