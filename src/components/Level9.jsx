const Level9 = () => {
  return (
    <div className='level'>
      <h4>Cloning a repository</h4>
      <h5>(Groups)</h5>
      <p>
        Now we want to repeat the previous activity but this time working in
        groups. For that, we will need to share our repositories with our
        teammates first.
      </p>
      <ul>
        <li>
          Setting up the repositories for group work:
          <ul>
            <li>Clone the repos of your teammates and let them clone yours.</li>
            <li>
              Add them as collaborators in your Github repo in <i>Settings</i>.
            </li>
            <li>Accept the invitations of your teammates to their repos.</li>
            <li>
              Delete the branches <b>trial</b> and <b>trial2</b> from both your
              local and your remote repositories, as we are't going to use them
              anymore.
            </li>
            <li>
              Decide in which repo you are going to be working from now on in
              the group and each person should create a new branch in it.
              <ul>
                <li>
                  Name the branch <b>feature/h1yourname</b>.
                </li>
                <li>
                  Update the h1 to say <i>This is yourname´s branch.</i>
                </li>
                <li>Stage and commit the changes.</li>
                <li>Push your branch to the repo.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Level9;
