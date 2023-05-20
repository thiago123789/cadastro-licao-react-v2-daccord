import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";  

const Licao = () => {
    const {id} = useParams(); 
    const navigate = useNavigate();

    return(
        <>
            <button onClick={() => navigate(-1)}> 
                Go Back
            </button>
            <div>
                <h3>Você está na página cadastro de lições {id} </h3>
            </div>
        </>
    )
} 

export default Licao;