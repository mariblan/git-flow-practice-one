const Level14 = () => {
  return (
    <div className='level'>
      <h4>Pull requests</h4>
      <h5>Reviewing and approving a PR Part 2 (Groups)</h5>
      <p>
        Now that one of the features have been merge, all of you can check the
        other PRs in Github. They have a notification that the branch of the PR
        has now conflicts that must be solved before merging. This happens
        because a another branch has been merged with <b>dev</b> and the PR
        branch is not up to date.
      </p>
      <ul>
        <li>
          Now that our code has been updated into both <b>origin/dev</b> and{' '}
          <b>dev</b>, it is necessary to update our local branches so all of
          them have the same source code and can be merged without conflicts:
          <ul>
            <li>
              Switch to your branch and pull <b>origin/dev</b> into it.
            </li>
            <li>
              Solve the merge conflict making sure the code been pull as well as
              the one in your branch stays there.
            </li>
            <li>Push your branch to the remote with those changes.</li>
          </ul>
        </li>
      </ul>
      <p>
        If you check again now, the PRs should be able to be merged with{' '}
        <b>origin/dev</b>.{' '}
        <b>
          Don´t merge them yet though, we are going to use the branches in the
          next level.
        </b>
      </p>
    </div>
  );
};

export default Level14;
