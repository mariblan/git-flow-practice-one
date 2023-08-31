const Level5 = () => {
  return (
    <div className='level'>
      <h4>Pull code from the remote to a local branch</h4>
      <h5>(Individual)</h5>
      <p>
        Currently there are three branches in your remote repository: “main”,
        “trial” and “trial2”. Let’s pull the code from the remote “trial2”
        branch to the local “trial” branch:
      </p>
      <ul>
        <li>
          Check in which branch you are currently:
          <ul>
            <li>If you are not in “trial” switch to it.</li>
            <li>Pull the code from “trial2”.</li>
          </ul>
          <i>What has just happened? Why?</i>
        </li>
      </ul>
    </div>
  );
};

export default Level5;
