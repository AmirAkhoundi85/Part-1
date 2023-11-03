import React from 'react'


const Part = ({name, exercises}) => {
  return (
    <div>
      <p>
        {name},  Number of exercises:  {exercises}
      </p>
      
    </div>
  );
}

export default Part