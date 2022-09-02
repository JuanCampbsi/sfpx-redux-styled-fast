import * as React from 'react';
import { IAppProps } from './IAppProps';
import { escape } from '@microsoft/sp-lodash-subset';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from '../../../dataflow/store';
import Title from './Title';
import ChangeName from './ChangeName';
import Counter from './Counter';
import Visor from './Visor';

const App = (props: IAppProps) => {
  const { description, isDarkTheme, environmentMessage, hasTeamsContext, userDisplayName } = props;

  const Name = styled.h1`
    color: red;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Section = styled.section`
    width: 100%;
  `;

  return (
    <Provider store={store}>
      <Section>
        <Container>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} />
          <Title />
          <ChangeName />
          <Counter>
            <Visor />
          </Counter>
          <div>{environmentMessage}</div>
          <div>
            Web part property value: <strong>{escape(description)}</strong>
          </div>
        </Container>
      </Section>
    </Provider>
  );
};
export default App;
