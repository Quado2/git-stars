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
    return {
      error: false,
      errorMessage: "",
      data: repoResponse?.data?.items,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      errorMessage: "Something went wrong",
      data: [],
    };
  }
}
