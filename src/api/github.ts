//import axios from 'axios'

import axios from "axios";
import { GithubResponse } from "../types";

export async function getStaredRepo(
  date: string,
  pageNumber: number
): Promise<GithubResponse> {
  let hasError = false;
  const URL = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${pageNumber}`;
  try {
    const repoResponse = await axios.get(URL);
    //check if there is no further response.
    //this happens ussually on the 35th page
    if (!repoResponse.data.total_count) {
      return {
        error: false,
        errorMessage: "",
        data: [],
        finished: true,
      };
    }
    return {
      error: false,
      errorMessage: "",
      data: repoResponse?.data?.items,
      finished: false,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      errorMessage: "Something went wrong",
      data: [],
      finished: false,
    };
  }
}
