import AbhinavGupta from "../images/home/AbhinavGupta.jpeg";
function People() {
  return (
    <div className="pLR67">
      <p className="fs-36  px-20 leading-tight mt-32">
        We're creative thinkers with a <br></br> passion for design and{" "}
        <br></br> compassion for our <br></br>
        communities.
      </p>
      <div className="flex items-center mt-32 mb-16">
        <div className="line"></div>
        <p className="ml-7 fs-27 ">Leadership</p>
      </div>
      <div className="w-250 mb-12 ">
        <img
          src={AbhinavGupta}
          alt="projects"
          className="w-250 object-cover mb-6"
        ></img>
        <p className="fs-17 mb-3  leading-7">Abhinav Gupta</p>
        <p className="fs-14 gray">CEO</p>
      </div>
    </div>
  );
}
export default People;
