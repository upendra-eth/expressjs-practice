var http = require('http');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-goerli.g.alchemy.com/v2/0tk9yyL7hKpgGXPkDDgQtbd3rRfK1jrH'));
const ENS = require('@ensdomains/ens');

const ens = new ENS(web3.currentProvider); 


//create a server object:

http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  

  getData();
  res.write('Hello World!');

  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
console.log('hello', getData());

async function getData() {



    const resolver = await ens.resolver('example.eth');
    const subdomains = await resolver.getSubdomains();
    return subdomains;



    // const response = await fetch('https://example.com/data.json');
    // const data = await response.json();
    // return data;
  }
  