import nats from 'node-nats-streaming';

const stan = nats.connect('nats-test', 'abc');

stan.on('connect', () => {
  console.log('Publisher connected to NATS');
});
