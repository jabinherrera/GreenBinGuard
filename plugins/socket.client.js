import io from 'socket.io-client';

export default ({ app }, inject) => {
  const socket = io('wss://iot.ceisufro.cl/api/ws/plugins/telemetry?token=Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwLm5hdmFycmV0ZTA2QHVmcm9tYWlsLmNsIiwidXNlcklkIjoiODM3YTZlZjAtMWJiZS0xMWVmLTlhZTAtNDVkMTA5MDJmN2I1Iiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJzZXNzaW9uSWQiOiI0ZDBkNDVhZC01ODliLTQ5MTQtOGJhOC0wM2RlNmI0OTFkZTIiLCJpc3MiOiJ0aGluZ3Nib2FyZC5pbyIsImlhdCI6MTcxOTIzMTc3NCwiZXhwIjoxNzE5MjQwNzc0LCJmaXJzdE5hbWUiOiJQcmlzY2lsYSIsImxhc3ROYW1lIjoiTmF2YXJyZXRlIiwiZW5hYmxlZCI6dHJ1ZSwiaXNQdWJsaWMiOmZhbHNlLCJ0ZW5hbnRJZCI6IjhlZTM1NDEwLTFiYjgtMTFlZi05YWUwLTQ1ZDEwOTAyZjdiNSIsImN1c3RvbWVySWQiOiIxMzgxNDAwMC0xZGQyLTExYjItODA4MC04MDgwODA4MDgwODAifQ.oaqLhE_-CFZQ9npfwUv0K--lCmru4u5-sJSfhij2i6YMz_jmv4hhDxa9oRAB1ke4An_tFwPtk2OSCUK2d-0haA');

  socket.on('connect', () => {
    console.log('Connected to ThingsBoard');
    socket.emit('telemetry', {
      tsSubCmds: [{
        entityType: 'DEVICE',
        entityId: '3a661420-21aa-11ef-9ae0-45d10902f7b5',
        scope: 'LATEST_TELEMETRY',
        cmdId: 1
      }],
      historyCmds: [],
      attrSubCmds: []
    });
  });

  socket.on('telemetry', (data) => {
    console.log('Telemetry data:', data);
    app.$emit('telemetryData', data);
  });

  inject('socket', socket);
};
