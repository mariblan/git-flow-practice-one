const Level12 = () => {
  return (
    <div className='level'>
      <h4>Pull requests</h4>
      <h5>Create a PR (Groups)</h5>
      <p>
        As the main branch is protected from unwanted pushes, the only way to
        actually change the code in it is through a pull request. Let’s learn
        how to do one:
      </p>
      <ul>
        <li>
          Each member of the group creates <b>dev</b> from <b>main</b> in their
          local repo and switch to it.
          <ul>
            <li>
              The name should be <b>dev</b>.
            </li>
            <li>
              Add a css file to <b>dev</b>.
            </li>
          </ul>
        </li>
        <li>
          One member pushes <b>dev</b> to the remote.
        </li>
        <li>
          The other members pull <b>origin/dev</b> into their local <b>dev</b>{' '}
          to make sure all of you are in the same startpoint.
          <ul>
            <li>
              Solve any merge issues that happen with this pull by accepting the
              incoming changes.
            </li>
          </ul>
        </li>
        <li>
          Each member has to create now a new branch from <b>dev</b>, not from{' '}
          <b>main</b>.
          <ul>
            <li>
              First, choose a feature to apply from the ones bellow:
              <ul>
                <li>
                  <b>Navbar</b> - <b>Home</b> - <b>About us</b> -{' '}
                  <b>Services</b> - <b>Footer</b>
                </li>
              </ul>
            </li>
            <li>
              Name the branch <b>feature/name-of-the-feature</b>.
            </li>
            <li>Add in the html and the css for your feature.</li>
            <li>Stage and commit the changes.</li>
          </ul>
        </li>
        <li>Push the new branch into the remote.</li>
        <li>
          Go to Github and click the “Compare & pull request” button on the push
          of our brand.
        </li>
        <li>
          Make sure to change the base of PR from <b>main</b> to <b>dev</b>, as
          the other branches will be merged first into <b>dev</b>.
        </li>
        <li>
          Add a comment describing what’s inside the code that you are trying to
          merge.
        </li>
        <li>Click on “Create pull request”.</li>
      </ul>
    </div>
  );
};

export default Level12;
