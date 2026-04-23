import { FilterType } from "../data/todos";

interface FilterItemProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

export default function FilterItem({ filter, setFilter }: FilterItemProps) {
  return <div className="filter-container">
    <button className={filter === FilterType.ALL ? 'active' : ''} onClick={() => setFilter(FilterType.ALL)}>
      전체
    </button>
    <button className={filter === FilterType.ACTIVE ? 'active' : ''} onClick={() => setFilter(FilterType.ACTIVE)}>
      진행중
    </button>
    <button className={filter === FilterType.COMPLETE ? 'active' : ''} onClick={() => setFilter(FilterType.COMPLETE)}>
      완료
    </button>
  </div>
}