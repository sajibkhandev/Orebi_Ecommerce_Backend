import type { Schema, Attribute } from '@strapi/strapi';

export interface ColorNameColor extends Schema.Component {
  collectionName: 'components_color_name_colors';
  info: {
    displayName: 'Color';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface IconIcon extends Schema.Component {
  collectionName: 'components_icon_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    icon: Attribute.Media;
    url: Attribute.String;
  };
}

export interface ItemItem extends Schema.Component {
  collectionName: 'components_item_items';
  info: {
    displayName: 'Item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    List: Attribute.Component<'list.list', true>;
  };
}

export interface ItemNavItem extends Schema.Component {
  collectionName: 'components_item_nav_items';
  info: {
    displayName: 'Nav-Item';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface ListList extends Schema.Component {
  collectionName: 'components_list_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'color-name.color': ColorNameColor;
      'icon.icon': IconIcon;
      'item.item': ItemItem;
      'item.nav-item': ItemNavItem;
      'list.list': ListList;
    }
  }
}
