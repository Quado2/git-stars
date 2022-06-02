import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { GitWrapper } from "./styles";
import { GitProfile } from "../../components/GitProfile";
import { getStaredRepo } from "../../api/github";
import { getLast30Days } from "../../utils/date";
import { GithubResponse } from "../../types";
import { Spinner } from "../../components/Spinner";

interface GitProps {}

function GitStars(props: GitProps) {
  const loadingRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [thirtyDaysAgo, setThirtyDaysAgo] = useState("");
  const [errorLoading, setErrorLoading] = useState(false);
  const [dataFinished, setDataFinished] = useState(false);

  const updatePage = useCallback(
    (entries: any) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (!loading) {
          setCurrentPage((currentPage) => currentPage + 1);
          console.log({ currentPage });
          setLoading(true);
        }
      } else {
        setLoading(false);
      }
    },
    [loading]
  );

  const onRetry = useCallback(() => {
    setErrorLoading(false);
    setCurrentPage((currentPage) => currentPage + 1);
  }, []);

  const options = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    }),
    []
  );

  //For setting and monitoring observer changes
  useEffect(() => {
    const observer = new IntersectionObserver(updatePage, options);
    if (loadingRef.current) observer.observe(loadingRef.current);
    const mainRef = loadingRef;
    return () => {
      if (mainRef.current) observer.unobserve(mainRef.current);
    };
  }, [options, loadingRef, updatePage]);

  //for fetching data on load
  useEffect(() => {
    const date = getLast30Days();
    setThirtyDaysAgo(date);

    async function getData() {
      const { error, data, finished }: GithubResponse = await getStaredRepo(
        date,
        currentPage
      );

      if (error) {
        setErrorLoading(true);
      } else if (finished) {
        setDataFinished(true);
      } else {
        if (typeof data === "object") {
          setRepos((currentRepos) => [...currentRepos, ...data]);
        }
      }
    }
    getData();
  }, [currentPage]);

  return (
    <GitWrapper>
      <div className="intro">
        <h1>Most starred github repo</h1>
        <h3>
          {` A list of most starred github repositories created in the last 30 days (from
          ${thirtyDaysAgo} to date)`}
        </h3>
      </div>

      {repos.length > 1 &&
        repos.map((repo, i) => (
          <GitProfile
            key={repo.id}
            avatarUrl={repo.owner.avatar_url}
            repoName={repo.name}
            repoDescription={repo.description}
            stars={repo.stargazers_count}
            issues={repo.open_issues}
            createdAt={repo.created_at}
            projectUrl = {repo.html_url}
          />
        ))}

      {dataFinished ? (
        <div className="item finished">
          <h3>Congratulations !! You have viewed all the top 1000 github repositories in the last 30 days.</h3>
        </div>
      ) : errorLoading ? (
        <div className="item error">
          <h3>An unexpected error occured while loading more data</h3>
          <button onClick={onRetry}>Retry loading</button>
        </div>
      ) : (
        <div ref={loadingRef} className="item loading-spinner">
          <Spinner />

          <h3>Loading Repositories</h3>
        </div>
      )}
    </GitWrapper>
  );
}

export default GitStars;
