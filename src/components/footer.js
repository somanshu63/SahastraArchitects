import { FaInstagram } from "react-icons/fa";

function Footer(props) {
  return (
    <div className={`flex justify-between footer items-center mb-10 pLR67 `}>
      <a href="https://www.instagram.com/sahastra_architects?igsh=MWk5YWxiMmxxNTh4Mg==">
        <FaInstagram style={{ fontSize: "20px" }} />
      </a>

      <p className="fs-12">© 2011 by SAHASTRA ARCHITECTS.</p>
    </div>
  );
}
export default Footer;
