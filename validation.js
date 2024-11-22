// Function to validate age (70+)
function validateAge(age) {
    const ageCheck = age - 70;
    return ageCheck >= 0;  // True for age 70 and above
}

// Function to validate customer ID (divisible by 7)
function validateCustomerID(customerID) {
    const idCheck = (customerID) % 7;
    return idCheck === 0;  // True if the check passes
}

// Main validation function
function validateForm(dob, customerID) {
    const dobParts = dob.split('/');
    if (dobParts.length !== 3 || isNaN(dobParts[0]) || isNaN(dobParts[1]) || isNaN(dobParts[2])) {
        return 'Please enter a valid date in MM/DD/YYYY format.';
    }

    const birthDate = new Date(`${dobParts[2]}-${dobParts[0]}-${dobParts[1]}`);
    const age = new Date().getFullYear() - birthDate.getFullYear();

    if (!validateAge(age)) {
        return 'Enter DOB again. Age should be 70+.';
    }

    if (isNaN(customerID) || !validateCustomerID(Number(customerID))) {
        return 'There was some error pls check faq on the homepage';
    }

    return '';  // Empty string means no error
}
