
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Audio URL - replace with your own background music
  const audioUrl = "https://cdn.pixabay.com/audio/2022/01/18/audio_d0d438fb0d.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.volume = 0.2; // Set a comfortable volume level
      audio.play().catch(err => {
        console.error("Audio playback failed:", err);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={audioUrl} loop />
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlayback}
        className="rounded-full w-10 h-10 bg-secondary/50 hover:bg-secondary transition-all duration-300"
        aria-label={isPlaying ? "Mute background music" : "Play background music"}
      >
        {isPlaying ? (
          <Volume2 className="h-[1.2rem] w-[1.2rem] text-purple hover:text-purple-light transition-colors" />
        ) : (
          <VolumeX className="h-[1.2rem] w-[1.2rem] text-purple hover:text-purple-light transition-colors" />
        )}
      </Button>
    </div>
  );
};

export default AudioPlayer;
