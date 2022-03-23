const {
    CardStyle,
    CardTitle,
    CardSubtitle,
    Synopsis,
    Badge,
    Button,
} = require("./styles");
import { Values } from "@/React/pages/Project/styles";
import FormatCurrency from "../../utils/FormatCurrency";
import { AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";

const Card = ({ project, width = null }) => {
    function handleAdd() {
        toast.warning('Que pena! Esta funcionalidade ainda está sendo desenvolvida!')
    }

    function handleGetLike() {
        toast.warning('Este projeto é interessante, né? Quando a opção de favoritar estiver funcionando, volta aqui!')
    }

    return (
        <CardStyle width={width}>
            <Badge>rouanet</Badge>
            <CardTitle>{project.nome}</CardTitle>
            <CardSubtitle>
                {project.municipio} &nbsp;&bull; {project.uf}
            </CardSubtitle>
            <Synopsis>{project.sinopse}</Synopsis>
            <Values>
                <h5>Aprovado</h5>
                <h5>
                    <span>
                        {FormatCurrency.formatBR(
                            parseFloat(project.valor_aprovado)
                        )}
                    </span>
                </h5>
            </Values>
            <Values>
                <h5>Captado</h5>
                <h5>
                    <span>
                        {FormatCurrency.formatBR(
                            parseFloat(project.valor_captado)
                        )}
                    </span>
                </h5>
            </Values>
            <Button>
                <button onClick={() => handleAdd()}>ADICIONAR</button>
                <AiOutlineHeart size={40} style={{cursor: 'pointer'}} onClick={() => handleGetLike()} />
            </Button>
        </CardStyle>
    );
};

export default Card;
