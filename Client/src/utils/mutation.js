import { gql } from '@apollo/client';

// Mutation to log in a user
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Mutation to add a new user (sign-up)
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Mutation to update user information
export const UPDATE_USER = gql`
  mutation updateUser($name: String!, $email: String!) {
    updateUser(name: $name, email: $email) {
      _id
      username
      email
    }
  }
`;

// Mutation to add a new skill
export const ADD_SKILL = gql`
  mutation addSkill($name: String!, $description: String!, $level: String!, $image: String, $link: String) {
    addSkill(name: $name, description: $description, level: $level, image: $image, link: $link) {
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

// Mutation to remove a skill
export const REMOVE_SKILL = gql`
  mutation removeSkill($skillId: String!) {
    removeSkill(skillId: $skillId) {
      skillId
      name
      description
      level
      image
      link
    }
  }
`;

// Mutation to send a message
export const SEND_MESSAGE = gql`
  mutation sendMessage($content: String!, $recipientId: ID!) {
    sendMessage(content: $content, recipientId: $recipientId) {
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

// Mutation to add a calendar event (if storing events in DB)
export const ADD_CALENDAR_EVENT = gql`
  mutation addCalendarEvent($title: String!, $description: String, $startTime: String!, $endTime: String!, $location: String) {
    addCalendarEvent(title: $title, description: $description, startTime: $startTime, endTime: $endTime, location: $location) {
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

// Mutation to remove a calendar event
export const REMOVE_CALENDAR_EVENT = gql`
  mutation removeCalendarEvent($eventId: String!) {
    removeCalendarEvent(eventId: $eventId) {
      _id
      title
      description
      startTime
      endTime
      location
    }
  }
`;
