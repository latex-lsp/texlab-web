import React from 'react';

interface GithubButtonProps {
  href: string;
  title?: string;
  icon?: 'eye' | 'star' | 'repo-forked' | 'issue-opened' | 'cloud-download';
  size?: 'large';
  showCount?: boolean;
  text?: string;
  ariaLabel?: string;
}

export class GithubButton extends React.Component<GithubButtonProps> {
  private containerRef = React.createRef<HTMLDivElement>();

  public componentDidMount() {
    const container = this.containerRef.current!!;
    const { href, icon, size, showCount, text, title, ariaLabel } = this.props;
    const options = {
      href,
      title,
      'data-icon': `octicon-${icon}`,
      'data-size': size,
      'data-show-count': showCount,
      'data-text': text,
      'aria-label': ariaLabel,
    };

    import('github-buttons').then(({ render }) =>
      render(options, element => container.appendChild(element)),
    );
  }

  public render() {
    return <div ref={this.containerRef} />;
  }
}
