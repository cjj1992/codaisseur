const password = 'supersecretpassword'
const input = 'iamhackingyou'
const loginAttemptsFailed = 2
const maxLoginAttempts = 3

const passwordCorrect = password === input
const finalLoginAttempt = loginAttemptsFailed + 1 >= maxLoginAttempts

const accountLocked = !passwordCorrect && finalLoginAttempt

const message = (passwordCorrect ? 'Welcome' : 
? 'Welcome'
: accountLocked
? 'You are trying to hack us! ACCESS DENIED!'
: `Wrong! You can try again ${maxLoginAttempts - (loginAttemptsFailed + 1)} more time(s)`
)


console.log(message)
// just locking someone out of their account isn't very nice ...
// We want to display some feedback:

// If the password is correct -> 'Welcome'
// If the account was locked -> 'You are trying to hack us! ACCESS DENIED!'
// If the password was wrong but you can try again -> 
// 'Wrong! You can try again x more time(s)'

boolean expression ? 'if true resolve to this' : 'if false to this'