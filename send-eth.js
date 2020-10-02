const Compound = require('@compound-finance/compound-js');

const provider = 'http://localhost:8545';

const privateKey = '0xb8c1b5c1d81f9475fdf2e334517d29f733bdfa40682207571b12fc1142cbf329';

const address1 = '0xa0df350d2637096571F7A701CBc1C5fdE30dF76A';
const address2 = '0xEC2DD0d0b15D494a58653427246DC076281C377a';

(async () => {

  // Find the ETH balance of the accounts
  let bal1 = await Compound.eth.getBalance(address1, provider);
  let bal2 = await Compound.eth.getBalance(address2, provider);

  console.log(`ETH Balance of ${address1}`, bal1 / 1e18);
  console.log(`ETH Balance of ${address2}`, bal2 / 1e18);

  // Send ETH from 1 to 2
  console.log('Sending ETH from 1 to 2...');

  const trx = await Compound.eth.trx(
    address2,
    'function send() external payable',
    [],
    {
      value: Compound._ethers.utils.parseEther('5'),
      provider,
      privateKey,
    }
  );

  await trx.wait(1);

  // Check balances again
  bal1 = await Compound.eth.getBalance(address1, provider);
  bal2 = await Compound.eth.getBalance(address2, provider);

  console.log(`ETH Balance of ${address1}`, bal1 / 1e18);
  console.log(`ETH Balance of ${address2}`, bal2 / 1e18);

})().catch(console.error);
