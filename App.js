import {SafeAreaView} from "react-native-safe-area-context";
import Navigation from "./src/navigation/Navigation";
export default function App() {

  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation/>
    </SafeAreaView>
  );
}
