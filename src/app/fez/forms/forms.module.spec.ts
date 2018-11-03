import { FezFormsModule } from "./forms.module";

describe("FormsModule", () => {
  let formsModule: FezFormsModule;

  beforeEach(() => {
    formsModule = new FezFormsModule();
  });

  it("should create an instance", () => {
    expect(formsModule).toBeTruthy();
  });
});
