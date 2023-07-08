import Image from "next/image";

const Header = () => {
  return (
    <section className=" flex flex-row items-center justify-between h-[10vh] p-[1em] bg-green-800">
      <div className="flex">
        <Image
          src="/../public/assets/images/logo.png"
          alt="Logo"
          width={80}
          height={40}
        />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>
      <ul className="menu">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
      </ul>
    </section>
  );
};

export default Header;
