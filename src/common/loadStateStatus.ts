import {LoadState} from "./loadState";

export function isLoading(loadState?: LoadState): boolean {
  return loadState == LoadState.refreshing || loadState == LoadState.loadingMore || loadState == LoadState.firstLoad;
}
