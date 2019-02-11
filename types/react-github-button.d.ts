declare interface GitHubButtonProps {
  type: 'stargazers' | 'watchers' | 'fork';
  size: 'default' | 'large';
  namespace: string;
  repo: string;
}

declare class GitHubButton extends React.Component<GitHubButtonProps> {}

export default GitHubButton;
