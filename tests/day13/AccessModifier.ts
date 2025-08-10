export class login {
  public user: string = 'dilip';
  private pass: string = 'crmsfa';
  protected logval: number = 67;

  protected log() {
    console.log('Protected method');
  }

  public errorLog() {
    console.log('Public Value');
  }

  public getData() {
    console.log(`${this.user} ${this.pass} ${this.logval}`);
  }
}
