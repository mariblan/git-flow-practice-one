import { useState } from 'react';
// import ExampleOutcome from './ExampleOutcome';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import Level4 from './Level4';
import Level5 from './Level5';
import Level6 from './Level6';
import Level7 from './Level7';
import Level8 from './Level8';
import Level9 from './Level9';
import Level10 from './Level10';
import Level11 from './Level11';
import Level12 from './Level12';
import Level13 from './Level13';
import Level14 from './Level14';
import Level15 from './Level15';
import Level16 from './Level16';

const Instructions = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const componentMap = {
    1: <Level1 />,
    2: <Level2 />,
    3: <Level3 />,
    4: <Level4 />,
    5: <Level5 />,
    6: <Level6 />,
    7: <Level7 />,
    8: <Level8 />,
    9: <Level9 />,
    10: <Level10 />,
    11: <Level11 />,
    12: <Level12 />,
    13: <Level13 />,
    14: <Level14 />,
    15: <Level15 />,
    16: <Level16 />,
  };

  const handleNext = () => {
    setActiveComponent((prevComponent) =>
      prevComponent < 17 ? prevComponent + 1 : prevComponent
    );
  };

  const handleBack = () => {
    setActiveComponent((prevComponent) =>
      prevComponent > 1 ? prevComponent - 1 : prevComponent
    );
  };

  return (
    <div className='block'>
      <div className='goal'>
        <h1>Git&Github flow practice</h1>
        <p>
          Git is a free and open-source version control system that is used as a
          tool to manage the source code of a project. It is a distributed
          version control system, which means that the entire codebase and
          history is available on every developer’s computer, which allows for
          easy branching and merging.
        </p>
        <p>
          Github is a code hosting platform for version control and
          collaboration, that uses git. It allows you to work on a project with
          other people, and it is a great tool to showcase your work.{' '}
        </p>
        <p>
          Knowing how to corretly work with both is essential for web
          developers, and therefore here we are going to practice the essential
          git and github commands and the flow of working with them.
        </p>
        <b>Your goal</b>: Create and nest React Components to display your UI.
        {/* <ExampleOutcome /> */}
      </div>
      <h3>
        Level {activeComponent} / {Object.keys(componentMap).length}
      </h3>
      <div className='levels example'>
        <button
          className='levelButton'
          onClick={handleBack}
          hidden={activeComponent === 1}
        >
          {`< Level ${activeComponent - 1}`}
        </button>
        <button
          className='levelButton'
          onClick={handleNext}
          hidden={activeComponent === Object.keys(componentMap).length}
        >
          {`Level ${activeComponent + 1} >`}
        </button>
      </div>
      {componentMap[activeComponent]}
      <div className='buttons'>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://react.dev/learn/describing-the-ui'
        >
          Describing the UI
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://react.dev/learn/your-first-component'
        >
          React Components
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://react.dev/learn/importing-and-exporting-components'
        >
          Modules: Importing and Exporting Components
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://react.dev/learn/writing-markup-with-jsx'
        >
          Writing Markup with JSX
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://react.dev/learn/javascript-in-jsx-with-curly-braces'
        >
          JavaScript in JSX with Curly Braces
        </a>
      </div>
    </div>
  );
};

export default Instructions;
