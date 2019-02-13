declare interface GitHubButtonProps {
  type: 'stargazers' | 'watchers' | 'fork';
  size?: 'large';
  namespace: string;
  repo: string;
}

declare class GitHubButton extends React.Component<GitHubButtonProps> {}

export default GitHubButton;
