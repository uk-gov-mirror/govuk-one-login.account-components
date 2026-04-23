Feature: App channel custom UI

  Scenario: Navigate via app channel
    Given I go to the journey initiator
    And I select the "strategic_app" channel
    Then the footer does not show
    And the phase banner does not show
    And a 'govuk-template__mobile' class is applied to the document
    And the GOVUK logo is not a link

  Scenario: Navigate via web channel
    Given I go to the journey initiator
    And I select the "web" channel
    Then the footer shows
    And the phase banner shows
    And a 'govuk-template__mobile' class is not applied to the document
    And the GOVUK logo is a link