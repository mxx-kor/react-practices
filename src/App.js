import Coin_tracker from "./Coin";
import ToDo_list from "./Todo-list";

function App() {
  return (
    <div>
      <ToDo_list />
      <hr/>
      <Coin_tracker/>
    </div>
  );
}

export default App;

//각 li태그에 체크박스가 체크되어있으면 밑줄
// 로컬 스토리지 가져오기.