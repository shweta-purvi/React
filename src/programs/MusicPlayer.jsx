import { useState } from 'react';
import './MusicPlayer.css';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);

  const playlist = [
    { id: 1, title: 'Summer Vibes', artist: 'The Band', duration: '3:45' },
    { id: 2, title: 'Moonlight', artist: 'Luna', duration: '4:20' },
    { id: 3, title: 'Electric Dreams', artist: 'Sync', duration: '3:32' },
  ];

  return (
    <div className="music-container">
      <div className="music-card">
        <div className="now-playing">
          <div className="album-art">
            🎵
          </div>
          <h2>Summer Vibes</h2>
          <p>The Band</p>
        </div>

        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="time-info">
            <span>1:08</span>
            <span>3:45</span>
          </div>
        </div>

        <div className="player-controls">
          <button className="control-btn">⏮</button>
          <button 
            className="control-btn play-btn"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="control-btn">⏭</button>
        </div>

        <div className="volume-section">
          <span>🔊</span>
          <input 
            type="range" 
            min="0" 
            max="100" 
            defaultValue="70"
            className="volume-slider"
          />
          <span>100%</span>
        </div>

        <div className="playlist">
          <h3>Playlist</h3>
          {playlist.map(song => (
            <div key={song.id} className="playlist-item">
              <div className="song-info">
                <p className="song-title">{song.title}</p>
                <p className="song-artist">{song.artist}</p>
              </div>
              <span className="duration">{song.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
