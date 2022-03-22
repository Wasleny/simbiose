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

const Card = ({ project }) => {
    return (
        <CardStyle>
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
                <button>ADICIONAR</button>
                <AiOutlineHeart size={40} />
            </Button>
        </CardStyle>
    );
};

export default Card;
