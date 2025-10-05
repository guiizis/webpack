import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export const Home = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Home App</h1>
        <hr className="my-2"/>
        <p>este componente é de outra aplicação =)</p>
        <p className="lead">
          <Button color="primary" href="http://localhost:9001">Voltar para App</Button>
        </p>
      </Jumbotron>
    </div>
  )
}