const Level15 = () => {
  return (
    <>
      <h4>Reviewing and approving a Pull request</h4>
      <h5>Part 3(Groups)</h5>
      <p>
        Now that we know how to fix this little issues when a branch is merge,
        let´s do it again with the other branches. However, this time, we are
        going to practice also how to review each other´s code and give feedback
        to our teammates.
      </p>
      <ul>
        <li>
          Each member chooses a PR to review. All of you should review a PR, and
          all PRs should be reviewed by at least one person.
        </li>
        <li>
          In your local:
          <ul>
            <li>
              Create a new branch from <b>dev</b> with the name of the branch in
              the PR you are reviewing.
            </li>
            <li>Pull the code from the remote branch into your local one.</li>
            <li>
              Check the code in there and decide on one change you want to make
              in it.
              <ul>
                <li>
                  Go to the PR in Github and leave a comment with the change
                  that needs to be implemented.
                </li>
              </ul>
            </li>
            <li>
              Check your own PR for any changes that you need to implement.
              <ul>
                <li>Switch to your branch.</li>
                <li>Add the changes suggested.</li>
                <li>Push the changes into the remote.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Go to Github now, see if the changes you suggested have been
          implemented in the PR.
          <ul>
            <li>Once the have been implemented, aprove the PR.</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Level15;
