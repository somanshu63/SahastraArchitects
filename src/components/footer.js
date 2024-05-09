import { FaInstagram } from "react-icons/fa";
import logo from "../images/home/favicon.jpeg";

function Footer(props) {
  return (
    <div className="pLR67 footer  ">
      <div className="flex justify-between  ">
        <div className="w48">
          <div className="brand flex items-center">
            <a href="/" className={`no-underline flex items-center`}>
              <img src={logo} className="logo" alt="logo"></img>
              <span className="uppercase ">Sahastra Architects</span>
            </a>
          </div>
          <p className=" fs-12 text-white mt-8 text-justify leading-6">
            The company principle of Architecture-Studio is the collective
            conception. From the very beginning, the practice has believed in
            the virtues of exchange, crossing ideas, common effort, shared
            knowledge and enthusiasm.
          </p>
        </div>
        <div className="w48 text-right mt-2 mT">
          <p className="uppercase  text-white mb-11">GET IN TOUCH</p>
          <p className=" fs-12 text-white ">+919897356015</p>
          <p className="mt-2 fs-12 text-white ">sahastraa@gmail.com</p>
          <p className="mt-2 fs-12 text-white ">Dehradun</p>
        </div>
      </div>
      <hr className="hr"></hr>
      <div className="flex items-center justify-between ">
        <p className="fs-12  text-white">© 2011 by SAHASTRA ARCHITECTS</p>
        <a href="https://www.instagram.com/sahastra_architects?igsh=MWk5YWxiMmxxNTh4Mg==">
          <FaInstagram style={{ fontSize: "20px", color: "white" }} />{" "}
        </a>
      </div>
    </div>
  );
}
export default Footer;

//      <div className={`flex justify-between footer items-center mb-10 pLR67 `}>
//   <a href="https://www.instagram.com/sahastra_architects?igsh=MWk5YWxiMmxxNTh4Mg==">
//     <FaInstagram style={{ fontSize: "20px" }} />
//   </a>

//   <p className="fs-12">© 2011 by SAHASTRA ARCHITECTS.</p>
// </div>
