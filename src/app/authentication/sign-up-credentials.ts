import { Credentials } from './credentials';

export class SignUpCredentials extends Credentials {
  constructor(
    public confirmEmail = '',
    public confirmPassword = '',
    public username = ''
  ) {
    super();
  }

  toCredentials(): Credentials {
    return new Credentials(this.email, this.password);
  }
}
