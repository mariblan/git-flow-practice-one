const Level8 = () => {
  return (
    <div className='level'>
      <h4>Protecting main</h4>
      <h5>
        Why not merging and pushing to main without a pull request? Part 1
        (Individual)
      </h5>
      <p>
        In the previous part of this activity, we have seen how writing code in
        main and pushing it to the remote can cause issues when trying to merge
        other branches.
      </p>
      <p>
        This can be solve by working only in the other branches. But then, how
        do we get the code back to main? Can we merge an push the code without a
        conflict?
      </p>

      <ul>
        <li>
          Let´s test out if we can merge <b>trial</b> into <b>main</b> and push
          it to the <b>origin/main</b> branch. To do so:
          <ul>
            <li>
              Switch to <b>trial</b>:
              <ul>
                <li>
                  Update the value of the h1 to <i>This is a merge</i>.
                </li>
                <li>
                  Push your changes to the remote branch <b>trial</b>.
                </li>
              </ul>
            </li>
            <li>
              Switch to <b>main</b> and pull the code of the <b>trial</b> branch
              from the remote.
            </li>
            <li>
              Check the status of <b>main</b>:
              <ul>
                <li>
                  You will see that your branch is ahead of <b>origin/main</b>{' '}
                  by some commits. Those are the commits of the <b>trial</b>{' '}
                  branch that had been added to our main branch.
                </li>
              </ul>
            </li>
            <li>
              Push <b>main</b> to the remote.
            </li>
            <li>
              Go to your repository on Github and check the new code in{' '}
              <b>main</b>.
            </li>
          </ul>
        </li>
      </ul>
      <p>
        You can see that you were able to push the code into the <b>main</b>{' '}
        branch without a problem. That is ok right now, because you are the only
        one working in this project. But imagine now that you are collaborating
        with other 10 programmers and all of you keep pushing any new code into
        main withoug testing. That would be a mess!
      </p>
      <p>Actually, let´s test that.</p>
      <p>From now on let´s work in groups!</p>
    </div>
  );
};

export default Level8;
