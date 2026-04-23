import { FilterType } from "../data/todos";

interface EmptyMessageItemProps {
  filter: FilterType
}

export function EmptyMessageItem({ filter }: EmptyMessageItemProps) {
  let message = "할 일이 없습니다.";
  if (filter === FilterType.ACTIVE) message = "진행 중인 할 일이 없습니다.";
  else if (filter === FilterType.COMPLETE) message = "완료된 항목이 없습니다.";

  return <div className="empty-message">{message}</div>
}