// ----------------------------------- Fake Lib UserHelper  ---------------------------------------

// Simple constructor to represent a Lib
export class UserHelper {
  constructor(jsonData) {
    this.userInfo = {
      name: null,
      email: null,
      address: null,
      emergency: null,
      city: null,
      zip: null,
    };
    this.setAll(jsonData);
  }
  // Setting fields in the 'database' either one by one or all at once.
  setName(name) {
    this.userInfo.name = name;
  }

  setEmail(email) {
    this.userInfo.email = email;
  }

  setAddress(address) {
    this.userInfo.address = address;
  }

  setEmergency(emergency) {
    this.userInfo.emergency = emergency;
  }

  setCity(city) {
    this.userInfo.city = city;
  }

  setZip(zip) {
    this.userInfo.zip = zip;
  }

  setAll(jsonData) {
    Object.assign(this.userInfo, jsonData);
  }

  save() {
    // Checking for errors here before adding to the 'database'
    for (const key in this.userInfo) {
      // Emergency is not a required field in the 'database'
      if (
        key != "emergency" &&
        (this.userInfo[key] == null || this.userInfo[key] === "")
      ) {
        return false;
      }
    }
    return true;
  }
}

const newUserObject = new UserHelper();

export { newUserObject };
