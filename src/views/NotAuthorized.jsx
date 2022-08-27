import React from 'react';
import Page from '../composables/Page';

function NotAuthorized() {
  return (
    <Page>
      <h1>401</h1>
      <p>Not authorized</p>
    </Page>
  );
}

export default NotAuthorized;