import styled from "styled-components";
import { getDaysAgo } from "../utils/date";

export interface IGitProfileProps {
  avatarUrl: string;
  repoName: string;
  repoDescription: string;
  stars: number;
  issues: number;
  createdAt: string;
}

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  box-sizing: border-box;
  box-shadow: #00000033 1px 1px 10px;
  margin: 1rem;
  padding: 1.2rem 0.5rem;
  border-radius: 0.1rem;
  flex-direction: column;

  @media screen and (min-width: 481px) {
    flex-direction: row;
  }

  @media screen and (min-width: 768px) {
   
    padding: 1rem 2rem;
    margin: 1rem 10%;
  }

  .avatar {
    width: 80%;
    img {
      width: 100%;
    }

    @media screen and (min-width: 481px) {
      width: 10rem;
    }
  }

  .repo {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem 0;

    @media screen and (min-width: 481px) {
      width: 75%;
      padding: 0 1.3rem;
    }

    .repo-name h2 {
      font-size: 1.1rem;
      font-weight: 500;
      color: #3d3d3d;
      padding-bottom: .5rem;

      @media screen and (min-width: 481px) {
        font-size: 1.5rem;
        line-height: 2rem;
        padding-bottom: 0;
      }
    }

    .repo-desc h4 {
      font-size: 0.8rem;
      font-weight: 300;
      line-height: 1rem;
      text-align: justify;
      color: #555555;
      padding-bottom: .5rem;

      @media screen and (min-width: 481px) {
        font-size: 1rem;
        margin: 0.5rem 0;
      }
    }

    .repo-detail {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      flex-wrap: wrap;
      

      h4 {
        font-size: 0.8rem;
        font-weight: 400;
        line-height: 1.5rem;
        color: #555555;
        
        span {
          color: #3d3d3d;
          font-weight: 500;
        }

        @media screen and (min-width: 481px) {
          font-size: 0.9rem;
        }
      }

      .stars,
      .issues {
        border: 1px solid black;
        margin: 0.5rem 0.5rem 0 0;
        padding: 0.2rem 0.3rem;
        margin-bottom: .5rem;
      }
    }
  }

  .repo-detail {
    display: flex;
  }
`;


export function GitProfile({
  repoName,
  avatarUrl,
  repoDescription,
  stars,
  issues,
  createdAt,
}: IGitProfileProps) {
  const daysAgo = getDaysAgo(createdAt);
  return (
    <ProfileWrapper>
      <div className="avatar">
        <img src={avatarUrl} alt={repoDescription} />
      </div>
      <div className="repo">
        <div className="repo-name">
          <h2>{repoName}</h2>
        </div>
        <div className="repo-desc">
          <h4>{repoDescription}</h4>
        </div>
        <div className="repo-detail">
          <span className="stars">
            <h4>
              <span>Stars: </span>
              {stars}
            </h4>
          </span>
          <span className="issues">
            <h4>
              <span>Issues: </span> {issues}
            </h4>
          </span>
          <span className="interval">
            <h4>
              Submited {daysAgo} {daysAgo > 1 ? "days" : "day"} ago by{" "}
              {repoName}
            </h4>
          </span>
        </div>
      </div>
    </ProfileWrapper>
  );
}
