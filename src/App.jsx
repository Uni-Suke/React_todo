import React from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "eee"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力"></input>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>aaaa</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}

          <div className="list-row">
            <li>eeee</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>aaaa</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
