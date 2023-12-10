import { SectionFormContacts } from './Contacts/Contact';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <SectionFormContacts />
    </Provider>
  );
};
