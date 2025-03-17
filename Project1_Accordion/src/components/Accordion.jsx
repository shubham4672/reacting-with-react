import React from "react";
import data from "./data";
import "./Accordion.css";

const Accordion = () => {
  const [seleted, setSelected] = React.useState(null);

  const handleSelection = (curId) => {
    setSelected(curId === seleted ? null : curId);
  };

  return (
    <div className='wrapper'>
      <div className='accordion'>
        {data && data.length ? (
          <div>
            {data.map((item) => (
              <div className='item'>
                <div className='title' onClick={() => handleSelection(item.id)}>
                  <h3>{item.name}</h3>
                  <span>+</span>
                </div>
                {seleted == item.id ? (
                  <div className='content'>
                    User email: {item.email}, and is {item.age} years old.
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
