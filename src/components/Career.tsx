import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span> & Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (B.Tech)</h4>
                <h5>KCC Institute of Technology and Management</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              I am a <b>fresher</b> currently pursuing my B.Tech degree. I have
              a strong foundation in web development technologies and have built
              several projects to hone my skills. I am eager to start my
              professional journey and contribute to impactful projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
