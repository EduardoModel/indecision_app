import React from 'react'
import Modal from 'react-modal'
//O modal é pra tu conseguir renderizar outras coisas além das fornecidas pelo html padrão
//neste caso em vez de abrir um alert, ele cria uma caixa com o conteúdo
const OptionModal = (props) => (
   <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Opção Selecionada"
   >
       {props.selectedOption && <p>{props.selectedOption}</p>}
       <button onClick={props.handleClearSelectedOption}>Okay</button>
   </Modal>
)

export default OptionModal
