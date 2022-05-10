import AsyncStorage from '@react-native-async-storage/async-storage';


export async function storeUser(props)  {
    try {
      await AsyncStorage.setItem('@uid', props.uid);
      await AsyncStorage.setItem('@firstName', props.first);
      await AsyncStorage.setItem('@lastName', props.last);
      console.log('Set username to ' + props.uid)
      console.log('Set first to ' + props.first)
      console.log('Set last to ' + props.last)
    } catch (e) {
      // saving error
      console.log(e);
    }
  }
  
  export async function getData() {
    try {
      const uid_ = await AsyncStorage.getItem('@uid');
      const firstName_ = await AsyncStorage.getItem('@firstName');
      const lastName_ = await AsyncStorage.getItem('@lastName');
      if(uid_ !== null) {
        // value previously stored
        const user = {
          uid: uid_,
          first: firstName_,
          last: lastName_
        }
        console.log('Username is: ' + user.uid)
        console.log('Username is: ' + user.first)
        console.log('Username is: ' + user.last)
        return (user);
      } else {
        console.log("UID: " + uid_)
      }
    } catch(e) {
      // error reading value
      console.log(e)
    }
  }
  
  export async function setUserNull() {
    AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove)
    console.log("Storage cleared");
  }