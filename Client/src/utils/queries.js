import { gql } from "@apollo/client";

// Query to get the logged-in user's information
export const GET_ME = gql`
  query Me {
    me {
      _id
      name
      email
      skills {
        skill {
          _id
          skill
          category
        }
        hasSkill
        wantsToLearn
      }
      messages {
        _id
        content
        timestamp
        receiver {
          _id
          name
        }
      }
      events {
        _id
        title
        startTime
        endTime
        location
      }
    }
  }
`;

// Query to get all users
// export const GET_USERS = gql`
//   query getUsers {
//     users {
//       _id
//       username
//       email
//       savedSkills {
//         skillId
//         name
//         description
//         level
//         image
//         link
//       }
//     }
//   }
// `;

// Query to get a specific user by ID
// export const GET_USER_BY_ID = gql`
//   query getUserById($id: ID!) {
//     user(id: $id) {
//       _id
//       username
//       email
//       savedSkills {
//         skillId
//         name
//         description
//         level
//         image
//         link
//       }
//     }
//   }
// `;

// Query to get all skills
export const GET_ALL_SKILLS = gql`
  query getSkills {
    skills {
      _id
      category
      skill
    }
  }
`;

// Query to get a specific skill by ID
export const GET_SKILL_BY_ID = gql`
  query getSkillById($skillId: ID!) {
    getSingleSkill(skillId: $skillId) {
      _id
      skill
      category
      user {
        _id
        name
      }
    }
  }
`;

// Query to search skills by name or description
export const SEARCH_SKILLS = gql`
  query searchSkills($category: String!, $skill: String!) {
    searchSkills(category: $category, skill: $skill) {
      _id
      skill
      category
      user {
        _id
        name
      }
    }
  }
`;

// Query to get all messages for the logged-in user
export const GET_MESSAGES = gql`
  query getMessages($userId: ID!) {
    getMessages(userId: $userId) {
      _id
      content
      sender {
        email
      }
      recipient {
        email
      }
      timestamp
    }
  }
`;

// Query to get calendar events (assuming you store them in your DB)
export const GET_CALENDAR_EVENTS = gql`
  query getCalendarEvents {
    getCalendarEvents {
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


// Query to initiate a Stripe checkout session
export const QUERY_CHECKOUT = gql`
  query getCheckout($donation: Int!) {
    checkout(donation: $donation) {
      session
    }
  }
`;
// TODO: Add SkillMatch Query


