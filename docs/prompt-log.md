<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Date</th>
      <th>Author</th>
      <th>Stage</th>
      <th>Tool and model</th>
      <th>Prompt</th>
      <th>Summary of answer</th>
      <th>Verdict (accepted, fixed, rejected) and why</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>11/22/2026</td>
      <td>Omar AbdulAziz</td>
      <td>Requirements</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        In the requirements pack, there are 4 main requirements ( functional, non-functional, hard cases, business logic ) You need to generate a general form, and actual example of how each of the functional and non-functional requirements should be represented. For the functional requirements, choose an example that needs to be covered by a hard case, one that needs business logic, and one that does not need either ( if it exists ). Output should explain why each story relates to either the hard cases or business logic, and why it does not.
      </td>
      <td>
        Both functional and non-functional requirements general forms. Three functional requirements, one that needs a hard case (FR-10), one that needs business logic (FR-16), and one that needs neither (FR-3). One non-functional requirement (Performance).
      </td>
      <td>Accepted, all required criterias were filled</td>
    </tr>
    <tr>
      <td>11/22/2026</td>
      <td>Omar AbdulAziz</td>
      <td>Requirements</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        For each of the functional requirements from 1 to 8 ( including 1 and 8 ), generate a user-story following the general form. For each FR, check if it relates to a hard case, or business logic, or both, and edit the story accordingly. Output should include all 8 user stories with a brief explanation of how the hard cases and business logic related to the story.
      </td>
      <td>
        First iteration of the first 8 user stories
      </td>
      <td>Accepted, all stories follow the general form and the ambiguities were recorded</td>
    </tr>
    <tr>
      <td>11/22/2026</td>
      <td>Omar AbdulAziz</td>
      <td>Requirements</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        This is a list of the ambiguities recorded for each of the 8 requirements, and the decision/edit to be made to the specific story.
        US-01: ignore registration field names, create a a new AC where a new customer registers with details that match an existing account and an error is shown<br>
        US-02: A customer is upgraded automatically by the system,  no downgrade option exists<br>
        US-03: this requirement is read-only so all transaction results should be covered later in the system, no changes<br>
        US-4: No limit for top-ups, agent wallet is not debited, require idempotency key for top-ups<br>
        US-05: no changes<br>
        US-06: enforce mix/max to stay within the global 5 egp to 10,000 egp,<br>
        US-07: hide disabled billers<br>
        US-08: enforce a 10 second timeout on inquiry with an error message, since netco has no live inquiry then only show available billers when requesting an inquiry, no inquiry for top-ups<br>
        Keep the previous user-stories the same except for the changes that need to be made, record any new ambiguities if they exist
      </td>
      <td>
        Fixed ambiguities for each user story accordingly based on the decisions made
      </td>
      <td>Accepted, ambiguities were fixed by creating or editing acceptance criteria</td>
    </tr>
    <tr>
      <td>11/22/2026</td>
      <td>Omar AbdulAziz</td>
      <td>Requirements</td>
      <td>Claude Sonnet 5.5</td>
      <td>
        These are the decisions to be made for the new ambiguities<br>
        US-01: same email, duplicates names are okay<br>
        US-02: set a one week time period until a new account becomes verified<br>
        US-04: the client must generate a new key if a different transaction is to be made<br>
        US-06: Yes it should be rejected, both are inclusive<br>
        US-08 ( A5 ): PayLink uploads a file of payments once per day and receives a result file the next morning, a customer can only know what they owe when the file is uploaded<br>
        US-08 ( A6 ): inquiries are only available for billers that support it<br>
      </td>
      <td>
        Fixed newly appearing ambiguities
      </td>
      <td>Rejected, some of the new criteria created started overlapping with future functional requirements which may affect them negatively</td>
    </tr>
    <tr>
      <td>Current Date</td>
      <td>Student Name</td>
      <td>Design/Requirements/Devops</td>
      <td>Tool + Model</td>
      <td>
        Enter Prompt Here
      </td>
      <td>
        Summary
      </td>
      <td>(to be filled by the team after reviewing the answer)</td>
    </tr>
  </tbody>
</table>