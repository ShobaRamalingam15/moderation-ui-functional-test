Feature: Moderation pending queue functionalities

Scenario: Check pending queue is not empty
When a valid moderator logs into moderation ui
Then the moderator should see the number of items in the pending queue
And the moderator should Approve the item assigned to them

