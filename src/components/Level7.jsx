import { useState } from 'react';
const Level7 = () => {
  const [toggleDropdown, setToggleDropdown] = useState('none');
  const handleDropdown = () => {
    setToggleDropdown(toggleDropdown === 'none' ? 'block' : 'none');
  };
  return (
    <>
      <h4>Protecting main</h4>
      <h5>Why not working in main?</h5>
      <p>
        In the previous activities, we have seen how the flow of creating,
        pushing and pulling branches and storing changes in those branches
        works.
      </p>
      <p>
        You could have observed that, except in the initial set up of the
        index.html file, no work is done directly on <b>main</b>. That is
        because <b>main</b> is the branch that should have the final code of the
        program, and it should only be updated when the code is ready to be
        deployed.
      </p>
      <p>
        To understand why it is so important to keep <b>main</b> free of any
        other code but the final code, let´s do a small trial:
      </p>
      <ul>
        <li>
          Go to Github and check if it is possible to merge the <b>trial</b> and{' '}
          <b>trial2</b> branches with main.
          <ul>
            <li>
              <i>What´s the result?</i>
            </li>
          </ul>
        </li>
        <li>
          Go back to your vs code and check in which branch you currently are.
          <ul>
            <li>
              If you are not in <b>main</b>, switch to it.
            </li>
            <li>
              You can observe that there is no h1, as it is something that was
              only develope in the <b>trial</b> and <b>trial2</b> branches.
              <ul>
                <li>
                  Add a new h1 with the text <i>This is main</i>
                </li>
                <li>
                  Do the general flow to push those changes into our <b>main</b>{' '}
                  in the remote.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          Go to Github and check again if <b>trial</b> and <b>trial2</b> can be
          merge.
          <ul>
            <li>
              <i>
                Has the result changed from when you first checked? Why do you
                think it is and how can you solve it?
              </i>
            </li>
          </ul>
        </li>
      </ul>
      <button onClick={handleDropdown} className='dropdownButton'>
        Solution
      </button>
      <div className='solution' style={{ display: `${toggleDropdown}` }}>
        <p>
          As our main branch has been updated, we need to update our other
          branches so they can be merged into main. To do so, we need to do the
          following:
        </p>
        <ul>
          <li>
            Switch to <b>trial</b> and pull the latest code from{' '}
            <b>origin/main.</b>
            <ul>
              <li>
                Resolve the merge conflict and push the changes to the remote.
              </li>
            </ul>
          </li>
          <li>
            Do the same with <b>trial2</b>.
          </li>
        </ul>
        <p>
          <i>
            If you check again now in your Github repository <b>trial</b> and{' '}
            <b>trial2</b> can be merged with main withoug issue.
          </i>
        </p>
      </div>
    </>
  );
};

export default Level7;
