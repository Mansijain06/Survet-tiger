import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";

const CreatePage = () => {
  let [surveyType, setSurveyType] = useState("type");
  let [buttons, setButtons] = useState(0);
  let [text, setText] = useState("");
  const [repeatText, setRepeatText] = useState([""]);
  const [redirect, setRedirect] = useState(false);

  const repeatMultipleQ = () => {
    if (repeatText.length < 4) {
      setRepeatText((oldData) => {
        return [...oldData, ""];
      });
    } else {
      setButtons(1);
    }
  };
  const repeatSingleQ = () => {
    if (repeatText.length < 2) {
      setRepeatText((oldData) => {
        return [...oldData, ""];
      });
    } else {
      setButtons(1);
    }
  };
  const DeleteList = (e) => {
    setRepeatText((oldData) => {
      return oldData.filter((currentEle, index) => {
        return index !== e;
      });
    });
  };

  const checkForTwoText = () => {
    if (repeatText.length > 2) {
      repeatText.pop();
      repeatText.pop();
      setButtons(0);
    }
  };
  const itemChange = (e) => {
    console.log("baby", e.target.value);
    setText(e.target.value);
    let val = e.target.value;
    let len = repeatText.length;
    repeatText[len - 1] = val;
  };
  const redirectToPage = () => {
    setRedirect(true);
  };
  const renderRedirect = () => {
    if (redirect === true) {
      return (
        <Redirect
          to={{
            pathname: "/publish",
            state: { repeatText: repeatText },
          }}
        />
      );
    }
  };
  return (
    <Fragment>
      {renderRedirect()}
      <div>
        <select
          className="drop-select"
          exact
          value={surveyType}
          onChange={(evt) => {
            setSurveyType(evt.target.value);
          }}
        >
          <option value="type">Select queston type</option>
          <option value="single">Single question</option>
          <option value="multiple">Multiple question</option>
        </select>
      </div>

      {surveyType === "single" ? (
        <>
          {checkForTwoText()}
          <div className="survey-container">
            <div className="survey-container1">
              <input
                value="Which of the following apps you have on your phone?"
                className="question-box"
              />
              <p>Options</p>
              {repeatText.map((option, id) => (
                <a key={id}>
                  <div className="answer">
                    <input
                      type="text"
                      placeholder="Type answer here"
                      value={option}
                      onChange={itemChange}
                    />
                    <p onClick={repeatSingleQ}>➕</p>
                    <p
                      onClick={() => {
                        DeleteList(id);
                      }}
                    >
                      ➖
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </>
      ) : null}

      {surveyType === "multiple" ? (
        <>
          <div className="survey-container">
            <div className="survey-container1">
              <input
                value="Which of the following apps you have on your phone?"
                className="question-box"
              />
              <p>Options</p>
              {repeatText.map((option, id) => (
                <a key={id}>
                  <div className="answer">
                    <input
                      type="text"
                      placeholder="Type answer here"
                      value={option}
                      onChange={itemChange}
                    />
                    <p onClick={repeatMultipleQ}>➕</p>
                    <p
                      onClick={() => {
                        DeleteList(id);
                      }}
                    >
                      ➖
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </>
      ) : null}
      {buttons === 1 ? (
        <>
          <button className="btn" onClick={redirectToPage}>
            publish
          </button>
        </>
      ) : null}
    </Fragment>
  );
};
export default CreatePage;
