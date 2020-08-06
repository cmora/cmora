import { get, orderBy, groupBy } from 'lodash';
import { slugify } from '../../utils';

const formatExperienceDate = (date) => {
  if (!date) return null;

  const newDate = new Date(date);
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return `${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
};

export const formatMenu = ({ items }) => {
  const menu = [];
  items.map(item => {
    return menu.push({
      id: get(item, 'sys.id'),
      name: get(item, 'fields.name'),
      slug: get(item, 'fields.slug'),
      order: get(item, 'fields.order'),
    });
  });
  return orderBy(menu, ['order']);
};

export const formatSingleSection = (data) => {
  return {
    title: get(data, 'fields.title', null),
    description: get(data, 'fields.description', null),
    body: get(data, 'fields.body', null),
    resume: get(data, 'fields.resume.fields.file.url', null),
    image: get(data, 'fields.image.fields.file.url', null),
  };
};

export const formatSections = (data) => {
  let sections = {};
  data.items.forEach((item) => {
    const title = get(item, 'sys.id');
    sections[title] = formatSingleSection(item);
  });
  return sections;
};

export const formatExperience = ({ items }) => {
  const experience = [];
  const dataOrdered = orderBy(items, ['fields.to'], ['desc']);
  dataOrdered.map((item) => {
    return experience.push({
      id: get(item, 'sys.id'),
      company: get(item, 'fields.company'),
      companyLogo: get(item, 'fields.companyLogo.fields.file.url'),
      sumary: get(item, 'fields.sumary'),
      position: get(item, 'fields.position'),
      from: formatExperienceDate(get(item, 'fields.from')),
      to: formatExperienceDate(get(item, 'fields.to')),
    });
  });
  return experience;
};

export const formatProjects = ({ items }) => {
  const projects = [];
  items.map(item => projects.push(formatProject(item)));
  const orderedByDate = orderBy(projects, elem => elem.publishedDate, 'desc')
  return orderedByDate;
};

export const formatProject = (data) => {
  return {
    client: get(data, 'fields.client'),
    challenge: get(data, 'fields.client'),
    challengeImage: get(data, 'fields.challengeImage'),
    date: get(data, 'fields.date'),
    context: get(data, 'fields.context'),
    image: get(data, 'fields.featuredImage.fields.file.url'),
    thumbnail: get(data, 'fields.thumbnail.fields.file.url'),
    title: get(data, 'fields.title'),
    url: get(data, 'fields.url'),
    slug: slugify(get(data, 'fields.slug')),
    id: get(data, 'sys.id'),
    body: get(data, 'fields.body'),
    publishedDate: get(data, 'sys.createdAt'),
    description: get(data, 'fields.description'),
    gallery: get(data, 'fields.gallery'),
    role: get(data, 'fields.role'),
    shortDescription: get(data, 'fields.shortDescription'),
    website: get(data, 'fields.website'),
  };
};

export const formatSocial = (data) => {
  const social = [];
  data.map((item) => {
    return social.push({
      name: get(item, 'fields.socialNetwork'),
      url: get(item, 'fields.url'),
      id: get(item, 'sys.id'),
    });
  });
  return social;
};

export const formatHomePage = (data) => {
  return {
    body: get(data, 'fields.body', null),
    image: get(data, 'fields.featuredImage.fields.file.url'),
    subtitle: get(data, 'fields.subtitle', null),
  };
};

export const formatProjectPage = (data) => {
  return {
    body: get(data, 'fields.body', null),
    image: get(data, 'fields.featuredImage.fields.file.url'),
    subtitle: get(data, 'fields.subtitle', null),
    title: get(data, 'fields.title', null),
  };
};

export const formatAboutPage = (data) => {
  return {
    body: get(data, 'fields.body', null),
    image: get(data, 'fields.featuredImage.fields.file.url'),
    subtitle: get(data, 'fields.subtitle', null),
    title: get(data, 'fields.title', null),
  };
};

export const formatServices = ({ items }) => {
  const services = [];
  items.map((item) => {
    return services.push({
      id: get(item, 'sys.id'),
      icon: get(item, 'fields.icon'),
      position: get(item, 'fields.position'),
      subtitle: get(item, 'fields.subtitle'),
      sumary: get(item, 'fields.sumary'),
      title: get(item, 'fields.title'),
    });
  });

  return orderBy(services, ['position']);
};

const formatSkill = (data) => {
  return {
    id: get(data, 'sys.id'),
    name: get(data, 'fields.name'),
    percentage: get(data, 'fields.percentage'),
  }
};

export const formatSkills = ({ items }) => {
  const skills = {
    personal: [],
    professional: [],
  };
  items.forEach((item) => {
    const isPersonal = get(item, 'fields.isPersonalSkill');
    if (isPersonal) {
      skills.personal.push(formatSkill(item));
    } else {
      skills.professional.push(formatSkill(item));
    }
    // return services.push({
    //   id: get(item, 'sys.id'),
    //   icon: get(item, 'fields.icon'),
    //   position: get(item, 'fields.position'),
    //   subtitle: get(item, 'fields.subtitle'),
    //   sumary: get(item, 'fields.sumary'),
    //   title: get(item, 'fields.title'),
    // });
  });

  return skills;


  // return orderBy(services, ['position']);
};