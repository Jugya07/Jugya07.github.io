import { useResultContext } from "../../contextAPI/ResultContextProvider";
import "../../global.css";

export const About = () => {
  const { aboutSec } = useResultContext();
  return (
    <div className="p-7 font-bold md:mx-14 lg:mx-40 lg:my-14" ref={aboutSec}>
      <h1 className="title text-3xl md:text-5xl pb-5 text-center">About Me</h1>
      <p className="text-left md:text-left tracking-wide">
        I have been doing web development for 1 year now. I have worked on many
        projects and I have learned a lot. I have worked on both front-end and
        back-end. Recently I have started with Cloud Computing and loving it.
        <br />
        <br />I am self-motivated, hard-working, and a quick learner. I am
        always looking for new opportunities to learn and grow.
      </p>
    </div>
  );
};
