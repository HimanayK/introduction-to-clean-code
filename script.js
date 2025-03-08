
//------------------good comment--------------------------//
/*
*   This uses ROS Library 1.x.x and Scrimba assumes all risks in doing so.
*   This comment is mandated by the license to use ROS Library 2020.
*/ 

// format: dd/mm/yy
const dataRegex = /^(((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([/])(0[469]|11)([/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([/])(02)([/])(\d{4}))|((29)(\/)(02)([/])([02468][048]00))|((29)([/])(02)([/])([13579][26]00))|((29)([/])(02)([/])([0-9][0-9][0][48]))|((29)([/])(02)([/])([0-9][0-9][2468][048]))|((29)([/])(02)([/])([0-9][0-9][13579][26])))$/;

function isCorrectId(str) {
    const correctPassword = "123456789";
    
    // Issue UI layer is injecting empty characters. DO NOT REMOVE TRIM()
    return str.trim() === correctPassword;
}


/*
*   Clean Code: Good Comments Challenge
*   1. Add an example legal requirement
*   2. Add a comment for the unreadable regex
*   3. Add a business logic example comment
*/ 

/*
*   LoDash - LoDash takes no requirement for its use under MIT License 2020.
*/

// format - mm/dd/yy
const dataRegex = /^(((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([/])(0[469]|11)([/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([/])(02)([/])(\d{4}))|((29)(\/)(02)([/])([02468][048]00))|((29)([/])(02)([/])([13579][26]00))|((29)([/])(02)([/])([0-9][0-9][0][48]))|((29)([/])(02)([/])([0-9][0-9][2468][048]))|((29)([/])(02)([/])([0-9][0-9][13579][26])))$/;

function isCorrectId(str) {
    // temporary password for stage environment
    const correctPassword = '123456789';
    
    return str.trim() === correctPassword;
}


//-------------- Clean Functions: Limit Parameters ---------------------//


//  Limit Params - BAD
function getUsersFullName(first, middle, last, nickName) {
    return `${first} ${middle} ${last} - AKA: ${nickName}`
}

//  Limit Params - GOOD
function getUsersFullName2(userName) {
    return `${userName.first} ${userName.middle} ${userName.last} - AKA: ${userName.nickName}`
}



//------------------ Clean Functions: Naming & Standardization --------------------//


// Descriptive Names
function addAdminUser(user) {
    const userData = {...user, type: 'Admin'};
    
    // adds user to DB
}

// Standardization of Naming
function getAdminById(id) {
    //  gets admin
}

function getUserById(id) {
    // gets user    
}


//------------Clean Function: Encapsulating Conditionals --------------------//

function getNonPrimaryUsers(user) {
    if(getIsUserPrimaryActiveAccount(user)) {
        return user.subMembers;
    } else {
        return new Error('User is not Primary Account Holder.');
    }
}

function getIsUserPrimaryActiveAccount(user) {
    const isPrimaryAccount = user.isPrimaryAccount === true;
    const isActive = user.isActive === true;
    
    return isActive && isPrimaryAccount;
}