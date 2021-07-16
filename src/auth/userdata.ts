class UserRegisterData {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

class UserLoginData {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

class UserLogoutData {
  username: string;
  token: string;

  constructor(username: string, token: string) {
    this.username = username;
    this.token = token;
  }
}

class AuthRequestResponse {
  success: boolean;
  token?: string;

  constructor(success: boolean, token?: string) {
    this.success = success;
    this.token = token;
  }
}

export { AuthRequestResponse, UserRegisterData, UserLoginData, UserLogoutData };
