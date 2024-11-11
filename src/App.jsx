

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter'
import { AppContainer } from './App.styles';

const App = () => {
  return (
    
        <AppContainer>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </AppContainer>
      
  );
};

export default App;
 