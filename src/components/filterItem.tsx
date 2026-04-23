import { FilterType } from "../data/todos";

interface FilterItemProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

export default function FilterItem({ filter, setFilter }: FilterItemProps) {
  return <div className="filter-container">
    <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
      전체
    </button>
    <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>
      진행중
    </button>
    <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>
      완료
    </button>
  </div>
}