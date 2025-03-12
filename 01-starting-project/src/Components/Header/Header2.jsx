import './Header.css';
import reactImg from "../../assets/react-core-concepts.png";
//컴포넌트 분할을 하면서 경로가 바뀌었습니다. 

const reactDescriptionsKor = ['근본적인','결정적인', '핵심적인', '필수적인'];
const reactDescriptionsEng = ['Fundemental', 'Crucial', 'Core', 'Essential'];

function getRandomInt(max){
  return Math.floor(Math.random()*(max)); // 얘의 return 값은 0~2의 int가 반한됨

  //어떻게? Math.random() * (max + 1) 얘의 범위가 0.xxxx ~ 2.xxxx 이기 때문에
}


function Header2(){
  
  const indexNum = getRandomInt(reactDescriptionsKor.length);
  
  return(
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React 필수 요소 복습</h1>
    <p>
      {reactDescriptionsEng[indexNum]} React concepts you will need for almost any app you are
      going to build!

    </p>
    <br />
      대부분의 앱을 위해 당신이 필요로 할 {reactDescriptionsKor[indexNum]} React 개념 학습
  </header>
  );
}

export default Header2;