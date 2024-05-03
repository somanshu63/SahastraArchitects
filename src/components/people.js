import AbhinavGupta from "../images/home/AbhinavGupta.jpeg";
function People() {
  return (
    <div className="pLR67 mt-52">
      <p className="fs-36 fw-700 mx-20 leading-tight mt-32">
        We're creative thinkers with a passion for design and compassion for our
        communities.
      </p>
      <div className="flex items-center mt-32 mb-16">
        <div className="line"></div>
        <p className="ml-7 fs-27 ">Leadership</p>
      </div>
      <div className="w-250O mb-12 ">
        <img
          src={AbhinavGupta}
          alt="projects"
          className="w-250I object-cover mb-6"
        ></img>
        <p className="text-base font-bold mb-3  leading-7">Abhinav Gupta</p>
        <p className="text-xs font-bold gray">CEO</p>
      </div>
    </div>
  );
}
export default People;
