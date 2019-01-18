import React from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';

interface VideoProps {
  src: string;
}

export class Video extends React.Component<VideoProps> {
  private videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props: VideoProps) {
    super(props);
    this.videoRef = React.createRef();
  }

  public render() {
    return (
      <ReactVisibilitySensor onChange={this.handleOnChange}>
        <video
          ref={this.videoRef}
          loop={true}
          muted={true}
          playsInline={true}
          src={this.props.src}
        />
      </ReactVisibilitySensor>
    );
  }

  private handleOnChange = (isVisible: boolean) => {
    const video = this.videoRef.current;
    if (video) {
      isVisible ? video.play() : video.pause();
    }
  };
}
