/*
  각각의 할 일 항목을 렌더링하는 컴포넌트입니다.
  각 할 일의 완료 상태에 따라 체크박스와 텍스트 스타일을 동기화하며,
  삭제 버튼을 통해 해당 할 일을 삭제할 수 있습니다.
  이 컴포넌트는 `TodoList.js`에서 사용되어 할 일 목록을 구성합니다.
*/
import React from "react";
import {Button} from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"


// TodoItem 컴포넌트를 정의합니다.
const TodoItem = ({ todo, onToggle, onDelete }) => {
  // 각 할 일 항목을 렌더링합니다.
  return (
    <li className="justify-center items-center flex my-2">
      {/* 체크박스를 렌더링하고, 체크박스의 상태를 할 일의 완료 상태와 동기화합니다.
          체크박스의 상태가 변경되면 onToggle 함수를 호출하여 완료 상태를 업데이트합니다. */}
      <Checkbox className="mx-2" checked={todo.completed} onCheckedChange={onToggle} />

      {/* 할 일의 텍스트를 렌더링하고, 완료 상태에 따라 텍스트에 취소선을 적용합니다. */}
      <span
        className={todo.completed?"mx-2 w-1/3 line-through":"mx-2 w-1/3"}
      >
        {todo.text}
      </span>
      <span
        className={todo.completed?"mx-2 w-1/3 line-through":"mx-2 w-1/3"}
      >
        {todo.date}
      </span>
      <span
        className={todo.completed?"mx-2 w-1/3 line-through":"mx-2 w-1/3"}
      >
        {new Date(todo.update).toDateString()}
      </span>

      {/* 삭제 버튼을 렌더링하고, 클릭 시 onDelete 함수를 호출하여 해당 할 일을 삭제합니다. */}
      <Button className="h-8"  variant="destructive" onClick={onDelete}>Delete</Button>
    </li>
  );
};

// TodoItem 컴포넌트를 내보냅니다.
export default TodoItem;
