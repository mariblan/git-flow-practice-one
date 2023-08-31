const Level11 = () => {
  return (
    <div className='level'>
      <h4>Protecting main </h4>
      <h5>Github protection rules (Groups)</h5>
      <p>
        As you can see, now that <b>origin/main</b> has been updated with the
        code of one of the teammembers, it is causing issues for the others.
        This issues can happen when pushing into <b>origin/main</b> without a
        pull request, so our teammates dont know main has been updated. To avoid
        those issues, we can protect the main branch from unwanted pushes.
      </p>
      <ul>
        <li>
          Each one of the teammates can go to their own repo in Github.
          <ul>
            <li>
              Go into the repository:
              <ul>
                <li>
                  If there is a notification with{' '}
                  <i>Your branch isn´t protected</i>, just click on{' '}
                  <b>Protect this branch</b> button.
                </li>
                <li>
                  If not, go to the repository <i>Settings</i>
                  <ul>
                    <li>
                      Choose the <i>Branches</i> option on the left navigation
                      bar.
                    </li>
                    <li>
                      Click on the <i>Add branch protection rule</i>.
                    </li>
                    <li>
                      Add the name of the branch to protect, <b>main</b> in this
                      case.
                    </li>
                    <li>
                      Select the options:
                      <ul>
                        <li>Require a pull request before merging</li>
                        <li>
                          Require approvals(the number of required approvals it
                          will be set to 1)
                        </li>
                        <li>Do not allow bypassing the above settings.</li>
                      </ul>
                    </li>
                    <li>
                      Clik on the <i>Create</i> button at the bottom of the page
                      to create the rule.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Each member should push to <b>origin/main</b>
          <ul>
            <li>What is the result of that push?</li>
          </ul>
        </li>
        <li>
          Repeat now the process to create a second protection rule for a branch
          named <b>dev</b> that will be created in the next level.
        </li>
      </ul>
    </div>
  );
};

export default Level11;
