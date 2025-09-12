import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContactForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_forms';
  info: {
    displayName: 'contactForm';
  };
  attributes: {
    email: Schema.Attribute.Email;
    message: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    subject: Schema.Attribute.String;
  };
}

export interface SharedHeroImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_images';
  info: {
    displayName: 'HeroImage';
  };
  attributes: {
    Subtitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface SharedKpi extends Struct.ComponentSchema {
  collectionName: 'components_shared_kpis';
  info: {
    displayName: 'KPI';
  };
  attributes: {
    countriesServed: Schema.Attribute.String;
    franchisesLaunched: Schema.Attribute.String;
    litresDistributed: Schema.Attribute.String;
    retailPoints: Schema.Attribute.String;
  };
}

export interface SharedLocations extends Struct.ComponentSchema {
  collectionName: 'components_shared_locations';
  info: {
    displayName: 'locations';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSiteInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_site_infos';
  info: {
    displayName: 'siteInfo';
  };
  attributes: {
    address: Schema.Attribute.String;
    banner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    center: Schema.Attribute.String;
    country: Schema.Attribute.String;
    countryCode: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 2;
      }>;
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.contact-form': SharedContactForm;
      'shared.hero-image': SharedHeroImage;
      'shared.kpi': SharedKpi;
      'shared.locations': SharedLocations;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.site-info': SharedSiteInfo;
      'shared.slider': SharedSlider;
    }
  }
}
