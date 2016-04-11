import React from 'react';
import { renderToString } from 'react-dom/server';
import Application from '../client/app';

export function handler(event, context) {
  const markup = renderToString(<Application name={event.name} />);
  context.succeed(markup);
};
