import { useNavigate } from 'react-router-dom';

const Navigator = (props) => {
  const navigate = useNavigate();
  return props.children(navigate);
};

export default Navigator;
