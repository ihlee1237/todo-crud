import { FilterType } from "../data/todos";

interface EmptyMessageItemProps {
  filter: FilterType
}

function makeMessage(filter: FilterType) {
  if (filter === FilterType.ACTIVE) return "진행 중인 할 일이 없습니다.";
  if (filter === FilterType.COMPLETE) return "완료된 항목이 없습니다.";
  return "할 일이 없습니다.";
}

export function EmptyMessageItem({ filter }: EmptyMessageItemProps) {
  return <div className="empty-message">{makeMessage(filter)}</div>
}