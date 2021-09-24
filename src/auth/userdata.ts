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

interface AuthResponse {
  success: boolean;
  token?: string;
  message?: string;
}

class AuthResponse {
  constructor(success: boolean, token?: string, message?: string) {
    this.success = success;
    this.token = token;
    this.message = message;
  }
}

interface AuthRequest {
  token: string;
}

class AuthRequest {
  constructor(token: string) {
    this.token = token;
  }
}

export {
  AuthRequest,
  AuthResponse,
  UserRegisterData,
  UserLoginData,
  UserLogoutData
};
