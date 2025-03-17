import Button from './Button';
import Kpoplist  from './Kpoplist';
// eslint-disable-next-line no-unused-vars
import React from 'react';

function Main({data, playlist, setPlaylist}){
  return(
    <>
      <Button data={data} setPlaylist={setPlaylist} filterType="redvelvet">
        레드벨벳 노래 찾기
      </Button>
      <Button data={data} setPlaylist={setPlaylist} filterType="mal;e">
        남자 아티스트 노래 찾기
      </Button>
      <Button data={data} setPlaylist={setPlaylist} filterType="female">
        여자 아티스트 노래 찾기
      </Button>
      <Kpoplist playlist={playlist}></Kpoplist>
    </>
  )
}

export default Main;