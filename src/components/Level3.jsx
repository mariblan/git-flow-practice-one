const Level3 = () => {
  return (
    <>
      <h4>Create branches</h4>
      <p>
        For the git and github flow to work, it is fundamental to know how to
        create, push, pull and merge branches. Let's first see how to create new
        branches and manage their code:
      </p>
      <ul>
        <li>
          Create and move to a new branch named “trial”.
          <ul>
            <li>
              Add a h1 title with the text “This is a trial” on the{' '}
              <b>index.html</b>.
            </li>
          </ul>
        </li>
        <li>
          Create and move to another branch named “trial2”.
          <ul>
            <li>Check the status to see if you have untracked files.</li>
            <li>Stage the changes in the file.</li>
            <li>
              Check the status again to make sure the changes have been staged.
            </li>
            <li>Commit the changes.</li>
          </ul>
        </li>
        <li>
          Now return to the branch “trial”. What has happened with your h1
          title? Why?
        </li>
      </ul>
    </>
  );
};

export default Level3;
