require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn provide harvest derive symptom that'; 
let testAccounts = [
"0xc6a0363c53ed62c6d2533ec2a04663c8dd3e2f609fb89e0bde09b5640d6270f8",
"0x194b389eb1b58075b97a5344d833b122eb7a3c53c58ae2e0baf8c71a96f0b04b",
"0xd10c6a24356a15417700b7d62d251e881d0671b24b3e1b80261be64f76bb9aeb",
"0x7fcae3e266d95370a0bf27d1d5fa1af23ba2b07b25ea801dc94fcc99fedb8101",
"0x6cfdf42b41cea914ef126558d33a5dfe302c083989d3620be1fcef772178c974",
"0x9bf38fa9947b80c7dca28458246ac4bff86675635826a1a328bd1772560b85d5",
"0xc41c56f44c9bc756650b44f28353997d74aaca98fd12298e8af72446eb140328",
"0xf938c5c685a921b4e9e377c5c3d92489918e2f4ed732ebe0fda9b56b6ecf4449",
"0x46194f9a496221f25c0387255adedf50651aef931d8bff8a1e1c881c8fa7422f",
"0x3607eb475b11e01a836996e045fbb5926d341e40d6eefe835f0f55b6af72e4a2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

