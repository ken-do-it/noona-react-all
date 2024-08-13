import { useState } from 'react';
import './App.css';
import Box from './component/Box';


// 1. 박스 2개 (타이틀 이미지 결과)
// 2. 박스 하단 가위,바위, 보 선택 버튼
// 3. 버튼 클릭 -> 선택한 아이템 유저 창에 보인다
// 4. 버튼 클릭 -> 컴퓨터는 랜덤으로 선택
// 5. 3,4번 아이템 비교해서 승패 판단
// 6. 테두리값 변화  

const choice = {
  rock: {
    name:"Rock",
    img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png",
  },
  scissors:{
    name: "Scissors",
    img : "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png",
  },
  paper :{
    name : "Paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
  }
}


function App() {

  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  const [computerResult, setComputerResult] = useState("")

  const [winCount, setWinCount] = useState(0); // 이긴 횟수 상태 추가
  const [loseCount, setLoseCount] = useState(0); // 진 횟수 상태 추가
  const [tieCount, setTieCount] = useState(0)



  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    
    // 유저의 결과를 변수에 저장
    let result = judgement(choice[userChoice], computerChoice)
    
    // 유저 결과
    setResult(result.user)
    
    // 컴퓨터 결과
    setComputerResult(result.computer)

    // 승패 횟수 업데이트
    updateUserCount(result.user);
  }


  // const play =(userChoice) => {
  //   setUserSelect(choice[userChoice])
  //   let computerChoice = randomChoice()
  //   setComputerSelect(computerChoice)
  //   setResult(judgement(choice[userChoice],computerChoice))
  //   setComputerResult(result === "win" ? "lose" : result === "lose" ? "win" : "tie")
  // }






  const judgement = (user,computer) => {
    console.log("user:", user , "computer:", computer)

    // 유저, 컴퓨터, 결과  
    if (user.name === computer.name) {
      return {user:"tie", computer: "tie"}
    } else if (user.name === "Rock") return computer.name === "Scissors"? 
    {user:"win", computer: "lose"} : {user:"lose", computer :"win"}

      else if (user.name === "Scissors") return computer.name === "Paper"? 
      {user:"win", computer: "lose"} : {user:"lose", computer :"win"}
      
      else if (user.name === "Paper") return computer.name === "Rock"? 
      {user:"win", computer: "lose"} : {user:"lose", computer :"win"}  
  }


  const updateUserCount = (result) => {
    if (result === "win") {
      setWinCount(prevWinCount => prevWinCount + 1); // 이긴 횟수 증가
    } else if (result === "lose") {
      setLoseCount(prevLoseCount => prevLoseCount + 1); // 진 횟수 증가
    } else if (result === "tie") {
      setTieCount(preTieCount => preTieCount  +1) // 비긴 횟수  증가
    }
  };


  
  const randomChoice =() => {
    let itemArray = Object.keys(choice)
    console.log("item Array:", itemArray)
    let randomItem = Math.floor(Math.random()*itemArray.length);
    console.log("random Item:", randomItem)
    let final = itemArray[randomItem]
    console.log("final", final)
    return choice[final]
  }


  return (
      <div className='main_body'> 
      <h1>Rock Scissor Paper!!</h1>
      <div className="main">
        <Box name ="You" item ={userSelect} result = {result}/>
        <Box name = "Computer" item = {computerSelect} result = {computerResult}/>
      </div>


      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button> 
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
      
      <div className='main_col'>
        <h2>Total You win: {winCount}</h2> {/* 이긴 횟수 표시 */}
        <h2>Total You lose: {loseCount}</h2> {/* 진 횟수 표시 */}
        <h2>Total tie : {tieCount}</h2>
      </div>




      
      </div>

  );
}

export default App;
