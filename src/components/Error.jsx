import { useRouteError } from "react-router-dom";


const Error = () => {
    const error=useRouteError()
    console.error(error)
  return(<>
    <p>There is nothing here: 404!</p>
       </>) ;
};

export default Error;
