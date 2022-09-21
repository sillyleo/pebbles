import { FunctionComponent, useEffect } from "react";
import "./FigmaRewardStatus1.css";

type FigmaRewardStatus1Type = {
  apr7Apr142022?: string;
};

const FigmaRewardStatus1: FunctionComponent<FigmaRewardStatus1Type> = ({
  apr7Apr142022 = "wrewer",
}) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="figma-reward-status1" data-animate-on-scroll>
      <div className="frame-div34">
        <p className="rewards-status-apr-7-14-205">Last Settlememt</p>
        <div className="frame-div35">
          <div className="apr-7-apr-14-20221">{apr7Apr142022}</div>
        </div>
        <div className="line-div9" />
      </div>
      <div className="frame-div36">
        <div className="rewards-status-apr-7-14-206" />
        <img className="line-icon4" alt="" src="../assets/line-80.svg" />
        <div className="frame-div37">
          <div className="frame-div38">
            <img
              className="cryptoveperp-icon6"
              alt=""
              src="../assets/cryptoveperp.svg"
            />
            <div className="div7">Market</div>
          </div>
        </div>
        <div className="frame-div39">
          <div className="frame-div40">
            <img
              className="cryptoveperp-icon6"
              alt=""
              src="../assets/cryptoveperp1.svg"
            />
            <div className="div7">Mine</div>
          </div>
        </div>
        <div className="line-div10" />
        <div className="line-div11" />
      </div>
      <div className="frame-div41">
        <p className="rewards-status-apr-7-14-207">Volume</p>
        <img className="line-icon4" alt="" src="../assets/line-80.svg" />
        <div className="frame-div37">
          <div className="frame-div38">
            <img
              className="cryptoveperp-icon6"
              alt=""
              src="../assets/cryptoveperp2.svg"
            />
            <div className="div9">$100,000,000</div>
          </div>
        </div>
        <div className="frame-div39">
          <div className="frame-div40">
            <img
              className="cryptoveperp-icon6"
              alt=""
              src="../assets/cryptoveperp3.svg"
            />
            <div className="div9">$10,000</div>
          </div>
        </div>
        <div className="line-div10" />
        <div className="line-div11" />
      </div>
      <div className="frame-div41">
        <p className="rewards-status-apr-7-14-207">vePERP</p>
        <img className="line-icon4" alt="" src="../assets/line-80.svg" />
        <div className="frame-div37">
          <div className="frame-div38">
            <img
              className="cryptoveperp-icon10"
              alt=""
              src="../assets/cryptoveperp4.svg"
            />
            <div className="div9">10,000,000</div>
          </div>
        </div>
        <div className="frame-div39">
          <div className="frame-div40">
            <img
              className="cryptoveperp-icon10"
              alt=""
              src="../assets/cryptoveperp5.svg"
            />
            <div className="div9">1,000 (0.1%)</div>
          </div>
        </div>
        <div className="line-div10" />
        <div className="line-div11" />
      </div>
      <div className="frame-div41">
        <p className="rewards-status-apr-7-14-207">Rewards</p>
        <img className="line-icon4" alt="" src="../assets/line-80.svg" />
        <div className="frame-div37">
          <div className="frame-div38">
            <img
              className="cryptoveperp-icon10"
              alt=""
              src="../assets/cryptoperp.svg"
            />
            <div className="div9">10,000,000</div>
          </div>
        </div>
        <div className="frame-div39">
          <div className="frame-div40">
            <img
              className="cryptoveperp-icon10"
              alt=""
              src="../assets/cryptoperp1.svg"
            />
            <div className="div9">1,000</div>
          </div>
        </div>
        <div className="line-div16" />
        <div className="line-div11" />
      </div>
    </div>
  );
};

export default FigmaRewardStatus1;
