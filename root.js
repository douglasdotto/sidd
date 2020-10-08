// root.jsx
// Add the component your app root
import Toast from 'react-native-toast-message';
 
const Root = () => {
  return <Toast ref={(ref) => Toast.setRef(ref)} />;
};
 
export default Root;