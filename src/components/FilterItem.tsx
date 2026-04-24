import { FilterType } from "../data/todos";

interface FilterItemProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const filterList: { type: FilterType; label: string }[] = [
  { type: FilterType.ALL, label: "전체" },
  { type: FilterType.ACTIVE, label: "진행중" },
  { type: FilterType.COMPLETE, label: "완료" },
] as const;

export default function FilterItem({ filter, setFilter }: FilterItemProps) {
  return <div className="filter-container">
    {filterList.map(({ type, label }) => (
      <button
        key={type}
        className={filter === type ? 'active' : ''}
        onClick={() => setFilter(type)}
      >
        {label}
      </button>
    ))}
  </div>
}