import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [presupuestoRestante, guardarPresupuestoRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, agregarGastos] = useState([]);
  const [gasto, agregarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  //useEffect que actualize el restante

  useEffect(() => {
    if (crearGasto) {
      agregarGastos([...gastos, gasto]);
    
      const _presupuestoRestante = presupuestoRestante -gasto.cantidad;
      guardarPresupuestoRestante(_presupuestoRestante);
      
    }
  }, [gasto]);

  ///
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">

          {
            (mostrarpregunta ?
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarPresupuestoRestante={guardarPresupuestoRestante}
                actualizarPregunta={actualizarPregunta}
              />
              :
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    agregarGasto={agregarGasto}
                    guardarCrearGasto = {guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado gastos={gastos} />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={presupuestoRestante}
                  />

                </div>
              </div>
            )
          }
        </div>
      </header>

    </div>
  );
}

export default App;
