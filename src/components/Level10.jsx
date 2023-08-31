import { useState } from 'react';
const Level10 = () => {
  const [toggleDropdown, setToggleDropdown] = useState('none');
  const handleDropdown = () => {
    setToggleDropdown(toggleDropdown === 'none' ? 'block' : 'none');
  };
  return (
    <div className='level'>
      <h4>Protecting main</h4>
      <h5>
        Why not merging and pushing to main without a pull request? Part 2
        (Groups)
      </h5>
      <p>
        Let´s repeat the activity in level 8 but this time in gropus and with
        the new branches that you have just created in level 9.
      </p>
      <ul>
        <li>
          Check in which branch you currently are.
          <ul>
            <li>
              If you are´t in <b>main</b>, switch to it.
            </li>
          </ul>
        </li>
        <li>
          Merge the branch you have just created into <b>main</b>.
          <ul>
            <li>
              Solve any merge conflict by accepting the h1 that has your name on
              it.
            </li>
            <li>Stage the changes and commit them.</li>
          </ul>
        </li>

        <li>
          Push <b>main</b> to your remote.
          <ul>
            <li>
              Did all of you managed to push to the remote?
              <ul>
                <li>If not, try to figure out a way to solve this issue.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <button onClick={handleDropdown} className='dropdownButton'>
        Solution
      </button>
      <div className='solution' style={{ display: `${toggleDropdown}` }}>
        <p>
          As our <b>origin/main</b> is ahead of <b>main</b> by some commits, we
          need to bring in the latest code into our local repo to be able to
          commit. To do so, we need to do the following:
        </p>
        <ul>
          <li>
            Pull <b>origin/main</b> into <b>main</b>
          </li>
          <li>
            Resolve the merge conflict.
            <ul>
              <li>Accept both changes.</li>
              <li>Stage and commit.</li>
            </ul>
          </li>
          <li>
            Push into <b>origin/main</b>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Level10;
