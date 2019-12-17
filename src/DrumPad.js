import React from 'react';

class DrumPad extends React.Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }

  componenWillUnmounf() {
    document.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }

  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }

  render() {
    return (
      <div
        className={this.props.style}
        id={this.props.id}
        onClick={this.handleClick}
        >
        <div className="letter">{this.props.letter}</div>
        <audio
          id={this.props.letter}
          className="clip"
          src={this.props.src}
          ref={ref => this.audio = ref}
          ></audio>
        </div>
    )
  }
}

export default DrumPad;
