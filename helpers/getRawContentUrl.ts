const gitHubUrlBase = 'github';
export const rawContentUrlBase = 'raw.githubusercontent';

export const getRawContentUrl = (repo: string) =>
  `${repo.replace(gitHubUrlBase, rawContentUrlBase)}/master`;
