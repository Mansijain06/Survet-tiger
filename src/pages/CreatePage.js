import React, { useState, Fragment } from 'react';
import Publish from './Publish';
import { Link } from 'react-router-dom';
const CreatePage = () => {
    let [surveyType, setSurveyType] = useState('type');
    let [options, setOptions] = useState([{ value: 'romil', id: Date.now() }]);
    let [buttons, setButtons] = useState(0);

    const text = (e) => {
        setOptions([{ value: e }]);
    };

    const repeat = () => {
        if (options.length != 4) {
            setOptions([...options, { value: '', id: Date.now() }]);
        }
        if (options.length < 4) {
            setButtons(0);
        }
        else {
            setButtons(1);
        }
    };
    const repeatSingle = () => {
        if (options.length != 2) {
            setOptions([...options, { value: '', id: Date.now() }]);
        }
        if (options.length < 2) {
            setButtons(0);
        }
        else {
            setButtons(1);
        }
    };
    const DeleteList = (e) => {
        let index = options.indexOf(e);
        let newOptions = [...options];
        let newArray = newOptions.splice(index, 1);
        setOptions(newOptions);

        if (options.length < 5) {
            setButtons(0);
        }
    };
    const checkForTwoText = () => {
        if (options.length > 2) {
            DeleteList(options.pop);
            DeleteList(options.pop);
        }
    };
    return (
        <Fragment>
            <div>
                <select exact value={surveyType} onChange={(evt) => { setSurveyType(evt.target.value) }}>
                    <option value="type">select queston type</option>
                    <option value="single">Single question</option>
                    <option value="multiple">Multiple question</option>
                </select>
            </div>
            {surveyType == 'single' ? <>
                <div className="survey-container">
                    <div className="survey-container1">
                        <input value="Which of the following apps you have on your phone?" className="question-box" />
                        <p>Options</p>
                        {checkForTwoText()}
                        {options.map(option => (
                            <div className="answer">
                                <input type="text" placeholder="Type answer here" />
                                <p onClick={repeatSingle}>➕</p>
                                <p onClick={() => { DeleteList(option) }}>➖</p>
                            </div>
                        ))}
                    </div>
                </div>
            </> : null}

            {surveyType == 'multiple' ? <>
                <div className="survey-container">
                    <div className="survey-container1">
                        <input value="Which of the following apps you have on your phone?" className="question-box" />
                        <p>Options</p>
                        {options.map(option => (
                            <div className="answer">
                                <input type="text" placeholder="Type answer here" value={option.value} onChange={(e) => {
                                    text(e.target.value);
                                }} />
                                <p onClick={repeat}>➕</p>
                                <p onClick={() => { DeleteList(option) }}>➖</p>
                            </div>
                        ))}
                    </div>
                </div>
            </> : null}
            {buttons === 1 ? (<>

                <Publish options={options}>Button
                </Publish>
          
            </>) : null}
        </Fragment>
    );
};
export default CreatePage;