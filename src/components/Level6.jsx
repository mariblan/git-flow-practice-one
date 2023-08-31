const Level6 = () => {
  return (
    <div className='level'>
      <h4>Solving merge conflicts</h4>
      <h5>(Individual)</h5>
      <p>
        The “trial” branchs is currently under a merge conflict because of
        pulling the code from “trial2”. Let’s solve it:
      </p>
      <ul>
        <li>
          Study the code in the merge conflict and identify the current change
          from the incoming change.
          <ul>
            <li>Which one is the code from “trial”?</li>
            <li>
              Which one is the code that we have just pulled from the branch
              “trial2”?
            </li>
          </ul>
        </li>
        <li>
          Once you have identified the changes, delete the code that you don’t
          want to keep:
          <ul>
            <li>
              In this case, let’s keep the code that come’s from “trial2”.
            </li>
          </ul>
          <i>
            This step can be done manually, using the “Accept Incoming
            Change”/“Accept Current Change” or using the merge editor tool from
            VS Code.
          </i>
        </li>
        <li>
          Once the conflict is solved, stage the changes and commit them to
          finish the merge successfully.
        </li>
        <li>Push the “trial” branch changes to the remote.</li>
      </ul>
    </div>
  );
};

export default Level6;
