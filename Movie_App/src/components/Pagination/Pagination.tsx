import './Pagination.css';

interface PaginationProps{
  page: number,
  setPage: (page : number) => void;
}

const Pagination = ({page , setPage} : PaginationProps) => {

  const Previous = () => {
    if(page > 1){
      setPage(page - 1);
    }
  };

  const Next = () => {
    if(page < 10)
    {
      setPage(page + 1);
    }
  };

  return (
    <div className='pagination-container'>
      <button className='page-button' onClick={Previous}>Previous</button>
      <button className='page-button' onClick={Next}>Next</button>
    </div>
  )
}

export default Pagination
