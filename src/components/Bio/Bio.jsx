import { useInView } from "react-intersection-observer";
import { BIOS } from "../../constants/Bios";
import "./Bio.css";

const Bio = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [bioRef, bioInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section className="bio" id="bio">
      <h1 className={`bio-title ${titleInView ? "show" : ""}`} ref={titleRef}>
        Bio:
      </h1>
      {BIOS.map((bio, i) => (
        <div
          className={`bio-row ${bioInView ? "showAndEnterFromDown" : ""}`}
          key={i}
          ref={bioRef}
        >
          <span className="bio-year">
            {bio.start} {bio.end && `- ${bio.end}`}
          </span>
          <p>{bio.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Bio;
