const Compound = require('@compound-finance/compound-js');

const provider = 'http://localhost:8545';

const privateKey = '0xb8c1b5c1d81f9475fdf2e334517d29f733bdfa40682207571b12fc1142cbf329';

const compound = new Compound(provider, { privateKey });

(async () => {

  const delegateTx = await compound.delegate(
    '0xEC2DD0d0b15D494a58653427246DC076281C377a',
    { gasLimit: Compound._ethers.utils.parseUnits('600000', 'wei') }
  );

  const res = await delegateTx.wait(1);

  console.log('events', res.events);

})().catch(console.error);
