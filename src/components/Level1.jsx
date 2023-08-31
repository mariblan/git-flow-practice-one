const Level1 = () => {
  return (
    <div className='level'>
      <h4>Create a repository and connect it to a remote</h4>
      <h5>(Individual)</h5>
      <p>
        The first thing to be able to work with git and github is to create the
        set up. So, let´s create te repositories and the conection between them
        so we can start practicing.
      </p>
      <ul>
        <li>
          Create a new local repository in your computer and open it with VS
          Code:
          <ul>
            <li>Add a file named index.html.</li>
            <li>Add a boiler plate typing “html:5” and clicking enter.</li>
          </ul>
        </li>
        <li>
          Create a remote repository in Github
          <ul>
            <li>Name it git-flow-practice</li>
            <li>Hit create repository</li>
            <li>
              Follow the quick setup instructions to push an exiting repository
              from the command line (second option that Github will give you).
              Did you get any errors? If you did, why? Search the error in
              google and see if you can solve this issue on your own.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Level1;
