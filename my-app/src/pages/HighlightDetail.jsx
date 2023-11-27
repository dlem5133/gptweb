import { useParams } from "react-router";

const HighlightDetail = () => {
  const param = useParams();

  return <>{param.id}</>;
};

export default HighlightDetail;
