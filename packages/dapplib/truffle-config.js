require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remind modify give clog bridge swarm'; 
let testAccounts = [
"0x0ff5cd6cd772a76ec47dc5ff7ac5973656111652d941f3c3b2b2f9908f50b91a",
"0xf16ac984f87d8ac108e862a7dde67652428dff35b534122275c9a7358e05b23b",
"0xfd664beb8292a5b3d68b501aeb815390ed78770e5faa670cfecd54ee25724307",
"0xe39109b7e11148e890754520c5e39268caea33d08ee288405be70eed6f70263f",
"0x95a66ee44d5883974febaea894042ba9f1f98bdcbdd7406a42fa7c6455ddc827",
"0xd0835b476b42e14257e4f4cc7a1250d3cbed6625a9c782de23cbdc810ff52430",
"0x9dd7b05adc0e4e7cf3bcf29ea63c5768d78c67d181bba294a119fd8139a8a803",
"0xf83bef30b21d4ec08a387932d975172069be1377dc66963183e61c646761dd72",
"0x980f75c6855b766b0ec90741f0574eaf69dcbaabfc22f8a739b5326b99920a1f",
"0x19d8e6a487cb3fe54dee74392d008dbb5178a3e0d49d4dbf07fdc7a6d7004421"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

