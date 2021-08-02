interface UserRegisterData {
  username: string;
  password: string;
}

class UserRegisterData {
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

interface UserLoginData {
  username: string;
  password: string;
}

class UserLoginData {
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

interface UserLogoutData {
  username: string;
  token: string;
}

class UserLogoutData {
  constructor(username: string, token: string) {
    this.username = username;
    this.token = token;
  }
}

interface AuthRequestResponse {
  success: boolean;
  token?: string;
}

class AuthRequestResponse {
  constructor(success: boolean, token?: string) {
    this.success = success;
    this.token = token;
  }
}

export { AuthRequestResponse, UserRegisterData, UserLoginData, UserLogoutData };
