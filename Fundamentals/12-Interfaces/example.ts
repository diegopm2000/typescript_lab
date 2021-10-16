// Are similar to alias types but more powerfull

// We can model the inner object using a interface

interface UserData {
  readonly username: string, // with readonly prevents the direct modifications of the property
  created_at: Date,
  superuser: boolean, 

  createdAt?: Date // use ? to declare optional this property. We must check always if exists this property

  // readonly only works in the superior property, does not apply to the inner properties (name or email in this example).
  // Same criteria of const in javascript!!!
  readonly personal: {
    name:  string,
    email: string
  }

  logout(): void,
  rename: (username: string) => void
}

function login(): UserData {
  return {
    username: 'admin',
    created_at: new Date(),
    superuser: true,
    // country: 'Spain' // Will fails, because is not contained in UserData
    personal: {
      name: 'Bar',
      email: 'bar@foo.com'
    },
    logout() {
      console.log('good bye')
    },
    rename(username) {
      console.log('renaming...')
    }
  }
}

let l = login()

// NOTE: Checkings of optional properties

// Check if createdAt exists before to apply toISOString
l.createdAt?.toISOString()

// Don't check if exists...danger, only we will use this if we are absolutely secured of its existence
l.createdAt!.toISOString()






