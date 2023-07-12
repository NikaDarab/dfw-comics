const Footer = () => {
  return (
    <footer className="bg-green-800 py-[5px] bottom-0 w-full">
      <div className="text-center">
        <p style={{ fontSize: "14px" }}>
          &copy; {new Date().getFullYear()} DFW-Comics
        </p>
        <p className=" mt-[5px]">
          <a target="_blank" href="https://nikadarab.com/">
            Made by Neek Engineering
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
