import { HealthController } from './health.controller';

describe('HealthController', () => {
  it('reports status ok', () => {
    expect(new HealthController().check()).toEqual({ status: 'ok' });
  });
});
