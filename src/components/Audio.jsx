import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const PlayAudio = ({ data }) => {
  function playAudio() {
    let audio = new Audio(data.phonetics[0].audio);
    audio.play();
  }

  return (
    <div className='bg-purple-200 rounded-full p-4'>
      <div
        onClick={() => {
          playAudio();
        }}
      >
        <BsFillPlayCircleFill className='text-purple-700' size={40} />
      </div>
    </div>
  );
};

export default PlayAudio;
