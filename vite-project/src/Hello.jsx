// function Hello1() {
//   return <h1>Hello, EveryOne!🎈</h1>
// }

// export default Hello

// function Hello2(props){
//   return <h1>Hello {props.user}</h1>
// }

// export default Hello

//이상의 코드는 현재 상황에서는 문제가 생기는데, 이제여러분들이 주의 해야할 점 중 하나는 개발자 도구에서 잘못된 부분을 확인했을 때 main.jsx의 다섯 번쨰 줄이 문제라고 되어있는데 사실은 Hello 함수가 argument를 가지지만 현재 기준 12번 라인에서 <Hello /> 부분에 props 와 관계된 부분이 작성되어 있지 않아서입니다. 

// 즉 여러분들이 자바 배울 때 객체 지향 하면서 파일 넘나들면서 오류 수정했던 부분들을 JavaScript에서 잠깐 놓아두셨지만(index에 Script 추가했냐 정도만 하셨지만) 이제는 React 상황에서 여러 파일을 검증해서 오류를 밝혀내야 할 필요가 있습니다. 

//main.jsx가 상위 컴포넌트로서 props 키-값 쌍을 정의하고(user라는 키와 Ahn이라는 값) 하위 컴포넌트인 Hello로 전달

//그 때 props = {user: 'Ahn'}으로 대입되며, 이 후 <h1>Hello {props.user}</h1> 은 Hello Ahn으로 출력되게 됩니다. 

// function Hello3(props){
//   return <h1>Hi {props.firstName} {props.lastName}</h1>
// }
// export default Hello3
// main.jsx를 적절히 수정하여 로버트 패틴슨 으로 출력될 수 있도록 작성하시오. 

// 이상의 코드가 의미하는 바는 : props내의 복수의 키-값 쌍(properties)가 있을 수 있음을 보여줍니다. 

//그리고 20250225에 배운 객체의 구조 분해를 이용할 수도 있습니다. 

function Hello4({firstName, lastName}){
  return <h1>hello {firstNmae} {lastName}</h1>
}

export default Hello4