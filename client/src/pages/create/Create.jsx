import "./Create.scss";
import NavBar from "../../components/navBar/NavBar";
import { useState } from "react";

function Create() {
  const [show, setShow] = useState(false);
  return (
    <>
      <NavBar />
      <div className="create">
        <div className="createContainer">
          <h1>
            Create your best cv or resume today,land Your dream job tomorrow
          </h1>
          <form action="">
            <div className="info">
              <h2>Information and specialized role</h2>
              <div className="formDivDiv">
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">Your full name</label>
                    <input type="text" placeholder="Your full name" />
                  </div>
                  <div className="form">
                    <label htmlFor="">Your specialized role</label>
                    <input
                      type="text"
                      placeholder="eg. accountant or programmer"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="info">
              <h2>Contact Details</h2>
              <div className="formDivDiv">
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" placeholder="eg. +255 768 086 183" />
                  </div>
                  <div className="form">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      placeholder="eg. barakaganai01@gmail.com"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Location</label>
                    <input
                      type="text"
                      placeholder="eg. Dar Es Salaam, Tanzania"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Website or Link</label>
                    <input type="text" placeholder="eg. barakaganai.com" />
                  </div>
                  <div className="form">
                    <label htmlFor="">LinkedIn account</label>
                    <input type="text" placeholder="eg. linedIn.com" />
                  </div>
                </div>
              </div>
            </div>
            <div className="info">
              <h2>Profile Details</h2>
              <div className="formDivDiv">
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">
                      Full description of your profile and what your capable to
                      do according to your skills
                    </label>
                    <input
                      type="text"
                      placeholder="eg. Experienced software engineer with a passion for creating innovative and efficient solutions. Skilled in full-stack web development, with expertise in JavaScript, React, and Node.js. Proven track record of delivering high-quality code and leading successful projects. Strong communication skills and a collaborative team player."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="info">
              <h2>Technical Skills</h2>
              <div className="formDivDiv">
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">Write Your Skill</label>
                    <p>
                      You can follow this format of writing or can you write
                      your skills based on your style. feel free to do it.
                    </p>
                    <input
                      type="text"
                      placeholder="eg. Programming languages | javaScript, PYTHON, C++"
                    />
                    <input
                      type="text"
                      placeholder="eg. Programming languages | javaScript, PYTHON, C++"
                    />
                    <input
                      type="text"
                      placeholder="eg. Programming languages | javaScript, PYTHON, C++"
                    />
                    <input
                      type="text"
                      placeholder="eg. Programming languages | javaScript, PYTHON, C++"
                    />
                    <input
                      type="text"
                      placeholder="eg. Programming languages | javaScript, PYTHON, C++"
                    />
                    <input
                      type="text"
                      placeholder="eg. Programming languages | javaScript, PYTHON, C++"
                    />
                    <input
                      type="text"
                      placeholder="eg. Programming languages | javaScript, PYTHON, C++"
                    />
                    <input
                      type="text"
                      placeholder="eg. Programming languages | javaScript, PYTHON, C++"
                    />
                    <input
                      type="text"
                      placeholder="eg. Programming languages | javaScript, PYTHON, C++"
                    />
                    <input
                      type="text"
                      placeholder="eg. Programming languages | javaScript, PYTHON, C++"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="info">
              <h2>Education</h2>
              <div className="formDivDiv">
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">University or any related</label>
                    <input
                      type="text"
                      placeholder="eg. university of dar es salaam"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Degree or any related</label>
                    <input
                      type="text"
                      placeholder="eg. bachelor of science in information technology"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Location</label>
                    <input
                      type="text"
                      placeholder="eg. Dar Es Salaam, Tanzania"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Start date - End date</label>
                    <input
                      type="text"
                      placeholder="eg. sep.20223 - july 2023"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">More details on Bachelor degree</label>
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                  </div>
                </div>
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">University or any related</label>
                    <input
                      type="text"
                      placeholder="eg. university of dar es salaam"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Degree or any related</label>
                    <input
                      type="text"
                      placeholder="eg. bachelor of science in information technology"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Location</label>
                    <input
                      type="text"
                      placeholder="eg. Dar Es Salaam, Tanzania"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Start date - End date</label>
                    <input
                      type="text"
                      placeholder="eg. sep.20223 - july 2023"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">More details on Bachelor degree</label>
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                  </div>
                </div>
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">University or any related</label>
                    <input
                      type="text"
                      placeholder="eg. university of dar es salaam"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Degree or any related</label>
                    <input
                      type="text"
                      placeholder="eg. bachelor of science in information technology"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Location</label>
                    <input
                      type="text"
                      placeholder="eg. Dar Es Salaam, Tanzania"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Start date - End date</label>
                    <input
                      type="text"
                      placeholder="eg. sep.20223 - july 2023"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">More details on Bachelor degree</label>
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="info">
              <h2>Projects</h2>
              <div className="formDivDiv">
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">Project Title</label>
                    <input
                      type="text"
                      placeholder="eg. Mitigating the Effects of Representation Bias (UBC MDS Capstone)"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      Location where you did this project
                    </label>
                    <input type="text" placeholder="eg. Moshi Tanzania" />
                  </div>
                  <div className="form">
                    <label htmlFor="">Start date - End date</label>
                    <input
                      type="text"
                      placeholder="eg. sep.20223 - july 2023"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      More details on Bachelor degree and this is not necessary
                      to fill all input you can fill some input according to the
                      details you have
                    </label>
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                  </div>
                </div>
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">Project Title</label>
                    <input
                      type="text"
                      placeholder="eg. Mitigating the Effects of Representation Bias (UBC MDS Capstone)"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      Location where you did this project
                    </label>
                    <input type="text" placeholder="eg. Moshi Tanzania" />
                  </div>
                  <div className="form">
                    <label htmlFor="">Start date - End date</label>
                    <input
                      type="text"
                      placeholder="eg. sep.20223 - july 2023"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      More details on Bachelor degree and this is not necessary
                      to fill all input you can fill some input according to the
                      details you have
                    </label>
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                  </div>
                </div>
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">Project Title</label>
                    <input
                      type="text"
                      placeholder="eg. Mitigating the Effects of Representation Bias (UBC MDS Capstone)"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      Location where you did this project
                    </label>
                    <input type="text" placeholder="eg. Moshi Tanzania" />
                  </div>
                  <div className="form">
                    <label htmlFor="">Start date - End date</label>
                    <input
                      type="text"
                      placeholder="eg. sep.20223 - july 2023"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      More details on Bachelor degree and this is not necessary
                      to fill all input you can fill some input according to the
                      details you have
                    </label>
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                  </div>
                </div>
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">Project Title</label>
                    <input
                      type="text"
                      placeholder="eg. Mitigating the Effects of Representation Bias (UBC MDS Capstone)"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      Location where you did this project
                    </label>
                    <input type="text" placeholder="eg. Moshi Tanzania" />
                  </div>
                  <div className="form">
                    <label htmlFor="">Start date - End date</label>
                    <input
                      type="text"
                      placeholder="eg. sep.20223 - july 2023"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      More details on Bachelor degree and this is not necessary
                      to fill all input you can fill some input according to the
                      details you have
                    </label>
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                  </div>
                </div>
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">Project Title</label>
                    <input
                      type="text"
                      placeholder="eg. Mitigating the Effects of Representation Bias (UBC MDS Capstone)"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      Location where you did this project
                    </label>
                    <input type="text" placeholder="eg. Moshi Tanzania" />
                  </div>
                  <div className="form">
                    <label htmlFor="">Start date - End date</label>
                    <input
                      type="text"
                      placeholder="eg. sep.20223 - july 2023"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      More details on Bachelor degree and this is not necessary
                      to fill all input you can fill some input according to the
                      details you have
                    </label>
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="info">
              <h2>Work Experience</h2>
              <div className="formDivDiv">
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">Work Name</label>
                    <input
                      type="text"
                      placeholder="eg. Research & Lab Assistant"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Location where you did this work</label>
                    <input type="text" placeholder="eg. Moshi Tanzania" />
                  </div>
                  <div className="form">
                    <label htmlFor="">Start date - End date</label>
                    <input
                      type="text"
                      placeholder="eg. sep.20223 - july 2023"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      More details on Bachelor degree and this is not necessary
                      to fill all input you can fill some input according to the
                      details you have
                    </label>
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                  </div>
                </div>
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">Work Name</label>
                    <input
                      type="text"
                      placeholder="eg. Research & Lab Assistant"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Location where you did this work</label>
                    <input type="text" placeholder="eg. Moshi Tanzania" />
                  </div>
                  <div className="form">
                    <label htmlFor="">Start date - End date</label>
                    <input
                      type="text"
                      placeholder="eg. sep.20223 - july 2023"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      More details on Bachelor degree and this is not necessary
                      to fill all input you can fill some input according to the
                      details you have
                    </label>
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                  </div>
                </div>
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">Work Name</label>
                    <input
                      type="text"
                      placeholder="eg. Research & Lab Assistant"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Location where you did this work</label>
                    <input type="text" placeholder="eg. Moshi Tanzania" />
                  </div>
                  <div className="form">
                    <label htmlFor="">Start date - End date</label>
                    <input
                      type="text"
                      placeholder="eg. sep.20223 - july 2023"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      More details on Bachelor degree and this is not necessary
                      to fill all input you can fill some input according to the
                      details you have
                    </label>
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                  </div>
                </div>
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">Work Name</label>
                    <input
                      type="text"
                      placeholder="eg. Research & Lab Assistant"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Location where you did this work</label>
                    <input type="text" placeholder="eg. Moshi Tanzania" />
                  </div>
                  <div className="form">
                    <label htmlFor="">Start date - End date</label>
                    <input
                      type="text"
                      placeholder="eg. sep.20223 - july 2023"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      More details on Bachelor degree and this is not necessary
                      to fill all input you can fill some input according to the
                      details you have
                    </label>
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                  </div>
                </div>
                <div className="formDiv">
                  <div className="form">
                    <label htmlFor="">Work Name</label>
                    <input
                      type="text"
                      placeholder="eg. Research & Lab Assistant"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">Location where you did this work</label>
                    <input type="text" placeholder="eg. Moshi Tanzania" />
                  </div>
                  <div className="form">
                    <label htmlFor="">Start date - End date</label>
                    <input
                      type="text"
                      placeholder="eg. sep.20223 - july 2023"
                    />
                  </div>
                  <div className="form">
                    <label htmlFor="">
                      More details on Bachelor degree and this is not necessary
                      to fill all input you can fill some input according to the
                      details you have
                    </label>
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                    <input
                      type="text"
                      placeholder="eg. Graduate program focused on applied statistics and computer science using Python."
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
