// eslint-disable-next-line import/no-extraneous-dependencies
import compose from 'compose-function';
import { withSeo } from './with-seo';

export const withProviders = compose(withSeo);
