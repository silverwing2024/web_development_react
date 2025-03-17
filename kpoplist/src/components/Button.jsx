//props로 data, setPlaylist를 전달받을 예정
import App from '../App';

function Button({data, setPlaylist, filterType, Children}){
  //버튼의 내요에 따라 플레이리스트를 필터링
  let result = [...data];
  
  if(Children ==='레드벨벳 노래 찾기'){
    result = data.filter((song) => song.artist ==='Red Velvet');
  }
  if(Children ==='남자 아티스트 노래 찾기'){
    result = data.filter((song) => song.artist ==='male');
  }
  if(Children ==='여자 아티스트 노래 찾기'){
    result = data.filter((song) => song.artist ==='female');
  }

  const handleClick = () => {
    setPlaylist(result);
  }

  console.log(data);
  return <button onClick={handleClick}>{Children}</button>
}

export default Button;