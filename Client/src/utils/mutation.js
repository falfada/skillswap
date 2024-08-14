import { gql } from "@apollo/client";

// Mutation to log in a user
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

// Mutation to add a new user (sign-up)
export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

// Mutation to update user information
export const UPDATE_USER = gql`
  mutation updateUser($name: String!, $email: String!) {
    updateUser(name: $name, email: $email) {
      _id
      name
      email
    }
  }
`;

// Mutation to add a new skill
export const ADD_SKILL = gql`
  mutation addSkill($skill: SkillInput!) {
    addSkill(skill: $skill) {
        _id
        skill
        category
    }
  }
`;

// Mutation to remove a skill
export const REMOVE_SKILL = gql`
  mutation removeSkill($skillId: ID!) {
    removeSkill(skillId: $skillId) {
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
    $startTime: String!
    $endTime: String!
    $location: String
  ) {
    addCalendarEvent(
      title: $title
      startTime: $startTime
      endTime: $endTime
      location: $location
    ) {
      _id
      title
      startTime
      endTime
      location
      user {
        _id
        email
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
      startTime
      endTime
      location
    }
  }
`;
