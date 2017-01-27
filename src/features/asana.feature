Feature: Asana
  As logged in user it lists all of my tasks from all workspaces
  Background:
    Given asana with users
      | id | username  |
      | 1  | user1     |
    Given an asana user "1" with workspaces
      | id | name  |
      | 1  | ws1   |
      | 2  | ws2   |
    Given a logged in asana user with id: "1"
    Given asana tasks
      | id | assigneeStatus | completed | dueAt | name | workspaceId | assigneeId | 
      | 1  | inbox          | false     | null  | t1   | 1           | 1          |
      | 2  | inbox          | false     | null  | t2   | 2           | 1          |

  Scenario: Successful Login
    When I open the site
    Then I see "2" tasks on the page

