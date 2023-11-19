import AppNavigator from './appNavigator';
import { ThemeProvider } from '@rneui/themed';

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}

