import { FezModule } from './fez.module';

describe('FezModule', () => {
  let fezModule: FezModule;

  beforeEach(() => {
    fezModule = new FezModule();
  });

  it('should create an instance', () => {
    expect(fezModule).toBeTruthy();
  });
});
