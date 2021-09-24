import { AuthRequest, AuthResponse } from './userdata';
import { HomebrewElement } from '../sheets/fifthEdition';
import { BrewID } from '../sheets/fifthEdition/util';

// Base Request structure for the other requests of the homebrew data
interface HomebrewRequest<T extends HomebrewElement> extends AuthRequest {
  newElementData: T;
  brewID: BrewID;
}

class HomebrewRequest<T extends HomebrewElement> extends AuthRequest {
  constructor(token: string) {
    super(token);
  }
}

interface HomebrewResponse<T extends HomebrewElement> extends AuthResponse {
  newElementData: T;
  brewID: BrewID;
}

class HomebrewResponse<T extends HomebrewElement> extends AuthResponse {
  constructor(success: boolean) {
    super(success);
  }
}

export { HomebrewRequest, HomebrewResponse };

//#region Verbose Request Names
interface CreateElementRequest<T extends HomebrewElement>
  extends HomebrewRequest<HomebrewElement> {}

class CreateElementRequest<
  T extends HomebrewElement
> extends HomebrewRequest<HomebrewElement> {
  constructor(token: string) {
    super(token);
  }
}

interface CreateElementResponse<T extends HomebrewElement>
  extends HomebrewResponse<HomebrewElement> {}

class CreateElementResponse<
  T extends HomebrewElement
> extends HomebrewResponse<HomebrewElement> {
  constructor() {
    super(true);
  }
}

interface ModifyElementRequest<T extends HomebrewElement>
  extends HomebrewRequest<HomebrewElement> {}

class ModifyElementRequest<
  T extends HomebrewElement
> extends HomebrewRequest<HomebrewElement> {
  constructor(token: string) {
    super(token);
  }
}

interface ModifyElementResponse<T extends HomebrewElement>
  extends HomebrewResponse<HomebrewElement> {}

class ModifyElementResponse<
  T extends HomebrewElement
> extends HomebrewResponse<HomebrewElement> {
  constructor() {
    super(true);
  }
}

interface DeleteElementRequest<T extends HomebrewElement>
  extends HomebrewRequest<HomebrewElement> {}

class DeleteElementRequest<
  T extends HomebrewElement
> extends HomebrewRequest<HomebrewElement> {
  constructor(token: string) {
    super(token);
  }
}

interface DeleteElementResponse<T extends HomebrewElement>
  extends HomebrewResponse<HomebrewElement> {}

class DeleteElementResponse<
  T extends HomebrewElement
> extends HomebrewResponse<HomebrewElement> {
  constructor() {
    super(true);
  }
}

export {
  CreateElementRequest,
  CreateElementResponse,
  ModifyElementRequest,
  ModifyElementResponse,
  DeleteElementRequest,
  DeleteElementResponse
};
//#endregion
