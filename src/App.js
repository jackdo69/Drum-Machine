import React from 'react';
import DrumPad from './DrumPad';

const data = [
  { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
  { id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
  { id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
  { id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
  { id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
  { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
  { id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
]

class DrumMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display:'Click or Press a pad',
      style:'drum-pad'
    }
    this.handleDisplay = this.handleDisplay.bind(this)
  }

  handleDisplay = (display) => this.setState({display})

  render() {
    return(
      <div id="drum-machine">
        <div id="display">
        <h3>{this.state.display}</h3>

        </div>
        <div id="drum-pads">
          {data.map(d => (
            <DrumPad
              style={this.state.style}
              key={d.id}
              id={d.id}
              letter={d.letter}
              src={d.src}
              handleDisplay={this.handleDisplay} />
            ))}
        </div>
      </div>
    )
  }
}

export default DrumMachine;
