import React from 'react';
import { Subscribe } from 'unstated';
import StateComponent from '../StateComponent';
import { Button, Card, CardBody, CardHeader, CardFooter} from 'reactstrap';
import { FaDiceD6 } from 'react-icons/fa';

export default class DadosDeVida extends React.Component {

    montarDados = (quantiaDados, quantiaMax) => {
        let listaDados = [];
        for(let i = 0; i < quantiaMax; i++) {
            if (quantiaDados > i) {
                listaDados.push(<FaDiceD6 key={i} style={{fontSize: '32px', marginLeft: '6px', color: '#080'}}/>)
            } else {
                listaDados.push(<FaDiceD6 key={i} style={{fontSize: '32px', marginLeft: '6px', color: '#DDD'}}/>)
            }
        }
        return listaDados;
    }

    render = () => (
        <Subscribe to={[StateComponent]}>
            {sc => ( 
                <Card style={{backgroundColor: '#EFE'}}>
                    <CardHeader tag='h3'>
                        Dados de Vida 
                    </CardHeader>
                    <CardBody>
                        {this.montarDados(sc.state.personagem.dadosDeVida, sc.state.personagem.nivel)}
                    </CardBody>
                    <CardFooter>
                        <Button size='sm' color="success" onClick={() => sc.usarDadoVida(sc.state.personagem.id)}> Usar DV </Button>
                    </CardFooter>
                </Card>
            )}
        </Subscribe>
    )
}