const Level4 = () => {
  return (
    <>
      <h4>Push branches to the remote</h4>
      <p>
        The previous activity show us how to create new branches and be careful
        about not taking our code from one branch to another. Now let’s add
        those branches to our remote repository:
      </p>
      <ul>
        <li>
          On the “trial” file:
          <ul>
            <li>
              Re-write the h1 title in the “trial” branch to be “My new trial”.
            </li>
            <li>Stage the changes and commit them.</li>
            <li>Push the branch “trial” to your remote repository.</li>
          </ul>
        </li>
        <li>
          Change to the “trial2” branch:
          <ul>
            <li>Push it to the remote repository.</li>
          </ul>
        </li>
        <li>Go to your repository on Github.</li>
        <ul>
          <li>
            Now you have three branches there: “main”, “trial” and “trial2”.
          </li>
          <li>
            You also have a notification that “trial” and “trial2” had recent
            pushes and a button to compare the code and create a pull request to
            merge.
            <ul>
              <li>
                If you click on the button and enter it, you can see that it can
                directly be merged with main.
              </li>
            </ul>
          </li>
          <li>
            There is also a notification that says your main branch isn’t
            protected. Protecting our main branch is really important, and in
            the step 8 we are going to see why.
          </li>
        </ul>
      </ul>
    </>
  );
};

export default Level4;
