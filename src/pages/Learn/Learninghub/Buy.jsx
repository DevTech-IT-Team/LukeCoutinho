import { Navigate, useParams } from 'react-router-dom';

/** Legacy /buy/:id URLs → unified course detail page */
const Buy = () => {
  const { id } = useParams();
  return <Navigate to={`/course/${id}`} replace />;
};

export default Buy;
