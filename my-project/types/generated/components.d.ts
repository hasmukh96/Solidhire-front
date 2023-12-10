import type { Schema, Attribute } from '@strapi/strapi';

export interface DatabaseBlogs extends Schema.Component {
  collectionName: 'components_database_blogs';
  info: {
    displayName: 'Blogs';
    icon: 'manyToOne';
  };
  attributes: {
    BlogTitle: Attribute.String;
    BlogDescription: Attribute.Text;
    Content: Attribute.Text;
  };
}

export interface DatabaseEbooks extends Schema.Component {
  collectionName: 'components_database_ebooks';
  info: {
    displayName: 'Ebooks';
    icon: 'feather';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Upload: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'database.blogs': DatabaseBlogs;
      'database.ebooks': DatabaseEbooks;
    }
  }
}
