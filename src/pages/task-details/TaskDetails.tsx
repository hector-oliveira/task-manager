import { useSearchParams } from "react-router-dom";
import Container from "../../components/container";

function TaskDetails() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  );
}

export default TaskDetails;
