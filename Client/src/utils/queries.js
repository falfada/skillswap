import { gql } from '@apollo/client';

// Query to get the logged-in user's information
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedSkills {
        skillId
        name
        description
        level
        image
        link
      }
    }
  }
`;

// Query to get all users
export const GET_USERS = gql`
  query getUsers {
    users {
      _id
      username
      email
      savedSkills {
        skillId
        name
        description
        level
        image
        link
      }
    }
  }
`;

// Query to get a specific user by ID
export const GET_USER_BY_ID = gql`
  query getUserById($id: ID!) {
    user(id: $id) {
      _id
      username
      email
      savedSkills {
        skillId
        name
        description
        level
        image
        link
      }
    }
  }
`;

// Query to get all skills
export const GET_ALL_SKILLS = gql`
  query getAllSkills {
    skills {
      skillId
      name
      description
      level
      image
      link
      user {
        _id
        username
      }
    }
  }
`;

// Query to get a specific skill by ID
export const GET_SKILL_BY_ID = gql`
  query getSkillById($skillId: ID!) {
    skill(skillId: $skillId) {
      skillId
      name
      description
      level
      image
      link
      user {
        _id
        username
      }
    }
  }
`;

// Query to search skills by name or description
export const SEARCH_SKILLS = gql`
  query searchSkills($name: String!) {
    searchSkills(name: $name) {
      skillId
      name
      description
      level
      image
      link
      user {
        _id
        username
      }
    }
  }
`;

// Query to get all messages for the logged-in user
export const GET_MESSAGES = gql`
  query getMessages {
    messages {
      _id
      content
      sender {
        username
      }
      recipient {
        username
      }
      createdAt
    }
  }
`;

// Query to get calendar events (assuming you store them in your DB)
export const GET_CALENDAR_EVENTS = gql`
  query getCalendarEvents {
    events {
      _id
      title
      description
      startTime
      endTime
      location
      user {
        _id
        username
      }
    }
  }
`;
