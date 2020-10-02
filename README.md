# ETHOnline October 2020 Compound Workshop

YouTube playback of the livestream: https://youtu.be/HDVTlO759hA

To get these running yourself:

```
git clone git@github.com:compound-developers/ethonline-compoundjs-demo.git
cd ethonline-compoundjs-demo/
npm install
npm install -g ganache-cli http-server
```

Run this in another terminal window. Make sure you have your free Infura project ID as an environment variable (infuraApiKey):

```
ganache-cli \
  -f https://mainnet.infura.io/v3/$infuraApiKey \
  -m "clutch captain shoe salt awake harvest setup primary inmate ugly among become" \
  -i 1
```

To run the web browser examples, run this and navigate to [http://localhost:8080](http://localhost:8080)

```
cd ethonline-compoundjs-demo/
http-server
```
