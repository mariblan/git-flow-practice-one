const Level16 = () => {
  return (
    <>
      <h4>
        Merging into <b>dev</b> and <b>main</b>
      </h4>
      <h5>(Groups)</h5>
      <p>
        Now that the drill of how to approve and merge a PR is clear, let´s
        repeat the process to merge all branches with <b>dev</b>.
      </p>
      <ul>
        <li>Merge all the other PRs following the steps in level 14.</li>
        <li>
          Once <b>dev</b> has all the code from the other branches, the person
          who merged the navbar will create a PR to merge <b>dev</b> into{' '}
          <b>main</b>.
        </li>
        <li>
          The other members review and approve the PR following the steps in
          level 15.
        </li>
        <li>
          Merge <b>dev</b> with <b>main</b>
        </li>
        .
      </ul>
    </>
  );
};
export default Level16;
