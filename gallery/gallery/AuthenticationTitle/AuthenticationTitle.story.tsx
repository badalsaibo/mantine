import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { AuthenticationTitle } from './AuthenticationTitle';

storiesOf('Gallery/AuthenticationTitle', module).add('AuthenticationTitle', () => (
  <GalleryStory attributes={attributes} component={AuthenticationTitle} />
));
