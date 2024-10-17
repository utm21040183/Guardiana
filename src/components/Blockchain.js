import React from 'react';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

const BlockchainAlert = async () => {
  const sendAlertToBlockchain = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await web3.eth.sendTransaction({
      from: accounts[0],
      to: 'DirecciónContrato',
      value: web3.utils.toWei('0.01', 'ether'),
      data: web3.utils.toHex('Alerta enviada a Blockchain'),
    });
    console.log('Transacción completada', result);
  };

  return (
    <div>
      <button onClick={sendAlertToBlockchain}>
        Enviar Alerta a Blockchain
      </button>
    </div>
  );
};

export default BlockchainAlert;
