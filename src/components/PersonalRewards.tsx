import { FunctionComponent, useCallback } from "react";
import "./PersonalRewards.css";

type PersonalRewardsType = {
  number?: string;
};

const PersonalRewards: FunctionComponent<PersonalRewardsType> = ({
  number = "1,000",
}) => {
  const onFrameContainer19Click = useCallback(() => {
    //TODO: show tooltip
  }, []);

  return (
    <div className="frame-div19" onClick={onFrameContainer19Click}>
      <div className="frame-div20">
        <img
          className="cryptoperp-icon2"
          alt=""
          src="../assets/cryptoperp1.svg"
        />
        <div className="div2">{number}</div>
      </div>
    </div>
  );
};

export default PersonalRewards;
