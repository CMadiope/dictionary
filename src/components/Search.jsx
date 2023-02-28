import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import PlayAudio from "./Audio";
import Axios from "axios";

const Search = ({ darkMode }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const searchRef = useRef();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const fetchWord = async () => {
    Axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input}
`
    ).then((res) => {
      setData(res.data[0]);
      console.log(data);
    });
  };
  useEffect(() => {
    try {
      fetchWord;
    } catch (error) {
      console.log(err);
    }
  }, []);

  function playAudio() {
    let audio = new Audio(data.phonetics[0].audio);
    audio.play();
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='h-[100%] bg-white dark:bg-black p-10 md:px-32 lg:px-56'>
        <div className='flex justify-between items-center bg-gray-200 rounded-lg px-6 py-2 dark:bg-gray-800/60'>
          <input
            type='text'
            placeholder='Type a word to search'
            className='bg-transparent outline-none text-2xl dark:text-white'
            onChange={handleChange}
            ref={searchRef}
          />
          <BsSearch
            size={20}
            className='text-gray-500 dark:text-purple-700 cursor-pointer'
            onClick={fetchWord}
          />
        </div>
        <div className=' font-bold py-8 dark:text-white'>
          {data && (
            <div>
              <div className='dark:text-white flex justify-between items-center'>
                <div>
                  <h2 className='text-3xl'>{data.word} </h2>
                  <p className='text-purple-700 font-normal py-6 text-xl'>
                    {data.phonetic}
                  </p>
                </div>
                <div className='cursor-pointer'>
                  <PlayAudio data={data} />
                </div>
              </div>
              <div className='flex'>
                <h4 className='text-lg'>noun</h4>

                <hr className='h-[2px] bg-gray-400 w-full my-3 ml-[5%]' />
              </div>
              <h3 className='text-lg text-gray-500 font-light py-4'>Meaning</h3>
              <ul className='pl-8'>
                {data.meanings[0].definitions.map((item, index) => (
                  <li
                    key={index}
                    className='list-disc py-2 font-light text-gray-500'
                  >
                    {item.definition}
                  </li>
                ))}
              </ul>
              <div className='flex items-center gap-4'>
                <h4 className='py-4 text-lg'>Synonyms</h4>
                <p className='text-purple-700'>{data.meanings[0].synonyms}</p>
              </div>
              <div className='flex py-4'>
                <h4 className='text-lg'>verb</h4>

                <hr className='h-[2px] bg-gray-400 w-full my-3 ml-[5%]' />
              </div>
              <h3 className='text-lg text-gray-500 font-light py-4'>Meaning</h3>
              <ul className='pl-8'>
                {data.meanings[1]?.definitions.map((item, index) => (
                  <li
                    key={index}
                    className='list-disc py-2 font-light text-gray-500'
                  >
                    {item.definition}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
