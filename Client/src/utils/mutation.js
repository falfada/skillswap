import { gql } from "@apollo/client";

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
  mutation updateUser($name: String!, $email: String!, $password: String!) {
    updateUser(name: $name, email: $email, password: $password) {
      _id
      name
      email
    }
  }
`;

// Mutation to add a new skill
export const ADD_SKILL = gql`
  mutation addSkill($userId: ID!, $skill: SkillInput!) {
    addSkill(userId: $userId, skill: $skill) {
      _id
      email
      skills {
        _id
        skill
        category
      }
    }
  }
`;

// Mutation to remove a skill
export const REMOVE_SKILL = gql`
  mutation removeSkill($userId: ID!, $skillId: ID!) {
    removeSkill(userId: $userId, skillId: $skillId) {
      _id
      email
      skills {
        _id
        category
        skill
      }
    }
  }
`;

// Mutation to send a message
export const SEND_MESSAGE = gql`
  mutation sendMessage($receiverId: ID!, $content: String!) {
    sendMessage(receiverId: $receiverId, content: $content) {
      _id
      content
      sender {
        email
      }
      receiver {
        email
      }
      timestamp
    }
  }
`;

// Mutation to add a calendar event (if storing events in DB)
export const ADD_CALENDAR_EVENT = gql`
  mutation addCalendarEvent(
    $title: String!
    $description: String
    $startTime: String!
    $endTime: String!
    $location: String
  ) {
    addCalendarEvent(
      title: $title
      description: $description
      startTime: $startTime
      endTime: $endTime
      location: $location
    ) {
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