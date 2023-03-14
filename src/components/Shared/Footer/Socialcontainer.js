import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Socialcontainer = () => {
  const items = [
    {
      Logo: BsTwitter,
      url: "#",
    },
    {
      Logo: BsGithub,
      url: "#",
    },
    {
      Logo: BsInstagram,
      url: "#",
    },
    {
      Logo: BsLinkedin,
      url: "#",
    },
  ];
  return (
    <div className="socialcontainerwrapper">
      {items.map((item) => (
        <Singlesocial Logo={item.Logo} url={item.url} />
      ))}
    </div>
  );
};
const Singlesocial = ({ Logo, url }) => {
  return (
    <a href={url || "#"}>
      <Logo />
    </a>
  );
};
export default Socialcontainer;
