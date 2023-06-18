import "./Badge.css";
import { GiPoliceBadge } from "react-icons/gi";
import { DiGithubBadge } from "react-icons/di";
export const PoliceBadge = () => {
  return (
    <div className="badge-page-container">
      <GiPoliceBadge className="badge-page-image" />
    </div>
  );
};

export const GithubBadge = () => {
  return (
    <div className="girhub-badge-container">
      <DiGithubBadge className="github-badge-image" />
    </div>
  );
};
