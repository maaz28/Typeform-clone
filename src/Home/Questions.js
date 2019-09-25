import React, { useState, useEffect } from 'react';
import { Input, Icon, Button } from 'antd';
import { isMobile } from 'react-device-detect';

export default function Questions({
  item,
  index,
  isSubmit,
  inputDataHandler,
  submitBtnHandler
}) {
  const [value, setValue] = useState({
  });

  useEffect(() => {
    // Update the document title using the browser API
    document.getElementById("0").focus();
    console.log('render');
  }, []);

  const clickHandler = (link, i) => {
    console.log(i);
    location.href = `#${link}`;
    setTimeout(() => {
      document.getElementById(i.toString()).focus();
    }, 1100);
  };

  const inputHandler = (e) => {
    console.log(e.target.name, e.target.value);
    console.log(value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    inputDataHandler(e.target.name, e.target.value);
  };

  const submitHandler = () => {
    submitBtnHandler();
  };

  return (
    <div >
      <div className="title">
        <h2>
          <span className="count">
            {index + 1} &nbsp;
            <Icon type="arrow-right" />
          </span>&nbsp;
          <span className="title">
            {item.title}
          </span>
        </h2>
      </div>
      <Input
        placeholder="Type your answer here..."
        name={item.id}
        id={index}
        className="typeform-input"
        onPressEnter={() => clickHandler(item.link, item.i)}
        // style={{ marginBottom: '5%', backgroundColor: '#F1ECE2' }}
        onChange={
          inputHandler
        }
      />
      <br />
      {
        isSubmit ?
          <Button id="submit-btn" onClick={submitHandler}>
            SUBMIT
          </Button>
          :
          <div>
            <Button
              hidden={isMobile}
              icon="check"
              id="enter-btn"
              onClick={() => clickHandler(item.link, item.i)}
            >
              OK
            </Button>
            <span className="press-enter"> press <span className="bold">ENTER</span></span>
          </div>
      }
    </div>
  );
}
