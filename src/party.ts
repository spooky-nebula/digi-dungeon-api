interface PartyMember {
  playerID: string;
  userID: string;
  permissions: string;
}

class PartyMember {
  constructor() {
    this.playerID = '';
    this.userID = '';
    this.permissions = '';
  }
}

export default PartyMember;
export { PartyMember };
