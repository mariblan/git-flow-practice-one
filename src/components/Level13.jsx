const Level13 = () => {
  return (
    <div className='level'>
      <h4>Pull requests</h4>
      <h5>Reviewing and approving a PR Part 1 (Groups)</h5>
      <p>
        All the new pull requests from the team have been created, and when
        going inside each one, it can be seen that the merge is blocked because
        it needs to be reviewed and approved. This is the best way to avoid
        unwanted code to be accidentally merged into <b>main</b> when working in
        teams and causing unnecesary issues.
      </p>
      <p>
        Let´s review each other´s PRs now, so all the new branches can be merged
        with <b>main</b>
      </p>
      <ul>
        <li>
          All members go to Github:
          <ul>
            <li>
              Go into the <i>Pull Request</i> option inside the Github repo.
            </li>
            <li>Choose the name of the Navbar PR.</li>
            <li>
              One of you is going to approve that PR (it can´t be the person who
              created it).
            </li>
            <li>
              Once the PR is aprove, you merge it with <b>origin/dev</b>.
            </li>
            <li>
              Delete the merged branch from both the remote and your local repo.
              <ul>
                <li>
                  It is a good practice to delete branches that have been
                  already merged, to keep your working tree clean.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          Back to your repos:
          <ul>
            <li>
              Make sure you are in the <b>dev</b> branch.
            </li>
            <li>
              Pull <b>origin/dev</b> to make sure it stays up to date with the
              changes in the remote.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Level13;
