import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center'
  },

  /*
  logo: {
    width: 170,
    height: 195
  },
  */

  form: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 25, 
    marginLeft: 30
  },

  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 22,
    borderRadius: 7,
    padding: 10
  },

  buttonSubmit: {
    backgroundColor: '#59BFFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 10
  },
  
  buttonToRegister: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 10
  },

  submitText: {
    color: '#FFF',
    fontSize: 19
  },

  buttonRegister: {
    marginTop: 10
  },

  registerText: {
    color: '#616667'
  },

  label: {
    color: '#616667',
    marginBottom: 5,
  },

  subTitle: {
    color: '#616667'
  },
});