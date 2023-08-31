const Level2 = () => {
  return (
    <>
      <h4>Pushing code into a remote</h4>
      <p>
        In the activity before, an error occured when trying to push the code to
        the Github repository. Let's see how to solve it:
      </p>
      <ul>
        <li>
          Check the status of you repository. Do you see any untracked files
          (they are in red)?
        </li>
        <li>
          Stage the previous files and check the status again. The color of the
          files has changed now to green and we can see in the terminal that the
          changes are ready to be committed.
        </li>
        <li>
          Create a commit to save all the staged changes and check the status
          again.
        </li>
        <li>
          Now that we don’t have anything else to commit, we can continue to
          push our code to our remote repo:
          <ul>
            <li>
              Check if your local repo has added the connection to our remote
              repository on Github. If the connection is there, then we can
              continue to push our code.
            </li>
            <li>
              Go back to our browser, to the Github instructions to “push an
              existing repository from the command line”. The first line of that
              code is adding a remote, but we had already add it, so follow the
              other two instructions to finish the process.
            </li>
            <li>
              Now refresh your Github repository and... There is your code!{' '}
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
export default Level2;
