import Navigation from "./src/Navigation";
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
    <Navigation/>
    </PaperProvider>
  );
}
