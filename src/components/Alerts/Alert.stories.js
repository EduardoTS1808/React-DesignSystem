import React from 'react';
import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

export const Success = () => <Alert type="success" message="This is a success alert!" />;
export const Warning = () => <Alert type="warning" message="This is a warning alert!" />;
export const Error = () => <Alert type="error" message="This is an error alert!" />;
