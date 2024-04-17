// -------------------------- VALIDATION --------------------------------

export function validationTypes(fieldName, value) {
  // Using regex to check if the patterns match.
  // As the test function returns true or false, I use ternary operators to display the error message in case there is one.
  // Emergency is the only field that won't be required
  switch (fieldName) {
    case "name":
      return /^[A-Za-z\s]+$/.test(value.trim())
        ? null
        : { error: "Name must contain only letters and spaces" };
    case "city":
      return /^[A-Za-z\s]+$/.test(value.trim())
        ? null
        : { error: "City must contain only letters and spaces" };
    case "address":
      return /^[A-Za-z\s]+$/.test(value.trim())
        ? null
        : { error: "Address must contain only letters and spaces" };
    case "state":
      return /^[A-Za-z\s]+$/.test(value.trim())
        ? null
        : { error: "State must contain only letters and spaces" };
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
        ? null
        : { error: "Invalid email format" };
    case "zip":
      return /^\d{5}(-\d{4})?$/.test(value.trim())
        ? null
        : { error: "Invalid zip format" };
    default:
      return null;

    // If the value is not a required field the switcher will just let it pass.
  }
}

// ----- Validate function -------
// it loops through the JSON fields and checking if the patterns established previously don't match.

export function validate(jsonObject) {
  console.log(jsonObject);
  for (const fieldName in jsonObject) {
    if (jsonObject.hasOwnProperty(fieldName)) {
      // Here it will show the first error message in the JSON and break the loop.
      const fieldValidationResult = validationTypes(
        fieldName,
        jsonObject[fieldName]
      );
      if (fieldValidationResult !== null) {
        return fieldValidationResult;
      }
    }
  }
  // It return null if no errors are found
  return null;
}
