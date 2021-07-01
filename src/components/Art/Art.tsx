import { SectionHeader } from "../common/SectionHeader";
import { FadeInSection } from "../common/FadeInSection";
import { MobileArt, DesktopArt } from ".";
import "./Art.scss";
import { isMobile } from "../../utils";

export const Art = () => {
  return (
    <div className="art">
      <FadeInSection>
        <SectionHeader>Art</SectionHeader>
        {isMobile ? <MobileArt /> : <DesktopArt />}
      </FadeInSection>
    </div>
  );
};
