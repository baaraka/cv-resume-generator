import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import "./Page.scss";

function Page() {
  return (
    <>
      <NavBar />
      <div className="page">
        <div className="pageContainer">
          <h1>Baraka Ganai</h1>
          <p className="pC">Full stack web and app developer</p>
          <hr />
          <div className="contactInformation">
            <h2>Contact</h2>
            <hr />
            <div className="contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span>+255 768 086 183</span>
            </div>
            <div className="contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span>barakaganai01@gmail.com</span>
            </div>
            <div className="contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span>Dar es salaam</span>
            </div>
            <div className="contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span>barakaganai.com</span>
            </div>
            <div className="contact">
              <i class="fa-brands fa-linkedin-in"></i>
              <span>linkedIn/baraka.com</span>
            </div>
          </div>
          <div className="profileInformation">
            <h2>Profile</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              voluptas nulla consequatur quasi dolore sunt animi ipsam
              veritatis, obcaecati ipsa itaque neque aut sed rerum aliquid
              asperiores odio. Laboriosam, blanditiis! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Repellat similique earum
              cupiditate aliquam iste est veniam dolorem reiciendis et suscipit
              mollitia, fugit, eos nostrum ex eum a illum exercitationem nobis!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
              neque dicta eaque est deleniti blanditiis accusamus et. Sequi
              debitis, esse dolor earum corrupti atque expedita eaque
              laboriosam, iste aut fugiat!
            </p>
          </div>
          <div className="skillsInfo">
            <h2>Technical Skills</h2>
            <hr />
            <ul>
              <li>
                <strong>Programming languages</strong> | HTMl, CSS, JavaScript
              </li>
              <li>
                <strong>Programming languages</strong> | HTMl, CSS, JavaScript
              </li>
              <li>
                <strong>Programming languages</strong> | HTMl, CSS, JavaScript
              </li>
              <li>
                <strong>Programming languages</strong> | HTMl, CSS, JavaScript
              </li>
              <li>
                <strong>Programming languages</strong> | HTMl, CSS, JavaScript
              </li>
              <li>
                <strong>Programming languages</strong> | HTMl, CSS, JavaScript
              </li>
            </ul>
          </div>
          <div className="educationInfo">
            <h2>Education</h2>
            <hr />
            <div className="education">
              <div className="educationEra">
                <div className="educationAre">
                  <h3>University of Dar es Salaam</h3>
                  <p>Barchelor of science in information technology</p>
                </div>
                <span>nov.2020 - july. 2023</span>
              </div>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  debitis nemo nesciunt ad facere mollitia, iusto numquam
                  recusandae inventore aliquid quaerat? Voluptatem soluta eos
                  corrupti! Accusantium voluptatum magni dolor deleniti.
                </li>
              </ul>
            </div>
          </div>
          <div className="projectInfo">
            <h2>Projects</h2>
            <hr />
            <div className="projectDetails">
              <div className="projectDetails">
                <div className="projectDetail">
                  <div className="projectName">
                    <h3>
                      Mitigating the Effects of Representation Bias (UBC MDS
                      Capstone)
                    </h3>
                    <p>- Moshi Tanzania</p>
                  </div>
                  <span>nov 2020 - jan 2021</span>
                </div>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                </ul>
              </div>
              <div className="projectDetails">
                <div className="projectDetail">
                  <div className="projectName">
                    <h3>
                      Mitigating the Effects of Representation Bias (UBC MDS
                      Capstone)
                    </h3>
                    <p>- Moshi Tanzania</p>
                  </div>
                  <span>nov 2020 - jan 2021</span>
                </div>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="projectInfo">
            <h2>Work Experience</h2>
            <hr />
            <div className="projectDetails">
              <div className="projectDetails">
                <div className="projectDetail">
                  <div className="projectName">
                    <h3>
                      Mitigating the Effects of Representation Bias (UBC MDS
                      Capstone)
                    </h3>
                    <p>- Moshi Tanzania</p>
                  </div>
                  <span>nov 2020 - jan 2021</span>
                </div>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                </ul>
              </div>
              <div className="projectDetails">
                <div className="projectDetail">
                  <div className="projectName">
                    <h3>
                      Mitigating the Effects of Representation Bias (UBC MDS
                      Capstone)
                    </h3>
                    <p>- Moshi Tanzania</p>
                  </div>
                  <span>nov 2020 - jan 2021</span>
                </div>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sed, fuga rem nesciunt non harum architecto ut hic
                    mollitia nam dignissimos vitae explicabo, culpa minus, dolor
                    illo amet necessitatibus nemo!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
